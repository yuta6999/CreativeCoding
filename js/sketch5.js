let angleX = 0;
let angleY = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(200);

  // 回転角度を更新
  angleX += 0.01;
  angleY += 0.01;

  // 回転を適用
  rotateX(angleX);
  rotateY(angleY);

  // 正方形（立方体）を描画
  noFill();
  stroke(0);
  box(200); // サイズ200の立方体
}
