import { DistrictName } from "./data";

// ---------------------------------------------------------------------------
// Research & Analysis content.
//
// Everything in this file is an AI-assisted synthesis of the published sources
// registered in botpress/knowledge/* and evidence/README.md. It is NOT new
// primary research and must stay visibly labelled as such in the UI. Where a
// statement rests on a published report, a source URL travels with it.
// ---------------------------------------------------------------------------

export interface DistrictRationale {
  district: DistrictName;
  headline: string;
  subAreas: string[];
  detail: string;
  source: { label: string; url: string };
}

/**
 * Why the three districts were selected. Grounded in the Uganda Learning Hub
 * rapid assessment (Aug 2023 – Mar 2024), which chose Wakiso, Mubende, and
 * Kasese for their high burden of zero-dose children. Named sub-areas are
 * historical signals from the published report, not current conditions.
 */
export const districtRationale: DistrictRationale[] = [
  {
    district: "Wakiso",
    headline: "Peri-urban growth around Kampala with pockets of persistently high zero-dose numbers",
    subAreas: ["Namugongo Division", "Kyengera Town Council", "Nabweru", "Bweyogerere"],
    detail:
      "House-to-house registration during the rapid assessment recorded high zero-dose numbers in Kyengera Town Council, Nabweru, and Bweyogerere. Rapid peri-urban growth, mobility, and cross-boundary service use make first-dose access uneven.",
    source: {
      label: "Uganda Learning Hub rapid assessment",
      url: "https://zdlh.gavi.org/resources/report-rapid-assessment-zero-dose-situation-uganda",
    },
  },
  {
    district: "Mubende",
    headline: "Hard-to-reach, pastoralist, and underserved communities",
    subAreas: ["Hard-to-reach communities", "Pastoralist populations", "Underserved communities"],
    detail:
      "Published learning-hub work describes zero-dose children concentrated in pastoralist, hard-to-reach, and underserved communities in Mubende. Distance and mobility are recurring access barriers in this context.",
    source: {
      label: "Mubende pastoralist / hard-to-reach case study",
      url: "https://zdlh.gavi.org/resources/burden-zero-dose-children-pastoralist-hard-reach-and-underserved-communities-case-study",
    },
  },
  {
    district: "Kasese",
    headline: "Mountainous and lakeside terrain with historical zero-dose signals",
    subAreas: ["Bwera", "Isango", "Lake Katwe"],
    detail:
      "The rapid assessment reported persistently high zero-dose numbers in Bwera, Isango, and Lake Katwe. Terrain and distance to services shape both initial access and continuation through the primary series.",
    source: {
      label: "Uganda Learning Hub rapid assessment",
      url: "https://zdlh.gavi.org/resources/report-rapid-assessment-zero-dose-situation-uganda",
    },
  },
];

export const selectionSummary = {
  period: "August 2023 – March 2024",
  method:
    "The Uganda Learning Hub for Immunisation Equity assessed the zero-dose situation using DHIS2 data, RED/REC access and utilisation categories, zero-dose proportions, district-team engagement, and equity reference groups to identify high-risk communities.",
  caveat:
    "These are historical findings from a published report, not a live monitoring feed. They must not be presented as current conditions without newer validated data.",
  source: {
    label: "Uganda Learning Hub rapid assessment",
    url: "https://zdlh.gavi.org/resources/report-rapid-assessment-zero-dose-situation-uganda",
  },
};

// --- WHO Behavioural and Social Drivers (BeSD) analysis ---------------------

export interface BesdDomain {
  domain: string;
  examples: string;
  response: string;
}

export const besdDomains: BesdDomain[] = [
  {
    domain: "Thinking & Feeling",
    examples: "Confidence in vaccine benefits, safety concerns, perceived disease risk, and trust.",
    response: "Respectful factual messages and trusted interpersonal communication; refer clinical questions to a qualified health worker.",
  },
  {
    domain: "Social Processes",
    examples: "Family and community norms, health-worker recommendations, trusted leaders, and social support.",
    response: "Engage trusted community, religious, cultural, or local leaders and create space for questions.",
  },
  {
    domain: "Motivation",
    examples: "Intention, willingness, and readiness to vaccinate.",
    response: "Clear next steps — a confirmed date, place, and reminder that lowers the effort of acting.",
  },
  {
    domain: "Practical Issues",
    examples: "Distance, cost, service hours, availability, transport, reminders, and ease of access.",
    response: "Outreach, adjusted service hours, better service information, or a reminder and defaulter follow-up mechanism.",
  },
];

export const besdPrinciple =
  "Interventions should respond to the locally observed barrier. A general communication campaign is not automatically appropriate for an access or service-availability problem. These are planning categories, not automatic prescriptions — local teams must validate the barrier and approve the response.";

// --- Text analysis of the demonstration draft scripts -----------------------

export type FindingSeverity = "Outdated" | "Attribution" | "Review";

export interface ScriptFinding {
  claim: string;
  issue: string;
  severity: FindingSeverity;
  correction: string;
}

/**
 * Analysis of evidence/drafts/uganda-immunisation-vht-radio-scripts-en-lg.md
 * against the current Ministry of Health Routine Immunization Schedule
 * (dated 6 November 2025). Findings mirror the reconciliation items recorded in
 * evidence/README.md so the two cannot silently drift apart — see content.test.ts.
 */
export const scriptFindings: ScriptFinding[] = [
  {
    claim: "“Five visits before the first birthday” (at birth, 6, 10, 14 weeks, and 9 months).",
    issue:
      "The current schedule adds malaria vaccine contacts at 6, 7, 8, and 18 months, so “five visits” is not a complete description of the schedule.",
    severity: "Outdated",
    correction: "Direct caregivers to the current Ministry of Health schedule rather than fixing a visit count in the message.",
  },
  {
    claim: "“HPV vaccine — 2 doses, 6 months apart” for 10-year-old girls.",
    issue: "The current schedule shows a single HPV dose for 10-year-old girls; the two-dose statement is outdated.",
    severity: "Outdated",
    correction: "Use the current one-dose schedule, subject to source verification at time of use.",
  },
  {
    claim: "“This message is brought to you by the Ministry of Health.”",
    issue: "Official attribution cannot appear in generated demonstration materials without explicit approval.",
    severity: "Attribution",
    correction: "Replace with a demonstration disclaimer until formal approval is obtained.",
  },
  {
    claim: "Full Luganda translation of the VHT points and radio spots.",
    issue: "The Luganda draft is a working translation, not vetted by a qualified native speaker or communication authority.",
    severity: "Review",
    correction: "Route through UNEPI Advocacy / Risk Communication or a district Health Educator before any print or broadcast; the MVP generates English only.",
  },
];

export const textAnalysisSchedule = {
  label: "Uganda Routine Immunization Schedule (6 November 2025)",
  url: "https://health.go.ug/download/routine-immunization-schedule/",
};

// --- Uganda programme / strategy synthesis ----------------------------------

export const strategyPrinciples: string[] = [
  "Informative",
  "Timely",
  "Precise",
  "Comprehensible",
  "Age-specific",
  "Geographically targeted",
  "Appropriate to the intended audience and channel",
];

export const strategySynthesis =
  "Uganda's National Immunisation Strategy 2024–2028 prioritises reaching zero-dose, partially vaccinated, and missed communities through targeted outreach and timely, geographically targeted communication. It also calls for researching, pretesting, and approving immunisation messages before use — which is why every draft in this tool stops at human review.";

export const researchSources = [
  {
    title: "Uganda Learning Hub rapid assessment (zero-dose situation)",
    url: "https://zdlh.gavi.org/resources/report-rapid-assessment-zero-dose-situation-uganda",
  },
  {
    title: "Uganda Zero-Dose Landscape",
    url: "https://zdlh.gavi.org/country-profiles/uganda",
  },
  {
    title: "WHO Behavioural and Social Drivers of Vaccination guidance",
    url: "https://www.who.int/publications/i/item/9789240049680",
  },
  {
    title: "Uganda National Immunisation Strategy 2024–2028",
    url: "https://library.health.go.ug/index.php/communicable-disease/vaccination-and-immunisation-unepi/national-immunisation-strategy-nis-2024",
  },
  {
    title: "Uganda Routine Immunization Schedule",
    url: "https://health.go.ug/download/routine-immunization-schedule/",
  },
];
