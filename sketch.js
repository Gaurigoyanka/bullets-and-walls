var walls
var bullet,speed,height

function setup(){
    createCanvas(1600,400)

    speed=random(223,321)
    weight=random(30,52)

    thickness=random(22,83)

    bullet.createSprite(50,200,50,5)
    bullet.velocityX=speed
    bullet.shapeColor=color(255)

    wall=createSprite(1500,600,20,height/2)
    wall.shapeColor=color(80,80,80)
 }  
 function draw(){
   background("pink")
     if(wall.x-bullet.x < (bullet.width+wall.width)/2)
     {
        bullet.velocityX=0
        var damage=0.5 * weight * speed * speed/thickness*thickness*thickness
        if(damage>10)
        {
          bullet.shapeColor=color("red")
        }
        if(damage<10)
        {
           bullet.shapeColor=color("green")
        }
     }
    }
 
