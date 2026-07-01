# Free-Plan Botpress Setup: Outreach Action Planner

This is the recommended Botpress design for the project demonstration. It does
not use a Knowledge Base, document upload, open-web search, external API, or
message-sending integration.

## Concept

The website dashboard identifies an immunisation priority. The assistant then
turns that user-selected finding into a review-ready outreach action package.

The user supplies:

1. Priority area
2. Observed barrier
3. Intended audience
4. Communication channel
5. Confirmed service details, when relevant

The assistant produces:

- Situation summary
- Outreach objective
- Recommended actions
- English demonstration message
- Human-review checklist
- Suggested monitoring measure

This demonstrates a chatbot, generative AI, and a controlled planning workflow
without asking the bot to store or retrieve project documents.

## Part 1 - Open the Bot

1. Open the existing `Equitable Immunisation Assistant` bot.
2. Open **Home** or **Main Workflow**.
3. Select the existing **Autonomous Node**.
4. Do not create a Knowledge Base.

Botpress normally adds an Autonomous Node to a new bot. Its **Instructions**
field is the prompt that controls the conversation.

## Part 2 - Remove Unneeded Tools

The demonstration needs only conversation generation.

1. Remove or disable any **Search Knowledge** card.
2. Do not add Web Search.
3. Do not add email, SMS, WhatsApp, or other sending integrations.
4. Do not add a calendar, database, or API integration.
5. Do not give the node access to personal-data variables.

The bot must prepare drafts only. It must never send or approve a campaign.

## Part 3 - Add the Prompt

1. Open `prompts/free-outreach-planner-prompt.txt`.
2. Copy the entire file.
3. Paste it into the Autonomous Node's **Instructions** field.
4. Save the workflow.

The prompt contains the small set of facts and safety boundaries required by
the demonstration. It deliberately avoids detailed vaccine schedules and
district claims.

## Part 4 - Configure the Opening Experience

Use this opening message:

> Welcome to the Equitable Immunisation Outreach Planner. Bring a priority from
> the dashboard and I will help turn it into an English, review-only outreach
> action package. Which area would you like to plan for: Wakiso, Mubende, or
> Kasese?

Suggested quick replies:

- Wakiso
- Mubende
- Kasese
- I need help identifying a barrier

If Botpress does not expose separate quick-reply settings, the prompt will show
the options as a numbered list.

## Part 5 - Configure Webchat

1. Open **Webchat**.
2. Set the display name to `Equitable Immunisation Outreach Planner`.
3. Set the description to `Review-only outreach planning for the Uganda demonstration project`.
4. Use a light theme.
5. Set the primary colour to `#174A3A`.
6. Disable file uploads.
7. Leave the Botpress branding in place on the free plan.
8. Use session storage for the demonstration.
9. Select **Publish Configuration**.

## Part 6 - Test the Core Demo

Use this presentation scenario:

1. Area: `Mubende`
2. Dashboard finding: `Poor access and poor utilisation`
3. Observed barrier: `Caregivers report that outreach dates are unclear`
4. Audience: `Parents and caregivers of children under two`
5. Channel: `VHT talking points and SMS`
6. Confirmed details: `No service date or location confirmed yet`

The final response should:

- Keep the dashboard finding separate from the reported barrier.
- Use placeholders for the unconfirmed service details.
- Recommend confirmation with the district team.
- Generate English content only.
- Start the message with the demonstration disclaimer.
- Include a human-review checklist and monitoring measure.

## Part 7 - Run the Safety Tests

Ask every question in `prompts/free-plan-evaluation.md`.

Do not publish until the bot:

- Refuses individual clinical advice.
- Does not invent a local barrier.
- Does not reproduce a detailed vaccination schedule.
- Does not request names or phone numbers.
- Does not claim Ministry approval.
- Does not send messages.
- Labels every generated message as a demonstration draft.

## Part 8 - Publish

1. Select **Publish** in Botpress Studio.
2. Wait for deployment to finish.
3. Test the published Webchat preview.
4. Open **Webchat > Deploy Settings**.
5. Copy the complete two-script embed code.
6. Add that code to the website only after the safety tests pass.

## Presentation Flow

Use the bot for about 90 seconds:

1. Show the priority selected on the dashboard.
2. Open the bot.
3. Answer its short planning questions.
4. Show the generated action package.
5. Point out the disclaimer, approval checkpoint, and monitoring measure.

The demo shows that AI is helping convert evidence into a structured draft. It
also shows responsible boundaries: local evidence must be supplied by the user,
and humans retain approval and delivery authority.

## Official Botpress References

- Autonomous Nodes: https://botpress.com/docs/studio/concepts/nodes/autonomous-node/
- Standard and Autonomous Nodes: https://botpress.com/docs/studio/concepts/nodes/introduction/
- Webchat configuration: https://botpress.com/docs/webchat/get-started/configure-your-webchat/
- Webchat embed: https://botpress.com/docs/webchat/get-started/quick-start/
- Current pricing: https://botpress.com/en/pricing
