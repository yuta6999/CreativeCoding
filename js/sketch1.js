// Halloweenカラーコード
let colors = ['#7D2A82', '#E2841A', '#1D121F', '#AD6BA2', '#EEC800', '#DEA014', '#87AE22', '#A47A46', '#464066'];

function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(255); // 背景色

  let tileSize = 50; // タイルのサイズ
  let count = 0;

  // 三角形をタイル状に配置
  for (let y = 0; y < height; y += tileSize + 4) {
    
    count++;
    
    for (let x = 0; x < width; x += tileSize - 20) {
      // ランダムな色を選択
      let colorIndex = floor(random(colors.length));
      fill(colors[colorIndex]);
      noStroke();

      // ランダムな回転
      //let angle = int(random(2)) * 180; // 0, 90, 180, 270度のいずれか
      let angle = count * 180;

      // タイルの中央を基点にして三角形を描画
      push();
      translate(x -25 + tileSize / 2, y + tileSize / 2);
      rotate(radians(angle));
      beginShape();
      vertex(-tileSize / 2, tileSize / 2); // 左下
      vertex(tileSize / 2, tileSize / 2); // 右下
      vertex(0, -tileSize / 2); // 上中央
      endShape(CLOSE);
      pop();
      
      count++;
    }
  }
}
