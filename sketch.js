
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bar, ground, paperball; 

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

 //Create the Bodies Here.
  
 bar = Bodies.rectangle(500, 570, 10, 100, {isStatic:true});
 World.add(world, bar);

 bar1 = Bodies.rectangle(700, 570, 10, 100, {isStatic:true});
 World.add(world, bar1);

 bar2 = Bodies.rectangle(595, 615, 200, 10, {isStatic:true});
 World.add(world, bar2);

 bar3 = Bodies.rectangle(600, 615, 180, 1, {isStatic:true});
 World.add(world, bar3);

  paperball= new Ball(100,500,20)
  ground = new Ground(600,650,1200,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

 fill("red");
 rect(bar.position.x, bar.position.y, 10, 100);
 rect(bar1.position.x, bar1.position.y, 10, 100);
 rect(bar2.position.x, bar2.position.y, 200, 10);
 fill("red")
 rect(bar3.position.x, bar3.position.y, 180, 1);
  
  drawSprites();

  ground.display();
  paperball.display();

 }

 function keyPressed() {

 if (keyCode === UP_ARROW) {

 Matter.Body.applyForce(paperball.body, paperball.body.position,{x: 65,y: -65});

 }
 }