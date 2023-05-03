function kgToGram(weight: string | number): string | number | undefined {
  if (typeof weight === "string") {
    const result = parseFloat(weight) * 1000;
    return `Weight is ${result} gram`;
  }
  if (typeof weight === "number") {
    const result = weight * 1000;
    return `Weight is ${result} gram`;
  }
}

const resultNumber = kgToGram(35) as number; // type assertion handle
const resultString = kgToGram("25");

console.log({
  resultNumber,
  resultString,
});
