let particles = [];

function mousePressed() {
 particles.push(new ParticleSystem(mouseX, mouseY));
}

function setup() {
  createCanvas(1000, 700);
}

function draw() {
  background(250);

  let dir = map(mouseX, 0, width, -0.1, 0.1);
  let force = createVector(0, -0.1);
  let wind = createVector(dir, 0);

  for (let particle of particles) {
    particle.applyForce(force);
    particle.applyForce(wind);

    particle.run(2);
    particle.show();
    particle.update();
  }
}