import {
  processExpenseReportWith2Numbers,
  processExpenseReportWith3Numbers,
} from './day1';
import { input } from './day1.input';

describe('Day1', () => {
  describe('processExpenseReportWith2Numbers', () => {
    describe('finds the 2 entries that sum to 2020 and then multiply those two numbers together', () => {
      it('for the example', () => {
        const exampleInput = [1721, 979, 366, 299, 675, 1456];
        const exampleResult = 514579;

        expect(processExpenseReportWith2Numbers(exampleInput)).toBe(
          exampleResult,
        );
      });

      it('for the official input', () => {
        expect(processExpenseReportWith2Numbers(input)).toBe(299299);
      });
    });
  });

  describe('finds the 3 entries that sum to 2020 and then multiply those two numbers together', () => {
    it('for the example', () => {
      const exampleInput = [1721, 979, 366, 299, 675, 1456];
      const exampleResult = 241861950;

      expect(processExpenseReportWith3Numbers(exampleInput)).toBe(
        exampleResult,
      );
    });

    it('for the official input', () => {
      expect(processExpenseReportWith3Numbers(input)).toBe(287730716); // ?.
    });
  });
});
