 var snake,snakeImg;
 var mouse1,mouse2,mouse3,mouseImg;
 var mongoose,mongooseImg;
 var background,backgroundImg;
 var maze1,maze2,maze3,maze4,maze5,maze6,maze7,maze8,maze9,maze910;
 var maze11,maze12,maze13,maze14,maze15,maze16,maze17,maze18,maze19,maze920;

 
 
 function preload (){
backgroundImg = loadImage ("background.png");
mongooseImg = loadImage ("mongoose.jpg");
mouseImg = loadImage ("mouse.jpg");
snakeImg = loadImage ("snake.png");



}

function setup (){
createCanvas (800,800);
snake = createSprite (50,40);
snake.addImage ("snake",snakeImg);
snake.scale=0.1;

//border mazes
maze1=createSprite(400,10,800,10);
maze1.shapeColor="brown";
maze2=createSprite(780,400,10,800);
maze2.shapeColor="brown";
maze3=createSprite(400,780,800,10);
maze3.shapeColor="brown";
maze4=createSprite(10,400,10,800);
maze4.shapeColor="brown";

maze5=createSprite(100,200,300,10);
maze5.shapeColor="brown";
maze6=createSprite(400,100,10,300);
maze6.shapeColor="brown";
maze7=createSprite(480,100,150,10);
maze7.shapeColor="brown";
maze8=createSprite(400,400,300,10);
maze8.shapeColor="brown";
maze9=createSprite(100,600,200,10);
maze9.shapeColor="brown";
maze10=createSprite(400,800,10,400);
maze10.shapeColor="brown";
maze11=createSprite(600,800,10,500);
maze11.shapeColor="brown";
maze12=createSprite(400,490,300,10);
maze12.shapeColor="brown";
maze13=createSprite(200,700,100,10);
maze13.shapeColor="brown";
maze14=createSprite(100,45,10,100);
maze14.shapeColor="brown";
maze15=createSprite(200,100,209,10);
maze15.shapeColor="brown";
maze16=createSprite(245,750,10,100);
maze16.shapeColor="brown";
maze17=createSprite(130,300,10,200);
maze17.shapeColor="brown";




}

function draw (){
background (backgroundImg);

drawSprites ();

}