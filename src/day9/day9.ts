export function findNumberWhichIsNotSumOfOthers(
  input: string,
  bufferSize: number,
): { index: number; value: number } {
  const inputNumbers = input.split('\n').map(s => Number(s));

  let currentIndex = bufferSize;
  let foundValue = true;

  while (foundValue && currentIndex < inputNumbers.length) {
    foundValue = false;
    const bufferedNumbers = inputNumbers.slice(currentIndex - bufferSize);
    for (let i = 0; i < bufferedNumbers.length; i++) {
      for (let j = i; j < bufferedNumbers.length; j++) {
        if (
          bufferedNumbers[i] + bufferedNumbers[j] ===
          inputNumbers[currentIndex]
        ) {
          foundValue = true;
          break;
        }
      }
      if (foundValue) {
        break;
      }
    }
    currentIndex++;
  }

  return { index: currentIndex - 1, value: inputNumbers[currentIndex - 1] };
}

export function findContinuousNumbersThatSumToInvalidNumber(
  input: string,
  bufferSize: number,
): number[] {
  const inputNumbers = input.split('\n').map(s => Number(s));

  const invalidNumberToFind = findNumberWhichIsNotSumOfOthers(
    input,
    bufferSize,
  );

  let result = [] as number[];
  let currentIndex = 0;
  while (currentIndex < invalidNumberToFind.index) {
    let sum = 0;
    let indexOffset = 0;
    while (
      sum < invalidNumberToFind.value &&
      currentIndex + indexOffset < invalidNumberToFind.index
    ) {
      sum += inputNumbers[currentIndex + indexOffset];
      indexOffset++;
    }

    if (sum === invalidNumberToFind.value) {
      result = inputNumbers.slice(currentIndex, currentIndex + indexOffset);
      break;
    }
    currentIndex++;
  }

  return result;
}

export function findSumOfMinMaxContinuousNbsThatSumToInvalidNumber(
  input: string,
  bufferSize: number,
): number {
  const values = findContinuousNumbersThatSumToInvalidNumber(input, bufferSize);

  return Math.max(...values) + Math.min(...values);
}
