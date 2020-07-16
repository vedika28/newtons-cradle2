var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function preload() {
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new Bob(240,400);
	bob2=new Bob(320,400);
	bob3=new Bob(width/2,400);
	bob4=new Bob(480,400);
	bob5=new Bob(560,400);
	roof=new Roof();
	rope1=new Rope(bob1.body,roof.body,240,100);
	rope2=new Rope(bob2.body,roof.body,320,100);
	rope3=new Rope(bob3.body,roof.body,width/2,100);
	rope4=new Rope(bob4.body,roof.body,480,100);
	rope5=new Rope(bob5.body,roof.body,560,100);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  
  drawSprites();
}

function keyPressed() {
	if (keyDown(UP_ARROW)) {
	   Matter.Body.applyForce(bob5.body,bob5.body.position,{ x: -5, y: -50 });
	}
}

