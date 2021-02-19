class Block{
    constructor(x,y,w,h){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.1,
            density:0.1
        }
        this.x=x;
        this.y=y;
        this.width=w;
        this.height=h;

        this.b = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.b);
    }
    display(){
        push();
        translate(this.b.position.x, this.b.position.y);
        rotate(this.b.angle);
        fill("red");
        rect(0,0,this.width,this.height);
        pop();
    }
}