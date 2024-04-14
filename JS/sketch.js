/*
Random Colourful Line Code by Victoria McKenzie for Interactive Media

Base learning of curve vertexes from Youtube 
Creator: Steve's Makerspace
Title: 7: Custom Shapes - Vertex and curveVertex in p5.js: How to Code Generative Art
URL: https://www.youtube.com/watch?v=k49-ETawIMk

Code was then adapted/troubleshooted using generative AI, ChatGPT
*/

let points = [];
let numPoints = 15; //can change to make line longer or shorter
let currentPoint = 0;
let lineCompleted = true;

function setup() {
  createCanvas(windowWidth, windowHeight-100);
  background(0,0,0,0);
  frameRate(10);
  generateRandomPoints();
  loop();
}

function draw() {

  if (lineCompleted) {
    clear(); //to clear the current line
    setTimeout(drawNewLine, 5000); 
    lineCompleted = false;
  }

  noFill();

  beginShape();
  for (let i = 0; i < currentPoint; i++) {
    curveVertex(points[i].x, points[i].y);
  }
  endShape();

  if (currentPoint < numPoints) {
    currentPoint++; //keep incrementing until end
  }
}

function drawNewLine() {
  stroke(random(255), random(255), random(255), random(50, 150));
  strokeWeight(random(2, 10));
  generateRandomPoints(); // make new points for new line
  currentPoint = 0; // reset the current point
  lineCompleted = true;
}

function generateRandomPoints() {
  points = []; // clear prev points
  for (let i = 0; i < numPoints; i++) {
    let x = random(50, windowWidth - 50); // keep it central-ish
    let y = random(50, windowHeight - 200); // to protect the title, instead of having line go over h1
    points.push(createVector(x, y));
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  generateRandomPoints(); // make new points when resizng window
}
