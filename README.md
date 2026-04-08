# 14th Amendment Risk Monitor

A lightweight decision-support dashboard for tracking 14th Amendment trend signals across:

- California
- Texas
- New York
- Minnesota
- Pennsylvania

This MVP is designed to help teams quickly inspect where 14th Amendment issues appear most likely to be limited, expanded, or challenged based on a seeded set of source-linked court, court-filing, and legislation signals.

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

1. Expand `data.js` into a larger normalized dataset with more cases and bills per state.
2. Add filters for doctrine, source type, and date range.
3. Add a scoring pipeline for `limited`, `expanded`, and `challenged`.
4. Move the project into a TypeScript app with a backend and database.
5. Add authentication, saved reports, and alerting.

## GitHub Upload

If you want to share this on GitHub:

1. Create a new repository on GitHub.
2. Upload the contents of this folder.
3. Set the repository description to something like:
   `Decision-support MVP for monitoring 14th Amendment constitutional risk signals across five U.S. states.`

## Notes

- This is a decision-support prototype, not legal advice.
- The current state scores and direction labels are interpretive judgments layered on top of linked source materials.
