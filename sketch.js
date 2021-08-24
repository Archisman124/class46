var ground,groundImage
var mario,marioImage
var obstacle,obstacleImage
var brick,brickImage
function preload(){
groundImage=loadImage("ground2.png")
marioImage=loadAnimation('mario00.png','mario01.png','mario02.png','mario03.png')
obstacleImage=loadAnimation('obstacle1.png','obstacle2.png','obstacle3.png','obstacle4.png')
brickImage=loadImage('brick.png')
}
function setup(){
createCanvas(360,400) 
ground=createSprite(300,400)
ground.addImage(groundImage)
ground.velocityX=-4
mario=createSprite(50,335)
mario.addAnimation("mario",marioImage)
mario.scale=1.5

}
function draw(){
  background('blue')
  if(ground.x<0){
    ground.x=ground.width/2
    
  }
  if(keyDown('up')&&mario.y>331){
    mario.velocityY=-10
  }
  mario.velocityY=mario.velocityY+0.5
  mario.collide(ground)
 spawnObstacles()
  SpawnBricks()
 drawSprites()     


}
function spawnObstacles(){
  if(frameCount%60===0){
    obstacle=createSprite(360,340,10,10)
    obstacle.addAnimation("obstacle",obstacleImage)
    obstacle.velocityX=-4
  }

}
function SpawnBricks(){
  if(frameCount%60===0){
    brick=createSprite(360,Math.round(random(200,250)),10,10)
    brick.addImage(brickImage)
    brick.velocityX=-4
  }
}