//screen = 1 reaction time
//screen = 2 cps game
//screen = 3 line tracing game

var screen = 0; //main menu
let button0;
let button1;
let button2;
let button3;
let img;
let Rect;

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
<<<<<<< Updated upstream

  


  Rect = new Car();
  frameRate(60);

  background(0, 200, 250);
  
  textSize(40);
  fill(0, 102, 153);
  text("Click the Box as Fast as Possible!", 500, 90);
  
  
  
  if(frameCount > 30){
      fill('green');
    }
  Rect.show();
=======
  //rectangle
  background(104,199,255);
  fill(0, 75, 132);
  rect(500,200,500,300);
  //text
  fill(255);
  textFont("Arial");
  textSize(38);
  text("Click The Blue Box Once It Turns Green!",width/2,height/9);
  //word box
  fill(0,75,132);
  rect(600,550,350,100);
  fill(255);
  text("ms",900,610);
>>>>>>> Stashed changes
}

function CPSGame(){
    background(104,199,255);
    //rectangle
<<<<<<< Updated upstream
    fill(0,0,255);
    rect(300,150,1068,300);
    rect(width/1.6,height/1.6,100,60);
    rect(width/1.6,height/1.4,100,60);
=======
    fill(0, 75, 132);
    rect(250,150,1068,300);
    rect(width/2,height/1.18,100,60);
    rect(width/2,height/1.4,100,60);
>>>>>>> Stashed changes
    //text
    textSize(38);
    fill(255);
    text("Click On The Blue Box As Fast As Possible!",width/1.75,height/9)
    text("Clicks: ", width/1.8,height/1.5)
    text("Time : ",width/1.8,height/1.3)

}

function LineTracing(){
  
  background(104,199,255);
  
  textSize(32)
  textAlign(CENTER, TOP);
  fill(0,75,132);
  text("Line Tracing", 0, 12, width);
  
  textSize(20);
  textAlign(CENTER, TOP);
  text("Instructions: Trace the circle across the generated line to the designated spot",         0, 50, width);
  
  rect(384, 100, 768, 453);
  if (frameCount % 10 == 0 ) {
    if (drawn < positions1.length) {
      drawn++;
    }
  }
  
  for(let i = 0; i < drawn; i++) {
    fill(104,199,255);
    ellipse(positions1[i][0], positions1[i][1], 10, 10);
  }
  
  print(drawn);
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

let drawn = 0;
let positions1 = [
  [434, 150],
  [444, 160],
  [454, 170],
  [464, 180],
  [474, 190],
  [484, 200],
  [494, 210],
  [504, 220],
  [514, 230],
  [524, 240],
  [544, 240],
  [564, 240],
  [584, 240],
  [604, 240],
  [624, 240],
  [644, 240],
  [664, 240],
  [684, 240],
  [704, 240],
    [704, 240],
  [714, 230],
  [724, 220],
  [734, 210],
  [744, 200],
  [754, 190],
  [764, 180],
  [774, 170],
  [784, 160],
  [794, 150],
  [804, 160],
  [814, 170],
  [824, 180],
  [834, 190],
  [844, 200],
  [854, 210],
  [864, 220],
  [874, 230],
  [884, 240],
  [894, 250],
  [904, 260],
  [914, 270],
    [924, 280],
  [944, 280],
  [964, 280],
  [984, 280],
  [994, 270],
  [1004, 260],
  [1014, 250],
  [1034, 250],
  [1054, 250],
  
]
class Car {
  constructor()
  {
    this.xPos = width/3.75;
    this.yPos = height/5;
  }
  show() {
    rect(this.xPos, this.yPos, 800, 400)
  }
}
