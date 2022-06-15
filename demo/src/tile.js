class Tile{
    def_constructor(){
        this.empty = true;
        this.org_atk = 0;
        this.cur_atk = 0;
        this.org_health = 0;
        this.cur_health = 0;
        this.sigil = "";
    }
    constructor(empty,org_atk,cur_atk,org_health,cur_health,sigil){
        this.empty = empty;
        this.org_atk = org_atk;
        this.cur_atk = cur_atk;
        this.org_health = org_health;
        this.cur_health = cur_health;
        this.sigil = sigil;
    }
    death(){
        if(this.cur_health<=0){ def_constructor(); }
    }
}