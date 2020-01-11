var PLAY= 1;
var END = 0;
var GAMEOVER = 0;
var Gamestate = PLAY;
var BG1;
var count;

var player1, player2, playerimg;
var fighthitbox ,fight1, fightimg;
var cosmic1, cosmicimg;
var powercore, powercoreimg,powercorebrk;
var FireBall1 , FireBallimg;
var Punches, Punchimg;
var health, healthbar,healthbarBG;
var AttacksGroup
function preload(){
 BG1 = loadImage ("Ehan fight sprites/my game background.png");
 fightimg= loadImage ("Ehan fight sprites/Fight.png");
 cosmicimg = loadImage ("Ehan fight sprites/cosmic.png");
 FireBallimg = loadImage ("Ehan fight sprites/FireBall.png");
 powercoreimg = loadImage ("Ehan fight sprites/Power Core.png");
 powercorebrk = loadImage ("Ehan fight sprites/Broken Power Core.png");
 Punchimg = loadImage ("Ehan fight sprites/hit.png");
}





function setup() {
  createCanvas( windowWidth, windowHeight);
 
  fight1 = createSprite(windowWidth/2,windowHeight - 300);
  fight1.addImage("fight1",fightimg);
  
  cosmic1 = createSprite(windowWidth/2,250);
  cosmic1.addImage ("cosmic1",cosmicimg);
  cosmic1.scale=3;

  fighthitbox= createSprite (fight1.x, fight1.y,165,45);
  fighthitbox.visible = false;


powercore = createSprite (windowWidth/2,450);
powercore.addImage ("powercore", powercoreimg);
powercore.scale = 3
health = 450;
strokeWeight(5)
stroke( "white")
healthbar = createSprite(windowWidth/2,50,health,50);
healthbar.shapeColor= "green";
strokeWeight(5)
stroke( "white")
AttacksGroup = createGroup();
}


function draw() {
  background(BG1);  
          
          if (Gamestate === PLAY){
            if (touches.length > 0 ||keyWentDown ("UP_ARROW")){
              powercore.velocityY = -8;
              touches = [];
            }
            if (touches.length > 0 ||keyWentDown ("DOWN_ARROW")){
              powercore.velocityY = 8;
              touches = [];
            }
            if (touches.length > 0 ||keyWentDown ("LEFT_ARROW")){
              powercore.velocityX = -8;
              touches = [];
            }
            if (touches.length > 0 ||keyWentDown ("RIGHT_ARROW")){
              powercore.velocityX =8;
              touches = [];
            
            }

            if (touches.length > 0 ||keyWentUp ("UP_ARROW")){
              powercore.velocityY = 0;
              touches = [];
            }
            if (touches.length > 0 ||keyWentUp ("DOWN_ARROW")){
              powercore.velocityY = 0;
              touches = [];
            }
            if (touches.length > 0 ||keyWentUp ("LEFT_ARROW")){
              powercore.velocityX = 0;
              touches = [];
            }
            if (touches.length > 0 ||keyWentUp ("RIGHT_ARROW")){
              powercore.velocityX = 0;
              touches = [];
            }

            if (powercore.isTouching (fighthitbox) ) {

              fight1.y = random(windowHeight,0);
              fight1.x = random(windowWidth,0);
              fighthitbox.y= fight1.y;
              fighthitbox.x= fight1.x;
              }
              if (powercore.isTouching (fight1) ) {
                cosmic1.y=cosmic1.y+50;
                
                }
                if (powercore.isTouching(AttacksGroup)){
                  health = health- 2;
                  healthbar.width = healthbar.width - 2;
               }





              if (cosmic1.y > 600){
                Gamestate = END;
              }

              spawnAttack();
          }

          else if (Gamestate === END){
            if (cosmic1.y = 300){
              cosmic1.velocityY = 0
            }
          cosmic1.velocityY = -5
          




          }
          if (health <0){
            Gamestate = GAMEOVER;
            powercore.addImage("powercore",powercorebrk);
          }
  









  
  drawSprites();
  textSize(30,30);
  fill("green");
  text(health,500,100);
  
}



function bossBar() {

}

function spawnAttack() {
  if (frameCount % 10  === 0) {
    FireBall1 = createSprite(random(windowWidth,0),0);
    FireBall1.addImage("FireBall1",FireBallimg);
    FireBall1.velocityY =  FireBall1.velocityY + 30;
   
  FireBall1.scale = 2;
  FireBall1.lifetime=700;
    if (frameCount % 20 === 0) {
      
      FireBall1.lifetime=10;
      
    }
    
    AttacksGroup.add (FireBall1);
}


if (frameCount % 10 === 0) {
  Punches = createSprite(random(windowWidth,0),random(windowHeight,0));
  Punches.addImage("Punches",Punchimg);
  Punches.scale= 5;
  Punches.lifetime = 5;
  AttacksGroup.add (Punches);
}



}

function fightingMech() {
    
}