import { exampleInput, inputPart1 } from './day4.input';
import { getNbOfValidPassport } from './day4';

describe('Day 4', () => {
  describe('Part 1', () => {
    describe('return the number of valid passport', () => {
      it('for the example', () => {
        expect(getNbOfValidPassport(exampleInput)).toBe(2);
      });

      it('for input data', () => {
        expect(getNbOfValidPassport(inputPart1)).toBe(200);
      });
    });
  });
});
