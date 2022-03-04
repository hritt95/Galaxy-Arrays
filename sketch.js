let stars = [];
let valueY = [];
let valueX =[];
function setup() {
createCanvas(800,800);
  for (let i = 0; i < 30; i++) {
    valueY[i] = random(height);
    valueX[i] = random(width);
    stars[i] = {valueX:random(width), valueY: random(height), color: color(255), size:5}
  }
}

function draw() {
  background(46,26,71); 

  for (let i = 0; i < stars.length; i++) {
    push()
    fill(stars[i].color);
    circle(stars[i].valueX, stars[i].valueY, stars[i].size);
    pop()

    if(dist(mouseX,mouseY,stars[i].valueX, stars[i].valueY)< 20){
      stars[i].size = 10;
      stars[i].color = color(212,175,55);
    }
 stars[i].valueX+=10;
 stars[i].valueY += 5;
  
    if (stars[i].valueY > height) {
      stars[i].valueY = 0;
    }
    if (stars[i].valueX > width) {
      stars[i].valueX = 0;
    }
  }
}