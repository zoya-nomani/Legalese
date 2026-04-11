param(
  [string]$DataFile = (Join-Path $PSScriptRoot "..\\data.js"),
  [string]$GeneratedCourtFile = (Join-Path $PSScriptRoot "..\\generated\\courtlistener-signals.json"),
  [string]$GeneratedBillsFile = (Join-Path $PSScriptRoot "..\\generated\\openstates-bills.json"),
  [string]$GeneratedNewsFile = (Join-Path $PSScriptRoot "..\\generated\\news-signals.json"),
  [string]$ReviewQueueFile = (Join-Path $PSScriptRoot "..\\generated\\review-queue.json"),
  [string]$PromotedSignalsFile = (Join-Path $PSScriptRoot "..\\generated\\promoted-signals.json"),
  [string]$LiveOverlayFile = (Join-Path $PSScriptRoot "..\\generated\\live-dashboard-overlay.json")
)

$ErrorActionPreference = "Stop"

function Assert-Contains {
  param(
    [string]$Content,
    [string]$Pattern,
    [string]$Label
  )

  if ($Content -notmatch $Pattern) {
    throw "Validation failed: missing $Label"
  }
}

if (-not (Test-Path -LiteralPath $DataFile)) {
  throw "Validation failed: data file not found at $DataFile"
}

$content = Get-Content -LiteralPath $DataFile -Raw

Assert-Contains -Content $content -Pattern 'window\.monitorData\s*=' -Label 'window.monitorData assignment'
Assert-Contains -Content $content -Pattern 'seededAt:\s*"[^"]+"' -Label 'seededAt field'
Assert-Contains -Content $content -Pattern 'states:\s*\[' -Label 'states collection'
Assert-Contains -Content $content -Pattern 'clauses:\s*\[' -Label 'clauses collection'
Assert-Contains -Content $content -Pattern 'equal-protection' -Label 'equal-protection clause'

Write-Host "[validate] data.js passed structural validation."

if (Test-Path -LiteralPath $GeneratedCourtFile) {
  $generated = Get-Content -LiteralPath $GeneratedCourtFile -Raw
  Assert-Contains -Content $generated -Pattern '"source"\s*:\s*"CourtListener Search API"' -Label 'generated court source label'
  Assert-Contains -Content $generated -Pattern '"signals"\s*:' -Label 'generated court signals collection'
  Write-Host "[validate] generated court signal file passed structural validation."
}

if (Test-Path -LiteralPath $GeneratedBillsFile) {
  $generatedBills = Get-Content -LiteralPath $GeneratedBillsFile -Raw
  Assert-Contains -Content $generatedBills -Pattern '"source"\s*:\s*"Open States API v3"' -Label 'generated legislation source label'
  Assert-Contains -Content $generatedBills -Pattern '"bills"\s*:' -Label 'generated legislation collection'
  Write-Host "[validate] generated legislation file passed structural validation."
}

if (Test-Path -LiteralPath $GeneratedNewsFile) {
  $generatedNews = Get-Content -LiteralPath $GeneratedNewsFile -Raw
  Assert-Contains -Content $generatedNews -Pattern '"source"\s*:\s*"RSS/Atom watchlist"' -Label 'generated news source label'
  Assert-Contains -Content $generatedNews -Pattern '"signals"\s*:' -Label 'generated news collection'
  Write-Host "[validate] generated news file passed structural validation."
}

if (Test-Path -LiteralPath $ReviewQueueFile) {
  $reviewQueue = Get-Content -LiteralPath $ReviewQueueFile -Raw
  Assert-Contains -Content $reviewQueue -Pattern '"items"\s*:' -Label 'review queue items collection'
  Write-Host "[validate] review queue file passed structural validation."
}

if (Test-Path -LiteralPath $PromotedSignalsFile) {
  $promotedSignals = Get-Content -LiteralPath $PromotedSignalsFile -Raw
  Assert-Contains -Content $promotedSignals -Pattern '"items"\s*:' -Label 'promoted signals collection'
  Write-Host "[validate] promoted signals file passed structural validation."
}

if (Test-Path -LiteralPath $LiveOverlayFile) {
  $liveOverlay = Get-Content -LiteralPath $LiveOverlayFile -Raw
  Assert-Contains -Content $liveOverlay -Pattern '"states"\s*:' -Label 'live dashboard overlay states object'
  Write-Host "[validate] live dashboard overlay file passed structural validation."
}
