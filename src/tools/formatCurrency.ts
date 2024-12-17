import { getNumericScale } from "./getNumericScale";

export function formatCurrency(value: number): string {
  const numericScale = getNumericScale(value);
  return `US $${value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} ${numericScale}`;
}
