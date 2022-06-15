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
    curIndex = lane.indexOf(tile);
    if (curIndex != 0) {
      if (lane[curIndex - 1].empty == true) {
        lane[curIndex - 1] = tile;
        lane[curIndex] = Tile.def_constructor();
      }
    }
  }
  moveDown(tile) {
    curIndex = lane.indexOf(tile);
    if (curIndex != 3) {
      if (lane[curIndex + 1].empty == true) {
        lane[curIndex + 1] = tile;
        lane[curIndex] = Tile.def_constructor();
      }
    }
  }
  interact() {
    //Active Zone
    if (lane[2].empty == false) {
      this.hit(lane[2], lane[1]); //player attacks first
    }
    if (lane[1].empty == false) {
      this.hit(lane[1], lane[2]); // enemy attacks only if it survived player attack.
    }
  }
  hit(tile1, tile2) {}
  onHit(tile1, tile2) {}
}
