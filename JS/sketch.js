let points = [];
let numPoints = 10;
let currentPoint = 0;

function setup() {
  createCanvas(200, 200);
  frameRate(13);
  generateRandomPoints();
  stroke(random(255),random(255),random(255), random(50, 150));
  strokeWeight(random(2,10))
}

function draw() {
  noFill();

  beginShape();
  for (let i = 0; i < currentPoint; i++) {
    curveVertex(points[i].x, points[i].y);
  }
  endShape();


  if (currentPoint < numPoints) {
    currentPoint++;
  }
}
  
function generateRandomPoints() {
  for (let i = 0; i < numPoints; i++) {
    let x = random(15, 185);
    let y = random(15, 185);
    points.push(createVector(x, y));
  }
}

