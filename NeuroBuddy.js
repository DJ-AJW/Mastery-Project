//screen = 1 reaction time
//screen = 2 cps game
//screen = 3 line tracing game

var screen = 0; //main menu
let button0;
let button1;
let button2;
let button3;
let cPSButton;
//let timeAllowedInput;
//let timeAllowedButton;
let hitmarker;
let img;
let Rect;
var startTime; //the beginning of our clock timer
var end = false;

//reaction time global variables
// let shapeX = 434;
// let shapeY = 150;
// const radius = 25;
// const diameter = radius * 2;
// let shapeMove = false;
// let mouseDraw = false;
// let pts = []
// let strokeCol

let bigButton;
var boxSize=400;//size of the button to press
var rBox=150;gBox=150;bBox=255; //starting button color
var timeStart, timeCurrent, elapsedTime, randomTime; //timing variables
var resultTimes=[]; //array that holds the results of the reaction tests
var resultText; 
var textInstructions; //current instructions
var startWording="WAIT!" //language printed when time to start
var waitWording="GO!" 
var waitForGreenTimeout, waitForRedTimeout; //vars to handle the timeouts


let clicks = 0;

function preload() {
  img = loadImage('brain-1.png');
  hitmarker = loadSound('hitmarker.mp3');
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

  resetSketch();
  bigButton.hide();
  
  //timeAllowedInput = createInput();
  //timeAllowedButton = createButton('Change Time!');
  //timeAllowedInput.position(width / 2, 2 * height / 9);
  //timeAllowedButton.position((width / 2) - 100, 2 * height / 9);
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

  bigButton.position(width/3.75, height/5); //redraws the button
  bigButton.html(textInstructions); //puts the correct text in the button
  let col=color(rBox,gBox,bBox); //sets the button's color
  bigButton.style('background-color', col);
  //textSize(14);
  //text("Reaction Time Tester, Mode C",10,15);
  text("Your reaction times in milliseconds: \n \n"+resultTimes,10,230,250,420);
  
  textSize(40);
  fill(0,75,132);
  text("Click The Blue Box Once It Turns Green!", 800, height/9);
  
  
  end = false;//lets our code know the countdown hasn't ended yet

  if (mouseIsPressed) {
    startTime = millis(); //start our timer and count up in milliseconds
    //1000 milliseconds = 1 second.
  }
  
}

function CPSGame(){
  let timeAllowed = 5;
  //if (timeAllowedButton.mouseClicked()) {
  //  timeAllowed = timeAllowedInput.value();
  //}

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
  if (timer() >= timeAllowed ) {
    text("CPS: " + clicks / timeAllowed, 775, 365);
    cPSButton.hide();
    end = true;
  }
}


function startMenuScreen(){
  screen = 0;
  button0.hide();
  cPSButton.hide();
  bigButton.hide();
  //timeAllowedInput.hide();
  //timeAllowedButton.hide();
}

function startReactionTime(){
  screen = 1;
  button0.show();
  cPSButton.hide();
  resetSketch();
  //timeAllowedInput.hide();
  //timeAllowedButton.hide();
}

function startCPSGame(){
  screen = 2;
  button0.show();
  cPSButton.show();
  bigButton.hide();
  //timeAllowedInput.show();
  //timeAllowedButton.show();
  clicks = 0;
  
}

// function startLineTracing(){
//   screen = 3;
//   button0.show();
//   cPSButton.hide();
//   bigButton.hide();
//   //timeAllowedInput.hide();
//   //timeAllowedButton.hide();
// }

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

function resetSketch() {
  
  textInstructions="Click to start"; //instructions for the button
  bigButton=createButton(textInstructions); //makes a button
  bigButton.position(10,10);
  bigButton.size(boxSize * 2,boxSize);
  let col=color(rBox,gBox,bBox);
  bigButton.style('background-color', col);
  bigButton.style('font-size', '18px');
  bigButton.mousePressed(testButton); //when bigButton is pushed, run function testButton
}

function testButton(){
  rBox=255;gBox=255;bBox=0; //yellow
  randomTime= round(random(1000,7000)); //pick a time between 1000 and 7000 ms
  textInstructions="Click here if it says "+startWording+" but don't click if it says "+waitWording;
  waitForGreenTimeout=setTimeout(startTimer,randomTime); // in randomTime ms the function startTimer will run
  bigButton.mousePressed(falseStart); //changes what clicking the button does. Now call the function falseStart
}

function falseStart(){
  print("false start");
  clearTimeout(waitForGreenTimeout);
  clearTimeout(waitForRedTimeout);
  rBox=150;gBox=150;bBox=255; //reset color to start
  textInstructions="False start. Wait for the color to change! \n Click here to test again."
  bigButton.mousePressed(testButton);
  resultTimes.push(" False Start");
}

function startTimer(){
  if(random(['green','green','red'])==='green') {
    rBox=255;gBox=0;bBox=0;//green
    textInstructions=startWording;
    timeStart=millis();
    bigButton.mousePressed(computeElaspedTime);
  } else {
    rBox=0;gBox=255;bBox=0;//red
    textInstructions=waitWording;
    bigButton.mousePressed(falseStart);
    waitForRedTimeout=setTimeout(redReset,3000);
  }
}
function redReset() {
  rBox=150;gBox=150;bBox=255; //reset color to start
  textInstructions="You waited correctly. Click here to test again."
  bigButton.mousePressed(testButton);
  resultTimes.push(" waited");
}
function computeElaspedTime(){
  elapsedTime=round(millis()-timeStart);
  rBox=150;gBox=150;bBox=255; //reset color to start
  textInstructions="Your reaction time was "+elapsedTime+" ms. \n Click here to test again."
  bigButton.mousePressed(testButton);
  resultTimes.push(' '+elapsedTime);
}