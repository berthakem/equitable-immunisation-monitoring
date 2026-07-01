# Research Summary

## Product Direction

Build a static proof of concept for Wakiso, Mubende, and Kasese that joins transparent immunisation monitoring to a human-reviewed demand-generation workflow.

## Analytical Decision

Use RED/REC access and utilisation categories rather than an invented AI score:

- Penta1/DTP1 coverage represents access.
- Penta1-to-Penta3 or DTP1-to-DTP3 dropout represents utilisation.
- The interface exposes thresholds, calculations, period, and source.
- Coverage identifies where attention is needed; users supply barrier context.

## Technical Decision

- Vite, React, and TypeScript.
- Zod and Papa Parse for data validation.
- ECharts for comparison and trend visualisation.
- Pure TypeScript calculations.
- Local campaign status storage.
- Botpress Webchat with a dedicated restricted knowledge base.
- Static GitHub Pages deployment.

## Automation Decision

The campaign generator uses reviewed barrier-specific templates and produces a draft SMS/WhatsApp message, radio script, VHT talking points, and seven-day activity plan. It stops at human review and does not send content.

## Evidence Base

- Uganda DHS 2022.
- Uganda Zero-Dose Learning Hub landscape and rapid assessment.
- Published ZDLH subnational DTP1 trends.
- Uganda 2024 national zero-dose survey findings.
- WHO RED implementation guidance.
- WHO Behavioural and Social Drivers of Vaccination guidance.

## Key Risks

- Incomplete public data.
- Confusing zero-dose definitions.
- Unjustified causal interpretation.
- Coverage values affected by denominator quality.
- Chatbot hallucination.
- Network failure during the demo.
- Attempting real integrations too early.

## MVP Boundary

The first release needs one reliable path:

1. Compare selected areas.
2. inspect access and utilisation.
3. select an observed barrier.
4. generate a draft outreach package.
5. move it to Under Review.
6. ask the evidence chatbot a grounded question.

Everything else is secondary.

