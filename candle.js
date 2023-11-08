class Candle {
  constructor(y, w, h) {
    this.y = 500;
    this.w = 100;
    this.h = 300;
  }

  show() {
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
      rect(i - 45, this.y, this.w-90, this.h);
    }
    pop();
    // candle head
    push();
    noStroke();
    fill(240);
    for (let i = 100; i < width; i += 200) {
      ellipse(i, this.y, this.w, this.h - 260);
    }
    pop();
    // candle wick
    push();
    strokeWeight(3);
     for(let i = 100; i < width; i+=200) {
    line(i, this.y - 30, i, this.y);
     }
    pop();
  }
}
