import { exampleInput, inputPart1 } from './day3.input';
import { getNbOfTreesOnTobogganPath } from './day3';

describe('Day3', () => {
  describe('Part 1', () => {
    describe('return the number of trees on toboggan path', () => {
      it('for the example', () => {
        expect(getNbOfTreesOnTobogganPath(exampleInput)).toBe(7);
      });

      it('for input data', () => {
        expect(getNbOfTreesOnTobogganPath(inputPart1)).toBe(292);
      });
    });
  });
});
