
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload ()
{

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	//the roof
	roof = new Roof(400,200,300,25);
	// bob objects
	b1 = new Bob(300,400,25);
	b2 = new Bob(350,400,25);
	b3 = new Bob(400,400,25);
	b4 = new Bob(450,400,25);
	b5 = new Bob(500,400,25);
	var diameter = 50;
	//constraints
	s1 = new Sling(b1.body,roof.body,{x:-diameter*2,y:0});
	s2 = new Sling(b2.body,roof.body,{x:-diameter,y:0});
	s3 = new Sling(b3.body,roof.body,{x:0,y:0});
	s4 = new Sling(b4.body,roof.body,{x:diameter,y:0});
	s5 = new Sling(b5.body,roof.body,{x:diameter*2,y:0});
	//adding into worlds
	World.add(world, roof);
	World.add(world, b1);
	World.add(world, b2);
	World.add(world, b3);
	World.add(world, b4);
	World.add(world, b5);
	World.add(world, s1);
	World.add(world, s2);
	World.add(world, s3);
	World.add(world, s4);
	World.add(world, s5);
	
	Engine.run(engine);
  
}
function draw() {
  rectMode(CENTER);
  background(100);
  
  roof.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  s1.display();
  s2.display();
  s3.display();
  s4.display();
  s5.display();
  drawSprites();
  applyForce();
}

function applyForce(){
	if (keyWentDown("space")){
		Matter.Body.applyForce(b1.body,b1.body.position,{x:-600,y:-600});
	}
}
