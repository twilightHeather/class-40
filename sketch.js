var database, playerCount, gameState = 0
var form, game, player;
var allPlayers;
var car1,car2,car3,car4,cars
var track,car1_img,car2_img,car3_img,car4_img,ground

function preload(){
track = loadImage("images/track.jpg")
car1_img = loadImage("images/car1.png")
car2_img = loadImage("images/car2.png")
car3_img = loadImage("images/car3.png")
car4_img = loadImage("images/car4.png")
ground = loadImage("images/ground.png")
}

function setup(){
    database = firebase.database();
    createCanvas(displayWidth-20,displayHeight-30);

    game = new Game()
    game.getState()
    game.start()
  
}

function draw(){
    background("white");
    if(playerCount == 4){
        game.update(1)
    }
    if(gameState==1){
        game.play()
    }
    if(gameState==2){
        game.end()
    }
}

