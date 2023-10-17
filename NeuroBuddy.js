//screen = 1 reaction time
//screen = 2 cps game
//screen = 3 line tracing game

var screen = 0; //main menu
let button0;
let button1;
let button2;
let button3;
let img;

function preload() {
  img = loadImage('brain-1.png');
}

function setup() {
  createCanvas(1536, 707);

  button0 = createButton("Main Menu!");
  button0.position(width - 400, height - 150);
  button0.size(100, 150);
  button0.mousePressed(startMenuScreen);
  button0.hide();

  button1 = createButton("Reaction Time!");
  button1.position(width - 100, height - 150);
  button1.size(100, 150);
  button1.mousePressed(startReactionTime);

  button2 = createButton("CPS Game!");
  button2.position(width - 200, height - 150);
  button2.size(100, 150);
  button2.mousePressed(startCPSGame);

  button3 = createButton("Line Tracing Game!");
  button3.position(width - 300, height - 150);
  button3.size(100, 150);
  button3.mousePressed(startLineTracing);
}

function draw() {
  if (screen == 0){
    menuScreen();
  }
  else if(screen == 1){
    reactionTime();
  }
  else if(screen == 2){
    CPSGame();
  }
  else if(screen == 3){
    LineTracing();
  }
}

function menuScreen(){
  background(104, 199, 255);

  fill(0, 75, 132);
  textStyle(BOLD);
  textAlign(CENTER);
  textSize(100);
  text("NeuroBuddy", (2 * width) / 3, height/9.5);

  textSize(32);
  text(
    "Assisting your brain in the recovery\n process",
    (2 * width) / 3,
    (3 * height) / 4
  );

  tint(104, 199, 255);

  image(img, width / 6, 4 * height / 10, 250, 200);
  rect((2 * width) / 3 - 200, (13 * height) / 16 - 300, 400, 150);
}

function reactionTime(){
  //rectangle
  background(0,200,250);
  fill(0,0,255);
  rect(width/7,200,500,300);
  //text
  fill(255);
  textFont("Arial");
  textSize(38);
  text("Click The Blue Box Once It Turns Green!",width/4,height/7);
  //word box
  noFill();
  rect(200,550,350,100);
  fill(255);
  text("ms",450,610);
}

function CPSGame(){
    background(0, 200, 250);
    //rectangle
    fill(0,0,255);
    rect(300,150,1068,300);
    rect(windowWidth/1.6,windowHeight/1.6,100,60);
    rect(windowWidth/1.6,windowHeight/1.4,100,60);
    //text
    textSize(38);
    fill(255);
    text("Click On The Blue Box As Fast As Possible!",windowWidth/1.75,windowHeight/9)
    text("Clicks: ", windowWidth/1.8,windowHeight/1.5)
    text("Time : ",windowWidth/1.8,windowHeight/1.3)

}

function LineTracing(){
  //rectangle
  background(0,200,250);
  fill(0,0,255);
  rect(width/7,200,500,300);
  //text
  fill(255);
  textFont("Arial");
  textSize(38);
  text("Trace The Line!",width/4,height/7);
  //word box
  noFill();
  rect(200,550,350,100);
  fill(255);
  text("ms",450,610);
}

function startMenuScreen(){
  screen = 0;
  button0.hide();
}

function startReactionTime(){
  screen = 1;
  button0.show();
}

function startCPSGame(){
  screen = 2;
  button0.show();
}

function startLineTracing(){
  screen = 3;
  button0.show();
}