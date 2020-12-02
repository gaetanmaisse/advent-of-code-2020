import {
  countValidPasswords,
  minMaxValidator,
  positionValidator,
} from './day2';
import { input } from './day2.input';

describe('Day2', () => {
  describe('Part 1', () => {
    describe('return the number of valid passwords according to the min-max constraints', () => {
      it('for the example', () => {
        const exampleInput = [
          '1-3 a: abcde',
          '1-3 b: cdefg',
          '2-9 c: ccccccccc',
          '16-18 h: hhhhhhhhhhhdsdshhhhhhh',
          '17-18 d: ddddddddddddddddzn',
        ];

        expect(countValidPasswords(exampleInput, minMaxValidator)).toBe(3);
      });

      it('for the real input', () => {
        expect(countValidPasswords(input, minMaxValidator)).toBe(465);
      });
    });
  });

  describe('Part 2', () => {
    describe('return the number of valid passwords according to the position constraints', () => {
      it('for the example', () => {
        const exampleInput = [
          '1-3 a: abcde',
          '1-3 b: cdefg',
          '2-9 c: ccccccccc',
          '16-18 h: hhhhhhhhhhhdsdshhhhhhh',
          '17-18 d: dddddddddddddddddzn',
        ];

        expect(countValidPasswords(exampleInput, positionValidator)).toBe(2);
      });

      it('for the real input', () => {
        expect(countValidPasswords(input, positionValidator)).toBe(294);
      });
    });
  });
});
