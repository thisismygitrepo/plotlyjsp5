
class Emitter{
    constructor(x, y) {
        this.position = createVector(x, y);
        this.particles = [];
    }

    emit(num) {
        for (let i=0; i<num; ++i){
            this.particles.push(new Particle(this.position.x, this.position.y, 5, 1))
        }
    }

    update() {  // go through all the particles.
        this.position = createVector(mouseX, mouseY);
        for (let particle of this.particles) {
            let gravity = createVector(0, 0.2);
            particle.applyForce(gravity);

            // mover.friction();
            particle.update();
            particle.check_edges();
            particle.show();
        }

        for (let i = this.particles.length - 1; i > 0; --i) {
            if (this.particles[i].lifetime < 0) {
                this.particles.splice(i, 1)
            }

        }
    }

    show() {
        for (let particle of particles) {
            particle.show();
            }
        }
}