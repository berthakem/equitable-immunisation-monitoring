<!-- GSD:project-start source:PROJECT.md -->
## Project

**Equitable Immunisation Monitoring**

Equitable Immunisation Monitoring is a focused web application for immunisation programme managers working with Wakiso, Mubende, and Kasese districts in Uganda. It combines published zero-dose evidence with a clearly labelled demonstration dataset to identify priority areas, explore demand and access barriers, generate human-reviewed outreach materials, and track campaign preparation.

The application is an independent final-course project. Once it is stable and publicly deployed, Tangaza will link to it as a completed portfolio project.

**Core Value:** Turn transparent zero-dose evidence into a practical, review-ready outreach priority and action package.

### Constraints

- **Data protection**: Only aggregate public or synthetic data may be committed — prevents exposure of personal health information.
- **Evidence integrity**: Published, synthetic, user-entered, and AI-generated content must be visually distinguishable — prevents misleading interpretation.
- **Human oversight**: Outreach materials cannot progress beyond review without an explicit user action — protects against unsafe automated communication.
- **Presentation**: The main workflow must be demonstrable in approximately two minutes — supports the four-minute final presentation format.
- **Deployment**: The MVP should run as a static web application on GitHub Pages — keeps hosting simple and reproducible.
- **Security**: API keys and service credentials must never be committed — secrets belong in local environment files or managed platform settings.
- **Accessibility**: Core analysis and campaign actions must work on desktop and mobile with readable text, adequate contrast, and keyboard access.
<!-- GSD:project-end -->

<!-- GSD:stack-start source:research/STACK.md -->
## Technology Stack

## Recommendation
## Application
- **Vite** — fast static build and straightforward GitHub Pages deployment.
- **React + TypeScript** — component structure, predictable state, and typed data contracts.
- **React Router** — direct links to overview, district detail, campaign builder, and evidence pages.
- **CSS variables and authored CSS** — a small custom visual system without a heavy component framework.
- **Lucide React** — familiar interface icons with accessible labels.
## Data and Analysis
- **CSV and JSON source files** stored in `public/data/`.
- **Papa Parse** for optional CSV import and field-level parse errors.
- **Zod** for runtime validation and explicit source/synthetic metadata.
- **Pure TypeScript analysis functions** for coverage, dropout, RED/REC category, and display labels.
- **Apache ECharts** for accessible bar, trend, and comparison charts.
## RED/REC Analytical Core
- Access proxy: Penta1/DTP1 coverage.
- Utilisation proxy: Penta1-to-Penta3 or DTP1-to-DTP3 dropout.
- Good access: first-dose coverage at or above the configured threshold.
- Good utilisation: dropout below the configured threshold.
- Category 1: good access and good utilisation.
- Category 2: good access and poor utilisation.
- Category 3: poor access and good utilisation.
- Category 4: poor access and poor utilisation.
## Chatbot
- **Botpress Webchat** embedded as a dedicated project assistant.
- A separate Botpress bot, not the Tangaza portfolio bot.
- Knowledge base restricted to selected Uganda zero-dose reports and WHO demand guidance.
- Custom no-answer behaviour instructing users to consult programme guidance rather than improvising.
- The bot explains sources and possible actions; it does not calculate dashboard indicators or approve campaign materials.
## Campaign Automation
## Testing
- **Vitest** for calculations, validation, and campaign-state transitions.
- **React Testing Library** for key user workflows.
- **Playwright** for the two-minute demonstration path and responsive checks.
- Static dataset fixtures covering all RED/REC categories and missing-data cases.
## Deployment
- GitHub repository independent of Tangaza.
- GitHub Pages deployment through GitHub Actions.
- Environment-specific Botpress client/embed value configured outside source control where possible.
- Tangaza link added only after the deployed URL is verified.
## Deferred
- Backend database.
- User accounts.
- Live DHIS2 connection.
- Real notification channels.
- Server-side LLM generation.
- Cross-device campaign persistence.
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->
## Conventions

Conventions not yet established. Will populate as patterns emerge during development.
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->
## Architecture

Architecture not yet mapped. Follow existing patterns found in the codebase.
<!-- GSD:architecture-end -->

<!-- GSD:skills-start source:skills/ -->
## Project Skills

No project skills found. Add skills to any of: `.claude/skills/`, `.agents/skills/`, `.cursor/skills/`, `.github/skills/`, or `.codex/skills/` with a `SKILL.md` index file.
<!-- GSD:skills-end -->

<!-- GSD:workflow-start source:GSD defaults -->
## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:
- `/gsd-quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd-debug` for investigation and bug fixing
- `/gsd-execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->



<!-- GSD:profile-start -->
## Developer Profile

> Profile not yet configured. Run `/gsd-profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
