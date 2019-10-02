  // put preload code here
function preload(){
}


  // put setup code here
function setup() {
  createCanvas(windowWidth, windowHeight);
}


  // put drawing code here
function draw() {
var myDiameter = getDiameterFromArea(1000);
  drawCandy(frameCount, 100, frameCount, myDiameter, "red")
  drawCandy(frameCount, 200, frameCount*3, myDiameter, "aquamarine")
  drawCandy(frameCount, 300, frameCount*3, myDiameter, "blue")
}


  //a function to get diameter from area
function getDiameterFromArea (_area){
  var result = Math.sqrt(_area/PI);
  return result;
}


  //candies
function drawCandy(_xpos, _ypos, _rotation, _diameter, _color){
  var secondColor = 'lime';
  angleMode(DEGREES)
  push();
  translate(_xpos, _ypos);
  rotate(_rotation);
  noStroke();

    //draw the arcs
    fill(_color);
    arc(0, 0, _diameter, _diameter, 0, 90, PIE);
        fill(secondColor);
        arc (0, 0, _diameter, _diameter, 90, 180, PIE);
            fill(_color);
            arc(0, 0, _diameter, _diameter, 180, 270, PIE);
                fill(secondColor);
                arc (0, 0, _diameter, _diameter, 270, 360, PIE);
  pop();
}
