
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ground, wall1, wall2;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var ball_options = 
    {
        restitution : 0.3, 
        friction:0,
		isStatic:false,
		density:1.2

    }
    ball = Bodies.circle(100, 10, 50, ball_options);
    World.add(world, ball);

	ground = new Ground(windowWidth/2, windowHeight, windowWidth, 50);
	wall1 = new Ground(2100, windowHeight-50, 20, 300);
	wall2 = new Ground(1800, windowHeight-50, 20, 300);

	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x, ball.position.y, 50);
  ground.show();
  wall1.show();
  wall2.show();
  drawSprites();
 

}

function keyPressed()
{

	if(keyCode === UP_ARROW)
	{

		Matter.Body.applyForce(ball, ball.position, {x:120, y:-125});
	}


}



