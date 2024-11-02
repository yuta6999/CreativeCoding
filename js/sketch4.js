function setup() {
  createCanvas(400, 400);

  describe('A yellow circle on a black background. The circle opens and closes its mouth.');
}

function draw() {
  background(0);

  // Style the arc.
  noStroke();
  fill(255, 255, 0);

  // Update start and stop angles.
  let biteSize = PI / 16;
  let startAngle = biteSize * sin(frameCount * 0.1) + biteSize;
  let endAngle = TWO_PI - startAngle;

  // Draw the arc.
  arc(100, 100, 160, 160, startAngle, endAngle, PIE);
}