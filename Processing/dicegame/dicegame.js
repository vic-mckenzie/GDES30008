function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0,0,0);
  frameRate(100);
}


function draw() {
  strokeWeight(10);
  stroke(37, 29, 22)
  line(mouseX,mouseY, pmouseX, pmouseY)
}

function mousePressed(){
fill(85,79,72);
circle(mouseX, mouseY, 300);
}
