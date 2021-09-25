
class Particle {

  constructor(x, y, r, m){
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(0.5,2))
    this.acc = createVector(0, 0);
    this.r = r;  // radius
    this.m = m;  // mass
    this.lifetime = 255; // we choose this number because we want to tie the lifetime to the transparancy
    // the objects starts fully opaque and then fades away.
  }

  applyForce(force){
    this.acc.add(p5.Vector.div(force, this.m));  // avoiding using .div method which will change the force value and make it useless for other methods.
  }

  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
    this.lifetime -= 5;
  }

  show(){
    strokeWeight(1);
    stroke(255, alpha=this.lifetime);
    fill(200, 100, 100, alpha=this.lifetime);
    ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
  }

  check_edges(){
    if (this.pos.y >= height - 1 * this.r) {
        this.pos.y = height - this.r;
        this.vel.y *= -1;
    }
    if (this.pos.x >= width - 1 * this.r) {
      this.pos.x = width - this.r;
      this.vel.x *= -1;
    }
    if (this.pos.x <= 1 * this.r) {
      this.pos.x = this.r;
      this.vel.x *= -1;
    }
  }

  friction() {
    let diff = height - (this.pos.y + this.r)
    if (diff < 1) {
      this.vel.mult(0.95);
    }
    // ideally, the friction should be computed by its law: Friction Force = Normal * unit veocity vector * coefficient.
  }

  drag() {
    let drag = this.vel.copy();
    drag.normalize().mult(-1);
    let speed = this.vel.mag();
    drag.mult(speed * speed * drag_coef);
    this.applyForce(drag);

  }

}
