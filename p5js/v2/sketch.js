
let mover;

function setup() {
  createCanvas(400, 400);
  mover = new Mover();
}

function draw() {
  
  background(0);

  // line(0, 0, v.x, v.y);
  mover.update();
  mover.draw();
  
}