# Stack Research

## Recommendation

Build the MVP as a static React application that performs data validation, immunisation calculations, campaign drafting, and status tracking in the browser. Keep the chatbot as a separately configured Botpress service embedded in the application.

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

Use documented access and utilisation logic rather than an opaque weighted AI score:

- Access proxy: Penta1/DTP1 coverage.
- Utilisation proxy: Penta1-to-Penta3 or DTP1-to-DTP3 dropout.
- Good access: first-dose coverage at or above the configured threshold.
- Good utilisation: dropout below the configured threshold.
- Category 1: good access and good utilisation.
- Category 2: good access and poor utilisation.
- Category 3: poor access and good utilisation.
- Category 4: poor access and poor utilisation.

The default demonstration thresholds will be documented as 80% first-dose coverage and 10% dropout, with the source and assumptions visible in the interface. Source: WHO RED guidance and immunisation monitoring references.

## Chatbot

- **Botpress Webchat** embedded as a dedicated project assistant.
- A separate Botpress bot, not the Tangaza portfolio bot.
- Knowledge base restricted to selected Uganda zero-dose reports and WHO demand guidance.
- Custom no-answer behaviour instructing users to consult programme guidance rather than improvising.
- The bot explains sources and possible actions; it does not calculate dashboard indicators or approve campaign materials.

Botpress supports documents, websites, rich text, and tabular sources in a knowledge base:
https://botpress.com/docs/studio/concepts/knowledge-base/introduction/

## Campaign Automation

The MVP uses a deterministic in-browser workflow:

1. Select geography and observed barrier.
2. Combine barrier-specific reviewed templates with the local evidence summary.
3. Produce SMS, radio, health-worker talking points, and a seven-day action plan.
4. Require an explicit review step.
5. Track status in browser storage.
6. Export or print the package.

This demonstrates automation without requiring credentials or sending public messages.

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

