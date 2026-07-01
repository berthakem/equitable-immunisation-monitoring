# Evidence and Data Handoff

## Critical Status

The project has two different evidence layers:

1. **Published evidence** supports the Uganda focus, selection of Wakiso,
   Mubende, and Kasese, monitoring method, barrier framework, and communication
   safeguards.
2. **Synthetic demonstration data** supplies the Penta1, Penta3, target
   population, dropout, RED/REC category, and estimated zero-dose values shown
   in the prototype dashboard.

The dashboard values are not current Uganda programme results. They must always
be labelled `Synthetic demonstration` and must not be used to make real
district decisions.

## Why Uganda

Uganda was selected because the prototype can be anchored in:

- A current Ministry of Health National Immunisation Strategy.
- A current Ministry of Health routine immunisation schedule.
- Uganda-specific zero-dose learning-hub publications.
- A published rapid assessment using RED/REC access and utilisation analysis.
- Published examples of programme communication and catch-up activity.

Uganda's first full MICS was still being designed for 2026-2027 when this
project was scoped. Results were not available for the prototype.

## Why These Three Districts

The Uganda Learning Hub for Immunisation Equity conducted a rapid assessment
between August 2023 and March 2024 in **Wakiso, Mubende, and Kasese**.

The report states that these districts were selected for their high burden of
zero-dose children. Its selection process used:

- DHIS2 routine data available to the study team.
- RED/REC access and utilisation categories.
- Zero-dose proportions.
- District-team engagement.
- Equity reference groups and high-risk community considerations.

This is the evidence basis for limiting the demonstration to the same three
districts. It is historical selection evidence, not a claim that they are
currently Uganda's three highest-burden districts.

Primary selection source:

- Uganda Learning Hub rapid assessment:
  https://zdlh.gavi.org/resources/report-rapid-assessment-zero-dose-situation-uganda

Supporting district context:

- Uganda Zero-Dose Landscape:
  https://zdlh.gavi.org/country-profiles/uganda
- Mubende hard-to-reach and underserved communities case study:
  https://zdlh.gavi.org/resources/burden-zero-dose-children-pastoralist-hard-reach-and-underserved-communities-case-study

## Published Area Signals

The rapid assessment provides historical area signals that may be used as
context, with dates and source labels:

- Wakiso: Namugongo Division, Wakiso, and Kyengera Town Council.
- Wakiso house-to-house registration: Kyengera Town Council, Nabweru, and
  Bweyogerere had high recorded zero-dose numbers.
- Kasese: Bwera, Isango, and Lake Katwe.

The report does not provide a complete, current, application-ready district
dataset for every dashboard field. Do not invent missing published values or
present these historical signals as current monitoring.

## Dashboard Dataset

Portable file:

`evidence/data/uganda-dashboard-demo-v1.csv`

Application source:

`src/data.ts`

| District | Penta1 | Penta3 | Target children | Dropout | Category | Estimated zero-dose |
|----------|-------:|-------:|----------------:|--------:|---------:|--------------------:|
| Wakiso | 88% | 77% | 12,400 | 12.5% | 2 | 1,488 |
| Mubende | 68% | 54% | 6,800 | 20.6% | 4 | 2,176 |
| Kasese | 76% | 72% | 8,900 | 5.3% | 3 | 2,136 |

Every value in this table is a synthetic planning value or a deterministic
calculation from synthetic values.

The profiles were designed to demonstrate three different RED/REC patterns:

- Wakiso: good access and poor utilisation.
- Mubende: poor access and poor utilisation.
- Kasese: poor access and good utilisation among those reached.

## Calculations

Access proxy:

`Penta1 coverage`

Utilisation proxy:

`Penta1-to-Penta3 dropout`

Dropout formula:

`((Penta1 - Penta3) / Penta1) * 100`

Demonstration thresholds:

- Good access: Penta1 coverage at or above 80%.
- Good utilisation: dropout below 10%.

Categories:

- Category 1: good access and good utilisation.
- Category 2: good access and poor utilisation.
- Category 3: poor access and good utilisation among those reached.
- Category 4: poor access and poor utilisation.

Estimated zero-dose:

`target_children * (1 - Penta1 / 100)`

Code and tests:

- `src/data.ts`
- `src/data.test.ts`
- `botpress/knowledge/02-monitoring-definitions.md`

Method source:

- WHO AFRO, Implementing the Reaching Every District Approach:
  https://www.afro.who.int/sites/default/files/2017-06/ivd-AFRO-RED-Guide_2008%20FINAL.pdf

## Knowledge Resources for Report Generation

### Uganda Policy and Programme Context

1. **National Immunisation Strategy 2024-2028**
   - Use for national priorities, zero-dose and missed-community framing,
     targeted outreach, communication principles, and approval requirements.
   - https://library.health.go.ug/index.php/communicable-disease/vaccination-and-immunisation-unepi/national-immunisation-strategy-nis-2024

2. **UNEPI Monitoring and Evaluation Plan 2024-2028**
   - Use for programme monitoring context and indicator framing.
   - https://library.health.go.ug/index.php/communicable-disease/vaccination-and-immunisation-unepi/uganda-national-expanded-program

3. **Uganda Routine Immunisation Schedule**
   - Use for current schedule checks. Do not reproduce a schedule from model
     memory.
   - https://health.go.ug/download/routine-immunization-schedule/

### District Selection and Equity Context

4. **Rapid Assessment of the Zero-Dose Situation in Uganda**
   - Use for selection of Wakiso, Mubende, and Kasese; historical area signals;
     RED/REC application; and study limitations.
   - https://zdlh.gavi.org/resources/report-rapid-assessment-zero-dose-situation-uganda

5. **Uganda Zero-Dose Landscape**
   - Use for national zero-dose background and the learning-hub evidence
     landscape.
   - https://zdlh.gavi.org/country-profiles/uganda

6. **Mubende Case Study**
   - Use for hard-to-reach, pastoralist, and underserved-community context.
   - https://zdlh.gavi.org/resources/burden-zero-dose-children-pastoralist-hard-reach-and-underserved-communities-case-study

### Demand and Outreach Planning

7. **WHO Behavioural and Social Drivers of Vaccination**
   - Use for the four BeSD domains: thinking and feeling, social processes,
     motivation, and practical issues.
   - Use to match interventions to locally observed barriers.
   - https://www.who.int/publications/i/item/9789240049680

8. **Uganda Big Catch-Up Report**
   - Use for examples of multi-platform communication, local-language radio,
     IEC materials, and district community mobilisation.
   - https://library.health.go.ug/communicable-disease/vaccination-and-immunisation-unepi/big-catch-bcu-report-reaching-children-who

### Local Repository Knowledge Files

- `botpress/knowledge/01-project-scope.md`
- `botpress/knowledge/02-monitoring-definitions.md`
- `botpress/knowledge/03-uganda-evidence.md`
- `botpress/knowledge/04-demand-guidance.md`
- `botpress/knowledge/05-demonstration-message-library.md`
- `botpress/knowledge/06-safety-and-source-rules.md`
- `evidence/README.md`

## Report-Generation Rules

Any AI-generated report must:

1. Label dashboard values as synthetic demonstration data.
2. Date historical evidence and cite its source.
3. Keep published evidence, synthetic values, user-entered barriers, calculated
   indicators, and generated recommendations distinct.
4. Never infer a demand barrier from coverage or dropout alone.
5. Never claim connection to live DHIS2 data.
6. Never claim Ministry of Health approval.
7. Direct current schedule questions to the Ministry schedule.
8. Use aggregate data only and exclude personal or child-level information.
9. Stop generated outreach content at human review.

## Known Evidence Gaps

- No current validated district Penta1 or Penta3 dataset has been supplied.
- No authorised DHIS2 export is included.
- No current district target-population denominators have been supplied.
- Uganda MICS 2026-2027 results are not available.
- The rapid assessment is historical and does not provide every dashboard field
  in reusable row-level form.
- The supplied Luganda draft has not received qualified language or programme
  review.

If validated aggregate data becomes available, replace the synthetic CSV while
preserving the same provenance, validation, and calculation fields.
