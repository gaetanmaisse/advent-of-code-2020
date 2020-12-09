import { exampleInput, input } from './day9.input';
import {
  findContinuousNumbersThatSumToInvalidNumber,
  findNumberWhichIsNotSumOfOthers,
  findSumOfMinMaxContinuousNbsThatSumToInvalidNumber,
} from './day9';

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

  describe('Part 2', () => {
    describe('findContinuousNumbersThatSumToInvalidNumber', () => {
      it('for the example', () => {
        const bufferSize = 5;
        expect(
          findContinuousNumbersThatSumToInvalidNumber(exampleInput, bufferSize),
        ).toEqual([15, 25, 47, 40]);
      });
    });

    describe('findSumOfMinMaxContinuousNbsThatSumToInvalidNumber', () => {
      it('for the example', () => {
        const bufferSize = 5;
        expect(
          findSumOfMinMaxContinuousNbsThatSumToInvalidNumber(
            exampleInput,
            bufferSize,
          ),
        ).toEqual(62);
      });

      it('for the input', () => {
        const bufferSize = 25;
        expect(
          findSumOfMinMaxContinuousNbsThatSumToInvalidNumber(input, bufferSize),
        ).toEqual(268878261);
      });
    });
  });
});
