const TREE = '#';

export function getNbOfTreesOnTobogganPath(
  input: string,
  xMov: number,
  yMov: number,
): number {
  const rows = input.split('\n');
  const mapHeight = rows.length;

  const cells = rows.map(row => Array.from(row));
  const mapWidth = cells[0].length;

  const position = new PositionManager(xMov, yMov, mapWidth);

  let nbOfTree = 0;

  while (position.y < mapHeight) {
    if (cells[position.y][position.x] === TREE) {
      nbOfTree++;
    }

    position.move();
  }

  return nbOfTree;
}

export class PositionManager {
  public x = 0;
  public y = 0;
  constructor(
    private readonly xMov: number,
    private readonly yMov: number,
    private readonly mapWidth: number,
  ) {}

  public move(): void {
    this.x = (this.x + this.xMov) % this.mapWidth;
    this.y += this.yMov;
  }
}
