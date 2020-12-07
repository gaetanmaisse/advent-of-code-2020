export function getNbOfBagColorThatCouldContainAShinyGoldBag(
  input: string,
): number {
  const rules = input.split('\n').map(simpleParseBagRule);

  let parent = ['shiny gold'];
  let accessor = [] as string[];

  while (parent.length > 0) {
    const parentOfShiny = rules
      .filter(rule => parent.some(parent => rule.canContains.includes(parent)))
      .map(rule => rule.color);

    accessor = accessor.concat(parentOfShiny);
    parent = parentOfShiny;
  }

  return new Set(accessor).size;
}

export function simpleParseBagRule(input: string) {
  const [color, rest] = input.split(' bags contain');

  if (/no other bags./.test(rest)) {
    return { color, canContains: [] };
  }

  const canContains = rest
    .split(',')
    .map(value => {
      return value.trim().split('bag')[0];
    })
    .map(value => {
      const [_, number, color] = /(\d*) (\w* \w*)/.exec(
        value,
      ) as RegExpExecArray; // ?
      return color;
    })
    .reduce((acc, current) => {
      return acc.concat([current]);
    }, [] as string[]);

  return { color, canContains };
}

export function getNbOfBagColorContainedInAShinyGoldBag(input: string): number {
  const rules = input.split('\n').map(complexParseBagRule);

  const endColors = rules
    .filter(rule => rule.canContains.length === 0)
    .map(rule => rule.color);

  let bags = ['shiny gold'];

  let total = 0;
  while (bags.some(bag => !endColors.includes(bag))) {
    bags = bags.reduce((acc, bag) => {
      total++;
      const nextBags = rules.find(rule => rule.color === bag)!.canContains;
      return acc.concat(nextBags);
    }, [] as string[]);
  }

  return bags.length + total - 1;
}

export function complexParseBagRule(input: string) {
  const [color, rest] = input.split(' bags contain');

  if (/no other bags./.test(rest)) {
    return { color, canContains: [] };
  }

  const canContains = rest
    .split(',')
    .map(value => {
      return value.trim().split('bag')[0];
    })
    .map(value => {
      const [_, number, color] = /(\d*) (\w* \w*)/.exec(
        value,
      ) as RegExpExecArray; // ?
      return new Array(Number(number)).fill(color);
    })
    .reduce((acc, current) => {
      return acc.concat(current);
    }, [] as string[]);

  return { color, canContains };
}
