var fixedRect, movingRect;
var obj1,obj2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 80, 80);
  fixedRect.shapeColor = "green";
  
  movingRect = createSprite(400, 800,80,80);
  movingRect.shapeColor = "green";
  
  obj1=createSprite(200,400,100,100);
  obj1.shapeColor="red";

  obj2=createSprite(600,400,100,100);
  obj2.shapeColor="blue";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  obj1.velocityX = +5;
  obj2.velocityX = -5;
}

function draw() {
  background(0,0,0);  

  bounce(movingRect,fixedRect);

  if (bounce(obj1,obj2)){
    obj1.shapeColor="blue";
    obj2.shapeColor="red";
  }
  
  drawSprites();
}

