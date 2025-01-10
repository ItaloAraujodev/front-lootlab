export function formatCurrency(value?: number): string {
  if (typeof value === "undefined") return "TBA";

  const units = ["", "K", "M", "B", "T"];
  let number = parseFloat(String(value));

  if (number === 0) return "";

  let unitIndex = 0;
  while (number >= 1000 && unitIndex < units.length - 1) {
    number /= 1000;
    unitIndex += 1;
  }

  const formattedNumber = Number.isInteger(number)
    ? number.toString()
    : number.toFixed(2).replace(".", ",");
  return `US$ ${formattedNumber}${units[unitIndex]}`;
}
