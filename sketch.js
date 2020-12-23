var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);

 thickness=random(22, 83);
 speed=random(223, 321);
 weight=random(30, 52);

 bullet=createSprite(50, 200, 50, 10);
 bullet.velocityX = speed;
 bullet.shapeColor="white";

 wall=createSprite(1200, 200, thickness, height/2);
 wall.shapeColor=(80);

}

function draw() {
  background(0);  

  

    if(hasCollided(bullet, wall)){

     bullet.x=wall.x-40;
     var damage= 0.5*weight*speed*speed/(thickness*thickness*thickness);
      
      
     if(damage>10){
       wall.shapeColor=color(225, 0, 0);
     }
  
     if(damage<10){
       wall.shapeColor=color(0, 255, 0);
     }
   }
 drawSprites();
}

function hasCollided(Lbullet, Lwall){

bRE=Lbullet.x + Lbullet.width;
wLE = Lwall.x;

if(bRE>=wLE){

  return true;
}

return false;
}