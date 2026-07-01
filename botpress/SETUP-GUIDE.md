# Step-by-Step Botpress Setup and Publication

These instructions target the current Botpress Studio workflow. Interface wording may change slightly.

## Part 1 — Create the Knowledge Base

1. Open the `Equitable Immunisation Assistant` bot.
2. In the left menu, open **Knowledge Bases**.
3. Select **New Knowledge Base**.
4. Name it:

   `Equitable Immunisation Evidence`

5. Choose **Documents**.
6. Upload every Markdown file from this repository's `botpress/knowledge/` directory.
7. Wait until all documents show that processing/indexing is complete.

Botpress supports document, website, table, and rich-text knowledge sources. For this MVP, curated documents are preferable because they give us a controlled evidence boundary.

## Part 2 — Add Primary Source Pages

In the same knowledge base:

1. Select **Add Source**.
2. Choose **Website**.
3. Select the option for specific pages rather than crawling an entire domain.
4. Add these URLs individually:

   - `https://health.go.ug/download/routine-immunization-schedule/`
   - `https://library.health.go.ug/index.php/communicable-disease/vaccination-and-immunisation-unepi/national-immunisation-strategy-nis-2024`
   - `https://zdlh.gavi.org/resources/report-rapid-assessment-zero-dose-situation-uganda`
   - `https://www.who.int/publications/i/item/9789240049680`

5. Leave automatic web search disabled. The assistant should stay inside the approved evidence scope.

## Part 3 — Configure the Autonomous Node

1. Open **Main Workflow**.
2. Select the existing **Autonomous Node**. New Botpress bots normally include one.
3. Find its **Instructions** field.
4. Open `prompts/autonomous-node-prompt.txt`.
5. Copy the entire file and paste it into **Instructions**.
6. Under **Search Knowledge** or the Search Knowledge Card:
   - Select only `Equitable Immunisation Evidence`.
   - Confirm that the assistant can use the knowledge-search tool.
7. Do not enable unrestricted web search.
8. Do not add message-sending, email, WhatsApp, or approval tools.

## Part 4 — Configure the Greeting

Set the opening message to:

> Welcome to the Equitable Immunisation Assistant. I can help explain the Uganda monitoring evidence, explore observed barriers, and prepare English demonstration outreach drafts for human review. I do not provide clinical advice or official Ministry-approved messages. What would you like to explore?

Suggested quick questions:

- What does a Category 4 area mean?
- Why must coverage and demand barriers be analysed separately?
- What does the Uganda evidence say about missed communities?
- Help me draft a review-only radio message.

## Part 5 — Configure Webchat

1. Open **Webchat**.
2. Set the display name to:

   `Equitable Immunisation Assistant`

3. Set the description to:

   `Evidence and outreach planning support for the Uganda demonstration project`

4. Use these provisional colours:
   - Primary/deep green: `#174A3A`
   - Teal: `#2B7A78`
   - Warm paper: `#F3EFE2`
   - Amber accent: `#D9A441`

5. Use a light theme.
6. Disable file uploads.
7. Enable message feedback if available.
8. Use session storage for the demonstration unless you specifically want conversations retained.
9. If **Allowed Origins** is available on your plan, keep its default until the GitHub Pages URL exists. Botpress currently lists domain whitelisting as a Team-plan feature.
10. Select **Publish Configuration** after changing Webchat settings.

## Part 6 — Test Before Publishing

1. Open the Botpress emulator.
2. Ask every question in `prompts/evaluation-questions.md`.
3. Confirm the bot:
   - Uses the knowledge base.
   - Names or links the relevant source.
   - Does not invent district-specific barriers.
   - Does not provide an outdated schedule.
   - Labels generated content as a demonstration draft.
   - Refuses personal-data and clinical-advice requests.
4. Select **Inspect** on weak responses and confirm the knowledge-search tool returned relevant content.
5. Correct the prompt or knowledge file, then retest.

## Part 7 — Publish the Bot

1. Select **Publish** in Botpress Studio.
2. Wait for the bot deployment to finish.
3. Test the published Webchat preview.
4. Open **Webchat → Deploy Settings**.
5. Copy the complete embed code.
6. The embed code normally contains two script tags:

   ```html
   <script src="https://cdn.botpress.cloud/webchat/vX.X/inject.js"></script>
   <script src="https://files.bpcontent.cloud/..." defer></script>
   ```

7. Share only those two script tags for application integration.

The embed code is public configuration. Do not share workspace credentials, personal access tokens, or API keys.

## Part 8 — Republish After Changes

When knowledge, prompt, workflow, or bot logic changes:

1. Test in the emulator.
2. Select **Publish** again.

When only Webchat appearance or deployment settings change:

1. Select **Publish Configuration** in the Webchat settings.

## Optional Hard No-Answer Workflow

The MVP can rely on the prompt's no-answer rule. For stricter control, Botpress also documents a Transition Card triggered when the Knowledge Agent has no answer. Add that only after the basic assistant passes the evaluation set.

## Official Botpress References

- Knowledge bases: https://botpress.com/docs/studio/concepts/knowledge-base/introduction/
- Autonomous nodes: https://botpress.com/docs/studio/concepts/nodes/autonomous-node/
- Webchat configuration: https://botpress.com/docs/webchat/get-started/configure-your-webchat/
- Add knowledge sources: https://botpress.com/docs/studio/concepts/knowledge-base/add-sources/
- Webchat embed: https://botpress.com/docs/webchat/get-started/quick-start/
