
class Mover{
  constructor(x, y){
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D().mult(random(3));
    this.acc = p5.Vector.random2D().mult(random(3));
    this.acc.setMag(0.01);
  }

  update(){
    let mouse = createVector(mouseX, mouseY);
    this.acc = p5.Vector.sub(mouse, this.pos);
    this.acc.setMag(5);
    // background(v.mag());

    this.vel.add(this.acc);
    this.vel.limit(2);
    this.pos.add(this.vel);
  }

  show(){
    strokeWeight(2);
    stroke(255);
    fill(100, 200, 100);
    ellipse(mover.pos.x, mover.pos.y, 10, 10);

  }

}