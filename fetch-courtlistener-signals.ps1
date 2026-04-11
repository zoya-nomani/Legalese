param(
  [string]$ConfigFile = (Join-Path $PSScriptRoot "..\\config\\courtlistener-searches.json"),
  [string]$OutputFile = (Join-Path $PSScriptRoot "..\\generated\\courtlistener-signals.json"),
  [int]$TimeoutSeconds = 30
)

$ErrorActionPreference = "Stop"
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

function Write-Step {
  param([string]$Message)
  Write-Host "[courtlistener] $Message"
}

function Get-AuthHeaders {
  $headers = @{
    "Accept" = "application/json"
    "User-Agent" = "constitutional-risk-monitor/1.0"
  }

  if ($env:COURTLISTENER_TOKEN) {
    $headers["Authorization"] = "Token $($env:COURTLISTENER_TOKEN)"
  }

  return $headers
}

function Invoke-CourtListenerRequest {
  param(
    [string]$Uri,
    [hashtable]$Headers,
    [int]$TimeoutSeconds
  )

  $attempts = 0
  $maxAttempts = 2

  while ($attempts -lt $maxAttempts) {
    $attempts += 1

    try {
      return Invoke-RestMethod -Method Get -Uri $Uri -Headers $Headers -TimeoutSec $TimeoutSeconds
    } catch {
      if ($attempts -ge $maxAttempts) {
        throw
      }

      Start-Sleep -Seconds 2
    }
  }
}

function Get-ResultUrl {
  param([object]$Result)

  if ($Result.PSObject.Properties.Name -contains "absolute_url" -and $Result.absolute_url) {
    return "https://www.courtlistener.com$($Result.absolute_url)"
  }

  if ($Result.PSObject.Properties.Name -contains "absoluteUrl" -and $Result.absoluteUrl) {
    return "https://www.courtlistener.com$($Result.absoluteUrl)"
  }

  return $null
}

function Get-ResultField {
  param(
    [object]$Result,
    [string[]]$Candidates
  )

  foreach ($candidate in $Candidates) {
    if ($Result.PSObject.Properties.Name -contains $candidate) {
      return $Result.$candidate
    }
  }

  return $null
}

if (-not (Test-Path -LiteralPath $ConfigFile)) {
  throw "CourtListener config not found: $ConfigFile"
}

$config = Get-Content -LiteralPath $ConfigFile -Raw | ConvertFrom-Json
$headers = Get-AuthHeaders
$baseUrl = "https://www.courtlistener.com/api/rest/v4/search/"
$generatedAt = Get-Date -Format "s"
$allSignals = @()

foreach ($jurisdiction in $config.jurisdictions) {
  foreach ($search in $jurisdiction.queries) {
    $uriBuilder = [System.UriBuilder]::new($baseUrl)
    $query = [System.Web.HttpUtility]::ParseQueryString([string]::Empty)
    $query["type"] = "o"
    $query["q"] = $search.query
    $query["filed_after"] = (Get-Date).AddDays(-1 * [int]$config.daysBack).ToString("yyyy-MM-dd")
    $uriBuilder.Query = $query.ToString()
    $requestUrl = $uriBuilder.Uri.AbsoluteUri

    Write-Step "Fetching $($jurisdiction.name) / $($search.clauseId)"

    try {
      $response = Invoke-CourtListenerRequest -Uri $requestUrl -Headers $headers -TimeoutSeconds $TimeoutSeconds
    } catch {
      Write-Step "Request failed for query '$($search.query)': $($_.Exception.Message)"
      continue
    }

    $results = @($response.results) | Select-Object -First $config.resultLimitPerQuery
    foreach ($result in $results) {
      $allSignals += [pscustomobject]@{
        jurisdictionId = $jurisdiction.id
        jurisdictionName = $jurisdiction.name
        clauseId = $search.clauseId
        query = $search.query
        caseName = Get-ResultField -Result $result -Candidates @("caseName", "case_name")
        dateFiled = Get-ResultField -Result $result -Candidates @("dateFiled", "date_filed")
        court = Get-ResultField -Result $result -Candidates @("court", "court_citation_string", "court_exact")
        docketNumber = Get-ResultField -Result $result -Candidates @("docketNumber", "docket_number")
        status = Get-ResultField -Result $result -Candidates @("status")
        snippet = Get-ResultField -Result $result -Candidates @("snippet")
        sourceUrl = Get-ResultUrl -Result $result
      }
    }
  }
}

$output = [pscustomobject]@{
  source = "CourtListener Search API"
  sourceUrl = "https://www.courtlistener.com/help/api/rest/search/"
  amendment = $config.amendment
  generatedAt = $generatedAt
  count = $allSignals.Count
  signals = $allSignals
}

$outputDirectory = Split-Path -Parent $OutputFile
if (-not (Test-Path -LiteralPath $outputDirectory)) {
  New-Item -ItemType Directory -Path $outputDirectory | Out-Null
}

$output | ConvertTo-Json -Depth 8 | Set-Content -LiteralPath $OutputFile
Write-Step "Wrote $($allSignals.Count) records to $OutputFile"
