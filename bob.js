class Bob {
    constructor(x,y,d){
        var options = {
            isStatic:false,
            restitution:1,
            friction:0.5,
            density:5
        }
        this.body = Matter.Bodies.circle(x,y,25,options);
        World.add(world, this.body);
        }
        display(){
            var pos = this.body.position;
            push();
            translate(pos.x,pos.y);
            ellipseMode(RADIUS);
            fill("blue");
            ellipse(0,0,25,25);
            pop();
        }
}