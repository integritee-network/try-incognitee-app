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
    { value: 1e3, suffix: "k" },
    { value: 1e-3, suffix: "m" },
    { value: 1e-6, suffix: "µ" },
    { value: 1e-9, suffix: "n" },
    { value: 1e-12, suffix: "p" },
    { value: 1, suffix: "" },
  ];

  const magnitude =
    magnitudes.find((m) => balance < m.value * 1000 && balance >= m.value) ||
    magnitudes[magnitudes.length - 1];
  const adjustedBalance = balance / magnitude.value;

  return (
    adjustedBalance.toLocaleString("de-CH", {
      minimumFractionDigits: 1,
      maximumFractionDigits: 3,
      thousandsSeparator: "'",
    }) + magnitude.suffix
  );
};

export const formatBigDecimalBalance = (balance: number): string => {
  return balance.toLocaleString("de-CH", {
    maximumFractionDigits: 0,
    thousandsSeparator: "'",
  });
};
