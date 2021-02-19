class Ground{
    constructor(x,y,w,h){
        var options={
            isStatic:true,
            restitution:0,
            friction:0.5,
            density:0.2
        }
        this.x=x;
        this.y=y;
        this.width=w;
        this.height=h;

        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
    }
    display(){
        fill("red");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}