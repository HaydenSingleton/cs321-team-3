export function Tile(e = true, a = 0, h = 0, s = "empty") {
  this.isEmpty = e;
  this.attack = a;
  this.health = h;
  this.sigil = s;

  this.reset = function () {
    this.isEmpty = true;
    this.attack = 0;
    this.health = 0;
    this.sigil = "empty";
  };

  this.Assign = function (e, a, h, s) {
    this.isEmpty = e;
    this.attack = a;
    this.health = h;
    this.sigil = s;
  };

  this.death = function () {
    if (this.health <= 0) {
      this.reset();
    }
  };
}
