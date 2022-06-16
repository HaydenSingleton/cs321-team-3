class Tile {
  empty;
  attack;
  health;
  sigil;

  def_constructor() {
    this.empty = true;
    this.attack = 0;
    this.health = 0;
    this.sigil = "";
  }
  constructor(empty, attack, health, sigil) {
    this.empty = empty;
    this.attack = attack;
    this.health = health;
    this.sigil = sigil;
  }
  death() {
    if (this.health <= 0) {
      this.def_constructor();
    }
  }
}
