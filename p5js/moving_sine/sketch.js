
let angles = [];
let anglev = [];
let r = 5;

function setup() {
  createCanvas(400, 400);
  let total = floor(width / (r * 2));
  for (i=0; i<total; ++i) {
    angles[i] = map(i, 0, total, 0, 4 * PI);
    anglev[i] = 0.01 + i / 100;
  }
}

function draw() {
  background(0);
  translate(200, 200);
  fill(200, 200, 50);
  stroke(200, 100, 200);
  strokeWeight(4);
  noFill();
  beginShape();
  for (let i = 0; i < angles.length; i++) {
    y = map(sin(angles[i]), -1, 1, -200, 200);
    x = map(i, 0, angles.length, -200, 200);
    // circle(x, y, r);
    // line(x, 0, x, y);
    angles[i] = angles[i] + 0.01; //anglev[i];
    vertex(x, y);
  }
  endShape()
}