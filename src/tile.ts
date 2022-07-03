// @filename: tile.ts
let currentID: number = 0;

export default class Tile {
  isEmpty: boolean;
  attack: number;
  health: number;
  sigill: string;
  readonly id: number;

  constructor() {
    this.isEmpty = true;
    this.attack = 0;
    this.health = 0;
    this.sigill = "empty";
    this.id = currentID++;
  }

  toString() {
    return `[${this.id}] (${
      this.isEmpty ? " " : this.attack + " " + this.health + " " + this.sigill
    })`;
  }

  static fromValues(e: boolean, a: number, h: number, s: string): Tile {
    const result = new Tile();
    result.isEmpty = e;
    result.attack = a;
    result.health = h;
    result.sigill = s;
    return result;
  }

  static fromList(values: [boolean, number, number, string]): Tile {
    const result = new Tile();
    result.isEmpty = values[0];
    result.attack = values[1];
    result.health = values[2];
    result.sigill = values[3];
    return result;
  }

  reset(): void {
    this.isEmpty = true;
    this.attack = 0;
    this.health = 0;
    this.sigill = "empty";
  }
}
