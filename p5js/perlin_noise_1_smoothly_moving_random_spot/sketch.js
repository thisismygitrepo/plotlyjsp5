
xoff1 = 0;
xoff2 = 1000;
let start = 0;
let zoff = 0;

function setup() {
  createCanvas(400, 400);

  pixelDensity(1);
  noiseDetail(32, 0.5);
}

function draw() {
  // draw_smoothly_moving_circle();
  // draw_random_curve();
  draw_perlin();
  // draw_random();
  // draw_random_moving_curve();
}

function draw_smoothly_moving_circle() {
  background(0);
  let xx = map(noise(xoff1), 0, 1, 0, width);
  let yy = map(noise(xoff2), 0, 1, 0, width);

  xoff1 += 0.01;
  xoff2 += 0.01;
  ellipse(xx, yy, 20, 10);

}

/// Lesson: Perlin noise is seeded at the begining of running the program. It is a fixed smooth random curve.

function draw_random_curve() {

  background(0);

  noFill();
  stroke(255);
  beginShape();

  xoff1 = 0;  // Try to move this to the top
  // Thus, you will move in the perlin noise continuously.

  for (let i=0; i<width; ++i) {
    // let y = random(height);
    let y = noise(xoff1) * height;
    vertex(i, y);
    xoff1 += 0.01;  // the fractal-like property of perlin noise is manifested in this quantity.

  }
  endShape();

  // noLoop();

}

function draw_perlin() {
  background(0);
  loadPixels();

  let yoff = 0;
  for(let y=0; y<height; y++) {
    let xoff = 0;
    for (let x=0; x<width; x++) {
      let index = (x + y * width) * 4;
      let r = noise(xoff, yoff, zoff) * 255;
      pixels[index + 0] = r;
      pixels[index + 1] = r;
      pixels[index + 2] = r;
      pixels[index + 3] = 255;

      xoff += 0.01;
    }
    yoff += 0.01;
  }
  zoff += 0.05;
  updatePixels();
}


function draw_random() {
  background(0);
  loadPixels();
  for (let x=0; x<width; x++) {
    for(let y=0; y<height; y++) {
      let index = (x + y * width) * 4;
      let r = random(255);
      pixels[index + 0] = r;
      pixels[index + 1] = r;
      pixels[index + 2] = r;
      pixels[index + 3] = 255;
    }
  }
  updatePixels();
}


function draw_random_moving_curve() {
  background(0);

  noFill();
  stroke(255);
  beginShape();
  xoff1 = start;

  for (let i=0; i<width; ++i) {
    // let y = random(height);
    let y = noise(xoff1) * height / 4 + sin(xoff1) * 50;
    // You can change the noise function
    vertex(i, y);
    xoff1 += 0.01;  // the fractal-like property of perlin noise is manifested in this quantity.

  }
  endShape();
  start += 0.01;
  // noLoop();
}

