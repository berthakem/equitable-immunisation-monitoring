# Equitable Immunisation Monitoring

## What This Is

Equitable Immunisation Monitoring is a focused web application for immunisation programme managers working with Wakiso, Mubende, and Kasese districts in Uganda. It combines published zero-dose evidence with a clearly labelled demonstration dataset to identify priority areas, explore demand and access barriers, generate human-reviewed outreach materials, and track campaign preparation.

The application is an independent final-course project. Once it is stable and publicly deployed, Tangaza will link to it as a completed portfolio project.

## Core Value

Turn transparent zero-dose evidence into a practical, review-ready outreach priority and action package.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Present a responsive overview of immunisation equity across Wakiso, Mubende, and Kasese.
- [ ] Load and validate a documented demonstration dataset derived from public evidence.
- [ ] Clearly distinguish published observations, synthetic values, user inputs, and generated recommendations.
- [ ] Calculate a transparent outreach-priority score from selected immunisation indicators.
- [ ] Let users inspect the indicators and assumptions contributing to each priority classification.
- [ ] Let a programme manager select or record observed demand and access barriers without inferring them from coverage alone.
- [ ] Provide a chatbot grounded in approved immunisation and demand-generation guidance.
- [ ] Generate a draft outreach package containing reviewed communication messages and a short activity plan.
- [ ] Require human review before any generated campaign material is marked approved.
- [ ] Track campaign preparation through Draft, Under Review, Approved, Active, and Completed states.
- [ ] Cite the public sources used by the dashboard and chatbot.
- [ ] Provide a reliable two-minute live demonstration path and static backup content.
- [ ] Deploy independently and expose a stable public URL that can later be linked from Tangaza.

### Out of Scope

- Live or authenticated Uganda DHIS2 integration — the first release uses public reports and demonstration data.
- Monitoring all Uganda districts or regions — the prototype is limited to Wakiso, Mubende, and Kasese.
- Automatic public distribution of SMS, WhatsApp, radio, or social-media messages — generated materials stop at human review.
- Personal or child-level data — the product uses aggregate, non-identifiable information only.
- Clinical advice or automated immunisation decisions — the tool supports programme planning and does not replace expert judgement.
- Claims that coverage data alone explains demand barriers — users must provide barrier context or select a labelled scenario.
- Production-grade national programme monitoring — this release is a proof of concept for the final course presentation.

## Context

- Uganda's first full MICS is being designed for 2026–27, with results expected in 2027, so it is not available for this prototype.
- The initial evidence base includes the Uganda DHS 2022, Uganda Zero-Dose Learning Hub publications, recent published subnational DTP1 trends, the Uganda rapid assessment in Wakiso, Mubende, and Kasese, and WHO vaccination-demand guidance.
- Published report values may not form a complete application-ready dataset. Missing values required for demonstration will be synthetic and visibly labelled.
- Quantitative immunisation indicators answer where children may be missed. Demand and access information is collected separately to explore why.
- The project demonstrates course learning in websites, data analytics, deep research and text analysis, chatbots, automation workflows, and visual communication.
- The repository is a sibling of the Tangaza portfolio repository under `/Users/bee/Projects/GitHub/`.

## Constraints

- **Data protection**: Only aggregate public or synthetic data may be committed — prevents exposure of personal health information.
- **Evidence integrity**: Published, synthetic, user-entered, and AI-generated content must be visually distinguishable — prevents misleading interpretation.
- **Human oversight**: Outreach materials cannot progress beyond review without an explicit user action — protects against unsafe automated communication.
- **Presentation**: The main workflow must be demonstrable in approximately two minutes — supports the four-minute final presentation format.
- **Deployment**: The MVP should run as a static web application on GitHub Pages — keeps hosting simple and reproducible.
- **Security**: API keys and service credentials must never be committed — secrets belong in local environment files or managed platform settings.
- **Accessibility**: Core analysis and campaign actions must work on desktop and mobile with readable text, adequate contrast, and keyboard access.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Build an independent repository | Keeps the final product focused and prevents the Tangaza portfolio from becoming the application itself | — Pending |
| Limit the MVP to Wakiso, Mubende, and Kasese | Matches the published Uganda rapid-assessment scope and keeps the demo coherent | — Pending |
| Use public evidence plus labelled demonstration data | Enables immediate development without waiting for restricted routine data | — Pending |
| Generate review-ready campaigns only | Demonstrates automation while preserving programme and communication oversight | — Pending |
| Separate coverage signals from demand-barrier inputs | Avoids unsupported explanations and makes the analytical logic transparent | — Pending |
| Link from Tangaza only after deployment | Ensures the portfolio points to a stable, independent project | — Pending |
| Start with an independent Tangaza-related visual identity | Deep green, teal, warm paper, and amber provide continuity without making the tool look like another portfolio page; palette remains revisable after the first prototype | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition:**
1. Requirements invalidated? Move them to Out of Scope with a reason.
2. Requirements validated? Move them to Validated with a phase reference.
3. New requirements emerged? Add them to Active.
4. Decisions to log? Add them to Key Decisions.
5. "What This Is" still accurate? Update it if the product has drifted.

**After each milestone:**
1. Review all sections.
2. Confirm the Core Value still drives prioritisation.
3. Revisit Out of Scope decisions.
4. Update Context with current users, feedback, and evidence.

---
*Last updated: 2026-07-01 after initial visual-direction decision*
