import { exampleInput, inputPart1 } from './day4.input';
import { getNbOfValidPassport, simplePasswordValidator } from './day4';

describe('Day 4', () => {
  describe('Part 1', () => {
    describe('return the number of valid passport', () => {
      it('for the example', () => {
        expect(
          getNbOfValidPassport(exampleInput, simplePasswordValidator),
        ).toBe(2);
      });

      it('for input data', () => {
        expect(getNbOfValidPassport(inputPart1, simplePasswordValidator)).toBe(
          200,
        );
      });
    });
  });
});
