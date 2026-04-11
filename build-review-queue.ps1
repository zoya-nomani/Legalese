param(
  [string]$CourtFile = (Join-Path $PSScriptRoot "..\\generated\\courtlistener-signals.json"),
  [string]$BillsFile = (Join-Path $PSScriptRoot "..\\generated\\openstates-bills.json"),
  [string]$NewsFile = (Join-Path $PSScriptRoot "..\\generated\\news-signals.json"),
  [string]$OutputFile = (Join-Path $PSScriptRoot "..\\generated\\review-queue.json")
)

$ErrorActionPreference = "Stop"

function Get-JsonOrDefault {
  param(
    [string]$Path,
    [string]$CollectionName
  )

  if (-not (Test-Path -LiteralPath $Path)) {
    return [pscustomobject]@{
      generatedAt = $null
      $CollectionName = @()
    }
  }

  return Get-Content -LiteralPath $Path -Raw | ConvertFrom-Json
}

function Add-QueueItem {
  param(
    [System.Collections.ArrayList]$Queue,
    [hashtable]$Item
  )

  [void]$Queue.Add([pscustomobject]$Item)
}

$court = Get-JsonOrDefault -Path $CourtFile -CollectionName "signals"
$bills = Get-JsonOrDefault -Path $BillsFile -CollectionName "bills"
$news = Get-JsonOrDefault -Path $NewsFile -CollectionName "signals"

$queue = [System.Collections.ArrayList]::new()

foreach ($signal in @($court.signals)) {
  Add-QueueItem -Queue $queue -Item @{
    amendment = $signal.amendment
    sourceType = "court"
    sourceSystem = "CourtListener Search API"
    jurisdictionId = $signal.jurisdictionId
    clauseId = $signal.clauseId
    title = $signal.caseName
    date = $signal.dateFiled
    link = $signal.sourceUrl
    summary = $signal.snippet
    suggestedDirection = $null
    reviewStatus = "pending"
  }
}

foreach ($bill in @($bills.bills)) {
  Add-QueueItem -Queue $queue -Item @{
    amendment = $bill.amendment
    sourceType = "legislation"
    sourceSystem = "Open States API v3"
    jurisdictionId = $bill.jurisdictionId
    clauseId = $bill.clauseId
    title = if ($bill.identifier) { "$($bill.identifier): $($bill.title)" } else { $bill.title }
    date = $bill.latestActionDate
    link = $bill.openstatesUrl
    summary = $bill.latestAction
    suggestedDirection = $null
    reviewStatus = "pending"
  }
}

foreach ($item in @($news.signals)) {
  Add-QueueItem -Queue $queue -Item @{
    amendment = $item.amendment
    sourceType = "news"
    sourceSystem = "RSS/Atom watchlist"
    jurisdictionId = $item.jurisdictionId
    clauseId = $item.clauseId
    title = $item.title
    date = $item.publishedAt
    link = $item.link
    summary = $item.summary
    suggestedDirection = $item.direction
    reviewStatus = "pending"
  }
}

$queueItems = @($queue) | Sort-Object date -Descending

$output = [pscustomobject]@{
  generatedAt = (Get-Date -Format "s")
  count = $queueItems.Count
  items = $queueItems
}

$output | ConvertTo-Json -Depth 8 | Set-Content -LiteralPath $OutputFile
Write-Host "[review-queue] Wrote $($queueItems.Count) items to $OutputFile"
