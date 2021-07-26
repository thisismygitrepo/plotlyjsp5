

function setup() {
  createCanvas(600, 600);
  background(0);

  // Screen splitting
  stroke(255);
  strokeWeight(2);
  line(0, height / 2, width, height / 2);

  stroke(255);
  strokeWeight(0.3);


}

function draw() {
  // background(255);
  GRID;
  mousePos();

}
  


