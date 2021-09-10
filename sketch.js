
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var rock,rock_options;
var wall;
var wedge;
var angle = 60;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };

   rock_options = {
    restitution: 0.3,
    frictionAir: 0.01
   }
  

    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);

    ball = Bodies.circle(100,10,20,ball_options);
    World.add(world,ball);
    
    wall = Bodies.rectangle(300,200,200,20,ground_options);
    World.add(world,wall);

    rock = Bodies.circle(300,23,10,rock_options);
    World.add(world,rock);

    wedge = Bodies.rectangle(100,200,100,20,ground_options);
    World.add(world,wedge);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
    background("hotpink");
    Engine.update(engine);
    
    fill("yellow")
    ellipse(ball.position.x,ball.position.y,20);

    fill("purple")
    ellipse(rock.position.x, rock.position.y,10);

    fill("red")
    rect(ground.position.x,ground.position.y,400,20);

    fill("blue")
    rect(wall.position.x,wall.position.y,200,20);
  
    push();
    translate(wedge.position.x,wedge.position.y);

    rotate(angle);

    fill("green")
    rect(0,0,100,20);

    pop();
    angle+=0.1

    Matter.Body.rotate(wedge,angle);

  
}

