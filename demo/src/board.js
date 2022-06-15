class Board{
    def_constructor(){
        lane1 = Lane.def_constructor();
        lane2 = Lane.def_constructor();
        lane3 = Lane.def_constructor();
        lane4 = Lane.def_constructor();
        const board = [lane1,lane2,lane3,lane4];
        this.directDamageTaken = 0;
        this.lives = 3;
        this.boardID = -1;
    }
    constructor(preMadeBoard,lives){
        const board = [preMadeBoard[0],preMadeBoard[1],preMadeBoard[2],preMadeBoard[3]];
        this.directDamageTaken = 0;
        this.lives = lives;
        this.boardID = preMadeBoard.boardID;
    }
    playPhase(){
        Board beforePlay = this;
        board[0].interaction();
        board[1].interaction();
        board[2].interaction();
        board[3].interaction();
        if(this.directDamageTaken >= 5){
            //WIN
        }
        else{
            this.constructor(this,lives--);
        }
    }
}