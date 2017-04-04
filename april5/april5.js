var xpos = 200; // x position of ellipse
var ypos = 150; // y position of ellipse
function setup() {
  createCanvas(400, 400);
  noLoop();
}
function draw() {
  background(50);
  stroke(255);
  strokeWeight(8);
  noFill();
  // smaller ellipse to the left
  ellipse(xpos - 100, ypos, 45, 45);
  // smaller ellipse to the right
  ellipse(xpos + 100, ypos, 45, 45);
  // the main attraction
  //ellipse(xpos, ypos, 75, 75);
}