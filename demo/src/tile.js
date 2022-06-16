class Tile {
  def_constructor() {
    this.empty = true;
    this.atk = 0;
    this.health = 0;
    this.sigil = "";
  }
  constructor(empty, atk, health, sigil) {
    this.empty = empty;
    this.atk = atk;
    this.health = health;
    this.sigil = sigil;
  }
  death() {
    if (this.health <= 0) {
      this.def_constructor();
    }
  }
}
