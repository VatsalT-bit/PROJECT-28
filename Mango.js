class Mango{
    constructor(x, y,r) {
        var options = {
            'restitution':0.3,
            'friction':0,
            'density':1.2,
            isStatic:false
        }
        this.r=r;
        this.x=x;
        this.y=y;
        this.body = Bodies.circle (this.x, this.y, (this.r-20), options);
        this.image = loadImage("mango.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        pop();
      }
  }