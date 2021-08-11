let ball = {
  x: 300, 
  y: 300,
  xspeed: 4,
  yspeed: -3,
  r: 30,
};

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  // Draw logic
  stroke(255);
  noFill();
  strokeWeight(2);
  ellipse(ball.x, ball.y, ball.r, ball.r);
  
  // bounce logic
  if (ball.x < 0 || ball.x > width) {
    ball.xspeed *= -1;
  }
  if (ball.y < 0 || ball.y > height) {
    ball.yspeed *= -1;
  }
  
  // move logic
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
  
}

