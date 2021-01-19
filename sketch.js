
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var engine, world, dustbinRight,dustbinLeft, dustbinBottom,paper1,ground1, gameState;
function preload()
{
	bgImage =  loadImage("bg.jpg");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	gameState = "start";


	engine = Engine.create();
	world = engine.world;

	render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 800,
		  height: 420,
		  wireframes: false
		}
	  })

	
	Engine.run(engine);
	dustbinBottom = new Dustbin(600,670,150,15);
	dustbinLeft = new Dustbin(520,620,15,80);
	dustbinRight =  new Dustbin(680,620,15,80);
	paper1= new Paper(200,550,20);
	//Create the Bodies Here.
	ground1= new Ground(width/2,height-10,width,20);
	
}


function draw() {
	Render.run(render);

	if(gameState === "start"){
		background(bgImage);
	//	background("black");
		textSize(20);
		fill("white");
		text("Press SPACE to start the game",250,400);
	
		text("Aim Of the game is to inculcate good habit of throwing the trash in dustbin",100,480);
		fill("yellow");
		text("RULES: Press UP ARROW to throw the trash in the dustbin ",150,550);
		if(keyCode === 32){
			gameState = "play";
		}

	}
	if(gameState === "play"){
		rectMode(CENTER);
		background("grey");
		dustbinBottom.display();
		dustbinLeft.display();
		dustbinRight.display();
		paper1.display();
		ground1.display();
		
		//drawSprites();
	}
	
 
 
}
function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paper1.body,paper1.body.position,{
			x:50,
			y:-50
		})

    }
}


