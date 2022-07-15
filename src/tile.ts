// @filename: tile.ts
let currentID = 0;

export default class Tile {
  isEmpty: boolean;
  attack: number;
  health: number;
  sigill: string;
  readonly id: number;

  constructor(empty = true) {
    this.isEmpty = empty;
    this.attack = 0;
    this.health = 0;
    this.sigill = "empty";
    this.id = currentID++;
  }

  toString() {
    return `[id=${this.id} (${
      this.isEmpty ? "" : this.attack + " " + this.health + " " + this.sigill
    })]`;
  }

  static fromValues(a: number, h: number, s: string): Tile {
    const result = new Tile(false);
    [result.attack, result.health, result.sigill] = [a, h, s];
    return result;
  }

  static fromList(values: [number, number, string]): Tile {
    const result = new Tile(false);
    [result.attack, result.health, result.sigill] = values;
    return result;
  }

  reset(): void {
    this.isEmpty = true;
    this.attack = 0;
    this.health = 0;
    this.sigill = "empty";
  }
}
