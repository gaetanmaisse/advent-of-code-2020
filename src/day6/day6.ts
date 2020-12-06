export function countNbOfQuestionAnyoneAnsweredYes(input: string): number {
  return input
    .split('\n\n')
    .map(answer => answer.replace(/\n/g, ''))
    .map(answer => new Set(answer))
    .map(answer => answer.size)
    .reduce((acc, curr) => acc + curr, 0); // ?
}
