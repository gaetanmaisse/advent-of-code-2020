import {
  applyInstruction,
  getAccumulatorValueBeforeInfiniteLoop,
  getAccumulatorValueForFixedCode,
  parseInstruction,
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

    describe('parseInstruction', () => {
      it('return the parsed instruction', () => {
        expect(parseInstruction('jmp +4')).toEqual({
          code: 'jmp',
          value: 4,
        });

        expect(parseInstruction('nop +0')).toEqual({
          code: 'nop',
          value: 0,
        });

        expect(parseInstruction('acc -1')).toEqual({
          code: 'acc',
          value: -1,
        });
      });
    });

    describe('applyInstruction', () => {
      it('apply jmp', () => {
        expect(
          applyInstruction(
            { currentPosition: 4, accumulator: 15 },
            { code: 'jmp', value: 2 },
          ),
        ).toEqual({ currentPosition: 6, accumulator: 15 });
        expect(
          applyInstruction(
            { currentPosition: 4, accumulator: 15 },
            { code: 'jmp', value: -3 },
          ),
        ).toEqual({ currentPosition: 1, accumulator: 15 });
      });

      it('apply acc', () => {
        expect(
          applyInstruction(
            { currentPosition: 4, accumulator: 15 },
            { code: 'acc', value: 2 },
          ),
        ).toEqual({ currentPosition: 5, accumulator: 17 });
        expect(
          applyInstruction(
            { currentPosition: 4, accumulator: 15 },
            { code: 'acc', value: -3 },
          ),
        ).toEqual({ currentPosition: 5, accumulator: 12 });
      });

      it('apply nop', () => {
        expect(
          applyInstruction(
            { currentPosition: 4, accumulator: 15 },
            { code: 'nop', value: 0 },
          ),
        ).toEqual({ currentPosition: 5, accumulator: 15 });
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
