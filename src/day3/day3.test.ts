import { exampleInput, inputPart1 } from './day3.input';
import { getNbOfTreesOnTobogganPath } from './day3';

describe('Day3', () => {
  describe('Part 1', () => {
    describe('return the number of trees on toboggan path', () => {
      it('for the example', () => {
        expect(getNbOfTreesOnTobogganPath(exampleInput, 3, 1)).toBe(7);
      });

      it('for input data', () => {
        expect(getNbOfTreesOnTobogganPath(inputPart1, 3, 1)).toBe(292);
      });
    });
  });

  describe('Part 2', () => {
    describe('return the number of trees on toboggan path', () => {
      it('for the example', () => {
        const path1 = getNbOfTreesOnTobogganPath(exampleInput, 1, 1);
        expect(path1).toBe(2);

        const path2 = getNbOfTreesOnTobogganPath(exampleInput, 3, 1);
        expect(path2).toBe(7);

        const path3 = getNbOfTreesOnTobogganPath(exampleInput, 5, 1);
        expect(path3).toBe(3);

        const path4 = getNbOfTreesOnTobogganPath(exampleInput, 7, 1);
        expect(path4).toBe(4);

        const path5 = getNbOfTreesOnTobogganPath(exampleInput, 1, 2);
        expect(path5).toBe(2);

        expect(path1 * path2 * path3 * path4 * path5).toBe(336);
      });

      it('for input data', () => {
        const path1 = getNbOfTreesOnTobogganPath(inputPart1, 1, 1);
        const path2 = getNbOfTreesOnTobogganPath(inputPart1, 3, 1);
        const path3 = getNbOfTreesOnTobogganPath(inputPart1, 5, 1);
        const path4 = getNbOfTreesOnTobogganPath(inputPart1, 7, 1);

        const path5 = getNbOfTreesOnTobogganPath(inputPart1, 1, 2);

        expect(path1 * path2 * path3 * path4 * path5).toBe(9354744432);
      });
    });
  });
});
