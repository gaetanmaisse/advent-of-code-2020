import { processExpenseReport } from './day1';
import { input } from './day1.input';

describe('Day1', () => {
  describe('finds the two entries that sum to 2020 and then multiply those two numbers together', () => {
    it('for the example', () => {
      const exampleInput = [1721, 979, 366, 299, 675, 1456];
      const exampleResult = 514579;

      expect(processExpenseReport(exampleInput)).toBe(exampleResult);
    });

    it('for the official input', () => {
      expect(processExpenseReport(input)).toBe(299299);
    });
  });
});
