let particles = [];

function setup() {
  createCanvas(1000, 700);
}

function draw() {
  background(250);
  for (let i = 0; i < 10; i++) {
    particles.push(new Particle(width/2, height/2));
  }

  for (let particle of particles) {
    let gravity = createVector(0, 0.1);
    particle.applyForce(gravity);
    particle.update();
    particle.show();
  }

  for (let i = particles.length - 1; i >= 0; i--) {
    if (particles[i].isDead()) {
      particles.splice(i, 1);
    }
  }
}
