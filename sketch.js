const Engine = Matter.Engine;
const World = Matter.World;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var engine,world;

var ground;
var ball;
var block1, block2, block3, block4, block5;
var string;

function setup() {
  engine = Engine.create();
  world = engine.world;


  createCanvas(800,400);

  ground = new Ground(0,300,600,20);
  ball=new Ball(200,200,50,50);

  block1=new Block(400,240,60,60);

  string=new Connection(ball.body,{x:50,y:50});
}

function draw() {
  background("orange");  
  drawSprites();

  ground.display();
  ball.display();
  block1.display();
  string.display();
}