import { describe, expect, it } from "vitest";
import { categoryFor, dropoutRate } from "./data";

describe("immunisation monitoring calculations", () => {
  it("calculates first-to-third-dose dropout", () => {
    expect(dropoutRate(80, 72)).toBeCloseTo(10);
  });

  it("does not calculate dropout without a valid first dose", () => {
    expect(dropoutRate(0, 0)).toBeNull();
  });

  it("classifies all RED/REC access and utilisation combinations", () => {
    expect(categoryFor(90, 84)).toBe(1);
    expect(categoryFor(90, 75)).toBe(2);
    expect(categoryFor(70, 66)).toBe(3);
    expect(categoryFor(70, 55)).toBe(4);
  });
});
