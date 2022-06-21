import { Lane } from "./lane.js";
import { Tile } from "@/tile";

export class Board {
  constructor(
    lane1 = new Lane(),
    lane2 = new Lane(),
    lane3 = new Lane(),
    lane4 = new Lane()
  ) {
    this.lanes = [lane1, lane2, lane3, lane4];
    this.lives = 3;
  }

  getLanes = () => {
    return this.lanes;
  };

  loadBoard = (boardLanes, lives) => {
    this.lanes = boardLanes;
    this.lives = lives;
  };
  getLives() {
    return this.lives;
  }

  check() {
    const initialBoard = this.lanes;
    let directDamageTaken = 0;

    for (let i = 0; i <= 1; i++) {
      switch (this.lanes[0].tiles[2 - i].sigil) {
        case "buffneighbors":
          if (this.lanes[1].tiles[2 - i].isEmpty === false) {
            this.lanes[1].tiles[2 - i].attack++;
          }
      }
      switch (this.lanes[1].tiles[2 - i].sigil) {
        case "buffneighbors":
          if (this.lanes[0].tiles[2 - i].isEmpty === false) {
            this.lanes[0].tiles[2 - i].attack++;
          }
          if (this.lanes[2].tiles[2 - i].isEmpty === false) {
            this.lanes[2].tiles[2 - i].attack++;
          }
      }
      switch (this.lanes[2].tiles[2 - i].sigil) {
        case "buffneighbors":
          if (this.lanes[1].tiles[2 - i].isEmpty === false) {
            this.lanes[1].tiles[2 - i].attack++;
          }
          if (this.lanes[3].tiles[2 - i].isEmpty === false) {
            this.lanes[3].tiles[2 - i].attack++;
          }
      }
      switch (this.lanes[3].tiles[2 - i].sigil) {
        case "buffneighbors":
          if (this.lanes[2].tiles[2 - i].isEmpty === false) {
            this.lanes[2].tiles[2 - i].attack++;
          }
      }
    }
    for (let j = 0; j <= 3; j++) {
      switch (this.lanes[j].tiles[2].sigil) {
        case "tristrike":
          if (j - 1 >= 0) {
            directDamageTaken += this.lanes[j].hit(
              this.lanes[j].tiles[2],
              this.lanes[j - 1].tiles[1]
            );
          }
          directDamageTaken += this.lanes[j].hit(
            this.lanes[j].tiles[2],
            this.lanes[j].tiles[1]
          );
          if (j + 1 <= 3) {
            directDamageTaken += this.lanes[j].hit(
              this.lanes[j].tiles[2],
              this.lanes[j + 1].tiles[1]
            );
          }
          break;
        case "splitstrike":
          if (j - 1 >= 0) {
            directDamageTaken += this.lanes[j].hit(
              this.lanes[j].tiles[2],
              this.lanes[j - 1].tiles[1]
            );
          }
          if (j + 1 <= 3 && this.lanes[j].tiles[2].empty !== true) {
            directDamageTaken += this.lanes[j].hit(
              this.lanes[j].tiles[2],
              this.lanes[j + 1].tiles[1]
            );
          }
          break;
        default:
          directDamageTaken += this.lanes[j].hit(
            this.lanes[j].tiles[2],
            this.lanes[j].tiles[1]
          );
      }
    }
    if (directDamageTaken < 5) {
      this.loadBoard(initialBoard, this.lives - 1);
    }

    return directDamageTaken;
  }
}

export const preGeneratedBoards = [
  new Board(
    new Lane(
      new Tile(false, 1, 3, "tristrike"),
      new Tile(false, 1, 3, "tristrike")
    ),
    new Lane(
      new Tile(false, 1, 3, "tristrike"),
      new Tile(false, 1, 3, "tristrike")
    ),
    new Lane(
      new Tile(false, 1, 3, "tristrike"),
      new Tile(false, 1, 3, "tristrike")
    ),
    new Lane(
      new Tile(false, 1, 3, "tristrike"),
      new Tile(false, 1, 3, "tristrike")
    )
  ),
  new Board(
    new Lane(
      new Tile(false, 1, 3, "splitstrike"),
      new Tile(false, 1, 3, "splitstrike")
    ),
    new Lane(
      new Tile(false, 1, 3, "splitstrike"),
      new Tile(false, 1, 3, "splitstrike")
    ),
    new Lane(
      new Tile(false, 1, 3, "splitstrike"),
      new Tile(false, 1, 3, "splitstrike")
    ),
    new Lane(
      new Tile(false, 1, 3, "splitstrike"),
      new Tile(false, 1, 3, "splitstrike")
    )
  ),
  new Board(
    new Lane(
      new Tile(false, 1, 3, "buffneighbors"),
      new Tile(false, 1, 3, "buffneighbors")
    ),
    new Lane(
      new Tile(false, 1, 3, "buffneighbors"),
      new Tile(false, 1, 3, "buffneighbors")
    ),
    new Lane(
      new Tile(false, 1, 3, "buffneighbors"),
      new Tile(false, 1, 3, "buffneighbors")
    ),
    new Lane(
      new Tile(false, 1, 3, "buffneighbors"),
      new Tile(false, 1, 3, "buffneighbors")
    )
  ),
  new Board(
    new Lane(
      new Tile(false, 1, 3, "deathtouch"),
      new Tile(false, 1, 3, "sharp"),
      new Tile(false, 1, 3, "deathtouch")
    ),
    new Lane(
      new Tile(false, 1, 3, "preventattack"),
      new Tile(false, 1, 3, "sharp"),
      new Tile(false, 1, 3, "splitstrike")
    ),
    new Lane(
      new Tile(false, 1, 3, "flying"),
      new Tile(false, 1, 3, "preventattack"),
      new Tile(),
      new Tile(false, 1, 3, "preventattack")
    ),
    new Lane(
      new Tile(false, 1, 3, "buffneighbors"),
      new Tile(false, 1, 3, "empty")
    )
  ),
];
