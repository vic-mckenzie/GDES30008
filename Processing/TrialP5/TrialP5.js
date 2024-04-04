var rainbow;
rainbow="#FF0";

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(rainbow);
  frameRate(4);
}


function draw() {
  background(rainbow);
  strokeWeight(20);
  stroke(255, 255, 255)
  fill(100,0,100);
  //circle(mouseX, mouseY, 20)
  line(mouseX,mouseY, pmouseX, pmouseY)
    //rainbow=([random(256), random(256), random(256)]);
}

function mousePressed(){
  rainbow=([random(256), random(256), random(256)]);
}
