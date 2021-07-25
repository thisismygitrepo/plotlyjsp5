
class Walker{
  constructor(x, y){
    this.pos = createVector(x, y);
    this.vel = createVector(1, 0);
  }
  
  update(){
    this.pos.x = this.pos.x + random(-1, 1);
    this.pos.y = this.pos.y + random(-1, 1);
    // this.pos.add(this.vel);

  }
  
  draw(){
    stroke(255, 100);
    strokeWeight(2);
    fill(255, 100);
    ellipse(this.pos.x, this.pos.y, 5, 5);
    
  }
  
}