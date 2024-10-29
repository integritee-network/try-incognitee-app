export const divideBigIntToFloat = (
  dividend: BigInt,
  divisor: number,
): number => {
  const integerPart = Number(dividend / BigInt(divisor));
  const fractionalPart = Number(dividend % BigInt(divisor)) / divisor;
  return integerPart + fractionalPart;
};

export const formatDecimalBalance = (balance: number): string => {
  return balance.toLocaleString("de-CH", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 3,
    thousandsSeparator: "'",
  });
};

export const formatBigDecimalBalance = (balance: number): string => {
  return balance.toLocaleString("de-CH", {
    maximumFractionDigits: 0,
    thousandsSeparator: "'",
  });
};
