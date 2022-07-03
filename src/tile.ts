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
    return `[id=${this.id} (${
      this.isEmpty ? "" : this.attack + " " + this.health + " " + this.sigill
    })]`;
  }

  static fromValues(a: number, h: number, s: string): Tile {
    const result = new Tile();
    result.isEmpty = false;
    result.attack = a;
    result.health = h;
    result.sigill = s;
    return result;
  }

  static fromList(values: [number, number, string]): Tile {
    const result = new Tile();
    result.isEmpty = false;
    result.attack = values[0];
    result.health = values[1];
    result.sigill = values[2];
    return result;
  }

  reset(): void {
    this.isEmpty = true;
    this.attack = 0;
    this.health = 0;
    this.sigill = "empty";
  }
}
