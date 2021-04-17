const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plinko=[];
var divisions=[];
var particles=[];

var divisionheight=300;

function setup() {
  createCanvas(1000,800);

  engine = Engine.create();
	world = engine.world;

  ground = new Ground (width/2,height,1000,30)

  for(var k=0; k <=width; k=k+80){
   divisions.push(new Divisions(k, height-divisionheight/2, 10, divisionheight))
  }
  
  for(var j=40; j <=width; j=j+50){
    plinko.push(new Plinko(j,75));
  }
  
  for(var i=15; i <=width-10; i=i+50){
   plinko.push(new Plinko(i,175));
  }

  for(var i=5; i <=width-10; i=i+50){
    plinko.push(new Plinko(i,275));
   }

   for(var i=25; i <=width-10; i=i+50){
    plinko.push(new Plinko(i,375));
   }

}


function draw() {
  background("black"); 

  Engine.update(engine) 
  
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-300, width/2+300),10,10));
  }
  
  for(var j=0; j<plinko.length; j++){
    plinko[j].display();
  }
  
  for(var k=0; k<particles.length; k++){
    particles[k].display();
  }


  for(var i=0; i<divisions.length; i++){
    divisions[i].display();
  }

ground.display();

  drawSprites();
}

