  import { Lane } from "@/lane.js";

  const board = {
    lane1: Lane.def_constructor(),
    lane2: Lane.def_constructor(),
    lane3: Lane.def_constructor(),
    lane4: Lane.def_constructor(),
    directDamageTaken: 0,
    lives: 3,
    boardID: -1,
    loadBoard(preMadeBoard, life) {
      this.lane1 = preMadeBoard.lane1;
      this.lane2 = preMadeBoard.lane2;
      this.lane3 = preMadeBoard.lane3;
      this.lane4 = preMadeBoard.lane4;
      this.lives = life;
      this.boardID = preMadeBoard.boardID;
    },
    playerPhase() {
      for(let i = 0; i <= 1; i++){
        switch(this.lane1.lane[2-i].sigil){
        case "Leader":
          if (this.lane2.lane[2-i].empty == false){this.lane2.lane[2-i].atk++;}
        }
        switch(this.lane2.lane[2-i].sigil){
          case "Leader":
            if (this.lane1.lane[2-i].empty == false){this.lane1.lane[2-i].atk++;}
            else if (this.lane3.lane[2-i].empty == false){this.lane3.lane[2-i].atk++;}
          }
        switch(this.lane3.lane[2-i].sigil){
            case "Leader":
              if (this.lane2.lane[2-i].empty == false){this.lane2.lane[2-i].atk++;}
              else if (this.lane4.lane[2-i].empty == false){this.lane4.lane[2-i].atk++;}
            }
      }
      switch(this.lane1.lane[2].sigil){
        case "Trifurcated Strike":
          directDamageTaken += this.lane1.hit(this.lane1.lane[2],this.lane1.lane[1]);
          directDamageTaken += this.lane1.hit(this.lane1.lane[2],this.lane2.lane[1]);
          break;
        case "Bifurcated Strike":
          directDamageTaken += this.lane1.hit(this.lane1.lane[2],this.lane2.lane[1]);
          break;
        default:
          directDamageTaken += this.lane1.hit(this.lane1.lane[2],this.lane1.lane[1]);
      }
      switch(this.lane1.lane[1].sigil){
        case "Trifurcated Strike":
          directDamageTaken += this.lane1.hit(this.lane1.lane[1],this.lane1.lane[2]);
          directDamageTaken += this.lane1.hit(this.lane1.lane[1],this.lane2.lane[2]);
          break;
        case "Bifurcated Strike":
          directDamageTaken += this.lane1.hit(this.lane1.lane[1],this.lane2.lane[2]);
          break;
        default:
          directDamageTaken += this.lane1.hit(this.lane1.lane[1],this.lane1.lane[2]);
      }
      
      this.lane2.interaction();
      this.lane3.interaction();
      this.lane4.interaction();
      if (this.directDamageTaken >= 5) {
        //WIN
      } else {
        this.loadBoard(this, this.lives - 1);
      }
    },
  };
