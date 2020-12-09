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
