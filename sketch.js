const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground,ball;
var binImg,bim;

function preload(){
	binImg = loadImage("Image/dustbinegreen.png");
}
function setup() {
    var canvas = createCanvas(1200,600);
	engine = Engine.create();
	world = engine.world;
	
	ground = new ground();
	crumpledPaper = new Paper();

	 bin = createSprite(964,520,20,20);
	 bin.addImage(binImage);
	 bin.scale = 0.45;

	 binPart1 = new Dustbin(906,505,10,120);
	 binPart2 = new Dustbin(962,565,130,10);
	 binPart3 = new Dustbin(1824,505,10,120);
  
}


function draw() {
  background(0);
  Engine.update(engine);

  //text(mouseX+","+mouseY,200,200);

  groundObject.display();
  crumpledPaper.display();
  binPart1.display();
  binPart2.display();
  binPart3.display();

  drawSprites();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position)
	}
}

