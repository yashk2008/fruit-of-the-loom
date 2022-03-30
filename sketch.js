const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope;
var tastyFruit;
var pain;

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
  var tastyFruitOptions = {
    density:0.001
  } 


  tastyFruit = Bodies.circle(123,456,7.89,tastyFruitOptions)

  rope = new Rope(5,{x:250,y:2})
  Matter.Composite.add(rope.body,tastyFruit)
  pain = new Zelda(rope,tastyFruit)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  ground.show();
  rope.show()
  ellipse(tastyFruit.position.x,tastyFruit.position.y,7.89,7.89)
  Engine.update(engine);
  

 
   
}
