const TREE = '#';

export function getNbOfTreesOnTobogganPath(input: string): number {
  const rows = input.split('\n');
  const mapHeight = rows.length;

  const cells = rows.map(row => Array.from(row));
  const mapWidth = cells[0].length;

  const position = { x: 0, y: 0 };

  let nbOfTree = 0;

  while (position.y < mapHeight) {
    if (cells[position.y][position.x] === TREE) {
      nbOfTree++;
    }

    position.y += 1;
    position.x = (position.x + 3) % mapWidth;
  }

  return nbOfTree;
}
