import { Tile } from "@/tile.js";

export class Lane {
  constructor(
    t1 = new Tile(true, 0, 0, "empty"),
    t2 = new Tile(true, 0, 0, "empty"),
    t3 = new Tile(true, 0, 0, "empty"),
    t4 = new Tile(true, 0, 0, "empty")
  ) {
    this.tiles = [t1, t2, t3, t4];
  }

  getTiles() {
    return this.tiles;
  }

  interact() {
    //Active Zone
    if (this.tiles[2].isEmpty === false) {
      //console.log("2", this.tiles[2].sigil);
      //console.log("1", this.tiles[1].sigil);
      return this.hit(this.tiles[2], this.tiles[1]); //player attacks first
    }
    /*if (this.tiles[2].empty === false) {
        this.hit(this.tiles[2], this.tiles[1]); // enemy attacks only if it survived player attack.
      }*/
    return -1;
  }

  hit(tile1, tile2) {
    let directDamageTaken = 0;
    switch (tile1.sigil) {
      case "deathtouch":
        if (tile2.isEmpty === false) {
          this.onHit(tile1, tile2);
          tile2.reset();
        } else {
          directDamageTaken += tile1.attack;
        }
        break;
      case "flying":
        if (tile2.sigil === "reach") {
          this.onHit(tile1, tile2);
        } else {
          directDamageTaken += tile1.attack;
        }
        break;
      default:
        if (tile2.isEmpty === false && tile2.sigil !== "submerge") {
          this.onHit(tile1, tile2);
        } else {
          directDamageTaken += tile1.attack;
        }
    }
    //console.log("Lane", directDamageTaken);
    return directDamageTaken;
  }

  onHit(tile1, tile2) {
    switch (tile2.sigil) {
      case "debuffenemy":
        tile2.health -= tile1.atk - 1;
        tile2.death();
        break;
      case "preventattack":
        break;
      case "sharp":
        tile2.health -= tile1.attack;
        tile1.health -= 1;
        tile1.death();
        break;
      default:
        tile2.health -= tile1.attack;
        tile2.death();
    }
  }
}
