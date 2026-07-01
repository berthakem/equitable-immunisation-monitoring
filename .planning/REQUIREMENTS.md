# Requirements: Equitable Immunisation Monitoring

**Defined:** 2026-07-01  
**Core Value:** Turn transparent zero-dose evidence into a practical, review-ready outreach priority and action package.

## v1 Requirements

### Data Foundation

- [ ] **DATA-01**: User can load a versioned demonstration dataset covering selected areas in Wakiso, Mubende, and Kasese.
- [ ] **DATA-02**: User is shown clear validation errors or warnings for missing, invalid, or incompatible immunisation values.
- [ ] **DATA-03**: User can see the period, indicator definition, source, and `published`, `synthetic`, or `entered` provenance for each displayed value.

### Equity Monitoring

- [ ] **MON-01**: User can view first-dose coverage, third-dose coverage, and first-to-third-dose dropout for each included area.
- [ ] **MON-02**: User can view the area's RED/REC access and utilisation category using visible, documented thresholds.
- [ ] **MON-03**: User can compare included areas and filter the comparison by district.
- [ ] **MON-04**: User can inspect the values, formulas, assumptions, and data-quality warnings behind an area's classification.

### Barrier Context

- [ ] **BARR-01**: User can select an observed demand, access, or service-experience barrier for an area without the application inferring it from coverage.
- [ ] **BARR-02**: User can add an optional aggregate planning note after acknowledging that personal information must not be entered.
- [ ] **BARR-03**: User can distinguish published evidence about barriers from the barrier scenario they selected.

### Outreach Workflow

- [ ] **CAMP-01**: User can generate a draft outreach package containing an SMS or WhatsApp message, radio announcement, VHT or health-worker talking points, and a seven-day activity plan.
- [ ] **CAMP-02**: User can edit generated campaign content before submitting it for review.
- [ ] **CAMP-03**: User must explicitly confirm review before moving a campaign from Draft to Under Review or Approved.
- [ ] **CAMP-04**: User can track campaigns through Draft, Under Review, Approved, Active, and Completed states.
- [ ] **CAMP-05**: User can reset the application to a known seeded demonstration state.

### Evidence Assistant

- [ ] **CHAT-01**: User can open a dedicated Botpress evidence assistant from the application.
- [ ] **CHAT-02**: User receives source-grounded responses about the included Uganda evidence and approved demand-generation guidance.
- [ ] **CHAT-03**: User receives a safe no-answer response when the assistant cannot support an answer from its knowledge base.

### Transparency and Delivery

- [ ] **SAFE-01**: User can access definitions, sources, assumptions, limitations, and safety boundaries from every analytical or campaign workflow.
- [ ] **UX-01**: User can complete the core workflow with keyboard access and readable layouts on desktop and mobile.
- [ ] **DEMO-01**: Presenter can complete a seeded overview-to-campaign workflow in approximately two minutes without relying on the chatbot network request.
- [ ] **DEMO-02**: Presenter has static backup evidence for the core demo steps.
- [ ] **DEPLOY-01**: User can access the independently deployed application at a stable GitHub Pages URL.

## v2 Requirements

### Data Integration

- **DATA-04**: Authorised user can import an aggregate DHIS2 export.
- **DATA-05**: Application can incorporate Uganda MICS 2026–27 results when published.
- **DATA-06**: Application can display validated geographic maps.

### Collaboration and Persistence

- **COLL-01**: Authenticated users can share campaigns across devices.
- **COLL-02**: Application retains an auditable review and approval history.
- **COLL-03**: Application stores campaigns in an approved backend.

### Communication

- **COMM-01**: Reviewer can manage approved multilingual message libraries.
- **COMM-02**: Approved campaign can be handed to an authorised external messaging workflow.
- **COMM-03**: Application can monitor campaign implementation and outcome indicators.

## Out of Scope

| Feature | Reason |
|---------|--------|
| Live DHIS2 connection | Requires authorisation, security design, and data governance beyond the presentation MVP |
| Personal or child-level records | Unnecessary for the analytical purpose and creates unacceptable privacy risk |
| Automatic public message sending | Campaign content requires programme and communication review |
| All Uganda districts | Broad scope would weaken the focused three-district demonstration |
| AI-generated analytical classification | RED/REC calculations must remain deterministic and inspectable |
| Automated diagnosis or clinical recommendations | Product supports programme planning, not clinical care |
| Claims of real-time national monitoring | Data sources are published snapshots and labelled demonstration values |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| DATA-01 | Phase 1 | Pending |
| DATA-02 | Phase 1 | Pending |
| DATA-03 | Phase 1 | Pending |
| MON-01 | Phase 1 | Pending |
| MON-02 | Phase 1 | Pending |
| MON-03 | Phase 1 | Pending |
| MON-04 | Phase 1 | Pending |
| BARR-01 | Phase 2 | Pending |
| BARR-02 | Phase 2 | Pending |
| BARR-03 | Phase 2 | Pending |
| CAMP-01 | Phase 2 | Pending |
| CAMP-02 | Phase 2 | Pending |
| CAMP-03 | Phase 2 | Pending |
| CAMP-04 | Phase 2 | Pending |
| CAMP-05 | Phase 2 | Pending |
| CHAT-01 | Phase 3 | Pending |
| CHAT-02 | Phase 3 | Pending |
| CHAT-03 | Phase 3 | Pending |
| SAFE-01 | Phase 1 | Pending |
| UX-01 | Phase 3 | Pending |
| DEMO-01 | Phase 4 | Pending |
| DEMO-02 | Phase 4 | Pending |
| DEPLOY-01 | Phase 4 | Pending |

**Coverage:**
- v1 requirements: 23 total
- Mapped to phases: 23
- Unmapped: 0

---
*Requirements defined: 2026-07-01*  
*Last updated: 2026-07-01 after roadmap creation*
