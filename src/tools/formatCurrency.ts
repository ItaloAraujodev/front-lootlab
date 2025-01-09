import { getNumericScale } from "./getNumericScale";

export function formatCurrency(value: number): string {
  const numericScale = getNumericScale(value);
  return `US $${Math.floor(Number(String(value).slice(0, 6))).toLocaleString(
    "en-US",
    {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    },
  )} ${numericScale}`;
}
