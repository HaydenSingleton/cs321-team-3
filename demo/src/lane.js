import { Tile } from "@/tile.js";
class Lane {
  def_constructor() {
    var tile1 = Tile.def_constructor();
    var tile2 = Tile.def_constructor();
    var tile3 = Tile.def_constructor();
    var tile4 = Tile.def_constructor();
    const lane = [tile1, tile2, tile3, tile4];
  }
  constructor(tile1, tile2, tile3, tile4) {
    const lane = [tile1, tile2, tile3, tile4];
  }
  moveUp(tile) {
    var curIndex = this.lane.indexOf(tile);
    if (curIndex != 0) {
      if (this.lane[curIndex - 1].empty == true) {
        this.lane[curIndex - 1] = tile;
        this.lane[curIndex] = Tile.def_constructor();
      }
    }
  }
  moveDown(tile) {
    var curIndex = this.lane.indexOf(tile);
    if (curIndex != 3) {
      if (this.lane[curIndex + 1].empty == true) {
        this.lane[curIndex + 1] = tile;
        this.lane[curIndex] = Tile.def_constructor();
      }
    }
  }
  interact() {
    //Active Zone
    if (this.lane[2].empty == false) {
      this.hit(this.lane[2], this.lane[1]); //player attacks first
    }
    if (this.lane[1].empty == false) {
      this.hit(this.lane[1], this.lane[2]); // enemy attacks only if it survived player attack.
    }
  }
  hit(tile1, tile2) {
      //if direct damage, return atk.
      //else return 0
  }
  onHit(tile1, tile2) {}
}
