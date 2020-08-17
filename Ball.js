 class Ball{
 constructor(x,y,radius) {
 var options = {
 isStatic: false,
 friction: 0.5,
 restitution: 0.3,
 density: 1.2,
 }
 
 this.body = Matter.Bodies.circle(100,500,20,options)
 this.radius = radius;
 World.add(world, this.body);
 }

 display(){
 var pos =this.body.position;
 ellipseMode(CENTER);
 fill("orange");
 ellipse(pos.x, pos.y, this.radius);
}

}