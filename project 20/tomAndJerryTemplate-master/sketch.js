var bg,bgImg;

var catImg1,catImg2,catImg3,catImg4,cat;

var mouseImg1,mouseImg2,mouseImg3,mouseImg4,mouse;

function preload() {
    //load the images here
    bgImg = loadImage("garden.png");

    catImg1 = loadImage("cat1.png");
    catImg2 = loadAnimation("cat2.png");
    catImg3 = loadAnimation("cat3.png");
    catImg4 = loadImage("cat4.png");

    mouseImg1 = loadImage("mouse1.png");
    mouseImg2 = loadAnimation("mouse2.png");
    mouseImg3 = loadAnimation("mouse3.png");
    mouseImg4 = loadImage("mouse4.png");
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bg = createSprite(500,400);
    bg.addImage(bgImg);

    cat = createSprite(650,100);
    cat.addImage(catImg1);

    mouse = createSprite(100,100);
    mouse.addImage(mouseImg1);
}

function draw() {

    background(255);

     if(cat.x - mouse.x < (cat.width - mouse.width)/2){
      cat.velocityX=0;
     cat.addAnimation("catLastImage",catImg3);
     cat.changeAnimation("catLastImage");
     mouse.addAnimation("mouseLastImage",mouseImg3);
     mouse.changeAnimation("mouseLastImage");
     }
    
     keyPressed();
    drawSprites();
}


function keyPressed(){
  if (keyCode === LEFT_ARROW){
  cat.velocityX = -5;
  cat.addAnimation("catRunning",catImg2);
  cat.changeAnimation("catRunning");
  }
}
