let particles = [];
let particleSystem;

function setup() {
  createCanvas(1000, 700);
  particleSystem = new ParticleSystem(width/2, height/2);
}

function draw() {
  background(250);
  particleSystem.run(10);
  particleSystem.update();
  particleSystem.show();
}
