
let walker;


function setup() {
  createCanvas(400, 400);
  walker = new Walker(200, 200);
  background(0, 0);
}

function draw() {
  // background(0);
  walker.update();
  walker.draw();
  
  // translate(height / 2, width / 2);
  v = Vector.random2D();
  v.mult(random(50, 100));
  line(100, 100, v.x, v.y);
}