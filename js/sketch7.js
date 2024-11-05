const w = 720;
const N = 5000;

const maxRadius = w/8;
const minRadius = w/256;

function setup() {
  createCanvas(w, w);
  pixelDensity(1);
  colorMode(HSB);
  noLoop();
  ellipseMode(RADIUS);
  noStroke();
  background(rand_color());

  let circles = [];
  for(let l=0;l<N;l++){
    let nr = maxRadius;
    let nx = random(width);
    let ny = random(height);
    let d = maxRadius;
    let flag = true;
    for(let i=0;i<circles.length;i++){
      d = dist(nx, ny, circles[i].x, circles[i].y);
      if(d > circles[i].size){
        if(d - circles[i].size < nr){
          nr = d - circles[i].size;
          flag = true;
        }
      }
      else{
        flag = false;
        break;
      }
    }
    let size_check = (nx + nr < width) && (nx - nr >0) &&
                     (ny + nr < height) && (ny - nr >0);
    if((l==0 || flag) && nr > minRadius && size_check){
      circles.push(new Circle(nx, ny, nr));
    }
  }

  for(let i=0;i<circles.length;i++){
    circles[i].draw();
  }
}

class Circle{
  constructor(x, y, size){
    this.x = x;
    this.y = y;
    this.size = size;
  }

  draw(){
    push();
    translate(this.x, this.y);
    rotate(random(TAU));
    let n = int(random(1,9));
    let p = random([3,4,5,6,64])
    for(let i=0;i<n;i++){
      fill(rand_color());
      Polygon(0, 0, this.size/n*(n-i), p);
    }
    pop();
  }
}

function rand_color(){
  return color(random(["#227c9d", "#17c3b2", "#ffcb77", "#fef9ef", "#fe6d73"]));
}

function Polygon(x, y, size, pointNum){
   const Radius = size;
   const angleStep = 2*PI/pointNum ;
   let angle = 0;
   beginShape();
   for(let i=0;i<=pointNum;i=i+1){
      let px = x + Radius*cos(angle);
      let py = y + Radius*sin(angle);
      vertex(px, py);
      angle = angle + angleStep;
   }
   endShape(CLOSE);
}

//save PNG
function keyPressed() {
  save("img_" + month() + day() + hour() + minute() + second() + ".png");
}