import { Tile } from "@/tile.js";

export function Lane() {
  this.tiles = [new Tile(), new Tile(), new Tile(), new Tile()];

  this.getTiles = function () {
    return this.tiles;
  };

  this.moveUp = function (tile) {
    let curIndex = this.tiles.indexOf(tile);
    if (curIndex !== 0) {
      if (this.tiles[curIndex - 1].empty === true) {
        this.tiles[curIndex - 1] = tile;
        this.tiles[curIndex].reset();
      }
    }
  };

  this.moveDown = function (tile) {
    let curIndex = this.tiles.indexOf(tile);
    if (curIndex !== 3) {
      if (this.tiles[curIndex + 1].empty === true) {
        this.tiles[curIndex + 1] = tile;
        this.tiles[curIndex].reset();
      }
    }
  };

  this.interact = function () {
    //Active Zone
    if (this.tiles[2].empty === false) {
      this.hit(this.tiles[2], this.tiles[1]); //player attacks first
    }
    if (this.tiles[1].empty === false) {
      this.hit(this.tiles[1], this.tiles[2]); // enemy attacks only if it survived player attack.
    }
  };

  this.hit = function (tile1, tile2) {
    let directDamageTaken = 0;
    switch (tile1.sigil) {
      case "deathtouch":
        if (tile2.empty === false) {
          this.onHit(tile1, tile2);
          tile2.reset();
        } else {
          directDamageTaken += tile1.atk;
        }
        break;
      case "flying":
        if (tile2.sigil === "reach") {
          this.onHit(tile1, tile2);
        } else {
          directDamageTaken += tile1.atk;
        }
        break;
      default:
        if (tile2.empty === false && tile2.sigil !== "submerge") {
          this.onHit(tile1, tile2);
        } else {
          directDamageTaken += tile1.atk;
        }
    }
    return directDamageTaken;
  };

  this.onHit = function (tile1, tile2) {
    switch (tile2.sigil) {
      case "debuffenemy":
        tile2.health -= tile1.atk - 1;
        tile2.death();
        break;
      case "preventattack":
        break;
      case "sharp":
        tile2.health -= tile1.atk;
        tile1.health -= 1;
        break;
      default:
        tile2.health -= tile1.atk;
      // tile2.death();
    }
  };
}
