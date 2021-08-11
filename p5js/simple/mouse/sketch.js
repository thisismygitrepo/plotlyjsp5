let on = true;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  stroke(255);  // white pen
  strokeWeight(4);  // width of brush
  noFill();
  rectMode(CENTER);
  // console.log(mouseX);

    if (mouseX > 100 && mouseX < 200 && mouseY > 100 && mouseY <200){
    fill(255, 255, 0)
  }
  
  // if (on){
  //   background(200);
  // } else {
  //   background(0, 0, 100)
  // }
  
  if (mouseIsPressed){
      background(100);
  }
  
  
  rect(100, 100, 100, 100)

  
}

function mousePressed(){
  on = !on;
}
