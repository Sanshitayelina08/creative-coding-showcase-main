let x, y, xspeed, yspeed;

function setup() {
  let cnv = createCanvas(600, 400);
  cnv.style('display','block');
  cnv.parent(document.body);
  x = width/2; y = height/2;
  xspeed = 4; yspeed = 3;
}

function draw() {
  background(13,18,30);
  fill(255, 100, 190);
  noStroke();
  ellipse(x, y, 48, 48);

  x += xspeed; y += yspeed;
  if (x > width-24 || x < 24) xspeed *= -1;
  if (y > height-24 || y < 24) yspeed *= -1;
}
