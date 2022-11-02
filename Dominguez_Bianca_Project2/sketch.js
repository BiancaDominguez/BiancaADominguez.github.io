var x = 0;
var easing = 0.04;
var y = 0;


function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch-holder");
  canvas.position(0,0);
  canvas.style('z-index','-1');

}

function draw() {
  noStroke();
  fill(255 * (mouseX) / 500, 255 * (mouseY) / 500, x + 100);
  var targetX = mouseX;
  var targetY = mouseY;
  x += (targetX - x) * easing;
  y += (targetY - y) * easing;
  rect(x, y, 30, 30);
  print(targetX + " : " + x);

    }
