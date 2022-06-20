/* eslint-disable no-unused-vars */
import { Lane } from "./lane.js";

export const Board = {
  lanes: [Lane, Lane, Lane, Lane],
  lives: 3,
  boardID: -1,
  loadBoard(boardLanes, lives) {
    this.lanes = boardLanes;
    this.lives = lives;
  },
  getLives() {
    return this.lives;
  },
  check: function () {
    console.log("Pressed Check button...");
    const initialBoard = this.lanes;
    let directDamageTaken = 0;

    for (let i = 0; i <= 1; i++) {
      switch (this.lanes[1].tiles[2 - i].sigil) {
        case "buffneighbors":
          if (this.lanes[2].tiles[2 - i] === false) {
            this.lanes[2].tiles[2 - i].attack++;
          }
      }
      switch (this.lanes[2].tiles[2 - i].sigil) {
        case "buffneighbors":
          if (this.lanes[1].tiles[2 - i].isEmpty === false) {
            this.lanes[1].tiles[2 - i].attack++;
          } else if (this.lanes[3].tiles[2 - i].isEmpty === false) {
            this.lanes[3].tiles[2 - i].attack++;
          }
      }
      switch (this.lanes[3].tiles[2 - i].sigil) {
        case "buffneighbors":
          if (this.lanes[2].tiles[2 - i].isEmpty === false) {
            this.lanes[2].tiles[2 - i].attack++;
          } else if (this.lanes[4].tiles[2 - i].isEmpty === false) {
            this.lanes[4].tiles[2 - i].attack++;
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
    console.log("lives", this.lives);
    return directDamageTaken;
  },
  generate: function (index) {
    console.log("Generating example Board...");
    var lane1 = new Lane();
    lane1.tiles[0].Assign(false, 1, 3, "deathtouch");
    lane1.tiles[1].Assign(false, 1, 2, "sharp");
    lane1.tiles[2].Assign(false, 3, 1, "flying");
    var lane2 = new Lane();
    lane2.tiles[0].Assign(false, 1, 1, "preventattack");
    lane2.tiles[1].Assign(false, 1, 1, "reach");
    lane2.tiles[2].Assign(false, 1, 1, "flying");
    var lane3 = new Lane();
    lane3.tiles[1].Assign(false, 1, 1, "submerge");
    lane3.tiles[2].Assign(false, 2, 1, "debuffenemy");
    var lane4 = new Lane();
    lane4.tiles[1].Assign(false, 1, 1, "buffneighbors");
    const preGenerated = [];
    preGenerated[0] = [lane1, lane2, lane3, lane4];
    lane1 = new Lane();
    lane1.tiles[0].Assign(false, 1, 3, "tristrike");
    lane1.tiles[1].Assign(false, 1, 3, "tristrike");
    lane2 = new Lane();
    lane2.tiles[0].Assign(false, 1, 3, "tristrike");
    lane2.tiles[1].Assign(false, 1, 3, "tristrike");
    lane3 = new Lane();
    lane3.tiles[0].Assign(false, 1, 3, "tristrike");
    lane3.tiles[1].Assign(false, 1, 3, "tristrike");
    lane4 = new Lane();
    lane4.tiles[0].Assign(false, 1, 3, "tristrike");
    lane4.tiles[1].Assign(false, 1, 3, "tristrike");
    preGenerated[1] = [lane1, lane2, lane3, lane4];
    lane1 = new Lane();
    lane1.tiles[0].Assign(false, 1, 3, "splitstrike");
    lane1.tiles[1].Assign(false, 1, 3, "splitstrike");
    lane2 = new Lane();
    lane2.tiles[0].Assign(false, 1, 3, "splittrike");
    lane2.tiles[1].Assign(false, 1, 3, "splitstrike");
    lane3 = new Lane();
    lane3.tiles[0].Assign(false, 1, 3, "splitstrike");
    lane3.tiles[1].Assign(false, 1, 3, "splitstrike");
    lane4 = new Lane();
    lane4.tiles[0].Assign(false, 1, 3, "splitstrike");
    lane4.tiles[1].Assign(false, 1, 3, "splitstrike");
    preGenerated[2] = [lane1, lane2, lane3, lane4];
    lane1 = new Lane();
    lane1.tiles[0].Assign(false, 1, 3, "buffneighbors");
    lane1.tiles[1].Assign(false, 1, 3, "buffneighbors");
    lane2 = new Lane();
    lane2.tiles[0].Assign(false, 1, 3, "buffneighbors");
    lane2.tiles[1].Assign(false, 1, 3, "buffneighbors");
    lane3 = new Lane();
    lane3.tiles[0].Assign(false, 1, 3, "buffneighbors");
    lane3.tiles[1].Assign(false, 1, 3, "buffneighbors");
    lane4 = new Lane();
    lane4.tiles[0].Assign(false, 1, 3, "buffneighbors");
    lane4.tiles[1].Assign(false, 1, 3, "buffneighbors");
    preGenerated[3] = [lane1, lane2, lane3, lane4];
    lane1 = new Lane();
    lane1.tiles[0].Assign(false, 1, 3, "deathtouch");
    lane1.tiles[1].Assign(false, 1, 3, "sharp");
    lane1.tiles[2].Assign(false, 1, 3, "deathtouch");
    lane2 = new Lane();
    lane2.tiles[0].Assign(false, 1, 3, "preventattack");
    lane2.tiles[1].Assign(false, 1, 3, "sharp");
    lane2.tiles[2].Assign(false, 3, 1, "splitstrike");
    lane3 = new Lane();
    lane3.tiles[0].Assign(false, 1, 3, "flying");
    lane3.tiles[1].Assign(false, 1, 3, "preventattack");
    lane3.tiles[3].Assign(false, 1, 3, "preventattack");
    lane4 = new Lane();
    lane4.tiles[0].Assign(false, 1, 3, "buffneighbors");
    lane4.tiles[1].Assign(false, 1, 3, "tristrike");
    preGenerated[4] = [lane1, lane2, lane3, lane4];
    this.lanes = preGenerated[index];
  },
};
