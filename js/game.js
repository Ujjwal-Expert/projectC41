class Game{
    constructor(){

    }
    getState(){
        var dbref = database.ref('gameState').on('value',(data)=>{
            gameState = data.val();
            console.log(gameState+' state');
            
        })
    }
    updateState(state){
        var dbref = database.ref('/').update({
            gameState: state
        })
    }
    async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          form = new Form()
          form.display();
        }
    
        basket1 = createSprite(200,555,50,10);
        basket1.addImage(basketImg);

        basket2 = createSprite(400,555,50,10);
        basket2.addImage(basketImg);
        
        baskets = [basket1, basket2];

        fruitGroup = new Group();
      
    }
    play(){
        image(bgImage,0,0,1200,600);
        form.hide();

        Player.getPlayerInfo();

        this.spawnFriuts();

        if(allPlayers!=undefined){
            var index = 0;

            var x=200;
            var score;

            for( var plr in allPlayers){
                index = index + 1;

                x = allPlayers[plr].x;
                score = allPlayers[plr].score;
                baskets[index-1].x = x;

                if(index === player.index){
                    fill("red");
                    textSize(20);
                    text(player.name,baskets[index-1].x-25,500);

                    /*if(fruitGroup.isTouching(baskets[index-1])){
                        player.score += 10;
                    }*/
                }
                if(keyIsDown(RIGHT_ARROW)&&player.index!==null){
                    player.x += 5;
                    player.update();
                }
                if(keyIsDown(LEFT_ARROW)&&player.index!==null){
                    player.x -= 5;
                    player.update();
                }
                
                console.log(player.x);
            }
            if(player.index!=null){
                for(var i=0; i<fruitGroup.length; i++){
                    if(fruitGroup.get(i).isTouching(baskets)){
                        fruitGroup.get(i).destroy();
                        player.score += 10;
                        player.update();
                    }
                }
            }
            textSize(25);
            fill("white");
            text('Player1 :'+allPlayers.player1.score,50,50);
            text("Player2: "+allPlayers.player2.score,50,100)
            drawSprites();
        }
    }
    spawnFriuts(){
        if(frameCount%40===0){
            fruit = createSprite(Math.round(random(50,550)),-20,10,10);
            fruit.velocityY = 5;
            fruit.lifetime = 150;
            fruit.depth = basket1.depth;
            fruit.depth = basket2.depth;
            fruit.depth -= 1
            fruitGroup.add(fruit);
        

            var rand = Math.round(random(1,5));
            switch(rand){
                case 1:fruit.addImage(f1);
                break;
                case 2:fruit.addImage('banana',f2);
                break;
                case 3:fruit.addImage('melon',f3);
                break;
                case 4:fruit.addImage('orange',f4);
                break;
                case 5:fruit.addImage('pineapple',f5);
                default:break;
            }
        }
    }
}