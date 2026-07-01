# Equitable Immunisation Assistant — Botpress Setup

This folder contains the upload-ready knowledge documents, prompt, and evaluation questions for the project's Botpress assistant.

The bot is an evidence and planning assistant for a demonstration application. It is not an official Ministry of Health service and must not present generated messages as approved communication.

## What the Bot Does

- Explains zero-dose, first-dose coverage, dropout, and RED/REC categories.
- Helps programme managers interpret the evidence shown by the application.
- Helps users explore an observed demand or access barrier.
- Drafts English outreach content for human review.
- Points users to source documents and current Ministry guidance.

## What the Bot Does Not Do

- Calculate or change dashboard indicators.
- Infer demand barriers from vaccination coverage.
- Provide diagnosis, treatment, or individual clinical advice.
- Collect personal, child-level, or household-level data.
- Give an immunisation schedule from memory.
- Generate or translate Luganda campaign content.
- Claim that demonstration messages are Ministry-approved.
- Send messages or approve campaigns.

## Setup Order

Follow `SETUP-GUIDE.md`, then use:

1. `prompts/autonomous-node-prompt.txt`
2. All files under `knowledge/`
3. `prompts/evaluation-questions.md`

Do not upload the unreviewed bilingual draft from `evidence/drafts/` to Botpress.

