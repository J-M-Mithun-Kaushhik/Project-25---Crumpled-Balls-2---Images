
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground, dustbin1, dustbin2, dustbin3, paper, dustbinImage;
function preload()
{
	dustbinImage = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create ground here
	ground = new Ground(800,400,1600,20);

	//Create the Bodies Here.
	dustbin1 = new Dustbin(1200,380,200,20);
	dustbin2 = new Dustbin(1100,340,20,100);
	dustbin3 = new Dustbin(1300,340,20,100);
	paper = new Paper(50,200,15)
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  paper.display();

  image(dustbinImage, 1080,270,240,125);
  drawSprites();
  
 
  
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x: 60,y: -45})
	  }

	}
