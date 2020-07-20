var bullet , wall;
var speed , weight;




function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness=random(22,83);
  bullet = createSprite(50,200,50,50);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(255,255,255);  
  bullet.velocityX=speed;
  if(wall.x-car.x<(bullet.width+wall.width)/2){
  bullet.velocityX=0;
  }
  hascollided();
  if(hascollided(bullet,wall)){

    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/thickness*thickness*thickness; 
    
    
    if(damage<10){
      bullet.shapeColor=color("green");
    }
  
    if(damage>10){
      bullet.shapeColor=color("red");
    }
  }

  drawSprites(); 

}
function hascollided(Lbullet,Lwall){
 bulletRightEdge=Lbullet.x+Lbullet.width;
 wallleftEdge=Lwall.x;
 if(bulletRightEdge>=wallLeftEdge)
 {
   return true
 }
 return false;
}