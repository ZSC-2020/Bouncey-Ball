const Engine= Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world
var ground,ball,ball1,ball2
function setup(){
    createCanvas(900,900);
engine=Engine.create();
world=engine.world;
var ground_options={
isStatic:true
}
ground=Bodies.rectangle(450,870,900,60,ground_options);

World.add(world,ground);

//console.log(object.position);
var ball_options={
    restitution:1.0
}
var ball1_options={
    restitution:0.3
}
var ball2_options={
    restitution:2.0
}
ball=Bodies.circle(700,100,50,ball_options)
World.add(world,ball);
ball1=Bodies.circle(270,50,90,ball1_options)
World.add(world,ball1);
ball2=Bodies.circle(400,170,150,ball2_options)
World.add(world,ball2);
}

function draw(){
background(100,200,250);
Engine.update(engine)
noStroke();
rectMode(CENTER)
fill("brown")
rect(ground.position.x,ground.position.y,900,60)
ellipseMode(RADIUS)
fill("yellow");
ellipse(ball.position.x,ball.position.y,50,50);
ellipseMode(RADIUS)
fill("orange");
ellipse(ball1.position.x,ball1.position.y,90,90);
ellipseMode(RADIUS)
fill("pink");
ellipse(ball2.position.x,ball2.position.y,150,150);
}