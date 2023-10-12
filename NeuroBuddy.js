var screen = 0; //main menu
let button;
let img;

function preload() {
  img = loadImage('brain-1.png');
}

function setup() {
  createCanvas(1536, 707);

  button = createButton("Reaction Time!");
  button.position((2 * width) / 3 - 200, (13 * height) / 16 - 300);
  button.size(400, 150);
  button.mousePressed(startGame);
}

function draw() {
  if (screen == 0){
    menuScreen();
  }
  else if(screen == 1){
    reactionTime();
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
  button.hide();
}

function startGame(){
  screen = 1;
}