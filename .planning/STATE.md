# Project State

## Project Reference

See: .planning/PROJECT.md (updated 2026-07-01)

**Core value:** Turn transparent zero-dose evidence into a practical, review-ready outreach priority and action package.  
**Current focus:** Phase 4 — Presentation-Ready Release (hardening the existing prototype)

## Current Position

Phase: 4 of 4 (Presentation-Ready Release)  
Plan: Phases 1–3 built in a working prototype; verification + hardening outstanding  
Status: Prototype expanded to a five-section site; verification and deployment outstanding  
Last activity: 2026-07-01 — Added Overview (why-these-three) and Research & Analysis (AI-assisted synthesis) pages; split App into src/views/* + src/content.ts; aligned Botpress README with the five sections

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
- The site now has five sections (Overview · Dashboard · Research & Analysis ·
  Outreach · Evidence). The app was split from a single `App.tsx` into
  `src/views/*` plus a declarative `src/content.ts` research module. Research
  content is AI-assisted synthesis of the published sources, clearly labelled
  and carrying an `ai-assisted` provenance badge. Design in
  `docs/superpowers/specs/2026-07-01-site-expansion-design.md`.

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
Stopped at: Expanded the site to five sections — added an Overview landing (why Wakiso/Mubende/Kasese were selected) and a Research & Analysis page (AI-assisted synthesis: BeSD barriers, text analysis of the draft scripts, strategy). Refactored into src/views/* + src/content.ts; aligned the Botpress README. tsc/tests/build all pass; preview serves 200. Next: browser visual + accessibility verification, campaign-workflow tests, bot safety eval, confirmed deployment.
Resume file: None
