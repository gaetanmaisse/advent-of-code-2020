import {
  exampleInput,
  examplePart2Invalid,
  examplePart2Valid,
  inputPart,
} from './day4.input';
import {
  complexPasswordValidator,
  getNbOfValidPassport,
  simplePasswordValidator,
  validateDate,
  validateEyeColor,
  validateHairColor,
  validateHeight,
  validatePasswordId,
} from './day4';

describe('Day 4', () => {
  describe('Part 1', () => {
    describe('return the number of valid passport', () => {
      it('for the example', () => {
        expect(
          getNbOfValidPassport(exampleInput, simplePasswordValidator),
        ).toBe(2);
      });

      it('for input data', () => {
        expect(getNbOfValidPassport(inputPart, simplePasswordValidator)).toBe(
          200,
        );
      });
    });
  });

  describe('Part 2', () => {
    describe('return the number of valid passport', () => {
      it('for the example', () => {
        expect(
          getNbOfValidPassport(examplePart2Invalid, complexPasswordValidator),
        ).toBe(0);

        expect(
          getNbOfValidPassport(examplePart2Valid, complexPasswordValidator),
        ).toBe(4);
      });

      it('for input data', () => {
        expect(getNbOfValidPassport(inputPart, complexPasswordValidator)).toBe(
          116,
        );
      });
    });

    describe('validateDate', () => {
      it('should validate date format', () => {
        expect(validateDate('12', '2000', '2030')).toBeFalsy();
      });

      it('should validate date range', () => {
        expect(validateDate('2010', '2000', '2030')).toBeTruthy();
        expect(validateDate('1920', '2000', '2030')).toBeFalsy();
        expect(validateDate('2050', '2000', '2030')).toBeFalsy();
      });
    });

    describe('validateHairColor', () => {
      it('should validate format', () => {
        expect(validateHairColor('#aabb88')).toBeTruthy();
        expect(validateHairColor('#aa66zz')).toBeFalsy();
        expect(validateHairColor('aabb88')).toBeFalsy();
      });
    });

    describe('validateEyeColor', () => {
      it('should validate data', () => {
        expect(validateEyeColor('amb')).toBeTruthy();
        expect(validateEyeColor('toto')).toBeFalsy();
      });
    });

    describe('validatePasswordId', () => {
      it('should validate format', () => {
        expect(validatePasswordId('000000001')).toBeTruthy();
        expect(validatePasswordId('0123456789')).toBeFalsy();
      });
    });

    describe('validateHeight', () => {
      it('should validate format with cm', () => {
        expect(validateHeight('151cm')).toBeTruthy();
        expect(validateHeight('150cm')).toBeTruthy();
        expect(validateHeight('194cm')).toBeFalsy();
        expect(validateHeight('102cm')).toBeFalsy();
      });

      it('should validate format with in', () => {
        expect(validateHeight('60in')).toBeTruthy();
        expect(validateHeight('59in')).toBeTruthy();
        expect(validateHeight('80in')).toBeFalsy();
        expect(validateHeight('25in')).toBeFalsy();
      });
    });
  });
});
