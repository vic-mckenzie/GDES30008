var img, img2, capture;

function preload(){
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0,0,255);
  imageMode(CENTER);
  capture=createCapture(VIDEO);
  capture.size(width,height);
  capture.hide();
}


function draw() {
  image(capture, width/2, height/2, width/2, height/2);
  let c=capture.get(mouseX, mouseY);
  fill(c);
  circle(mouseX, mouseY, 100);
  filter(POSTERIZE,4);
}
