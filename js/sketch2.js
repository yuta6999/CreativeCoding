// Halloweenカラーコード
let colors = ['#7D2A82', '#E2841A', '#1D121F', '#AD6BA2', '#EEC800', '#DEA014', '#87AE22', '#A47A46', '#464066'];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop(); // 一度だけ描画
}

function draw() {
  background(255); // 背景を白に設定
  let tileSize = 50; // タイルのサイズ

  for (let y = 0; y < height; y += tileSize) {
    for (let x = 0; x < width; x += tileSize) {
      // ランダムに色を選択
      let colorIndex = floor(random(colors.length));
      fill(colors[colorIndex]);
      rect(x, y, tileSize, tileSize); // タイルを描画
    }
  }
  console.log(height);
  console.log(width);
}
