class Connection{
    constructor(bA,pA){
        var options={
            length:20,
            stiffness:0.2,
            pointA:pA,
            bodyA:bA            
        }
        this.pointA=pA;
        this.cn= Constraint.create(options);
        World.add(world,this.cn);
    }
    display(){
        var PointA=this.pointA.position
        var PointB=this.cn.bodyA.position
        line(PointA.x,PointA.y,PointB.x,PointB.y);
    }
}