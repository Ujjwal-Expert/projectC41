class Player{
    constructor(){
        this.name = null;
        this.index = null;
        this.x = 200;
        this.score = 0;
    }
    getCount(){
        var dbref = database.ref('playerCount').on('value',(data)=>{
            playerCount = data.val();
        })
    }
    update(){
        var playerIndex = "players/player"+this.index;
        var dbref = database.ref(playerIndex).set({
            name: this.name,
            x: this.x,
            score: this.score
        });
        console.log(playerCount);
    }
    updateCount(x){
        var dbref  = database.ref('/').update({
            playerCount:x
        })
    }
    static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",(data)=>{
          allPlayers = data.val();
        })
    }
}