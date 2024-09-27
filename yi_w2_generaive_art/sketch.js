//set up variables for what you want to change
var x = 0

function setup() {
  createCanvas(windowWidth,windowHeight);
  colorMode(RGB);
  // ellipseMode(CENTER);
}

function mousePressed() {
  background(255);
}

function draw() { 
  fill(0);
  x+= 1;
  translate (width/2, height/2);
  fill(random(250), random(250), random(255),90);
  rotate(x);
    ellipse(mouseX,mouseY+200,200,400);
    ellipse(mouseX,mouseY,100,40);
  
  /*function draw() { 
  fill("#e34589");
  ellipse(mouseX,mouseY+200,200,400);
  ellipse(mouseX,mouseY,100,40);*/

  
}
