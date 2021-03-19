const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var score=0;
var count;
var ball;

function setup() {
createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  ground= new Ground(600,550,1200,10);
 
  basketBase= new Basket(900,450,20,200);
  basketBase2= new Basket(1100,450,20,200);
  basketWall= new Basket(basketBase.x-100,basketBase.y,10,150);
  basketWall2=new Basket(basketBase.x+100,basketBase.y,10,150);

     ball= Bodies.circle(200,300,30);
   World.add(world,ball);
    slingshot=new Rope(ball,{x:350,y:350})
}

function draw() {
  background("white")
  Engine.update(engine);
  ground.display();
  



basketBase.display();
basketBase2.display();
basketWall.display();
basketWall2.display();
ellipse(ball.position.x,ball.position.y,30,30);
slingshot.display();
//Matter.Body.setPosition(basketBase.body,{x:mouseX,y:mouseY}) 

 textSize(20);
 fill("white");
 stroke("darkBlue");
 strokeWeight(3);
 text("score: "+score,100,50);
}
function mouseDragged(){
  Matter.Body.setPosition(ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}