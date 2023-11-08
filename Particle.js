class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(0.5, 4));
    this.acc = createVector(0, 0);
    this.r = 4;
    this.lifespan = 255;
  }

  isDead() {
    return this.lifespan < 0;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
    this.lifespan -= 15;
  }

  show() {
    noStroke();
    fill(230, 180, this.lifespan);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}