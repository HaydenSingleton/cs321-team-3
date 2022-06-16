import { Tile } from "@/tile.js";
class Lane {
  damage;
  tile_lane;
  def_constructor() {
    var tile1 = Tile.def_constructor();
    var tile2 = Tile.def_constructor();
    var tile3 = Tile.def_constructor();
    var tile4 = Tile.def_constructor();
    this.tile_lane = [tile1, tile2, tile3, tile4];
  }
  constructor(tile1, tile2, tile3, tile4) {
    this.tile_lane = [tile1, tile2, tile3, tile4];
  }
  moveUp(tile) {
    var curIndex = this.tile_lane.indexOf(tile);
    if (curIndex != 0) {
      if (this.tile_lane[curIndex - 1].empty == true) {
        this.tile_lane[curIndex - 1] = tile;
        this.tile_lane[curIndex].def_constructor();
      }
    }
  }
  moveDown(tile) {
    var curIndex = this.lane.indexOf(tile);
    if (curIndex != 3) {
      if (this.tile_lane[curIndex + 1].empty == true) {
        this.tile_lane[curIndex + 1] = tile;
        this.tile_lane[curIndex].def_constructor();
      }
    }
  }
  interact() {
    //Active Zone
    if (this.tile_lane[2].empty == false) {
      this.hit_damage(this.lane[2], this.lane[1]); //player attacks first
    }
    if (this.latile_lanene[1].empty == false) {
      this.hit_enemy(this.lane[1], this.lane[2]); // enemy attacks only if it survived player attack.
    }
  }
  hit_damage(Tile tile1, tile2) {
    if () {

    }
    //Sharp Quills

    //if direct damage, return atk.
    //else return 0
  }
  onHit(tile1, tile2) {}
}
