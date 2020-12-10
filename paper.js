class Paper{
    constructor(x,y,width,height){
        var options = {
            'restitution': 0.6,
            'friction': 0.5,
            'density': 1.2
        }
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
  }
    display(){
        var pos =this.body.position;
        imageMode(CENTER);
        strokeWeight(1);
        stroke("white");
        fill("white");
        image(this.image, pos.x, pos.y, this.width, this.height);
    }
}