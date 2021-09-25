
let movers = [];
drag_coef = 0.05;

function setup() {
  createCanvas(400, 400);

  for(let i = 0; i < 10; ++i) {
    let r = random(5, 20);
    movers[i] = new Mover(random(width), 10, r, r/10);
  }
}

function draw() {
  background(0);
  fill(100, 200, 0);
  noStroke();
  rect(0, height / 2, width, height / 2);

  for (let mover of movers) {
    let gravity = createVector(0, 0.1);
    mover.applyForce(gravity);

    if (mouseIsPressed) {
      let wind = createVector(0.5, 0);
      mover.applyForce(wind);
    }

    if (mover.pos.y > height / 2) {
      mover.drag();
    }
    // mover.friction();
    mover.update();
    mover.show();
    mover.check_edges();
  }
  
}