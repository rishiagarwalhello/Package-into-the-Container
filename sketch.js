var helicopter, helicopter_img, package, package_img, package_body;
var ground, ground_body;
var box_properties;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopter_img=loadImage("helicopter.png")
	package_img=loadImage("package.png")
}

function setup()
{
	createCanvas(800, 600);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopter_img);
	helicopter.scale=0.6;
	
	package_body=Bodies.polygon(helicopter.x, 200, 6, 25, {isStatic:true});
    World.add(world, package_body);

	package=createSprite(package_body.position.x, package_body.position.y);
	package.addImage(package_img);
	package.scale=0.2;

	ground=createSprite(width/2, height-35, width,10);
	ground.shapeColor="grey";
	
	ground_body = Bodies.rectangle(width/2, height-35, width, 10 , {isStatic:true} );
 	World.add(world, ground_body);

 	left=createSprite(width/2-100, 510, 20,100);
 	left.shapeColor="red";

 	left_body = Bodies.rectangle(width/2-100, 510, 20,100 , {isStatic:true} );
 	World.add(world, left_body);

 	bottom=createSprite(width/2, 550, 200,20);
 	bottom.shapeColor="red";

 	bottom_body = Bodies.rectangle(width/2, 550, 200,20 , {isStatic:true} );
 	World.add(world, bottom_body);

 	right=createSprite(width/2+100, 510, 20,100);
 	right.shapeColor="red";

 	right_body = Bodies.rectangle(width/2+80, 510, 20,100 , {isStatic:true} );
 	World.add(world, right_body);

	Engine.run(engine);
}

function draw()
{
	background(0);
	
    rectMode(CENTER);

	Engine.update(engine);
	
	package.x=package_body.position.x=helicopter.x;
	package.y=package_body.position.y;

	package.depth=helicopter.depth-1;

	ground.x=ground_body.position.x;
	ground.y=ground_body.position.y;

	if(keyDown("left"))
	{
		helicopter.x=helicopter.x-10;
	}
	if(keyDown("right"))
	{
		helicopter.x=helicopter.x+10;
	}

	if(keyDown("down"))
	{
		Matter.Body.setStatic(package_body, false);
	}

	drawSprites();
}