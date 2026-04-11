param(
  [string]$PromotedSignalsFile = (Join-Path $PSScriptRoot "..\\generated\\promoted-signals.json"),
  [string]$OutputFile = (Join-Path $PSScriptRoot "..\\generated\\live-dashboard-overlay.json")
)

$ErrorActionPreference = "Stop"

if (-not (Test-Path -LiteralPath $PromotedSignalsFile)) {
  throw "Promoted signals file not found: $PromotedSignalsFile"
}

$promoted = Get-Content -LiteralPath $PromotedSignalsFile -Raw | ConvertFrom-Json
$items = @()
if ($promoted -and $promoted.items) {
  $items = @($promoted.items)
}

$amendments = @{}

foreach ($item in $items) {
  $amendmentKey = if ($item.amendment) { $item.amendment } else { "Unknown Amendment" }

  if (-not $amendments.ContainsKey($amendmentKey)) {
    $amendments[$amendmentKey] = @{}
  }

  if (-not $amendments[$amendmentKey].ContainsKey($item.jurisdictionId)) {
    $amendments[$amendmentKey][$item.jurisdictionId] = @{}
  }

  if (-not $amendments[$amendmentKey][$item.jurisdictionId].ContainsKey($item.clauseId)) {
    $amendments[$amendmentKey][$item.jurisdictionId][$item.clauseId] = @{
      news = @()
      documents = @()
    }
  }

  $bucket = if ($item.displayBucket -eq "news") { "news" } else { "documents" }
  $amendments[$amendmentKey][$item.jurisdictionId][$item.clauseId][$bucket] += [pscustomobject]@{
    title = $item.title
    date = $item.date
    link = $item.link
    summary = $item.summary
    direction = $item.direction
    sourceType = $item.sourceType
    sourceSystem = $item.sourceSystem
    promotionNote = $item.promotionNote
  }
}

$output = [pscustomobject]@{
  generatedAt = (Get-Date -Format "s")
  amendments = $amendments
}

$output | ConvertTo-Json -Depth 10 | Set-Content -LiteralPath $OutputFile
Write-Host "[overlay] Wrote live dashboard overlay to $OutputFile"
