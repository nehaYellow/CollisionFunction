var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  
  fixedRect= createSprite(600, 400, 50, 80);
  fixedRect.shapeColor="red";
  movingRect=createSprite(200,200,80,50);
  movingRect.shapeColor="orange";
  bob=createSprite(300, 75,30,70);
  bob.shapeColor = "pink";
  jeff=createSprite(30,300, 50,20);
  jeff.shapeColor="yellow";
}

function draw() {
  background(0); 
  jeff.x=World.mouseX;
  jeff.y=World.mouseY;
  if( touch(jeff,bob)){
fixedRect.width=200;
fixedRect.height=200;
movingRect.shapeColor="lime";
  } 
  else{
    fixedRect.width=50;
    fixedRect.height=80;
    movingRect.shapeColor="orange";
  }
  drawSprites();
}

