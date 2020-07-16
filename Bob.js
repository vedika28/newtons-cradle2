class Bob {

    constructor(x,y) {

        var options = {
            isStatic: false
        }
        this.body=Bodies.circle(x,y,40,options);
        World.add(world,this.body);
    }

    display() {
        var pos=this.body.position;
        fill("pink");
        ellipseMode(CENTER);
        circle(pos.x,pos.y,80);
    }
}