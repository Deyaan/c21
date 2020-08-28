var bullet , wall;
var speed , weight;

function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  bullet = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(255,255,255);  
  bullet.velocityX=speed;
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
  bullet.velocityX=0;
  }

  var hascollided=0.5*weight*speed*speed/22500;  //Formula...

  if(hascollided>180){
      bullet.shapeColor=color("green");
  }

  if(hascollided<180 && hascollided>100){
      bullet.shapeColor=color("yellow");
  }
  
  if(hascollided<100){
      bullet.shapeColor=color("red");
  drawSprites();
  }
}
