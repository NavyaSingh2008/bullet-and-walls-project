var wall,thickness;
var bullet, speed, weight;



function setup(){
createCanvas(1600,400);

thickness=random(22,83);
speed=random(223,321)
weight=random(30,52)
wall=createSprite(1200,20,thickness,height/2);

bullet=createSprite(50,300,50,5);
bullet.velocityX=speed;
bullet.shapeColor=color(225);


wall.shapeColor=color(80,80,80);





}


function draw(){
thickness=random(22,83);




  drawSprites();
};

function hasCollieded(Lbullet,Lwall){
bulletRightEdge=Lbullet.x+Lbullet.width;
wallLeftEdge=Lwall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true;
}
return false;


if (hasCollieded(bullet,wall)){
bullet.velocity=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

if (damage>10){
  wall.shapeClor=color(225,0,0)
}

if(damage<10){
  wall.shapeColor=color(0,225,0);
}

}
}





