export function countNbOfQuestionAnyoneAnsweredYes(input: string): number {
  return input
    .split('\n\n')
    .map(answer => answer.replace(/\n/g, ''))
    .map(answer => new Set(answer))
    .map(answer => answer.size)
    .reduce((acc, curr) => acc + curr, 0); // ?
}

export function countNbOfQuestionEveryoneAnsweredYes(input: string): number {
  return input
    .split('\n\n')
    .map(answer => answer.split('\n'))
    .map(groupAnswers => {
      const charMapping = {} as Record<string, number>;
      groupAnswers
        .map(groupAnswer => {
          return Array.from(groupAnswer);
        })
        .forEach(groupAnswer => {
          groupAnswer.forEach(char => {
            charMapping[char] = (charMapping[char] ?? 0) + 1;
          });
        });

      return Object.values(charMapping).filter(
        value => value === groupAnswers.length,
      ).length;
    })
    .reduce((acc, curr) => acc + curr, 0); // ?
}
