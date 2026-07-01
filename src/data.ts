export type DistrictName = "Wakiso" | "Mubende" | "Kasese";
export type Category = 1 | 2 | 3 | 4;
export type CampaignStatus = "Draft" | "Under Review" | "Approved" | "Active" | "Completed";

export interface DistrictRecord {
  district: DistrictName;
  penta1: number;
  penta3: number;
  targetChildren: number;
  period: string;
  provenance: "Synthetic demonstration";
  historicalContext: string;
  contextSource: string;
}

export interface Barrier {
  id: string;
  label: string;
  domain: string;
  action: string;
}

export interface CampaignPackage {
  sms: string;
  radio: string;
  vhtPoints: string[];
  activityPlan: { day: string; action: string; owner: string }[];
  reviewItems: string[];
  measure: string;
}

export const ACCESS_THRESHOLD = 80;
export const UTILISATION_THRESHOLD = 10;

export const districtData: DistrictRecord[] = [
  {
    district: "Wakiso",
    penta1: 88,
    penta3: 77,
    targetChildren: 12400,
    period: "2025 demonstration period",
    provenance: "Synthetic demonstration",
    historicalContext:
      "The 2023-2024 rapid assessment reported historical zero-dose signals in Kyengera, Nabweru and Bweyogerere.",
    contextSource:
      "https://zdlh.gavi.org/resources/report-rapid-assessment-zero-dose-situation-uganda",
  },
  {
    district: "Mubende",
    penta1: 68,
    penta3: 54,
    targetChildren: 6800,
    period: "2025 demonstration period",
    provenance: "Synthetic demonstration",
    historicalContext:
      "Published learning-hub work describes hard-to-reach and underserved communities in Mubende; the displayed coverage values are not published estimates.",
    contextSource:
      "https://zdlh.gavi.org/resources/burden-zero-dose-children-pastoralist-hard-reach-and-underserved-communities-case-study",
  },
  {
    district: "Kasese",
    penta1: 76,
    penta3: 72,
    targetChildren: 8900,
    period: "2025 demonstration period",
    provenance: "Synthetic demonstration",
    historicalContext:
      "The 2023-2024 rapid assessment reported historical zero-dose signals in Bwera, Isango and Lake Katwe.",
    contextSource:
      "https://zdlh.gavi.org/resources/report-rapid-assessment-zero-dose-situation-uganda",
  },
];

export const barriers: Barrier[] = [
  {
    id: "access",
    label: "Distance, timing or unclear service location",
    domain: "Practical issues",
    action: "Confirm service details and pair communication with an access or outreach response.",
  },
  {
    id: "reminder",
    label: "Missed reminder or weak follow-up",
    domain: "Practical issues",
    action: "Use a reminder sequence and structured VHT follow-up.",
  },
  {
    id: "information",
    label: "Information gap or safety concern",
    domain: "Thinking and feeling",
    action: "Use respectful factual messages and refer clinical questions to qualified health workers.",
  },
  {
    id: "social",
    label: "Limited family, community or leader support",
    domain: "Social processes",
    action: "Engage trusted, locally approved leaders and create space for questions.",
  },
  {
    id: "experience",
    label: "Negative service experience",
    domain: "Practical issues",
    action: "Combine caregiver communication with a service-quality action for programme teams.",
  },
];

export const sources = [
  {
    title: "Uganda National Immunisation Strategy 2024-2028",
    organisation: "Uganda Ministry of Health",
    url: "https://library.health.go.ug/index.php/communicable-disease/vaccination-and-immunisation-unepi/national-immunisation-strategy-nis-2024",
  },
  {
    title: "Routine Immunisation Schedule",
    organisation: "Uganda Ministry of Health",
    url: "https://health.go.ug/download/routine-immunization-schedule/",
  },
  {
    title: "Rapid Assessment of the Zero-Dose Situation in Uganda",
    organisation: "Uganda Learning Hub for Immunisation Equity",
    url: "https://zdlh.gavi.org/resources/report-rapid-assessment-zero-dose-situation-uganda",
  },
  {
    title: "Behavioural and Social Drivers of Vaccination",
    organisation: "World Health Organization",
    url: "https://www.who.int/publications/i/item/9789240049680",
  },
];

export function dropoutRate(penta1: number, penta3: number): number | null {
  if (!Number.isFinite(penta1) || !Number.isFinite(penta3) || penta1 <= 0) return null;
  return ((penta1 - penta3) / penta1) * 100;
}

export function categoryFor(penta1: number, penta3: number): Category | null {
  const dropout = dropoutRate(penta1, penta3);
  if (dropout === null) return null;
  const accessGood = penta1 >= ACCESS_THRESHOLD;
  const utilisationGood = dropout < UTILISATION_THRESHOLD;
  if (accessGood && utilisationGood) return 1;
  if (accessGood && !utilisationGood) return 2;
  if (!accessGood && utilisationGood) return 3;
  return 4;
}

export function categoryLabel(category: Category): string {
  return {
    1: "Good access / good utilisation",
    2: "Good access / poor utilisation",
    3: "Poor access / good utilisation",
    4: "Poor access / poor utilisation",
  }[category];
}

export function estimatedZeroDose(record: DistrictRecord): number {
  return Math.round(record.targetChildren * (1 - record.penta1 / 100));
}

export function dataWarnings(record: DistrictRecord): string[] {
  const warnings: string[] = [];
  if (record.penta1 > 100 || record.penta3 > 100) warnings.push("Coverage above 100% requires denominator review.");
  if (record.penta3 > record.penta1) warnings.push("Penta3 exceeds Penta1; investigate reporting quality.");
  if (record.penta1 <= 0) warnings.push("Penta1 is unavailable; dropout cannot be calculated.");
  return warnings;
}

export function buildCampaign(
  record: DistrictRecord,
  barrier: Barrier,
  audience: string,
  date: string,
  location: string,
  contact: string,
): CampaignPackage {
  const safeDate = date.trim() || "[DATE]";
  const safeLocation = location.trim() || "[LOCATION]";
  const safeContact = contact.trim() || "[APPROVED LOCAL CONTACT]";
  const group = audience.trim() || "parents and caregivers";
  const disclaimer = "DEMONSTRATION DRAFT - NOT APPROVED FOR PUBLICATION OR BROADCAST";

  return {
    sms: `${disclaimer}\n${group}: routine immunisation helps protect children from serious diseases. The next confirmed service is at ${safeLocation} on ${safeDate}. Bring the child's immunisation card. Questions: ${safeContact}.`,
    radio: `${disclaimer}\nParents and caregivers in ${record.district}, routine immunisation helps protect children from vaccine-preventable diseases. Please bring each child's immunisation card to ${safeLocation} on ${safeDate}. If a visit was missed, speak with a qualified health worker about catch-up vaccination. For confirmed information, contact ${safeContact}.`,
    vhtPoints: [
      `State the confirmed service date and location: ${safeDate}, ${safeLocation}.`,
      "Ask whether the caregiver has the child's immunisation card.",
      "Listen to the caregiver's concern without judgement.",
      barrier.action,
      "Refer schedule, eligibility and safety questions to a qualified health worker.",
    ],
    activityPlan: [
      { day: "Day 1", action: "Validate the barrier and service details", owner: "District EPI team" },
      { day: "Day 2", action: "Review and approve draft content", owner: "EPI + communications" },
      { day: "Day 3", action: "Brief VHTs and local partners", owner: "Sub-district lead" },
      { day: "Days 4-5", action: "Run selected outreach activities", owner: "VHT team" },
      { day: "Day 6", action: "Follow up missed or unclear referrals", owner: "VHT team" },
      { day: "Day 7", action: "Review reach and service attendance", owner: "District EPI team" },
    ],
    reviewItems: [
      "Confirm the observed barrier with local programme evidence.",
      "Verify service dates, locations and contact details.",
      "Review English content and any translation through authorised channels.",
      "Record programme and communication approval before distribution.",
    ],
    measure: `Track aggregate ${barrier.id === "reminder" ? "reminders delivered and completed VHT follow-ups" : "people reached and attendance at the confirmed service"}.`,
  };
}
