const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var ground;
var tree;
var boy,boyimage;

function preload(){
	boyimage=loadImage("boy.png");
}

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
  
	ground = new Ground(650,589,1298,10);
	tree   = new Tree(500,650,20,10);
	 
	boy.createSprite(400,200,10,20);
    boy.addImage("boyimage");


  //create launcherObject here

 
   
	Engine.run(engine);
}

function draw() {

  background(230);
  drawSprites();
  
  ground.display();
  tree.display();
}

//create mouseDragged function here


//create mouseReleased function here


//create keyPressed function here


  