function setup() {
  // createCanvas(windowWidth, windowHeight, WEBGL);
	// createCanvas(w=720, w);
	createCanvas(w=windowWidth, h=windowHeight);
	colorMode(HSB);
	background(100);
	
	layer0 = createGraphics(w, h);
	layer0.colorMode(HSB);
	layer0.background(0);
	// layer0.noStroke();
	
	// let N = 300;
	let N = 200;
	for(let i=0;i<N;i++){
		layer0.fill(random(0, 50), 50, 100, 0.5);
		layer0.ellipse(random(w), random(w), random(w*0.2));
	}
	
	layer1 = createGraphics(w, h);
	layer1.colorMode(HSB);
	layer1.background(100);
	// layer1.noStroke();
	layer1.rectMode(CENTER);
	
	for(let i=0;i<N;i++){
		layer1.fill(random(180, 240), 50, 100, 0.5);
		layer1.rect(random(w), random(w), random(w*0.2));
	}
}

function draw() {
	background(0);
	
	let alpha = map(sin(frameCount*0.02), -1, 1, 0, 1);
	
	image(layer0, 0, 0);
	
	push();
	tint(100, alpha);
	image(layer1, 0, 0);
	pop();
}