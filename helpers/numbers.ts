export const divideBigIntToFloat = (
  dividend: BigInt,
  divisor: number,
): number => {
  const integerPart = Number(dividend / BigInt(divisor));
  const fractionalPart = Number(dividend % BigInt(divisor)) / divisor;
  return integerPart + fractionalPart;
};

export const formatDecimalBalance = (balance: number): string => {
  const magnitudes = [
    { value: 1e9, suffix: "G" },
    { value: 1e6, suffix: "M" },
    //{ value: 1e3, suffix: "k" },
    //{ value: 1e-3, suffix: "m" },
    { value: 1e-6, threshold: 1e-4, suffix: "µ" },
    { value: 1e-9, suffix: "n" },
    { value: 1e-12, suffix: "p" },
    { value: 1, suffix: "" },
  ];

  const magnitude =
    magnitudes.find(
      (m) =>
        balance < (m.threshold ? m.threshold : m.value * 1000) &&
        balance >= m.value,
    ) || magnitudes[magnitudes.length - 1];
  const adjustedBalance = balance / magnitude.value;
  const maxFractionDigits = Math.min(
    7,
    Math.ceil(Math.max(3, 3 + Math.max(0, -Math.log10(adjustedBalance)))),
  );
  return (
    adjustedBalance.toLocaleString("de-CH", {
      minimumFractionDigits: 1,
      maximumFractionDigits: maxFractionDigits,
      thousandsSeparator: "’",
    }) + magnitude.suffix
  );
};

export const formatBigDecimalBalance = (balance: number): string => {
  return balance.toLocaleString("de-CH", {
    maximumFractionDigits: 0,
    thousandsSeparator: "’",
  });
};
