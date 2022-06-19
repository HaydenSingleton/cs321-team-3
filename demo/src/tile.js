export const Tile = {
  empty: true,
  attack: 0,
  health: 0,
  sigil: "None",
  reset() {
    this.empty = true;
    this.attack = 0;
    this.health = 0;
    this.sigil = "";
  },
  assign(e, a, h, s) {
    this.empty = e;
    this.atk = a;
    this.health = h;
    this.sigil = s;
  },
  // death() {
  //   if (this.health <= 0) {
  //     this.reset();
  //   }
  // },
};
