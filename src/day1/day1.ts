export function processExpenseReport(input: number[]): number {
  for (let i = 0; i < input.length; i++) {
    for (let j = i; j < input.length; j++) {
      if (input[i] + input[j] === 2020) {
        return input[i] * input[j]; // ?.
      }
    }
  }

  return 0;
}
