class Sling{
    constructor(body1, body2, pointB){
        
        this.offsetX = pointB.x;
        this.offsetY = pointB.y;

        var options = {
            bodyA: body1,
            bodyB: body2,
            stiffness:0.5,
            length:200,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    display(){
    var pointA = this.sling.bodyA.position;
    var pointB = this.sling.bodyB.position;

    strokeWeight(2.5);

    var anch1X = pointA.x
    var anch1Y = pointA.y

    var anch2X = pointB.x+this.offsetX
    var anch2Y = pointB.y+this.offsetY

    line(anch1X,anch1Y,anch2X,anch2Y);
    }
    
}