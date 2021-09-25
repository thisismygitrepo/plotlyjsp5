
let particles = [];
let emitters = [];

function setup(){
  // setup_draw_one_system();
  setup_draw_systems();
}
function draw() {
  // draw_one_system();
  draw_systems();
}

function setup_draw_one_system() {
  createCanvas(400, 400);
}


function mousePressed(){
  emitters.push(new Emitter(mouseX, mouseY))
}

function setup_draw_systems() {
  createCanvas(400, 400);
  // emitter = new Emitter(200, 20);
}



function draw_one_system() {
  background(0);

  for (let i = 0; i < 1; i++) {
    particles.push(new Particle(200, 20, 5, 1));
  }

  for (let particle of particles) {

    let gravity = createVector(0, 0.2);
    particle.applyForce(gravity);

    // mover.friction();
    particle.update();
    particle.check_edges();
    particle.show();
  }

  for (let i=particles.length - 1; i > 0; --i){
    if (particles[i].lifetime < 0) {
      particles.splice(i, 1)
    }
  }
}

function draw_systems(){
  background(0);
  for (let emitter of emitters) {
      emitter.emit(2);
      emitter.show();
      emitter.update();
  }

}