let particles = [];
let candle;

function mousePressed() {
 particles.push(new ParticleSystem(mouseX, mouseY));
}

function setup() {
  createCanvas(1000, 700);
}

function draw() {
  background(40);

  let candle = new Candle();
  candle.showCandleBody();
  candle.showCandleHead();
  candle.showCandleWick();

  let dir = map(mouseX, 0, width, -0.1, 0.1);
  let force = createVector(0, -0.1);
  let wind = createVector(dir, 0);

  for (let particle of particles) {
    particle.applyForce(force);
    particle.applyForce(wind);
    particle.run(10);
    particle.show();
    particle.update();
  }
}



