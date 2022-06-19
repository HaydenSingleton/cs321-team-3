/* eslint-disable no-unused-vars */
import { Lane } from "./lane.js";
import { Tile } from "@/tile.js";
export const Board = {
  lanes: [Lane, Lane, Lane, Lane],
  directDamageTaken: 0,
  lives: 3,
  boardID: -1,
  loadBoard(boardLanes, lives) {
    this.lanes = boardLanes;
    this.lives = lives;
  },
  check: function () {
    console.log("Pressed Check button...");
    const initialBoard = this.lanes;

    for (let i = 0; i <= 1; i++) {
      switch (this.lanes[1].tiles[2 - i].sigil) {
        case "buffneighbors":
          if (this.lanes[2].tiles[2 - i] === false) {
            this.lanes[2].tiles[2 - i].attack++;
          }
      }
      switch (this.lanes[2].tiles[2 - i].sigil) {
        case "buffneighbors":
          if (this.lanes[1].tiles[2 - i].empty === false) {
            this.lanes[1].tiles[2 - i].attack++;
          } else if (this.lanes[3].tiles[2 - i].empty === false) {
            this.lanes[3].tiles[2 - i].attack++;
          }
      }
      switch (this.lanes[3].tiles[2 - i].sigil) {
        case "buffneighbors":
          if (this.lanes[2].tiles[2 - i].empty === false) {
            this.lanes[2].tiles[2 - i].attack++;
          } else if (this.lanes[4].tiles[2 - i].empty === false) {
            this.lanes[4].tiles[2 - i].attack++;
          }
      }
    }

    for (let j = 0; j <= 3; j++) {
      switch (this.lanes[j].tiles[2].sigil) {
        case "tristrike":
          if (j - 1 >= 0) {
            this.directDamageTaken += this.lanes[j].hit(
              this.lanes[j].tiles[2],
              this.lanes[j - 1].tiles[1]
            );
          }
          this.directDamageTaken += this.lanes[j].hit(
            this.lanes[j].tiles[2],
            this.lanes[j].tiles[1]
          );
          if (j + 1 <= 3) {
            this.directDamageTaken += this.lanes[j].hit(
              this.lanes[j].tiles[2],
              this.lanes[j + 1].tiles[1]
            );
          }
          break;
        case "splitstrike":
          if (j - 1 >= 0) {
            this.directDamageTaken += this.lanes[j].hit(
              this.lanes[j].tiles[2],
              this.lanes[j - 1].tiles[1]
            );
          }
          if (j + 1 <= 3) {
            this.directDamageTaken += this.lanes[j].hit(
              this.lanes[j].tiles[2],
              this.lanes[j + 1].tiles[1]
            );
          }
          break;
        default:
          this.directDamageTaken += this.lanes[j].hit(
            this.lanes[j].tiles[2],
            this.lanes[1].tiles[1]
          );
      }
    }
    if (this.directDamageTaken < 5) {
      this.loadBoard(initialBoard, this.lives - 1);
    }

    return this.directDamageTaken;
  },
  generate: function () {
    console.log("Generating Board...");
    const lane1 = Object.create(Lane);
    lane1.tiles[0] = Object.create(Tile).assign(false, 1, 1, "deathtouch");
    lane1.tiles[1] = Object.create(Tile).assign(false, 1, 1, "sharp");
    lane1.tiles[2] = Object.create(Tile).assign(false, 3, 1, "flying");
    const lane2 = Object.create(Lane);
    lane2.tiles[0] = Object.create(Tile).assign(false, 1, 1, "preventattack");
    lane2.tiles[1] = Object.create(Tile).assign(false, 1, 1, "reach");
    lane3.tiles[2] = Object.create(Tile).assign(false, 1, 1, "flying");
    const lane3 = Object.create(Lane);
    lane3.tiles[1] = Object.create(Tile).assign(false, 1, 1, "submerge");
    lane3.tiles[2] = Object.create(Tile).assign(false, 2, 1, "debuffenemy");
    const lane4 = Object.create(Lane);
    lane3.tiles[1] = Object.create(Tile).assign(false, 1, 1, "buffneighbors");
    this.lanes = [lane1, lane2, lane3, lane4];
  },
};
