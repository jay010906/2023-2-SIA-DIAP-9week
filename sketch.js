let particles = [];

function mousePressed() {
 particles.push(new ParticleSystem(mouseX, mouseY));
}

function setup() {
  createCanvas(1000, 700);
}

function draw() {
  background(250);
  for (let particle of particles) {
     particle.run(2);
    particle.show();
    particle.update();
  }
}