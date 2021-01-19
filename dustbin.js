class Dustbin{
    constructor(x,y,width,height){
        var option={
            'isStatic':true
        }
        this.body1 = Bodies.rectangle(x,y,width,height,option);
        this.body1.width= width;
        this.body1.height= height;
        World.add(world,this.body1);

      
        
    }
    display(){
        rectMode(CENTER);
        fill("yellow");
        rect(this.body1.position.x,this.body1.position.y,this.body1.width,this.body1.height);
        
    }
}