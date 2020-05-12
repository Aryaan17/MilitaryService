var bullet, wall;
var speed, weight, thickness, damage;

function setup() {
  createCanvas(1600,400);

  thickness = random(22, 83);
  weight = random(30, 52);
  speed = random(223, 321);

  bullet = createSprite(50, 200, 40, 10);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;

  wall = createSprite(1200, 200, thickness, 200);
  wall.shapeColor = "grey";
}

function draw() {
  background("black");  

  if (bullet.collide(wall)){
    bullet.velocityX = 0;
    damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness);
    if (damage<10){
      bullet.shapeColor = "green";
    } 

    else {
      bullet.shapeColor = "red";
    }
  }

  drawSprites();
}