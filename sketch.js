var database;
var player,form,game;
var gameState=0;
var playerCount;
var allPlayers;
var fruitGroup;
var fruit;
var bgImage

var baskets, basket1, basket2;

function preload(){
  bgImage = loadImage('images/forest.png');
  f1 = loadImage('images/apple2.png');
  f2 = loadImage('images/banana2.png');
  f3 = loadImage('images/melon2.png');
  f4 = loadImage('images/orange2.png');
  f5 = loadImage('images/pineapple2.png');
  basketImg = loadImage('images/basket2.png')
}

function setup(){
  createCanvas(600,600);

  database = firebase.database();
  
  game = new Game();
  game.getState();
  game.start();
  
  console.log("Don't forget greeting!!!!!!!!!!!!!!");
}
function draw(){
  background(0,190,160);
  

  if(playerCount===2){
    gameState=1
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  
}