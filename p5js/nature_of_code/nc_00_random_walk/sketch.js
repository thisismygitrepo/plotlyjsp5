
let walker;

function setup() {
  createCanvas(400, 400);
  walker = new RandomWalker(200, 200);
  background(0);
}

function draw() {
  // draw_random_waker();
  draw_random_vectors();
}

function draw_random_waker() {
  background(0);
  walker.update();
  walker.show();
}

function draw_random_vectors() {
  translate(height / 2, width / 2);
  let v = p5.Vector.random2D().mult(random(-100, 100));
  strokeWeight(1);
  stroke(255);
  line(0, 0, v.x, v.y);
}
