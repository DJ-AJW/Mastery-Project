let button;
let img;

function preload() {
  img = loadImage('brain-1.png');
}

function setup() {
  createCanvas(1536, 707);

  button = createButton('Start!');
  button.position((2 * width / 3) - 175, (13 * height / 16) - 150);
  button.size(200, 125);
  button.mousePressed(changeWindow);
}

function draw() {
  background(104,199,255);
  
  fill(0,75,132);
  textStyle(BOLD);
  textAlign(CENTER);
  textSize(100);
  text("NeuroBuddy", 2 * width / 3, height / 3);
  
  textSize(32);
  text("Assisting your brain in the recovery\n process", 2 * width / 3, 3 * height / 4);
  
  tint(104,199,255);
  image(img, width / 6, height / 3, width / 4, height / 2);
  
  rect((2 * width / 3) - 175, (13 * height / 16) - 150, 200, 125);
}

function changeWindow(){
  fill(255);
  rect(0,0,1536, 707);
  
}