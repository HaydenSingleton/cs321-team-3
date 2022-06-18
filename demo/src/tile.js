// eslint-disable-next-line no-unused-vars
const Tile = {
  empty: true,
  attack: 0,
  health: 0,
  sigil: "",
  reset() {
    this.empty = true;
    this.attack = 0;
    this.health = 0;
    this.sigil = "";
  },
  death() {
    if (this.health <= 0) {
      this.reset();
    }
  },
};
