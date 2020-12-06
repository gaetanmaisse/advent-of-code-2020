import { exampleInput, input } from './day6.input';
import { countNbOfQuestionAnyoneAnsweredYes } from './day6';

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
  });
});
