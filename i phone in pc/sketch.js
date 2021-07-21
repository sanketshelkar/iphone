var iphone
var dev

function setup() {

  createCanvas(windowWidth,windowHeight);

  iphone = createSprite(windowWidth/1.5,windowHeight/2)
  dev = createSprite(windowWidth/3.5,windowHeight/2)
  
}

//

function preload(){

  iphone1 = loadImage("iphone.png")
  dev1 = loadImage("developer.png")

}

//

function draw() {
  
  //background
   background("black");
    
   //image adding
   iphone.addImage(iphone1)
   dev.addImage(dev1)

   //scale
   iphone.scale = 1.7
   dev.scale = 0.3

  drawSprites(); 
  
}
  
    
  


