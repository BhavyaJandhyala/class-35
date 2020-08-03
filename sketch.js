var database;
var gameState = 0;
var playerCount;
var form;

function setup(){
    createCanvas(400,400);
    
    game = new Game();
    game.start();
    database = firebase.database();
    
}

function draw(){
    background("white");
    
    drawSprites();
}


