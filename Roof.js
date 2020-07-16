class Roof {
    constructor() {

        var options = {
            isStatic: true,
        }
        this.body = Bodies.rectangle(400, 100, 400, 10, options);
        World.add(world, this.body);
    }

    display() {
        fill("brown");
        var pos = this.body.position
        rectMode(CENTER);
        rect(pos.x, pos.y, 800, 20);
    }
}