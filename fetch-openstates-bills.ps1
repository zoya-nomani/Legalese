param(
  [string]$ConfigFile = (Join-Path $PSScriptRoot "..\\config\\openstates-bill-watchlist.json"),
  [string]$OutputFile = (Join-Path $PSScriptRoot "..\\generated\\openstates-bills.json"),
  [int]$TimeoutSeconds = 30
)

$ErrorActionPreference = "Stop"
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

function Write-Step {
  param([string]$Message)
  Write-Host "[openstates] $Message"
}

function Get-AuthHeaders {
  $headers = @{
    "Accept" = "application/json"
    "User-Agent" = "constitutional-risk-monitor/1.0"
  }

  if ($env:OPENSTATES_API_KEY) {
    $headers["X-API-KEY"] = $env:OPENSTATES_API_KEY
  }

  return $headers
}

function Invoke-OpenStatesRequest {
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

if (-not (Test-Path -LiteralPath $ConfigFile)) {
  throw "Open States config not found: $ConfigFile"
}

$config = Get-Content -LiteralPath $ConfigFile -Raw | ConvertFrom-Json
$headers = Get-AuthHeaders
$generatedAt = Get-Date -Format "s"
$allBills = @()

foreach ($bill in $config.trackedBills) {
  if (-not $bill.jurisdiction -or -not $bill.session -or -not $bill.identifier) {
    Write-Step "Skipping incomplete watchlist entry."
    continue
  }

  $encodedJurisdiction = [System.Uri]::EscapeDataString($bill.jurisdiction)
  $encodedSession = [System.Uri]::EscapeDataString($bill.session)
  $encodedIdentifier = [System.Uri]::EscapeDataString($bill.identifier)
  $requestUrl = "https://v3.openstates.org/bills/$encodedJurisdiction/$encodedSession/$encodedIdentifier"

  Write-Step "Fetching $($bill.jurisdiction) / $($bill.identifier)"

  try {
    $response = Invoke-OpenStatesRequest -Uri $requestUrl -Headers $headers -TimeoutSeconds $TimeoutSeconds
  } catch {
    Write-Step "Request failed for bill '$($bill.identifier)': $($_.Exception.Message)"
    continue
  }

  $latestAction = $null
  if ($response.actions -and $response.actions.Count -gt 0) {
    $latestAction = $response.actions | Sort-Object date -Descending | Select-Object -First 1
  }

  $sourceUrl = $response.openstates_url
  if (-not $sourceUrl -and $response.sources -and $response.sources.Count -gt 0) {
    $sourceUrl = $response.sources[0].url
  }

  $allBills += [pscustomobject]@{
    amendment = if ($bill.amendment) { $bill.amendment } else { $config.amendment }
    jurisdiction = $bill.jurisdiction
    jurisdictionId = $bill.jurisdictionId
    clauseId = $bill.clauseId
    identifier = $response.identifier
    title = $response.title
    classification = @($response.classification)
    subject = @($response.subject)
    latestAction = if ($latestAction) { $latestAction.description } else { $null }
    latestActionDate = if ($latestAction) { $latestAction.date } else { $null }
    openstatesUrl = $sourceUrl
    note = $bill.note
  }
}

$output = [pscustomobject]@{
  source = "Open States API v3"
  sourceUrl = "https://docs.openstates.org/api-v3/"
  amendment = $config.amendment
  generatedAt = $generatedAt
  count = $allBills.Count
  bills = $allBills
}

$outputDirectory = Split-Path -Parent $OutputFile
if (-not (Test-Path -LiteralPath $outputDirectory)) {
  New-Item -ItemType Directory -Path $outputDirectory | Out-Null
}

$output | ConvertTo-Json -Depth 8 | Set-Content -LiteralPath $OutputFile
Write-Step "Wrote $($allBills.Count) records to $OutputFile"
