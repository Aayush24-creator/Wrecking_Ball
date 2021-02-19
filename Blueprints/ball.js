class Ball {
    constructor(x,y,r){
    var options={
        isStatic:false,
        friction:0.2,
        density:0.2
    }
    this.x=x;
    this.y=y;
    this.radius=r;
    this.wb=Bodies.circle(x,y,r,options);
    World.add(world,this.wb);
    }
   display(){
       fill("red");
       ellipseMode(RADIUS);
       ellipse(this.wb.position.x,this.wb.position.y,this.radius,this.radius);
   } 
}