/* eslint-disable no-unused-vars */
import { Lane } from "./lane.js";

export const Board = {
  lanes: [Lane, Lane, Lane, Lane],
  directDamageTaken: 0,
  lives: 3,
  boardID: -1,
  loadBoard: function (boardLanes, lives) {
    this.lanes = boardLanes;
    this.lives = lives;
  },
  check: function () {
    // var intialBoard = this.lanes;
    for (let i = 0; i <= 1; i++) {
      switch (this.lanes[1].lane[2 - i].sigil) {
        case "Leader":
          if (this.lanes[2].lane[2 - i] === false) {
            this.lanes[2].lane[2 - i].atk++;
          }
      }
      switch (this.lanes[2].lane[2 - i].sigil) {
        case "Leader":
          if (this.lanes[1].lane[2 - i].empty === false) {
            this.lanes[1].lane[2 - i].atk++;
          } else if (this.lanes[3].lane[2 - i].empty === false) {
            this.lanes[3].lane[2 - i].atk++;
          }
      }
      switch (this.lane3.lane[2 - i].sigil) {
        case "Leader":
          if (this.lanes[2].lane[2 - i].empty === false) {
            this.lanes[2].lane[2 - i].atk++;
          } else if (this.lanes[4].lane[2 - i].empty === false) {
            this.lanes[4].lane[2 - i].atk++;
          }
      }
    }
    for (let j = 0; j <= 3; j++) {
      switch (this.lanes[j].lane[2].sigil) {
        case "Trifurcated Strike":
          if (j - 1 >= 0) {
            this.directDamageTaken += this.lanes[j].hit(
              this.lanes[j].lane[2],
              this.lane[j - 1].lane[1]
            );
          }
          this.directDamageTaken += this.lanes[j].hit(
            this.lanes[j].lane[2],
            this.lanes[j].lane[1]
          );
          if (j + 1 <= 3) {
            this.directDamageTaken += this.lanes[j].hit(
              this.lanes[j].lane[2],
              this.lanes[j + 1].lane[1]
            );
          }
          break;
        case "Bifurcated Strike":
          if (j - 1 >= 0) {
            this.directDamageTaken += this.lanes[j].hit(
              this.lanes[j].lane[2],
              this.lane[j - 1].lane[1]
            );
          }
          if (j + 1 <= 3) {
            this.directDamageTaken += this.lanes[j].hit(
              this.lanes[j].lane[2],
              this.lanes[j + 1].lane[1]
            );
          }
          break;
        default:
          this.directDamageTaken += this.lanes[j].hit(
            this.lanes[j].lane[2],
            this.lane1.lane[1]
          );
      }
    }
    if (this.directDamageTaken >= 5) {
      //WIN
    } else {
      this.loadBoard(this.initialBoard, this.lives - 1);
    }
  },
};
