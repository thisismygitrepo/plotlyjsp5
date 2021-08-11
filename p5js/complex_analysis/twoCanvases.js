
// import mathjs from "../../node_modules/mathjs"
//
// a = mathjs.complex(3, 2);

w1 = 630;
w2 = 550;

data = {};
for(let i=0; i<5; ++i){
    data[i] = {"ip": [], "op": [], "color": "white"};
}
act = 0;  // activated curve.
color = "white";  // activated color.

let xmin = -4;
let xmax = 4;
let ymin = -4;
let ymax = 4;

function func(x, y) {
    z = Complex(x, y)
    w = z.pow(2).add(1, 0);
    return [w.re, w.im]
}

function grid(sketch){
    for (let x=0; x<sketch.width; x+=20){
        sketch.stroke(80);
        sketch.strokeWeight(1);
        sketch.line(x, 0, x, sketch.height);
    }

    for (let y=0; y<sketch.height; y+=20){
        sketch.stroke(80);
        sketch.strokeWeight(1);
        sketch.line(0, y, sketch.width, y);
    }

    sketch.stroke(255);
    sketch.strokeWeight(1);
    sketch.line(0, sketch.height / 2, sketch.width, sketch.height / 2);  // x axis
    sketch.line(sketch.width / 2, 0, sketch.width / 2, sketch.height);  // y axis

}

const s1 = ( sketch ) => {
    sketch.setup = () => {

        let canvas = sketch.createCanvas(w1, w2);
        // canvas.position(300, 300)
        sketch.background(20);
        grid(sketch);
    };
    sketch.draw = () => {
    };
};

const s2 = ( sketch ) => {
    sketch.setup = () => {
        let canvas = sketch.createCanvas(w1, w2);
        canvas.position(w1 + 10, 18)
        sketch.background(0);
        grid(sketch);
    };

    sketch.draw = () => {
    };
};

let ip = new p5(s1);
let op = new p5(s2);

function process_point() {
    x = ip.mouseX * (xmax - xmin) / ip.width + xmin;
    y = ip.mouseY * (ymin - ymax) / ip.height + ymax;
    [u, v] = func(x, y);
    let xx = (u - xmin) * ip.width / (xmax - xmin);
    let yy = (v - ymax) * ip.height / (ymin - ymax);
// console.log(x, y, xx, yy, u, v);
    op.stroke(255);
    op.strokeWeight(3);
    op.point(xx, yy);

    ip.stroke(255);
    ip.strokeWeight(3);
    ip.point(ip.mouseX, ip.mouseY);

    data[act].ip.push([ip.mouseX, ip.mouseY]);
    data[act].op.push([xx, yy]);
    plot(ip, data[act].ip);
    plot(op, data[act].op);

}

function plot(sk, points) {
    sk.stroke(data[act].color);
    sk.strokeWeight(3);
    sk.noFill();
    sk.beginShape();
    for(let i=0; i<points.length; ++i){
        sk.vertex(points[i][0], points[i][1]);
    }
    sk.endShape();
}

ip.keyPressed = process_point;

document.addEventListener("DOMContentLoaded", () => {

    document.querySelector("#reset").onclick = () => {
        ip.erase();
        plot(ip, data[act].ip);
        ip.noErase();
        data[act].ip = [];
        data[act].op = [];
    };

    document.querySelector("#colors").onchange = function() {
        data[act].color = this.value;
    };

    document.querySelector("#curves").onchange = function() {
        act = Number(this.value);
    };

});