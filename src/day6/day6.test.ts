import { exampleInput, input } from './day6.input';
import {
  countNbOfQuestionAnyoneAnsweredYes,
  countNbOfQuestionEveryoneAnsweredYes,
} from './day6';

describe('Day 6', () => {
  describe('Part 1', () => {
    describe('countNbOfQuestionAnyoneAnsweredYes', () => {
      it('for the example', () => {
        expect(countNbOfQuestionAnyoneAnsweredYes(exampleInput)).toBe(11);
      });

      it('for the input', () => {
        expect(countNbOfQuestionAnyoneAnsweredYes(input)).toBe(6742);
      });
    });

    describe('countNbOfQuestionEveryoneAnsweredYes', () => {
      it('for the example', () => {
        expect(countNbOfQuestionEveryoneAnsweredYes(exampleInput)).toBe(6);
      });

      it('for the input', () => {
        expect(countNbOfQuestionEveryoneAnsweredYes(input)).toBe(3447);
      });
    });
  });
});
