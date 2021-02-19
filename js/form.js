class Form  {
    constructor(){
        this.input = createInput('Name');
        this.button = createButton('Submit');
        this.greeting = createElement('h1');
        this.title = createElement('h1');
        this.reset = createButton('Reset');
        
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        this.title.hide();
    }

    display(){
        this.input.position(220,200);
        this.button.position(265,250);
        this.title.html('Fruit Catcher Game');
        this.title.position(180,50);
        

        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.updateState(0);
        })

        this.button.mousePressed(()=>{
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.button.hide();
            this.input.hide();
            this.greeting.html('Hello '+ player.name);
            this.greeting.position(200,120);
        })
    }
}