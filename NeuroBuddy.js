//screen = 1 reaction time
//screen = 2 cps game
//screen = 3 line tracing game

var screen = 0; //main menu
let button0;
let button1;
let button2;
let button3;
let cPSButton;
let img;
let Rect;
var startTime; //the beginning of our clock timer
var end = false;
let hitmarker;

//reaction time global variables
let shapeX = 434;
let shapeY = 150;
const radius = 25;
const diameter = radius * 2;
let shapeMove = false;
let mouseDraw = false;
let pts = [];
let strokeCol;

let clicks = 0;

function preload() {
  hitmarker = loadSound('hitmarker.mp3');
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

  cPSButton = createButton("Click Me!");
  cPSButton.position(500,200);
  cPSButton.size(500,300);
  cPSButton.hide();

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
  text("NeuroBuddy", (2 * width) / 3, height/5);

  textSize(32);
  text("Assisting your brain in the recovery\n process", (2 * width) / 3, (3 * height) / 8);
  tint(104, 199, 255);

  image(img, width / 6, 4 * height / 10, 250, 200);
  }

function reactionTime(){
  Rect = new Car();
  background(104,199,255);  
  
  textSize(40);
  fill(0,75,132);
  text("Click The Blue Box Once It Turns Green!", 800, height/9);
  
  if (timer() > 2) {
    fill('green');
  }
 
  Rect.show();
  
  end = false;//lets our code know the countdown hasn't ended yet

  if (mouseIsPressed) {
    startTime = millis(); //start our timer and count up in milliseconds
    //1000 milliseconds = 1 second.
  }
  
}

function CPSGame(){
  //rectangle
  background(104, 199, 255);
  fill(0, 75, 132);
  rect(500, 200, 500, 300);
  //text
  fill(0, 75, 132);
  textFont("Arial");
  textSize(38);
  text("Click Box As Fast As Possible!", width / 2, height / 9);
  //update clicks
  function incrementClicks(){
    clicks++;
    hitmarker.play();
  }
  cPSButton.mouseClicked(incrementClicks);
  //word box
  fill(0,75,132);
  text("Timer: " + timer(), 400, 365);
  rect(600, 550, 350, 100);
  fill(255);
  text("Clicks: " + clicks, 775, 615);
  if (clicks == 0) {
    startTime = millis();
  }
  if (timer() >= 5 ) {
    text("CPS: " + clicks / 5, 775, 365);
    cPSButton.hide();
    end = true;
  }
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
  
  fill(104,199,255)
  circle(shapeX, shapeY, diameter);

  if(shapeMove) {
  noFill()
  stroke(strokeCol)
  strokeWeight(20)
  // beginShape()
  for (let i = 0; i < pts.length; i++) {
    const pt = pts[i]
    if (i === 0) curveVertex(pt.x, pt.y) // repeat first vertex
    curveVertex(pt.x, pt.y)
    if (i === pts.length - 1) curveVertex(pt.x, pt.y) // repeat last vertex
  }
  endShape()
  }
  }


function mousePressed () {
  let d = dist(mouseX, mouseY, shapeX, shapeY)
  if (d < radius) {
    shapeMove = true;
  }
  else {
    shapeMove = false;
  }

}

function mouseReleased() {
  shapeMove = false;
  shapeX = 434;
  shapeY = 150;
  pts = []
  pts.push(new p5.Vector(mouseX, mouseY))
  strokeCol = color(random(255), random(255), random(255))
}

function mouseDragged() {
  if(shapeMove) {
    shapeX = mouseX
    shapeY = mouseY
    pts.push(new p5.Vector(mouseX, mouseY))
  }
}

function startMenuScreen(){
  screen = 0;
  button0.hide();
  cPSButton.hide();
}

function startReactionTime(){
  screen = 1;
  button0.show();
  cPSButton.hide();
}

function startCPSGame(){
  screen = 2;
  button0.show();
  cPSButton.show();
  clicks = 0;
  
}

function startLineTracing(){
  screen = 3;
  button0.show();
  cPSButton.hide();
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

function timer() {
  /* this math takes the current second
  and subtracts our very first second (when the timer started)
  from it in order to keep track of time*/

  var time = int((millis() - startTime) / 1000);

  //If the result of the above math is 30...
  if (end) {
    time = 0;
    end = false;
  }
  return time; //stop running this function once the timer reaches 30
}
