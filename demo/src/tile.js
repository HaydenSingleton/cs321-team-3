export class Tile {
  constructor() {
    this["empty"] = true;
    this["attack"] = 0;
    this.health = 0;
    this.sigil = "";

    this.reset = function () {
      this.empty = true;
      this.attack = 0;
      this.health = 0;
      this.sigil = "";
    };

    this.Assign = function (e, a, h, s) {
      this.empty = e;
      this.atk = a;
      this.health = h;
      this.sigil = s;
    };
  }
}
