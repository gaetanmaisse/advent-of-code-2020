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
