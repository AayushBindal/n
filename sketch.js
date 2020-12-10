const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var ground;
var box1;
var paper;
var paper1;

function setup() {
	createCanvas(1520,400);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(760,350,1520,20);
	box1 = new Box(800,300-0.4,100,100);
	paper = new Paper(300,300,30,30);
	Engine.run(engine);
}

function draw() {
  background("grey");
  Engine.update(engine);
  
  paper.display();
  box1.display();
  ground.display();

 if(keyDown("UP_ARROW")){
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:0.01, y:-0.02});
  }
  if(keyDown("DOWN_ARROW")){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:-0.01, y:-0.02});
}
}