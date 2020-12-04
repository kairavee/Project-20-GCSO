var car,wall;
var speed,weight

function setup()
{
  createCanvas(1350,400);

  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(50, 200, 20, 20);
  car.velocityX=speed;

  wall=createSprite(1300, 200, 60, height/2);
  wall.shapeColor=color("grey");
}

function draw()
 {
  background("black");

  collide();

  drawSprites();
}