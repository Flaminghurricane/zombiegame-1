function preload(){ 
  carImg=loadImage("images/car_img_2-removebg-preview.png"); 
  backgroundImg=loadImage("images/level1 updated img.jpg"); 
  zombie1Img=loadImage("images/obstacle1.png"); 
  zombie2Img=loadImage("images/obstacle2.png"); 
  zombie3Img=loadImage("images/obstacle3.png");
}






function setup() {
  createCanvas(1530,700); 
  background1=createSprite(width/2,height/2,1000,700); 
  background1.addImage(backgroundImg);  
  background1.scale=0.8; 
  background1.velocityX=-4;

 car=createSprite(100,height-90,100,100);  
 car.addImage(carImg); 
 car.scale=0.6
 
 ground=createSprite(width/2,height-10,width,30);  
ground.shapeColor="black";
 


}

function draw() {
  background("white");   
  if (background1.x < 0){
    background1.x = background1.width/3;
  } 

  //movement of car- 
  if(keyDown("RIGHT")&& car.x<width/2){ 
    car.x=car.x+5
  }
  
  if(keyDown("LEFT")&& car.x>110){ 
    car.x=car.x-5
  }
  
  obstacles();


  drawSprites();
} 

function obstacles(){ 
  if(frameCount%50===0){  
    zombie1=createSprite(width,height-90,20,20); 
    zombie1.velocityX=-3;  
    zombie1.lifetime=500; 
    
    
    var rand=Math.round(random(1,3)); 
    switch(rand){ 
      case 1:  
      zombie1.addImage(zombie1Img);              
      break;
      
      case 2:  
      zombie1.addImage(zombie2Img);   
      zombie1.scale=0.8; 
      //zombie1.y=100; 
      //for(var i=100;i>400;i=i+20){ 
        //zombie1.y=i;
      //}          
      break; 

      case 3:  
      zombie1.addImage(zombie3Img);              
      break; 

      default: 
      break;
    }
  }
  
  
  
 


}