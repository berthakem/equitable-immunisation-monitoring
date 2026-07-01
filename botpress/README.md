# Equitable Immunisation Assistant - Botpress Setup

This folder contains two Botpress designs for the project's assistant.

## Recommended: Free-Plan Outreach Action Planner

The recommended demonstration does not require a Knowledge Base. It uses one
Autonomous Node prompt to guide a programme user from a dashboard finding to a
review-ready outreach action package.

Use:

1. `FREE-PLAN-GUIDE.md`
2. `prompts/free-outreach-planner-prompt.txt`
3. `prompts/free-plan-evaluation.md`
4. `embed-snippet.html` for website integration

### How the assistant aligns with the website

The website carries the evidence and research; the assistant carries interactive
action planning. The two must not contradict each other:

| Website section | Role | Assistant relationship |
|-----------------|------|------------------------|
| **Overview** | Why Wakiso, Mubende, and Kasese were selected (rapid assessment) | Assistant may reference the selection, never restate it as current data |
| **Dashboard** | Penta1/Penta3, dropout, RED/REC categories | Assistant never calculates or changes these indicators |
| **Research & Analysis** | AI-assisted synthesis: BeSD barriers, text analysis, strategy | Assistant reuses the same framing (barrier → response); does not invent new evidence |
| **Outreach** | Deterministic reviewed campaign template | Assistant produces the same kind of labelled, review-only draft |
| **Evidence** | Source register and safeguards | Assistant names sources and gives the safe no-answer when unsupported |

The dashboard and research pages remain the evidence layer. The assistant is the
action-planning layer and does not answer open-ended evidence questions.

The published Webchat embed snippet is public configuration and is already added
to the frontend HTML entry point (`index.html`); it loads on every page.

## Optional Future Version: Knowledge-Based Assistant

The original knowledge-based design is retained as a future enhancement. Use it
only when the Botpress workspace supports Knowledge Base document uploads.

## What the Bot Does

- Accepts a priority area selected by the user from the project dashboard.
- Collects the observed barrier, audience, channel, and confirmed service details.
- Produces a concise outreach action package.
- Drafts English outreach content for human review.
- Adds an approval and monitoring checklist.

## What the Bot Does Not Do

- Calculate or change dashboard indicators.
- Infer demand barriers from vaccination coverage.
- Provide diagnosis, treatment, or individual clinical advice.
- Collect personal, child-level, or household-level data.
- Give an immunisation schedule from memory.
- Generate or translate Luganda campaign content.
- Claim that demonstration messages are Ministry-approved.
- Send messages or approve campaigns.

## Knowledge-Based Version

For the optional knowledge-based version, follow `SETUP-GUIDE.md`, then use:

1. `prompts/autonomous-node-prompt.txt`
2. All files under `knowledge/`
3. `prompts/evaluation-questions.md`

Do not upload the unreviewed bilingual draft from `evidence/drafts/` to Botpress.
