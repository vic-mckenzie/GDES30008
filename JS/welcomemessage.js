
/*
P5 Welcome Message by Victoria McKenzie for Interactive Media

This animation has been adapted from an example on Youtube that made a Neon light effect
Creator: Ed Cavett
Title: Work with TextToPoints: Neon Sign Themed by Ed Cavett November 2021
URL: https://www.youtube.com/watch?v=509oTsF-4YQ

Code was then adapted/troubleshooted both personally, and using generative AI, ChatGPT
*/

let myFont;
let liner;
let msg = [];

function preload() {
  myFont = loadFont("../ASSETS/Vichandwriting-Regular.otf"); //link custom font
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  msg.push("welcome to my sketchbook");
  
  liner = new lineMaker();
  strokeCap(ROUND);
  frameRate(100);
}

function draw() {
  liner.update();
  if (mouseIsPressed){
    strokeWeight(4);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function lineMaker() {
  this.msgswitch = 0;
  this.target = []; //target array that holds the untouched values
  this.dart = []; //dart array tracks the current drawing (maps points onto values from target array)
  this.moving = [];
  this.size = 10; //text size
  this.count = -1;
  this.close = 20; //this is important for the connections between the letters to be smooth and not dotty
  
  
  let m = msg[this.msgswitch];
  this.anchor = myFont.textToPoints(m, 0, 0, 10, {
    sampleFactor: 2,
    simplifyThreshold: 0.0,
  });
  
  //to find, and then center the text
  let centertext = 0;  
  for (let i = 0; i < this.anchor.length; i++) {
    this.anchor[i].x *= this.size;
    this.anchor[i].y *= this.size;
    if (centertext < this.anchor[i].x) {
      centertext = this.anchor[i].x;
    }
    this.moving.push(0);
  }
  let center = width/2-centertext/2;
  
  for (let i = 0; i < this.anchor.length; i++) {
    let setx = this.anchor[i].x+center;
    let sety = this.anchor[i].y+(height/2);

  //centre both the target and dart array values
    this.target.push(createVector(setx,
                                  sety));
    this.dart.push(createVector(width/2,
                                height));
  }
  
  //to track the movement of the line and darts
  this.update = function() {
    this.count += 1;
    let last = this.anchor.length-1;
    let endDist = dist(this.target[last].x,
                       this.target[last].y,
                       this.dart[last].x,
                       this.dart[last].y);
    if (this.count > this.anchor.length &&
      endDist < this.close) {
      this.count = last;
      
    }
    this.moving[this.count] = 1;
    for (let i = 0; i < this.anchor.length; i++) {
      let tarx = this.target[i].x;
      let tary = this.target[i].y;
      this.throw(i,tarx,tary);
    }
  };
  
  this.throw = function(i,tarx,tary){
    let dx = this.dart[i].x;
    let dy = this.dart[i].y;
    let tx = tarx;
    let ty = tary;
    let d = dist(dx,dy,tx,ty);
    

    //keep moving the dart as long as its n distance away
    if (d > this.close && this.moving[i]) {
      this.dart[i].x = lerp(this.dart[i].x,
                            this.target[i].x,
                            0.99);
      this.dart[i].y = lerp(this.dart[i].y,
                            this.target[i].y,
                            0.99);
    //lerp is linear interpolation and is used to control the velocity 
    //e.g. the last number could be randomized, but 0.99 keeps constant
    }
    push();
    strokeWeight(3);
    if (i > 0) {
      let distBetween = dist(this.dart[i].x,
             this.dart[i].y,
             this.dart[i-1].x,
             this.dart[i-1].y);
      if (distBetween < this.size*2) {
          stroke(0,255);
          strokeWeight(3);
   
        line(this.dart[i].x,
             this.dart[i].y,
             this.dart[i-1].x,
             this.dart[i-1].y);
        }
    }
    pop();
  }
}  





  