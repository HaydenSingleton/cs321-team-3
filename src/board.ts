// @filename: board.ts
import Tile from "./tile";

const exampleBoard: Tile[][] = [
  [
    Tile.fromList([false, 1, 3, "death_touch"]),
    Tile.fromList([false, 1, 2, "sharp"]),
    Tile.fromList([false, 3, 1, "flying"]),
    new Tile(),
  ],
  [
    Tile.fromList([false, 1, 1, "prevent_attack"]),
    Tile.fromList([false, 1, 1, "submerge"]),
    Tile.fromList([false, 1, 1, "flying"]),
    new Tile(),
  ],
  [
    new Tile(),
    Tile.fromValues(false, 1, 1, "submerge"),
    Tile.fromValues(false, 1, 1, "split_strike"),
    new Tile(),
  ],
  [
    new Tile(),
    Tile.fromValues(false, 1, 1, "buff_neighbors"),
    new Tile(),
    new Tile(),
  ],
];

export default class Board {
  items: Tile[][];

  constructor(board = exampleBoard) {
    this.items = board;
  }

  toString(): string {
    return `${this.items}`;
  }

  moveUp(row: number, col: number): void {
    if (this.items[col][row - 1].isEmpty)
      [this.items[col][row], this.items[col][row - 1]] = [
        this.items[col][row - 1],
        this.items[col][row],
      ];
  }

  moveDown(row: number, col: number): void {
    if (this.items[col][row + 1].isEmpty)
      [this.items[col][row], this.items[col][row + 1]] = [
        this.items[col][row + 1],
        this.items[col][row],
      ];
  }

  checkBoard(): number {
    let damage = 0;

    for (let col = 0; col < this.items.length; col++) {
      // TODO: buff_neighbors, tri_strike, split_strike

      if (this.items[col][2].sigill == "split_strike" && (col > 0 || col < 3)) {
        const before = damage;
        damage += hit(this.items[col][2], this.items[col + 1][1]);
        damage += hit(this.items[col][2], this.items[col - 1][1]);
        console.log("Split-Strike did ", damage - before, " damage");
      } else {
        if (this.items[col][2].sigill == "tri_strike" && (col > 0 || col < 3)) {
          const before = damage;
          damage += hit(this.items[col][2], this.items[col + 1][1]);
          damage += hit(this.items[col][2], this.items[col - 1][1]);
          console.log("Tri-Strike did ", damage - before, " damage");
        }
        damage += hit(this.items[col][2], this.items[col][1]);
        console.log(
          "Attack does ",
          hit(this.items[col][2], this.items[col][1]),
          " damage"
        );
      }
    }

    return damage;
  }

  reset(): void {
    this.items = exampleBoard;
  }
}

const hit = (playerTile: Tile, enemyTile: Tile) => {
  /*
  TODO handle state of game. each card has health to decrease
  after being hit. Checking needs to mutate board and decrement lives
  */

  console.log(playerTile.toString(), "hits", enemyTile.toString());

  if (playerTile.sigill === "death_touch") {
    return playerTile.attack;
  } else if (playerTile.sigill === "flying") {
    if (enemyTile.sigill !== "reach") {
      return playerTile.attack;
    }
  } else {
    if (enemyTile.sigill !== "submerge") {
      return playerTile.attack;
    }
  }

  return 0;
};
