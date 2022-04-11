
var kazuhaImg;
var liyue;
var kazuSlash;
var kazu;
var charChosen;
var ground;
var mapImg;
var map;

function preload(){
    kazuhaImg = loadImage('kazu.webp');
    liyue = loadImage('Leewawe.jpg');
    mapImg = loadImage('Map.png');
    kazuSlash = loadSound('kazuhaSlash.mp3');
}

function setup(){
    createCanvas(1280, 500);

    kazu = createSprite(80, 130);
    kazu.addImage('KazuhaBrr', kazuhaImg);
    kazu.scale = 0.05;

    ground = createSprite(544, 480, 1500, 50);
    ground.color = 'black';
    
    map = createSprite(500, 50);
    map.addImage('mapgobrr', mapImg);
    
    map.x = 500;

    charChosen = 'kazu';
}

function draw(){
    background(liyue);

    kazu.collide(ground);

    if (char == "kazu"){
        kazuMove();
    }

    drawSprites();
}

function kazuMove(){

    kazu.velocityY += 1;

    if (keyDown("w") && kazu.y >= 360){
        kazu.velocityY = -8;
    }

    if (keyDown("a")){
        
        if (keyDown('SHIFT')){
            kazu.x -= 5;
        }

        else {
            kazu.x -= 2;
        }
    }

    if (keyDown("d")){

        if (keyDown('SHIFT')){
            kazu.x += 5;
        }
 
        else {
            kazu.x += 2;
        }
    }

    if (keyDown('q')){
        kazuSlash.play();
    }

}