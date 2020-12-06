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
      return groupAnswers
        .map(groupAnswer => Array.from(groupAnswer))
        .reduce((acc, groupAnswer) => {
          groupAnswer.forEach(char => {
            acc[char] = (acc[char] ?? groupAnswers.length) - 1;
          });
          return acc;
        }, {} as Record<string, number>);
    })
    .map(charMapping => {
      return Object.values(charMapping).filter(value => value === 0);
    })
    .map(answer => answer.length)
    .reduce((acc, curr) => acc + curr, 0); // ?
}
