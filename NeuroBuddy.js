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

function preload() {
  img = loadImage('bicep gif.gif');
  hitmarker = loadSound('hitmarker.mp3');
  CBUM = loadImage('CBUM_REAL.png');
  background_gym = loadImage('gym_background.jpg');
  chad_banana = loadImage('chad_banana.jpeg');
  burger = loadImage('burger.png');
  font = loadFont('pixelFont.otf');
  bodyBuilder = loadImage('BodyBuilder (2).png');
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
    LineTracing();
  }
}

function menuScreen() {
  background(background_gym);
  textFont(font);
  stroke(255);
  rect(565, 55, 920, 100);
  rect(690, 225, 650, 100);
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

function LineTracing() {
  background(background_gym);
  
  textFont(font);
  fill('black');
  textSize(70);
  rect(170, 20, 1200, 100);
  fill('white');
  text("Sketch Flex Showdown", 0, 80, width);
  rect((width / 2) - 250, (height / 2) - 232, 500, 480);
  image(bodyBuilder, (width / 2) - 250, (height / 2) - 250, 500, 500);
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
  rect(100, 32, 1325, 60);
  rect(4, 185, 400, 400);
  fill(255);
  textSize(35);
  text("Your reaction times in milliseconds: " + resultTimes, 85, 230 , 250, 420);

  textSize(40);
  text("Click The Box Once A Bananana Appears!", width / 2, height / 9);


  end = false;//lets our code know the countdown hasn't ended yet

  if (mouseIsPressed) {
    startTime = millis(); //start our timer and count up in milliseconds
    //1000 milliseconds = 1 second.
  }
}

function CPSGame() {
  //rectangle
  timeAllowed = 15
  background(background_gym);
  fill('black')
  image(CBUM, (width / 2) - 250, (height / 2) - 250, 500, 500);

  //text
  textFont(font);

  textSize(38);
  stroke('white');
  rect(30, 0, 1425, 75);
  fill('white');
  text("Click CBUM as fast a possible to defeat him!", 725, height / 12);
  //update clicks
  function incrementClicks(){
    if (health > 0 || timer() < timeAllowed) {
      health -= .5;
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
  fill('white');
  text("Timer: " + timer(), 400, 365);
  fill('black');
  rect(600, 550, 350, 100);
  fill(255);
  text("Clicks: " + clicks, 775, 615);
  if (clicks == 0) {
    startTime = millis();
  }
  if (timer() > timeAllowed) {
    end = true;
  }

  if (end == true) {
    text("CPS: " + Math.round(clicks / timeAllowed * 100) / 100, 750, 365);
    textSize(30);
    if (clicks / timeAllowed <= .5) {
      text("Fast, but more practice won't hurt!", 750, 410);
    }
    else if (clicks / timeAllowed <= 3.5) {
      text("Good Job!", 750, 410);
    }
    else if (clicks / timeAllowed <= 5.5)  {
      text("That's definitely faster than most!", 750, 410);
    }
    else if (clicks / timeAllowed <= 8.5) {
      text("Whoa that was lightning fast!", 750, 410);
    }
    else {
      text("GODLIKE!", 750, 410);
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
  noStroke();
  drawWidth = (health / maxHealth) * rectWidth;
  rect(420, 100, drawWidth, 50);
  stroke(0);
  noFill();
  rect(420, 100, rectWidth, 50);
}


function startMenuScreen() {
  screen = 0;
  button0.hide();

  bigButton.hide();
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

function startLineTracing() {
  screen = 3;
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
 textInstructions = "Click to start"; //instructions for the button
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
  textInstructions = "False start. Wait for the color to change! \n Click here to test again."
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