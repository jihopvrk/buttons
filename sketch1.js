let rectWidth;

function setup() {
  createCanvas(800, 45);
  noStroke();
  background(255);
  rectWidth = width / 20;
}

function draw() {
}

function keyPressed() {
  let keyIndex = -1;
  if (key >= 'a' && key <= 'z') {
    keyIndex = key.charCodeAt(0) - 'a'.charCodeAt(0);
  }
  if (keyIndex === -1) {
    background(0);
  } else {
    randFill_r = Math.floor(Math.random() * 0 + 1);
    randFill_g = Math.floor(Math.random() * 0 + 1);
    randFill_b = Math.floor(Math.random() * 255 + 1);
    fill(randFill_r, randFill_g, randFill_b);
    let x = map(keyIndex, 0, 15, 0, width - rectWidth);
    square(x, 0, rectWidth, height);
  }
}
