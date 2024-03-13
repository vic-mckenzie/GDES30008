/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

////////////// DRAWING FUNCTION //////////////
class SignTool {
  constructor() {
    this.initVars();
    this.initEvents();
  }

  initVars() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext("2d");
    this.isMouseClicked = false;
    this.isMouseInCanvas = false;
    this.prevX = 0;
    this.currX = 0;
    this.prevY = 0;
    this.currY = 0;
  }

  initEvents() {
    this.canvas.addEventListener("mousemove", (e) => this.onMouseMove(e));
    this.canvas.addEventListener("mousedown", (e) => this.onMouseDown(e));
    this.canvas.addEventListener("mouseup", () => this.onMouseUp());
    this.canvas.addEventListener("mouseout", () => this.onMouseOut());
    this.canvas.addEventListener("mouseenter", (e) => this.onMouseEnter(e));
  }
  
  onMouseDown(e) {
    this.isMouseClicked = true;
    this.updateCurrentPosition(e);
  }
  
  onMouseUp() {
    this.isMouseClicked = false;
  }
  
  onMouseEnter(e) {
    this.isMouseInCanvas = true;
    this.updateCurrentPosition(e);
  }
  
  onMouseOut() {
    this.isMouseInCanvas = false;
  }

  onMouseMove(e) {
    if (this.isMouseClicked && this.isMouseInCanvas) {
      this.updateCurrentPosition(e);
      this.draw();
    }
  }
  
  updateCurrentPosition(e) {
    const rect = this.canvas.getBoundingClientRect();
    const scaleX = this.canvas.width / rect.width;
    const scaleY = this.canvas.height / rect.height;
    this.prevX = this.currX;
    this.prevY = this.currY;
    this.currX = (e.clientX - rect.left) * scaleX;
    this.currY = (e.clientY - rect.top) * scaleY;
}

  
draw() {
  // Draw the line
  this.ctx.beginPath();
  this.ctx.moveTo(this.prevX, this.prevY);
  this.ctx.lineTo(this.currX, this.currY);
  this.ctx.strokeStyle = "black";
  this.ctx.lineWidth = 2;
  this.ctx.stroke();
  this.ctx.closePath();

  // Clear the canvas after 5 seconds
  setTimeout(() => {
      this.clearCanvas();
  }, 5000);
}

clearCanvas() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}


}

var canvas = new SignTool();
