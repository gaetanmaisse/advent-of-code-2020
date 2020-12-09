import { exampleInput, input } from './day9.input';
import { findNumberWhichIsNotSumOfOthers } from './day9';

describe('Day 9', () => {
  describe('Part 1', () => {
    describe('findNumberWhichIsNotSumOfOthers', () => {
      it('for the example', () => {
        const bufferSize = 5;
        expect(
          findNumberWhichIsNotSumOfOthers(exampleInput, bufferSize).value,
        ).toBe(127);
      });

      it('for the input', () => {
        const bufferSize = 25;
        expect(findNumberWhichIsNotSumOfOthers(input, bufferSize).value).toBe(
          1930745883,
        );
      });
    });
  });
});
