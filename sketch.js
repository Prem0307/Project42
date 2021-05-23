  
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;

var engine, world;
var drops = [];
var rand,umbrella_img,batman,moon;

var maxDrops=100;

var thunderCreatedFrame=0;

function preload(){
    umbrella_img= loadAnimation("Walking Frame/walking_1.png","Walking Frame/walking_2.png",
    "Walking Frame/walking_3.png","Walking Frame/walking_4.png",
    "Walking Frame/walking_5.png","Walking Frame/walking_6.png",
    "Walking Frame/walking_7.png","Walking Frame/walking_8.png");
    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    thunder4 = loadImage("thunderbolt/4.png");


}


function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,625);
    umbrella = new Umbrella(200,350,50);
    
 
    batman = createSprite(200,450);
    batman.addAnimation("walking",umbrella_img);
    batman.scale= 0.45;

    //creating drops
    if(frameCount % 100 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new createDrop(random(0,400), random(100,-400)));
        }

    }
    
}

function draw(){
    Engine.update(engine);
    background("darkBlue"); 

    //creating thunder
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.5,1)
    }

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

    umbrella.display();

    //displaying rain drops
    for(var i = 0; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY()
        
    }

    drawSprites();
}   