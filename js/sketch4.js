function setup() {
  //createCanvas(400, 400);
  createCanvas(windowWidth, windowHeight);
  frameRate(60); // フレームレートを60に設定

  describe('A yellow circle on a black background. The circle opens and closes its mouth.');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function touchStarted() {
  // タッチの動作を記述
  return false; // 画面がスクロールしないように
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
  arc(frameCount - 110, 100, 160, 160, startAngle, endAngle, PIE);
}