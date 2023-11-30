//screen = 1 reaction time
//screen = 2 cps game
//screen = 3 line tracing game

var screen = 0; //main menu
let button0;
let button1;
let button2;
let button3;

let font;
let hitmarker;
let timeAllowed;
let img;
let Rect;
var startTime; //the beginning of our clock timer
var end = false;
let lobbyMusic;

let bigButton;
var boxSize = 400;//size of the button to press
var rBox = 150; gBox = 150; bBox = 255; //starting button color
var timeStart, timeCurrent, elapsedTime, randomTime; //timing variables
var resultTimes = []; //array that holds the results of the reaction tests
var resultText;
var textInstructions; //current instructions
var startWording = "WAIT!" //language printed when time to start
var waitWording = "GO!"
var waitForGreenTimeout, waitForRedTimeout; //vars to handle the timeouts

let CBUM;
let background_gym;
let chad_banana;
let burger;

let health = 100;
let maxHealth = 100;
let rectWidth = 700;
let clicks = 0;
let addpic=false;

var y=-20;
var x=200;
var speed = 2;
var score= 0;
let creatineCollect;
let gameOver;

function preload() {
  img = loadImage('bicep gif.gif');
  hitmarker = loadSound('hitmarker.mp3');
  CBUM = loadImage('CBUM_REAL.png');
  background_gym = loadImage('gym_background.jpg');
  chad_banana = loadImage('chad_banana.jpeg');
  burger = loadImage('burger.png');
  font = loadFont('pixelFont.otf');
  bodyBuilder = loadImage('BodyBuilder (2).png');
  creatineCollect = loadSound("creatineCollect.mp3");
  gameOver = loadSound("gameOver.mp3");
  lobbyMusic = loadSound("lobbyMusic.mp3");
}

function setup() {
  lobbyMusic.play();
  createCanvas(1536, 707);

  button0 = createButton("Main Menu!");
  button0.position(width - 400, height - 150);
  button0.size(100, 150);
  button0.mousePressed(startMenuScreen);
  button0.hide();

  button1 = createButton("Banana Bulk!");
  button1.position(width - 100, height - 150);
  button1.size(100, 150);
  button1.mousePressed(startReactionTime);

  button2 = createButton("CBUM Chaos!");
  button2.position(width - 200, height - 150);
  button2.size(100, 150);
  button2.mousePressed(startCPSGame);

  button3 = createButton("Creatine Catch!");
  button3.position(width - 300, height - 150);
  button3.size(100, 150);
  button3.mousePressed(startGameOn);

  button0.style('background-color', 'black');
  button0.style('color', 'white');
  button0.style('font-family', "pixelFont");
  button1.style('background-color', 'black');
  button1.style('color', 'white');
  button1.style('font-family', "pixelFont");
  button2.style('background-color', 'black');
  button2.style('color', 'white');
  button2.style('font-family', "pixelFont");
  button3.style('background-color', 'black');
  button3.style('color', 'white');
  button3.style('font-family', "pixelFont");

  resetSketch();
  bigButton.hide();

  rectMode(CENTER);
}
function playLobbyMusic() {
if (screen === 0) {
  lobbyMusic.play();
}
else {
  lobbyMusic.stop();
}
}

function draw() {
  if (screen == 0) {
    menuScreen();
  }
  else if (screen == 1) {
    reactionTime();
  }
  else if (screen == 2) {
    CPSGame();
  }
  else if (screen == 3) {
    startScreen();
  }
  else if (screen == 4) {
    gameOn();
  }
  else if (screen == 5) {
    endScreen();
  }
}

function menuScreen() {
  background(background_gym);
  textFont(font);
  stroke(255);
  rect(1025, 95, 920, 100);
  rect(1025, 275, 650, 100);
  fill(255);
  textStyle(BOLD);
  textAlign(CENTER);
  textSize(100);
  text("StrokeBuddy", (2 * width) / 3, height / 5);

  textSize(32);
  text("Assisting your brain in \nthe recovery process!", (2 * width) / 3, (3 * height) / 8);
  fill(0);
  image(img, -100, 100, 700, 500);
}

function startScreen() {
  button0.show();
  button1.show();
  button2.show();
  button3.show();
  background(background_gym);
  
  fill('black')
  rect(700, 50, 1800, 100);
  textFont(font);
  fill('white');
  textSize(70);
  text('WELCOME TO CREATINE CATCH', width / 2, 75);
  fill("black");
  rectMode(CENTER);
  rect(770, 320, 815, 100);
  fill("white");
  text('click to start', width / 2, height / 2 );
  reset();
}

function gameOn(){
  button0.hide();
  button1.hide();
  button2.hide();
  button3.hide();
	background(background_gym)
  textSize(70);
  rect(768, 10, 888, 100);
  fill('White');
  text("score = " + score, width / 2, 50);
  fill('black');
  ellipse(x,y,42,42)
  fill("white");
  ellipse(x,y,35,35, 67);
  fill("black");
  rectMode(CENTER);
  rect(mouseX,height-10,50,30)
	y+= speed;
  if(y>height){
  	screen =5;
	 }
  if(y>height-10 && x>mouseX-20 && x<mouseX+20){
  	y=-20;
    speed+=.5;
    score+= 1;
  }
	if(y==-20){
  	pickRandom();
  }
}

function pickRandom(){
	x= random(20,width-20)
}

function endScreen(){
  button0.show();
  button1.show();
  button2.show();
  button3.show();
  background(150)
  textSize(70);
  text('GAME OVER', width / 2, 100);
  text("SCORE = " + score, width / 2, height / 2 -100);
  text('click to play again', width / 2, 400);
}

function mousePressed(){
	if(screen==3){
  	screen=4
  }else if(screen==5){
  	screen=3
  }
}

function reset(){
  score=0;
  speed=2;
  y=-20;
}

function reactionTime() {
  background(background_gym);
  textFont(font);
  bigButton.position(width / 3.75, height / 5); //redraws the button
  bigButton.html(textInstructions); //puts the correct text in the button
  bigButton.style('font-family',"pixelFont");
  if (addpic) {
    bigButton.html(`<img src="Chad_Banana.png" width="400" height="500"/>`)
  }
  let col = color(rBox, gBox, bBox); //sets the button's color
  fill(0);  
  stroke(255);
  rect(770, 70, 1050, 50);
  rect(200, 450, 375, 375);
  fill(255);
  textSize(30);
  text("Your reaction times in milliseconds: " + resultTimes, 200, 500 , 250, 420);

  textSize(32);
  text("Click The Box Once A Bananana Appears!", width / 2, height / 9);


  end = false;//lets our code know the countdown hasn't ended yet

  if (mouseIsPressed) {
    startTime = millis(); //start our timer and count up in milliseconds
    //1000 milliseconds = 1 second.
  }
}

function CPSGame() {
  //rectangle
  timeAllowed = 15;
  background(background_gym);
  fill('black');
  image(CBUM, (width / 2) - 250, (height / 2) - 250, 500, 500);

  //text
  textFont(font);

  textSize(32);
  stroke('white');
  rect(775, 43, 1375, 50);
  fill('white');
  text("Click CBUM as fast a possible to try to defeat him!", width / 2, 60);
  //update clicks
  function incrementClicks(){
    if (health > 0 || timer() < timeAllowed) {
      health -= .25;
      clicks++;
      hitmarker.play();
    }
  }
   
  if (mouseX >= 525 && mouseX <= 1020 && mouseY >= 171 && mouseY <= 550 && mouseIsPressed == true && end == false){
    if (mouseIsPressed == true){
      mouseIsPressed = false;
      incrementClicks();
    }
  }
  //word box
  fill('black');
  rect(350,355,300,50);
  fill('white');
  text("Timer: " + timer(), 350, 365);
  fill('black');
  rect(775, 625, 330, 75);
  fill(255);
  text("Clicks: " + clicks, 775, 635);
  if (clicks == 0) {
    startTime = millis();
  }
  if (timer() > timeAllowed) {
    end = true;
  }
  
  if (end == true) {
    fill("black");
    rect(350,440,300,50);
    fill('white');
    text("CPS: " + Math.round(clicks / timeAllowed * 100) / 100, 360, 450);
    textSize(25);
    if (clicks / timeAllowed <= .5) {
      fill("black");
      rect(1245,420,425,60);
      fill("white");
      text("Fast, but more \npractice won't hurt!", 1250, 410);
    }
    else if (clicks / timeAllowed <= 3.5) {
      fill("black");
      rect(1200,400,225,50);
      textSize(30);
      fill('white');
      text("Good Job!", 1200, 410);
    }
    else if (clicks / timeAllowed <= 5.5)  {
      fill("black");
      rect(1215,415,375,65);
      fill('white');
      text("That's definitely \nfaster than most!", 1220, 410);
    }
    else if (clicks / timeAllowed <= 8.5) {
      fill("black");
      rect(1200,415,320,60); 
      fill('white');
      text("Whoa that was \nlightning fast!", 1200, 410);
    }
    else {
      fill("black");
      rect(1200,400,225,40); 
      textSize(30);
      fill('white');
      text("GODLIKE!", 1200, 410);
    }
  }
  if (health < 25) {
    fill(255, 0, 0);
  }
  else if (health < 50) {
    fill(255, 200, 0);
  }
  else {
    fill(0, 255, 0);
  }
  
  drawWidth = (health / maxHealth) * rectWidth;
  rect(750, 110, drawWidth, 50);
  noFill();
  rect(750, 110, rectWidth, 50);
}


function startMenuScreen() {
  screen = 0;
  button0.hide();
  bigButton.hide();
  playLobbyMusic();
}

function startReactionTime() {
  screen = 1;
  button0.show();
  resetSketch();
}

function startCPSGame() {
  screen = 2;
  button0.show();
  health = 100;
  bigButton.hide();
  clicks = 0;
  end = false;
}

function startCreatine() {
  screen = 3;
  button0.show();
  bigButton.hide();
}

function startGameOn() {
  screen = 4;
  button0.show();
  bigButton.hide();
}

function startEndScreen() {
  screen = 5;
  button0.show();
  bigButton.hide();
}

function timer() {
  /* this math takes the current second
  and subtracts our very first second (when the timer started)
  from it in order to keep track of time*/

  var time = int((millis() - startTime) / 1000);

  //If the result of the above math is 30...
  if (end) {
    time = 0;
  } 
  return time; //stop running this function once the timer reaches 30
}



function resetSketch() {
 textInstructions = "Click to start!"; //instructions for the button
  bigButton = createButton(textInstructions); //makes a button
  bigButton.position(10, 10);
  bigButton.size(boxSize * 2, boxSize);
  let col = color('black');
  bigButton.style('background-color', col);
  bigButton.style('font-size', '18px');
  bigButton.style('color', 'white');
  
  bigButton.mousePressed(testButton); //when bigButton is pushed, run function testButton
  if (addpic){
  bigButton.elt.innerHTML += `<img src="Chad_Banana.jpeg" />`
  console.log("Draw")
 }
}

function testButton() {
  randomTime = round(random(1000, 7000)); //pick a time between 1000 and 7000 ms
  textInstructions = "Click here if a banana appears!";
  console.log({e:bigButton.elt})
  waitForGreenTimeout = setTimeout(() => { startTimer(); 
    bigButton.elt.innerHTML += `<img src="Chad_Banana.png" style="opacity:0.2;" />`
  }, randomTime); // in randomTime ms the function startTimer will run
  bigButton.mousePressed(falseStart); //changes what clicking the button does. Now call the function falseStart
}

function falseStart() {
  print("false start");
  clearTimeout(waitForGreenTimeout);
  clearTimeout(waitForRedTimeout);
  rBox = 150; gBox = 150; bBox = 255; //reset color to start
  textInstructions = "False start. \n Click here to test again."
  bigButton.mousePressed(testButton);
  resultTimes.push(" False Start");
}

function startTimer() {
  addpic = true;
  if (random(['green', 'green', 'red']) === 'green') {
    rBox = 255; gBox = 0; bBox = 0;//green
    textInstructions = startWording;
    timeStart = millis();
    bigButton.mousePressed(computeElaspedTime);
  } else {
    rBox = 0; gBox = 255; bBox = 0;//red
    textInstructions = waitWording;
    bigButton.mousePressed(falseStart);
    waitForRedTimeout = setTimeout(redReset, 3000);
  }
}
function redReset() {
  rBox = 150; gBox = 150; bBox = 255; //reset color to start
  textInstructions = "You waited correctly. Click here to test again."
  bigButton.mousePressed(testButton);
  resultTimes.push(" waited");
}
function computeElaspedTime() {
  elapsedTime = round(millis() - timeStart);
  rBox = 150; gBox = 150; bBox = 255; //reset color to start
  textInstructions = "Your reaction time was " + elapsedTime + " ms. \n Click here to test again."
  bigButton.mousePressed(testButton);
  resultTimes.push(' ' + elapsedTime);
  addpic=false;
}