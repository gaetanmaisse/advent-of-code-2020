import {
  getNbOfBagColorThatCouldContainAShinyGoldBag,
  simpleParseBagRule,
} from './day7';
import { exampleInput, input } from './day7.input';

describe('Day 7', () => {
  describe('Part 1', () => {
    describe('getNbOfBagColorThatCouldContainAShinyGoldBag', () => {
      it('for the example', () => {
        expect(getNbOfBagColorThatCouldContainAShinyGoldBag(exampleInput)).toBe(
          4,
        );
      });

      it('for the input', () => {
        expect(getNbOfBagColorThatCouldContainAShinyGoldBag(input)).toBe(131);
      });
    });

    describe('simpleParseBagRule', () => {
      it('parse the input string and return a proper object', () => {
        expect(
          simpleParseBagRule(
            'light red bags contain 1 bright white bag, 2 muted yellow bags.',
          ),
        ).toEqual({
          color: 'light red',
          canContains: ['bright white', 'muted yellow'],
        });

        expect(
          simpleParseBagRule('bright white bags contain 1 shiny gold bag.'),
        ).toEqual({
          color: 'bright white',
          canContains: ['shiny gold'],
        });

        expect(
          simpleParseBagRule(
            'vibrant plum bags contain 5 faded blue bags, 6 dotted black bags, 1 shiny gold bag.',
          ),
        ).toEqual({
          color: 'vibrant plum',
          canContains: ['faded blue', 'dotted black', 'shiny gold'],
        });

        expect(
          simpleParseBagRule('faded blue bags contain no other bags.'),
        ).toEqual({
          color: 'faded blue',
          canContains: [],
        });
      });
    });
  });
});
