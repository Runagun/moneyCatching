
//------------------------------------------- variabler

let appleY = -15;
let appleSize = 20;
let kurvY;
let appleX;
let kurvSize = 35;
let appleSpeed = 1;
let distance;
let score = 0;
let appleImg;
let bitcoin;
let bakgrunn1;
let gameOver;

 

//------------------------------------------- setup draw


function setup() {
  appleImg = loadImage("lommebok.png");
  bitcoinImg = loadImage("bitcoin.png");
  bakgrunn1 = loadImage("bakgrunn1.png");
  gameOver = loadImage("gameOver.png");
  createCanvas(displayWidth, displayHeight);
  kurvY = displayHeight - 50;
  appleX = displayWidth/2;
}

 

function draw() {
  image(bakgrunn1,0,0)
  //background(220);
  eple();
  kurv();
  poengTekst();
}

 

//------------------------------------------- eple

function eple() {
  image(bitcoinImg, appleX-9, appleY-8);
  //circle(appleX, appleY, appleSize);
  appleY = appleY + appleSpeed;

 

  if (appleY >= displayHeight) {
    tekst();
    appleSpeed = 1;
  }
}

 

//------------------------------------------- kurv

function kurv() {

    image(appleImg, mouseX-20, kurvY);
  //circle(mouseX, kurvY, kurvSize);

  distance = dist(mouseX, kurvY, appleX, appleY);


  if (distance < 25) {
    score = score + 1;
    appleY = -15;
    appleSpeed = appleSpeed + 1;
    appleX = random(15, 385);
  }
}

//------------------------------------------- text

function tekst() {
  fill(255, 0, 0, 100);
  rect(0,0,displayWidth,displayHeight,)
  image(gameOver, displayWidth/2, displayHeight/2);
  textAlign(CENTER);
  textSize(30);
  //text("GAME OVER", 200, 200);
  noLoop();
}

 

//------------------------------------------- mouseClick

function mouseClicked() {
  appleY = -15;
  score = 0;
  loop();
}

 

//------------------------------------------- Poeng

function poengTekst(){
  fill("white");
  textSize(25);
  textAlign(LEFT);
  text("Coins: "+ score,20,30);
}
