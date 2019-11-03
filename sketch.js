function preload() {
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  frameRate(100);
  background("#140051");
  //title
  textSize(16);
  textAlign(CENTER);
  fill("#5149D6");
  textFont("Roboto Mono");
  text("  day 'n' nite", width / 2, height / 2);
}

function draw() {
  // put drawing code here

  //sun
  stroke("#E2F574");
  strokeWeight(2);

  push();
  translate(width / 2 - 300, height / 2);
  scale(0.5)
  rotate(frameCount * 360);
  line(300, 0, (300) * cos(frameCount * 4), (300) * sin(frameCount * 4));
  pop();
  if (frameCount == 360) {
    noLoop();
  }




  //moon
  stroke("#b8d2d5");
  strokeWeight(2);

  push();
  translate(width / 2 + 300, height / 2);
  scale(0.3)
  rotate(frameCount * 3);
  line(sin(frameCount * 2) * 300, cos(frameCount * 2) * 300, cos(90) * 300, sin(90) * 300);
  pop();
  if (frameCount == 180) {
    noLoop();
  }



}
