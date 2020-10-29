var box1,box2,box3,box4;
function setup() {
  createCanvas(1200,1200);
box1 =  createSprite(100, 300, 100, 100);
box2 =  createSprite(1000, 300, 100, 100);
box3 =  createSprite(600, 100, 100, 100);
box4 =  createSprite(600, 1000, 100, 100);
 box1.shapeColor="pink";
 box2.shapeColor="blue";
 box3.shapeColor="red";
 box4.shapeColor="white";

 box2.debug=true
 box1.debug=true
 box3.debug=true
 box4.debug=true
 box1.velocityX=5
 box2.velocityX=-5
 box3.velocityY=5
 box4.velocityY=-5
}

function draw() {
  background(255,255,0); 
  //box1.x=World.mouseX;
  //box1.y=World.mouseY;
  bounceOff(box1,box2);
  bounceOff(box3,box4);
  drawSprites();
}

function bounceOff(b1,b2){
  
if(b1.x-b2.x<b1.width/2+b2.width/2 
    &&b2.x-b1.x<b1.width/2+b2.width/2){
    b1.velocityX*=(-1)
    b2.velocityX*=(-1)
    b1.shapeColor="green";
    b2.shapeColor="purple";
  }
  if(b1.y-b2.y<b1.height/2+b2.height/2
  &&b2.y-b1.y<b1.height/2+b2.height/2){
  b1.shapeColor="pink";
  b2.shapeColor="blue";
  b1.velocityY*=(-1)
  b2.velocityY*=(-1)
}
}
