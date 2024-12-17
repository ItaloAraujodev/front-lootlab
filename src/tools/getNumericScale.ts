export function getNumericScale(value: number): string {
  if (value >= 1_000_000_000_000) return "T";
  if (value >= 1_000_000_000) return "B";
  if (value >= 1_000_000) return "M";
  if (value >= 1_000) return "K";
  return "";
}
