import {
  getAccumulatorValueBeforeInfiniteLoop,
  getAccumulatorValueForFixedCode,
} from './day8';
import { exampleInput, input } from './day8.input';

describe('Day 8', () => {
  describe('Part 1', () => {
    describe('getAccumulatorValueBeforeInfiniteLoop', () => {
      it('for the example', () => {
        expect(
          getAccumulatorValueBeforeInfiniteLoop(exampleInput).accumulator,
        ).toBe(5);
      });

      it('for the input', () => {
        expect(getAccumulatorValueBeforeInfiniteLoop(input).accumulator).toBe(
          1137,
        );
      });
    });
  });

  describe('Part2', () => {
    describe('getAccumulatorValueForFixedCode', () => {
      it('for the example', () => {
        expect(getAccumulatorValueForFixedCode(exampleInput).accumulator).toBe(
          8,
        );
      });

      it('for the input', () => {
        expect(getAccumulatorValueForFixedCode(input).accumulator).toBe(1125);
      });
    });
  });
});
