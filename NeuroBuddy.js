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
<<<<<<< HEAD
var startTime; //the beginning of our clock timer
var end = false;


=======
let clicks = 0;
>>>>>>> a3e3193e6444604ae3c0d1fe4d7e2dcdbbf983d6

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
  if (end) {//after the timer has started AND when it ends...
    background(23, 245, 220);
    drawSquare();
    text("Time's Up!", 55, 50);
    if (mouseIsPressed) {//after Time is Up,...
      redraw();//redraw the canvas and start everything over!
    }
  }
  Rect = new Car();
 
  
  
  
  background(104,199,255);  
  
  textSize(40);
  fill(0,75,132);
  text("Click The Blue Box Once It Turns Green!", 800, height/9);
  
 
  Rect.show();
  
  end = false;//lets our code know the countdown hasn't ended yet
  background(23, 245, 220);
  fill(0);
  text("Current second: \n" + timer(), width/2-25, height/2);

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
  text("Click Box As Fast As Possible!",width/2,height/9);
  //update clicks
  function incrementClicks(){
    clicks++;
    updateCPS();
  }
  cPSButton.mouseClicked(incrementClicks);  
  //word box
  fill(0,75,132);
  rect(600, 550, 350, 100);
  fill(255);
  function updateCPS(){
    text("CPS: " + clicks, 775, 615);
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
  
  print(drawn);
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
  if (time > 30) {
    end = true; //Signal the rest of the code to end the timer
  }
  return time; //stop running this function once the timer reaches 30
}
