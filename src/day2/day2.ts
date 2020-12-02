export function countValidPasswordsWithMinMaxConstraint(
  inputs: string[],
): number {
  return inputs
    .map(input => {
      const extractedInfo = /(\d*)-(\d*) (\S): (\S*)/.exec(
        input,
      ) as RegExpExecArray;

      return {
        min: Number(extractedInfo[1]),
        max: Number(extractedInfo[2]),
        requiredChar: extractedInfo[3],
        password: extractedInfo[4],
      };
    })
    .filter(({ min, max, requiredChar, password }) => {
      const charCount = Array.from(password).filter(
        char => char === requiredChar,
      ).length;

      return min <= charCount && charCount <= max;
    }).length;
}
