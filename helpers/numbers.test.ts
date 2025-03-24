import { formatDecimalBalance } from "./numbers";

describe("formatDecimalBalance", () => {
  it("should format balance with no suffix", () => {
    expect(formatDecimalBalance(1234)).toBe("1’234.0");
    expect(formatDecimalBalance(0.001)).toBe("0.001");
  });

  it("should format balance with micro suffix only below 0.0001", () => {
    expect(formatDecimalBalance(0.0001)).toBe("0.0001");
    expect(formatDecimalBalance(0.0000999)).toBe("99.9µ");
    expect(formatDecimalBalance(0.000001)).toBe("1.0µ");
  });

  it("should format balance with nano suffix", () => {
    expect(formatDecimalBalance(0.000000001)).toBe("1.0n");
  });

  it("should format balance with pico suffix", () => {
    expect(formatDecimalBalance(0.000000000001)).toBe("1.0p");
  });

  it("should format large balance with G suffix", () => {
    expect(formatDecimalBalance(1e9)).toBe("1.0G");
  });

  it("should format large balance with M suffix", () => {
    expect(formatDecimalBalance(1e6)).toBe("1.0M");
  });

  it("should handle edge cases correctly", () => {
    expect(formatDecimalBalance(0)).toBe("0.0");
    expect(formatDecimalBalance(1)).toBe("1.0");
    expect(formatDecimalBalance(999)).toBe("999.0");
    expect(formatDecimalBalance(999999.999)).toBe("999’999.999");
  });

  it("should always leave 4 significant digits before rounding decimals", () => {
    expect(formatDecimalBalance(0.0123456789)).toBe("0.01235");
    expect(formatDecimalBalance(0.00123456789)).toBe("0.001235");
    expect(formatDecimalBalance(0.000123456789)).toBe("0.0001235");
    expect(formatDecimalBalance(0.00000123456789)).toBe("1.235µ");
    expect(formatDecimalBalance(0.000000123456789)).toBe("123.457n");
  });
});
