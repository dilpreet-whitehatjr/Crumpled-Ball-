class Paper{
constructor(x,y,radius){
    
    this.radius= radius;
    this.body= Bodies.circle(x,y,radius,{'restitution':0.2,'friction':0.5,'density':1.2,'isStatic':false});
    World.add(world, this.body);
    
}
display(){
    fill("red");
    ellipseMode(RADIUS);
    ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);  
}



}
