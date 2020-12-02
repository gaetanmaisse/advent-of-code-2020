import { countValidPasswordsWithMinMaxConstraint } from './day2';
import { input } from './day2.input';

describe('Day2', () => {
  describe('countValidPasswordsWithMinMaxConstraint', () => {
    describe('return the number of valid passwords according to the min-max constraints', () => {
      it('for the example', () => {
        const exampleInput = [
          '1-3 a: abcde',
          '1-3 b: cdefg',
          '2-9 c: ccccccccc',
          '16-18 h: hhhhhhhhhhhdsdshhhhhhh',
          '17-18 d: ddddddddddddddddzn',
        ];

        expect(countValidPasswordsWithMinMaxConstraint(exampleInput)).toBe(3);
      });

      it('for the real input', () => {
        expect(countValidPasswordsWithMinMaxConstraint(input)).toBe(465);
      });
    });
  });
});
