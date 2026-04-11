param(
  [string]$DataFile = (Join-Path $PSScriptRoot "..\\data.js"),
  [switch]$UpdateSeedDate
)

$ErrorActionPreference = "Stop"

function Write-Step {
  param([string]$Message)
  Write-Host "[refresh] $Message"
}

function Assert-FileExists {
  param([string]$Path)
  if (-not (Test-Path -LiteralPath $Path)) {
    throw "Required file not found: $Path"
  }
}

function Get-DataContent {
  param([string]$Path)
  Assert-FileExists -Path $Path
  return Get-Content -LiteralPath $Path -Raw
}

function Set-SeededDate {
  param(
    [string]$Content,
    [string]$DateValue
  )

  $pattern = 'seededAt:\s*"[^"]+"'
  $replacement = "seededAt: `"$DateValue`""

  if ($Content -notmatch $pattern) {
    throw "Could not find a seededAt field in data.js"
  }

  return [regex]::Replace($Content, $pattern, $replacement, 1)
}

function Invoke-FetchCourtSignals {
  $courtScript = Join-Path $PSScriptRoot "fetch-courtlistener-signals.ps1"
  if (-not (Test-Path -LiteralPath $courtScript)) {
    throw "Court signal fetcher not found: $courtScript"
  }

  Write-Step "Running CourtListener connector"
  powershell -ExecutionPolicy Bypass -File $courtScript
}

function Invoke-FetchLegislationSignals {
  $legislationScript = Join-Path $PSScriptRoot "fetch-openstates-bills.ps1"
  if (-not (Test-Path -LiteralPath $legislationScript)) {
    throw "Legislation fetcher not found: $legislationScript"
  }

  Write-Step "Running Open States connector"
  powershell -ExecutionPolicy Bypass -File $legislationScript
}

function Invoke-FetchNewsSignals {
  $newsScript = Join-Path $PSScriptRoot "fetch-news-signals.ps1"
  if (-not (Test-Path -LiteralPath $newsScript)) {
    throw "News fetcher not found: $newsScript"
  }

  Write-Step "Running news feed connector"
  powershell -ExecutionPolicy Bypass -File $newsScript
}

function Invoke-BuildReviewQueue {
  $reviewQueueScript = Join-Path $PSScriptRoot "build-review-queue.ps1"
  if (-not (Test-Path -LiteralPath $reviewQueueScript)) {
    throw "Review queue builder not found: $reviewQueueScript"
  }

  Write-Step "Building combined review queue"
  powershell -ExecutionPolicy Bypass -File $reviewQueueScript
}

function Invoke-PromoteReviewedItems {
  $promotionScript = Join-Path $PSScriptRoot "promote-reviewed-items.ps1"
  if (-not (Test-Path -LiteralPath $promotionScript)) {
    throw "Promotion script not found: $promotionScript"
  }

  Write-Step "Promoting reviewed queue items"
  powershell -ExecutionPolicy Bypass -File $promotionScript
}

function Invoke-BuildLiveDashboardOverlay {
  $overlayScript = Join-Path $PSScriptRoot "build-live-dashboard-overlay.ps1"
  if (-not (Test-Path -LiteralPath $overlayScript)) {
    throw "Live dashboard overlay script not found: $overlayScript"
  }

  Write-Step "Building live dashboard overlay"
  powershell -ExecutionPolicy Bypass -File $overlayScript
}

$resolvedDataFile = (Resolve-Path -LiteralPath $DataFile).Path
Write-Step "Using data file: $resolvedDataFile"

$content = Get-DataContent -Path $resolvedDataFile

Invoke-FetchCourtSignals
Invoke-FetchLegislationSignals
Invoke-FetchNewsSignals
Invoke-BuildReviewQueue
Invoke-PromoteReviewedItems
Invoke-BuildLiveDashboardOverlay

if ($UpdateSeedDate) {
  $today = Get-Date -Format "yyyy-MM-dd"
  $updated = Set-SeededDate -Content $content -DateValue $today

  if ($updated -ne $content) {
    Set-Content -LiteralPath $resolvedDataFile -Value $updated
    Write-Step "Updated seededAt to $today"
  } else {
    Write-Step "seededAt was already current"
  }
} else {
  Write-Step "Seed date left unchanged. Re-run with -UpdateSeedDate after a real data refresh."
}

Write-Step "Refresh scaffold completed successfully."
