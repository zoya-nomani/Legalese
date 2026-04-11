# 14th Amendment Risk Monitor

A lightweight decision-support dashboard for tracking 14th Amendment trend signals across:

- California
- Texas
- New York
- Minnesota
- Pennsylvania

This MVP is designed to help teams quickly inspect where 14th Amendment issues appear most likely to be limited, expanded, or challenged based on a seeded set of source-linked court, court-filing, and legislation signals.

## Automation Status

This project is now **automation-ready**, but not yet fully self-updating.

What is automated now:

- scheduled workflow scaffolding is in place for GitHub Actions
- data validation runs can be automated in the repo
- a refresh script exists so future source fetchers have a single entry point
- a first live court-data connector now pulls candidate opinion signals from CourtListener into `generated/courtlistener-signals.json`
- a second live legislation connector now pulls tracked bill candidates from Open States into `generated/openstates-bills.json`
- a third live news connector now pulls current-events candidates from configured RSS/Atom feeds into `generated/news-signals.json`
- refresh runs now also build a unified review queue in `generated/review-queue.json`
- reviewed queue items can now be promoted into a live dashboard overlay via `generated/promoted-signals.json`
- the site now reads structured configuration from `content/site-config.json` and structured promoted overlay data from `generated/live-dashboard-overlay.json`

What is still manual for now:

- pulling new court, legislation, and news records into `data.js`
- classifying sources into `limited`, `expanded`, and `challenged`
- recalculating estimates from live source updates

In other words: the automation **foundation** is in place, but the actual live source connectors are the next step.

## What This Prototype Shows

- A ranked five-state overview
- Three signal categories:
  - challenge risk
  - restriction pressure
  - expansion momentum
- State detail panels with doctrine focus
- Source-document cards with explanations
- A short methodology section for explainability

## Project Structure

- `index.html` - app shell and layout
- `styles.css` - visual design and responsive styles
- `data.js` - sourced seed dataset for the five-state MVP
- `app.js` - rendering and interaction logic
- `scripts/refresh-monitor-data.ps1` - refresh entry point for future live data connectors
- `scripts/validate-monitor-data.ps1` - structural validation for the dashboard dataset
- `scripts/fetch-courtlistener-signals.ps1` - CourtListener connector for recent 14th Amendment-related court signal candidates
- `scripts/fetch-openstates-bills.ps1` - Open States connector for tracked bill candidates
- `scripts/fetch-news-signals.ps1` - RSS/Atom connector for current-events candidates
- `scripts/build-review-queue.ps1` - combines court, legislation, and news candidates into one reviewable queue
- `scripts/promote-reviewed-items.ps1` - promotes approved queue items into a dashboard-ready overlay file
- `scripts/build-live-dashboard-overlay.ps1` - reshapes promoted items into a state/clause overlay the site can read directly
- `config/courtlistener-searches.json` - jurisdiction/clause search definitions for the court connector
- `config/openstates-bill-watchlist.json` - tracked bill definitions for the legislation connector
- `config/news-feed-watchlist.json` - feed definitions for the news connector
- `config/review-decisions.json` - approval decisions for promoting reviewed sources
- `content/site-config.json` - structured themes and jurisdiction facts read directly by the UI
- `generated/courtlistener-signals.json` - generated court signal candidates after a refresh run
- `generated/openstates-bills.json` - generated legislation candidates after a refresh run
- `generated/news-signals.json` - generated current-events candidates after a refresh run
- `generated/review-queue.json` - combined promotion queue for candidate sources
- `generated/promoted-signals.json` - approved overlay items that can appear in the live dashboard
- `generated/live-dashboard-overlay.json` - state/clause overlay consumed directly by the UI
- `.github/workflows/refresh-monitor-data.yml` - scheduled GitHub Actions refresh scaffold
- `.github/workflows/validate-monitor-data.yml` - validation workflow on push / pull request

## How To View It

1. Download or clone the project.
2. Open `index.html` in any modern browser.

No build step is required for this version.

## Current Scope

This version is intentionally narrow:

- Amendment tracked: 14th Amendment
- Jurisdictions: CA, TX, NY, MN, PA
- Data type: sourced seed records with interpretive scoring
- Use case: product prototype / concept validation

## Recommended Next Steps

1. Connect the refresh script to live legal sources such as CourtListener, Congress.gov, state legislative APIs, and curated news feeds.
2. Populate the Open States bill watchlist with exact bill identifiers and an API key.
3. Decide how fetched court and legislation candidates should be promoted into the live dashboard dataset.
4. Populate the news watchlist with reliable RSS/Atom feeds tied to each jurisdiction and clause.
5. Start adding reviewed entries to `config/review-decisions.json` so promoted sources appear in the live overlay.
6. Move the remaining seeded clause summaries, stats, and source records out of `data.js` and into structured content files or a database.
7. Add a scoring pipeline for `limited`, `expanded`, and `challenged`.
8. Expand to more states and then more amendments once the pipeline is stable.

## GitHub Upload

If you want to share this on GitHub:

1. Create a new repository on GitHub.
2. Upload the contents of this folder.
3. Set the repository description to something like:
   `Decision-support MVP for monitoring 14th Amendment constitutional risk signals across five U.S. states.`

## Notes

- This is a decision-support prototype, not legal advice.
- The current state scores and direction labels are interpretive judgments layered on top of linked source materials.
- The GitHub Actions refresh workflow currently provides the automation scaffold; it does not yet fetch live legal data by itself.
- Court, legislation, and news automation now exist, but they depend on external connectivity and source configuration.
- Open States bill refreshes require a valid `OPENSTATES_API_KEY`.
- The news connector is feed-driven, so it will stay empty until you add feed URLs in `config/news-feed-watchlist.json`.
