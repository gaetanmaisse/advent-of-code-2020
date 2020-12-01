export function processExpenseReportWith2Numbers(input: number[]): number {
  for (let i = 0; i < input.length; i++) {
    for (let j = i; j < input.length; j++) {
      if (input[i] + input[j] === 2020) {
        return input[i] * input[j];
      }
    }
  }

  return 0;
}

export function processExpenseReportWith3Numbers(input: number[]): number {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      for (let k = j + 1; k < input.length; k++) {
        if (input[i] + input[j] + input[k] === 2020) {
          return input[i] * input[j] * input[k];
        }
      }
    }
  }

  return 0;
}
