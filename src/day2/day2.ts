export function countValidPasswords(
  inputs: string[],
  passwordValidator: PasswordValidator,
): number {
  return inputs
    .map(input => {
      const extractedInfo = /(\d*)-(\d*) (\S): (\S*)/.exec(
        input,
      ) as RegExpExecArray;

      return {
        firstNumber: Number(extractedInfo[1]),
        secondNumber: Number(extractedInfo[2]),
        requiredChar: extractedInfo[3],
        password: extractedInfo[4],
      };
    })
    .filter(passwordValidator).length;
}

type PasswordValidator = (params: {
  firstNumber: number;
  secondNumber: number;
  requiredChar: string;
  password: string;
}) => boolean;

export const minMaxValidator: PasswordValidator = ({
  firstNumber,
  secondNumber,
  requiredChar,
  password,
}) => {
  const charCount = Array.from(password).filter(char => char === requiredChar)
    .length;

  return firstNumber <= charCount && charCount <= secondNumber;
};

export const positionValidator: PasswordValidator = ({
  firstNumber,
  secondNumber,
  requiredChar,
  password,
}) => {
  let matchingChar = 0;

  if (password.charAt(firstNumber - 1) === requiredChar) {
    matchingChar++;
  }
  if (password.charAt(secondNumber - 1) === requiredChar) {
    matchingChar++;
  }

  return matchingChar === 1;
};
