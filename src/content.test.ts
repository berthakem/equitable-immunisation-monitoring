import { describe, expect, it } from "vitest";
import { districtRationale, scriptFindings } from "./content";

describe("research content integrity", () => {
  it("covers all three priority districts with a cited source", () => {
    const districts = districtRationale.map((item) => item.district).sort();
    expect(districts).toEqual(["Kasese", "Mubende", "Wakiso"]);
    for (const item of districtRationale) {
      expect(item.source.url).toMatch(/^https?:\/\//);
      expect(item.subAreas.length).toBeGreaterThan(0);
    }
  });

  it("keeps the text-analysis findings aligned with the evidence reconciliation items", () => {
    const blob = scriptFindings.map((finding) => `${finding.claim} ${finding.issue}`).join(" ").toLowerCase();
    // The reconciliation items recorded in evidence/README.md must all surface here.
    expect(blob).toContain("malaria");
    expect(blob).toContain("hpv");
    expect(blob).toContain("ministry of health");
    expect(blob).toContain("luganda");
  });
});
