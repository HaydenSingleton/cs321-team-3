/* eslint-disable no-unused-vars */
import { Lane } from "./lane.js";

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
        case "Leader":
          if (this.lanes[2].tiles[2 - i] === false) {
            this.lanes[2].tiles[2 - i].attack++;
          }
      }
      switch (this.lanes[2].tiles[2 - i].sigil) {
        case "Leader":
          if (this.lanes[1].tiles[2 - i].empty === false) {
            this.lanes[1].tiles[2 - i].attack++;
          } else if (this.lanes[3].tiles[2 - i].empty === false) {
            this.lanes[3].tiles[2 - i].attack++;
          }
      }
      switch (this.lanes[3].tiles[2 - i].sigil) {
        case "Leader":
          if (this.lanes[2].tiles[2 - i].empty === false) {
            this.lanes[2].tiles[2 - i].attack++;
          } else if (this.lanes[4].tiles[2 - i].empty === false) {
            this.lanes[4].tiles[2 - i].attack++;
          }
      }
    }

    for (let j = 0; j <= 3; j++) {
      switch (this.lanes[j].tiles[2].sigil) {
        case "Trifurcated Strike":
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
        case "Bifurcated Strike":
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
};
