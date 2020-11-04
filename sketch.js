
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint=Matter.Constraint
var plank,bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1=new bob(300,350,40)
bob2=new bob(350,350,40)
bob3=new bob(400,350,40)
bob4=new bob(450,350,40)
bob5=new bob(500,350,40)
plank=new roof(400,150,300,20)
rope1=new rope(bob1.body,plank.body,-100,0)
rope2=new rope(bob2.body,plank.body,-50,0)
rope3=new rope(bob3.body,plank.body,0,0)
rope4=new rope(bob4.body,plank.body,50,0)
rope5=new rope(bob5.body,plank.body,100,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  plank.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  drawSprites();
 
}
function keyPressed() { 
  if (keyCode === UP_ARROW) {
   Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
   } 
  }


