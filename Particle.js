class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(0.5, 2));
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

  edges() {
    if (this.pos.y >= height - this.r) {
      this.pos.y = height - this.r;
      this.vel.y *= -1;
    }

    if (this.pos.x >= width - this.r) {
      this.pos.x = width - this.r;
      this.vel.x *= -1;
    } else if (this.pos.x <= this.r) {
      this.pos.x = this.r;
      this.vel.x *= -1;
    }
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);

    this.lifespan -= 5;
  }

  show() {
    noStroke();
    fill(1, this.lifespan);

    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}