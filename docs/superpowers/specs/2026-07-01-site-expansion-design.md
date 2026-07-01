# Site Expansion: Overview, Selection Evidence, and Research & Analysis

**Date:** 2026-07-01
**Status:** Approved

## Goal

Turn the working prototype into a tangible, presentable site that (1) opens with
a clear overview of the priority project and *why* Wakiso, Mubende, and Kasese
were selected, (2) keeps the quantitative dashboard as the evidence layer, and
(3) adds a Research & Analysis page of clearly-labelled AI-assisted synthesis and
text analysis that guides outreach. The Botpress assistant (already embedded) is
the live-AI action layer and remains available on every page.

## Constraints (unchanged)

- Static GitHub Pages deploy, no backend. Therefore on-page "AI-generated
  research" is **pre-generated, clearly-labelled synthesis of published sources**,
  not live generation. The live model is the embedded Botpress bot.
- Evidence integrity: published, synthetic, user-entered, AI-assisted, and
  generated content must remain visually distinguishable.
- Content must align with `botpress/knowledge/*`, `botpress/README.md`, and
  `evidence/README.md`.

## Navigation (5 sections)

`Overview · Dashboard · Research & Analysis · Outreach · Evidence`

## Sections

### Overview (new landing)
Project purpose and the *why-these-three* answer. Hero explains the Learning Hub
rapid assessment (Aug 2023–Mar 2024) selected the three districts for high
zero-dose burden. Three district rationale cards with named sub-areas
(Wakiso: Kyengera/Nabweru/Bweyogerere; Mubende: hard-to-reach/underserved;
Kasese: Bwera/Isango/Lake Katwe), each citing its source and labelled
"historical evidence, not current conditions." CTA into Dashboard.

### Dashboard
The existing Monitoring view, unchanged: Penta1/Penta3 comparison, RED/REC
categories, per-district detail, warnings, provenance badges.

### Research & Analysis (new)
Header labelled **"AI-assisted synthesis of published sources — not new primary
research."** Four subsections:
1. **Why these three** — selection-evidence narrative with citations.
2. **Barrier / BeSD analysis** — WHO's four domains (Thinking & Feeling, Social
   Processes, Motivation, Practical Issues) mapped to Uganda's documented
   barriers and the outreach response each implies.
3. **Text analysis of the draft scripts** — findings table flagging real issues
   in the demonstration VHT/radio drafts against the 2025 schedule: outdated
   "five visits before first birthday" (omits malaria doses), outdated HPV
   "two doses" vs current one dose, unapproved Ministry attribution, unvetted
   Luganda. Each cites the reconciliation source.
4. **Programme/strategy synthesis** — NIS 2024–2028 communication principles
   tied to the outreach workflow.

### Outreach
Existing campaign workspace, unchanged.

### Evidence
Existing register (sources, RED/REC definitions, safeguards), unchanged.

## Architecture (Approach A)

Split the single `App.tsx` into focused units:

- `src/data.ts` — existing typed data + calculations (unchanged).
- `src/content.ts` — **new** declarative research/rationale content: district
  selection rationale, BeSD domains, text-analysis findings, strategy principles.
- `src/views/{Overview,Dashboard,Research,Outreach,Evidence}.tsx` — one file per
  section; `DistrictDetail`, `StatusTrack`, `CampaignResult` move into their
  owning view.
- `src/App.tsx` — shell (topbar, 5-item nav, footer) + shared state.

### State ownership
`App` owns `view`, `selectedDistrict`, `status` (localStorage-persisted), and a
`resetNonce`. Dashboard owns its filter state; Outreach owns its form/campaign
state and is keyed by `resetNonce` so demo reset clears it. `changeStatus`
persists to localStorage and is passed to Outreach. No routing library — the
in-state `view` switch is retained.

### Provenance
Add an `ai-assisted` provenance-badge variant (distinct from
`published/synthetic/entered/generated`) used throughout Research & Analysis.

## Testing
- Keep existing calculation tests green (`data.test.ts`).
- Add `content.test.ts` asserting the text-analysis findings cover the key
  reconciliation items (malaria/"five visits", HPV one-dose, Ministry
  attribution) so the analysis can't silently drift from the source.
- Verify `tsc -b`, `vitest`, and `vite build` all pass.

## Out of scope
Live AI generation on-page; new data sources; changing the RED/REC thresholds;
Luganda generation; deployment changes (Phase 4).
