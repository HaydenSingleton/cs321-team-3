/* eslint-disable no-unused-vars */
import { Tile } from "@/tile.js";

export const Lane = {
  damage: 0,
  tiles: [Tile, Tile, Tile, Tile],

  getTiles() {
    return this.tiles;
  },
  moveUp(tile) {
    let curIndex = this.tiles.indexOf(tile);
    if (curIndex !== 0) {
      if (this.tiles[curIndex - 1].empty === true) {
        this.tiles[curIndex - 1] = tile;
        this.tiles[curIndex].reset();
      }
    }
  },
  moveDown(tile) {
    let curIndex = this.tiles.indexOf(tile);
    if (curIndex !== 3) {
      if (this.tiles[curIndex + 1].empty === true) {
        this.tiles[curIndex + 1] = tile;
        this.tiles[curIndex].reset();
      }
    }
  },
  interact() {
    //Active Zone
    if (this.tiles[2].empty === false) {
      this.hit_damage(this.tiles[2], this.tiles[1]); //player attacks first
    }
    if (this.tiles[1].empty === false) {
      this.hit_enemy(this.tiles[1], this.tiles[2]); // enemy attacks only if it survived player attack.
    }
  },
  hit_damage(tile1, tile2) {
    // if () {
    // }
    //Sharp Quills
    //if direct damage, return atk.
    //else return 0
  },
  onHit(tile1, tile2) {},
};
