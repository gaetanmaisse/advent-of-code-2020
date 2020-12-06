import {
  convertToSeatId,
  decodeColumn,
  decodeRow,
  findFreeSeats,
  findHighestSeatId,
} from './day5';
import { exampleInput, inputPart1 } from './day5.input';

describe('Day 5', () => {
  describe('Part 1', () => {
    describe('findHighestSeatId', () => {
      it('find highest seat ID for the example', () => {
        expect(findHighestSeatId(exampleInput)).toBe(820);
      });

      it('find highest seat ID for the input', () => {
        expect(findHighestSeatId(inputPart1)).toBe(822);
      });
    });

    describe('convertToSeatId', () => {
      it('find a seat ID with its code', () => {
        expect(convertToSeatId('BFFFBBFRRR')).toBe(567);
        expect(convertToSeatId('FFFBBBFRRR')).toBe(119);
        expect(convertToSeatId('BBFFBBFRLL')).toBe(820);
      });
    });

    describe('decodeRow', () => {
      it('should find row number', () => {
        expect(decodeRow('BFFFBBF')).toBe(70);
        expect(decodeRow('FFFBBBF')).toBe(14);
        expect(decodeRow('BBFFBBF')).toBe(102);
      });
    });

    describe('decodeColumn', () => {
      it('should find colum number', () => {
        expect(decodeColumn('RRR')).toBe(7);
        expect(decodeColumn('RRR')).toBe(7);
        expect(decodeColumn('RLL')).toBe(4);
      });
    });
  });

  describe('Part 2', () => {
    describe('findFreeSeats', () => {
      it('return the list of free seats', () => {
        expect(findFreeSeats(inputPart1)).toEqual([
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          705,
        ]);
      });
    });
  });
});
