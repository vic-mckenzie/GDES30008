let points = [];
let numPoints = 15;
let currentPoint = 0;
let lineCompleted = true;

function setup() {
  createCanvas(windowWidth, windowHeight-200);
  background(0,0,0,0);
  frameRate(10);
  generateRandomPoints();
  loop();
}

function draw() {
  if (lineCompleted) {
    clear();
    setTimeout(drawNewLine, 5000); // Wait for 2 seconds before drawing a new line
    lineCompleted = false;
  }

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

function drawNewLine() {
  stroke(random(255), random(255), random(255), random(50, 150));
  strokeWeight(random(2, 10));
  generateRandomPoints(); // Generate new random points for a new line
  currentPoint = 0; // Reset currentPoint for the new line
  lineCompleted = true; // Mark the line as completed
}

function generateRandomPoints() {
  points = []; // Clear previous points
  for (let i = 0; i < numPoints; i++) {
    let x = random(50, windowWidth - 50);
    let y = random(100, windowHeight - 200);
    points.push(createVector(x, y));
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  generateRandomPoints(); // Regenerate points when the window is resized
}
