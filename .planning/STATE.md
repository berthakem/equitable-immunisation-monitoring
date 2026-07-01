# Project State

## Project Reference

See: .planning/PROJECT.md (updated 2026-07-01)

**Core value:** Turn transparent zero-dose evidence into a practical, review-ready outreach priority and action package.  
**Current focus:** Phase 4 — Presentation-Ready Release (hardening the existing prototype)

## Current Position

Phase: 4 of 4 (Presentation-Ready Release)  
Plan: Phases 1–3 built in a working prototype; verification + hardening outstanding  
Status: Prototype committed; reconciling toward verification and deployment  
Last activity: 2026-07-01 — Committed working React/Vite prototype (monitoring + outreach + evidence + Botpress embed) and reconciled GSD tracking

Progress: [██████░░░░] ~60% (built, pending verification and deployment)

**Outstanding work by phase:**
- Phase 1: Responsive/keyboard verification of the overview.
- Phase 2: Automated campaign-workflow tests (only calculation tests exist).
- Phase 3: Accessibility + cross-device verification; bot safety evaluation.
- Phase 4: Demo mode polish, end-to-end tests, backup assets, and confirmed live GitHub Pages deployment.

## Performance Metrics

**Velocity:**
- Total plans completed: 0
- Average duration: -
- Total execution time: 0 hours

**By Phase:**

| Phase | Plans | Total | Avg/Plan |
|-------|-------|-------|----------|
| - | - | - | - |

**Recent Trend:**
- Last 5 plans: -
- Trend: Not started

## Accumulated Context

### Decisions

Decisions are logged in PROJECT.md.

- Project is independent from Tangaza until deployment.
- MVP covers Wakiso, Mubende, and Kasese.
- Public evidence is supplemented only by visibly labelled demonstration data.
- Campaign automation stops at human review.
- RED/REC access and utilisation categories replace an opaque AI priority score.
- Initial visual direction uses deep green, teal, warm paper, and amber, subject to revision after the first prototype.
- Source-aligned English/Luganda scripts and the 2025 schedule image were received as demonstration inputs; neither is treated as approved campaign content.
- A dedicated Botpress bot named `Equitable Immunisation Assistant` has been created.
- The free-plan Botpress design uses no Knowledge Base. The website supplies the
  evidence context, and a guided Autonomous Node turns user-confirmed findings
  into English review-only outreach action packages.
- The guided area-to-barrier conversation passed its initial manual smoke test.
- The public Botpress Webchat v3.6 embed snippet is stored in
  `botpress/embed-snippet.html` for frontend integration.
- A working single-page React/Vite prototype (`src/App.tsx`, `src/data.ts`)
  implements the monitoring, outreach, and evidence flows and embeds the
  Botpress webchat; it was committed on 2026-07-01 as the project baseline.
  Type-check, unit tests (3/3), and production build all pass.
- GitHub Pages deployment is scaffolded: `.github/workflows/deploy.yml` and a
  Pages-ready `base` path in `vite.config.ts`.

### Pending Todos

- Add automated campaign-workflow tests (currently only calculation tests exist).
- Verify accessibility and responsive/keyboard behaviour on desktop and mobile.
- Complete the bot safety evaluation before the public demo.
- Add demo backup assets (screenshots or short recording).
- Confirm the production GitHub Pages deployment is live and correct.

### Blockers/Concerns

- The full safety evaluation remains to be completed before the public demo.
- Public report extraction may leave gaps that require synthetic demonstration values.
- Draft scripts require schedule reconciliation, removal of unapproved Ministry attribution, and Luganda review before any non-demo use.

## Deferred Items

| Category | Item | Status | Deferred At |
|----------|------|--------|-------------|
| Integration | Live DHIS2 connection | Deferred | Project initialization |
| Data | Uganda MICS 2026–27 results | Await publication | Project initialization |
| Messaging | Real outbound campaign channel | Deferred | Project initialization |

## Session Continuity

Last session: 2026-07-01  
Stopped at: Committed the working prototype baseline (monitoring + outreach + evidence + Botpress embed) and reconciled ROADMAP/STATE/PROJECT to reflect that Phases 1–3 are built and Phase 4 hardening remains. Next: verification, tests, bot safety eval, and confirmed deployment.
Resume file: None
