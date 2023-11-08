class Candle {
  constructor(y, w, h) {
    this.y = 500;
    this.w = 100;
    this.h = 300;
  }

  showCandleBody() {
    // candle Body
    push();
    noStroke();
    fill(230);
    for (let i = 100; i < width; i += 200) {
      rect(i - 50, this.y, this.w, this.h);
    }
    pop();
    // candle highlight
    push();
    noStroke();
    fill(235);
    for (let i = 100; i < width; i += 200) {
      rect(i - 45, this.y, this.w - 90, this.h);
    }
    pop();
  }

  showCandleHead() {
    push();
    noStroke();
    fill(240);
    for (let i = 100; i < width; i += 200) {
      ellipse(i, this.y, this.w, this.h - 260);
    }
    pop();
  }

  showCandleWick() {
    push();
    noStroke();
    rectMode(CENTER);
    fill(140);
    for (let i = 100; i < width; i += 200) {
    rect(i, this.y-20, this.w - 95, this.h-260, 70);
    }
    pop();
  }
}