param(
  [string]$ConfigFile = (Join-Path $PSScriptRoot "..\\config\\news-feed-watchlist.json"),
  [string]$OutputFile = (Join-Path $PSScriptRoot "..\\generated\\news-signals.json"),
  [int]$TimeoutSeconds = 30,
  [int]$ResultLimitPerFeed = 5
)

$ErrorActionPreference = "Stop"
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

function Write-Step {
  param([string]$Message)
  Write-Host "[news] $Message"
}

function Invoke-FeedRequest {
  param(
    [string]$Uri,
    [int]$TimeoutSeconds
  )

  $headers = @{
    "Accept" = "application/rss+xml, application/atom+xml, application/xml, text/xml"
    "User-Agent" = "constitutional-risk-monitor/1.0"
  }

  return Invoke-WebRequest -Method Get -Uri $Uri -Headers $headers -TimeoutSec $TimeoutSeconds
}

function Get-FeedItems {
  param([xml]$Xml)

  if ($Xml.rss -and $Xml.rss.channel -and $Xml.rss.channel.item) {
    return @($Xml.rss.channel.item)
  }

  if ($Xml.feed -and $Xml.feed.entry) {
    return @($Xml.feed.entry)
  }

  return @()
}

function Get-NodeText {
  param(
    [object]$Node,
    [string[]]$Candidates
  )

  foreach ($candidate in $Candidates) {
    if ($Node.PSObject.Properties.Name -contains $candidate) {
      $value = $Node.$candidate
      if ($value -is [System.Array]) {
        $value = $value[0]
      }

      if ($value -and $value.'#text') {
        return [string]$value.'#text'
      }

      if ($value -and $value.href) {
        return [string]$value.href
      }

      if ($value) {
        return [string]$value
      }
    }
  }

  return $null
}

if (-not (Test-Path -LiteralPath $ConfigFile)) {
  throw "News feed config not found: $ConfigFile"
}

$config = Get-Content -LiteralPath $ConfigFile -Raw | ConvertFrom-Json
$generatedAt = Get-Date -Format "s"
$allSignals = @()

foreach ($feed in $config.feeds) {
  if (-not $feed.url) {
    Write-Step "Skipping feed with no URL."
    continue
  }

  Write-Step "Fetching $($feed.label)"

  try {
    $response = Invoke-FeedRequest -Uri $feed.url -TimeoutSeconds $TimeoutSeconds
    [xml]$xml = $response.Content
  } catch {
    Write-Step "Request failed for '$($feed.label)': $($_.Exception.Message)"
    continue
  }

  $items = Get-FeedItems -Xml $xml | Select-Object -First $ResultLimitPerFeed
  foreach ($item in $items) {
    $allSignals += [pscustomobject]@{
      amendment = if ($feed.amendment) { $feed.amendment } else { $config.amendment }
      jurisdictionId = $feed.jurisdictionId
      jurisdictionName = $feed.jurisdictionName
      clauseId = $feed.clauseId
      direction = $feed.direction
      sourceLabel = $feed.label
      title = Get-NodeText -Node $item -Candidates @("title")
      publishedAt = Get-NodeText -Node $item -Candidates @("pubDate", "published", "updated")
      link = Get-NodeText -Node $item -Candidates @("link", "id")
      summary = Get-NodeText -Node $item -Candidates @("description", "summary", "content")
      note = $feed.note
    }
  }
}

$output = [pscustomobject]@{
  source = "RSS/Atom watchlist"
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
