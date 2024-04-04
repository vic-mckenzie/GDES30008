var fade;
var fadeAmount = 1

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255,255, 255,0);
}


function draw() {
  strokeWeight(10);
  stroke(0, 0, 150, 255);
}

function mouseDragged(){
  line(mouseX,mouseY, pmouseX, pmouseY);
}  

function mouseReleased(){
  background(255,255,255, 50);
  background(255,255,255, 150);
}


//wait 5 seconds
//gradually add background back
