const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var ground;
var tree;
var boy,boyimage;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9;
var stone;
var Launcherobject;
var launchforce=100;

function preload(){
	boyimage=loadImage("images/boy.png");
}

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
  
	ground = new Ground(650,589,1298,10);
  tree= new Tree (1000,335,500,495);
	mango1= new Mango (830,260,80,10);
  mango2= new Mango (890,270,70,10);
	mango3= new Mango (950,280,80,10);
	mango4= new Mango (940,180,70,10);
	mango5= new Mango (1000,180,70,10);
	mango6= new Mango (1080,180,80,10);
	mango7= new Mango (1080,280,60,10);
	mango8= new Mango (1210,282,70,10);
	mango9= new Mango (1141,282,70,10);

  stone= new Stone (220,450,90,20);
  stone.scale=0.5;

	boy=createSprite(300,500,10,20);
  boy.addImage(boyimage);
  boy.scale=0.1;

  Launcherobject= new Launcher (stone.body,{x:235,y:420});
   
	Engine.run(engine);
}

function draw() {

  background(230);
  drawSprites();

  createEdgeSprites();
  tree.collide=ground;
  
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();

  stone.display();

  Launcherobject.display();
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});

}

function mouseReleased(){
  Launcherobject.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:235,y:420});
    Launcherobject.attach(stone.body);
  }
}

  