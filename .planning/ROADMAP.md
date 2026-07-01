# Roadmap: Equitable Immunisation Monitoring

## Overview

The MVP is built as four vertical increments. It first establishes a trustworthy three-district monitoring experience, then turns an observed barrier into a review-ready outreach package, adds the source-grounded evidence assistant and responsive product experience, and finally hardens the complete flow for the live presentation and independent GitHub Pages deployment.

## Phases

**Phase Numbering:**
- Integer phases are planned milestone work.
- Decimal phases are reserved for urgent insertions.

- [x] **Phase 1: Evidence to Priority** - Deliver transparent data, RED/REC calculations, and area comparison. *(Built in prototype; responsive verification outstanding.)*
- [x] **Phase 2: Priority to Outreach Draft** - Convert selected barriers into editable, human-reviewed campaign packages. *(Built in prototype; campaign-workflow tests outstanding.)*
- [~] **Phase 3: Guided Evidence Experience** - Add the grounded assistant and complete the accessible integrated experience. *(Webchat embedded and knowledge pack authored; accessibility/cross-device verification and safety evaluation outstanding.)*
- [ ] **Phase 4: Presentation-Ready Release** - Verify, harden, deploy, and prepare the reliable live demonstration. *(Deploy workflow + Pages base path in place; demo mode, backup assets, and confirmed live deployment outstanding.)*

## Phase Details

### Phase 1: Evidence to Priority
**Goal**: Users can compare selected Uganda areas, understand access and utilisation, and inspect every source and calculation.
**Mode:** mvp
**Depends on**: Nothing
**Requirements**: DATA-01, DATA-02, DATA-03, MON-01, MON-02, MON-03, MON-04, SAFE-01
**Success Criteria**:
1. User can open a responsive overview containing labelled data for Wakiso, Mubende, and Kasese.
2. User can compare first-dose coverage, third-dose coverage, dropout, and RED/REC categories.
3. User can inspect the formula, threshold, period, provenance, and warnings behind every classification.
4. Invalid or incomplete observations produce visible warnings rather than misleading calculations.
**Plans**: 2 plans

Plans:
- [x] 01-01: Scaffold the application, visual system, source registry, dataset schema, validation, and tested calculations.
- [x] 01-02: Build the comparison overview, area detail, provenance surfaces, warnings, and responsive verification. *(Built; formal responsive/keyboard verification still pending — see Phase 4.)*

### Phase 2: Priority to Outreach Draft
**Goal**: Users can provide barrier context and generate an editable outreach package that remains under human control.
**Mode:** mvp
**Depends on**: Phase 1
**Requirements**: BARR-01, BARR-02, BARR-03, CAMP-01, CAMP-02, CAMP-03, CAMP-04, CAMP-05
**Success Criteria**:
1. User can select an observed barrier without the application claiming it was inferred from coverage.
2. User can generate and edit an SMS/WhatsApp draft, radio announcement, VHT talking points, and seven-day plan.
3. User must explicitly review content before advancing campaign status.
4. User can track campaign status and reset the application to the seeded demo state.
**Plans**: 2 plans

Plans:
- [x] 02-01: Build barrier capture, evidence/scenario distinctions, and the reviewed campaign template engine.
- [~] 02-02: Build campaign editing, review gates, status tracking, persistence, reset, and workflow tests. *(Editing, review gate, status track, localStorage, and reset built; automated workflow tests still outstanding.)*

### Phase 3: Guided Evidence Experience
**Goal**: Users can access a restricted evidence assistant inside a cohesive, accessible desktop and mobile application.
**Mode:** mvp
**Depends on**: Phase 2
**Requirements**: CHAT-01, CHAT-02, CHAT-03, UX-01
**Success Criteria**:
1. User can open the dedicated Botpress assistant from the monitoring or campaign workflow.
2. Assistant answers the evaluation question set using included sources or returns the safe no-answer response.
3. User can complete the core workflow by keyboard on desktop and mobile layouts.
4. The assistant is clearly separated from deterministic calculations and campaign approval.
**Plans**: 2 plans

Plans:
- [x] 03-01: Prepare the Botpress knowledge pack, system instructions, evaluation prompts, and manual setup guide. *(Authored under botpress/; free-plan design uses website context instead of a Knowledge Base.)*
- [~] 03-02: Integrate Webchat, finish navigation and accessibility, and verify the complete cross-device experience. *(Webchat embedded and nav built; accessibility, cross-device, and bot safety evaluation still outstanding.)*

### Phase 4: Presentation-Ready Release
**Goal**: The independent application is publicly available and the complete workflow is reliable within the final presentation.
**Mode:** mvp
**Depends on**: Phase 3
**Requirements**: DEMO-01, DEMO-02, DEPLOY-01
**Success Criteria**:
1. Presenter can complete the seeded monitoring-to-review workflow in approximately two minutes.
2. Core calculations and campaign generation remain usable if Botpress is unavailable.
3. Static screenshots or a short backup recording cover every live demo step.
4. The verified application is deployed at a stable GitHub Pages URL ready to link from Tangaza.
**Plans**: 2 plans

Plans:
- [~] 04-01: Add demo mode, seed/reset controls, end-to-end tests, visual QA, and backup assets. *(Seed/reset control built; end-to-end tests, visual QA, and backup assets outstanding.)*
- [~] 04-02: Configure GitHub Pages, verify production, document the presentation path, and prepare the Tangaza link. *(Deploy workflow and Pages base path committed; production verification, presentation script, and Tangaza link outstanding.)*

## Progress

**Execution Order:** Phase 1 → Phase 2 → Phase 3 → Phase 4

Legend: `[x]` complete · `[~]` built, verification outstanding · `[ ]` not started

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Evidence to Priority | 2/2 | Built — responsive verification outstanding | 2026-07-01 (prototype) |
| 2. Priority to Outreach Draft | 1/2 | Built — workflow tests outstanding | - |
| 3. Guided Evidence Experience | 1/2 | Built — a11y + bot safety eval outstanding | - |
| 4. Presentation-Ready Release | 0/2 | Deploy scaffolding in place — hardening outstanding | - |

