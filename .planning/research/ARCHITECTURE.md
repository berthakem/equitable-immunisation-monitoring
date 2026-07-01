# Architecture Research

## System Shape

The MVP is a static, client-side application with one external conversational service.

```text
Versioned public evidence + labelled demo data
                    |
                    v
          Validation and provenance
                    |
                    v
        Coverage/dropout calculations
                    |
                    v
          RED/REC categorisation
                    |
          +---------+---------+
          |                   |
          v                   v
   Dashboard/detail     User-selected barrier
                              |
                              v
                  Reviewed template engine
                              |
                              v
                   Draft outreach package
                              |
                              v
                     Human review/status

Botpress knowledge base -> embedded evidence assistant
```

## Suggested Routes

- `/` — project purpose and national/district overview.
- `/areas` — comparison and filtering.
- `/areas/:areaId` — area evidence, calculations, and sources.
- `/campaign/new` — barrier selection and outreach generator.
- `/campaigns` — preparation tracker.
- `/evidence` — sources, definitions, assumptions, and limitations.

## Data Contracts

### Area Observation

- `area_id`
- `district`
- `subcounty`
- `period`
- `target_population`
- `penta1_count`
- `penta3_count`
- `penta1_coverage`
- `penta3_coverage`
- `dropout_rate`
- `zero_dose_measure`
- `source_type`: `published | synthetic | entered`
- `source_id`
- `notes`

Not every public report will provide counts and coverage together. Validation must permit unavailable fields while preventing calculations that lack required inputs.

### Evidence Source

- `source_id`
- `title`
- `publisher`
- `publication_date`
- `url`
- `geographic_scope`
- `time_period`
- `usage_note`

### Campaign Draft

- `campaign_id`
- `area_id`
- `barrier_type`
- `barrier_note`
- `messages`
- `activity_plan`
- `status`
- `created_at`
- `reviewed_at`
- `content_origin`

## Calculation Ownership

- Calculations live in pure TypeScript modules.
- UI components never duplicate formulas.
- Thresholds are named configuration with source notes.
- Calculated values retain the IDs of their source observations.
- Chatbot text is not used as analytical input.

## State

- Source and demonstration data are versioned files.
- Filters and form state use React state.
- Campaign drafts and statuses use local storage for the prototype.
- A “Reset demonstration” control restores a known presentation state.

## Safety Boundaries

- No names, phone numbers, child records, or household records.
- User notes warn against personal information.
- Generated content is marked draft until reviewed.
- The chatbot is a guidance navigator, not a medical or statistical authority.
- Sources and limitations remain one click away from every analytical view.

## Deployment Boundary

The application compiles to static assets. GitHub Pages serves the application, while Botpress is loaded from its hosted Webchat service. A later phase can replace browser storage with an approved backend without changing the analysis contracts.

