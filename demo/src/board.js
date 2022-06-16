const board = {
  lane1: Lane.def_constructor(),
  lane2: Lane.def_constructor(),
  lane3: Lane.def_constructor(),
  lane4: Lane.def_constructor(),
  directDamageTaken: 0,
  lives: 3,
  boardID: -1,
  loadBoard(preMadeBoard,life){
    this.lane1 = preMadeBoard.lane1;
    this.lane2 = preMadeBoard.lane2;
    this.lane3 = preMadeBoard.lane3;
    this.lane4 = preMadeBoard.lane4;
    this.lives = life;
    this.boardID = preMadeBoard.boardID;
  },
  playerPhase(){
    this.lane1.interaction();
    this.lane2.interaction();
    this.lane3.interaction();
    this.lane4.interaction();
    if( this.directDamageTaken >= 5){
      //WIN
    }
    else{
      this.loadBoard(this,this.lives-1);
    }
  }
}
