
// P5 Welcome Message by Victoria McKenzie for Interactive Media

/// Code adapted from help of "Work with TextToPoints: Neon Sign Themed by Ed Cavett November 2021" Youtube Video https://www.youtube.com/watch?v=509oTsF-4YQ

let myFont;
let liner;
let msg = [];

function preload() {
  myFont = loadFont("../ASSETS/Vichandwriting-Regular.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight/2);
  msg.push("welcome to my sketchbook");
  
  liner = new lineMaker();
  strokeCap(ROUND);
}

function draw() {
  liner.update();
}

function lineMaker() {
  this.msgswitch = 0;
  this.target = [];
  this.dart = [];
  this.moving = [];
  this.size = 10;
  this.count = -1;
  this.close = 20;
  
  
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

    /// Bake the adjustments to the points array
    /// into the target array locations.
    this.target.push(createVector(setx,
                                  sety));
    this.dart.push(createVector(width/2,
                                height));
  }
  
  
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
    
    /// Advance the dart so long as it is
    /// n distance away from the target.
    if (d > this.close && this.moving[i]) {
      this.dart[i].x = lerp(this.dart[i].x,
                            this.target[i].x,
                            0.99);
      this.dart[i].y = lerp(this.dart[i].y,
                            this.target[i].y,
                            0.99);
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

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }





  