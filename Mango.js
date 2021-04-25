class Mango{
    constructor(x, y,r) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.2,
            'isStatic':true
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle (this.x, this.y, (this.r-100), options);
        this.image = loadImage("images/mango.png");
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