param(
  [string]$QueueFile = (Join-Path $PSScriptRoot "..\\generated\\review-queue.json"),
  [string]$DecisionsFile = (Join-Path $PSScriptRoot "..\\config\\review-decisions.json"),
  [string]$OutputFile = (Join-Path $PSScriptRoot "..\\generated\\promoted-signals.json")
)

$ErrorActionPreference = "Stop"

function Get-JsonFile {
  param([string]$Path)

  if (-not (Test-Path -LiteralPath $Path)) {
    return $null
  }

  return Get-Content -LiteralPath $Path -Raw | ConvertFrom-Json
}

function Find-DecisionForItem {
  param(
    [object]$Item,
    [object[]]$Decisions
  )

  foreach ($decision in $Decisions) {
    if ($decision.link -and $Item.link -and $decision.link -eq $Item.link) {
      return $decision
    }

    if ($decision.title -and $decision.jurisdictionId -and $decision.clauseId -and $decision.amendment) {
      if ($decision.title -eq $Item.title -and $decision.jurisdictionId -eq $Item.jurisdictionId -and $decision.clauseId -eq $Item.clauseId -and $decision.amendment -eq $Item.amendment) {
        return $decision
      }
    }
  }

  return $null
}

$queue = Get-JsonFile -Path $QueueFile
$decisionConfig = Get-JsonFile -Path $DecisionsFile

$items = @()
if ($queue -and $queue.items) {
  $items = @($queue.items)
}

$decisions = @()
if ($decisionConfig -and $decisionConfig.decisions) {
  $decisions = @($decisionConfig.decisions)
}

$promoted = foreach ($item in $items) {
  $decision = Find-DecisionForItem -Item $item -Decisions $decisions
  if (-not $decision) {
    continue
  }

  [pscustomobject]@{
    amendment = $item.amendment
    sourceType = $item.sourceType
    sourceSystem = $item.sourceSystem
    jurisdictionId = $item.jurisdictionId
    clauseId = $item.clauseId
    title = $item.title
    date = $item.date
    link = $item.link
    summary = if ($decision.summaryOverride) { $decision.summaryOverride } else { $item.summary }
    direction = $decision.direction
    displayBucket = if ($decision.displayBucket) { $decision.displayBucket } else { $item.sourceType }
    promotionNote = $decision.promotionNote
    promotedAt = Get-Date -Format "s"
  }
}

$output = [pscustomobject]@{
  generatedAt = (Get-Date -Format "s")
  count = @($promoted).Count
  items = @($promoted)
}

$output | ConvertTo-Json -Depth 8 | Set-Content -LiteralPath $OutputFile
Write-Host "[promote] Wrote $(@($promoted).Count) promoted items to $OutputFile"
