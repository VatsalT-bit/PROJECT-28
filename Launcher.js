class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }

        this.pointB = pointB
        this.Launcherobject = Constraint.create(options);
        World.add(world, this.Launcherobject);
    }
                                                       
    fly(){
        this.Launcherobject.bodyA = null;
    }

    display(){
        if(this.Launcherobject.bodyA){
            var pointA = this.Launcherobject.bodyA.position;
            var pointB = this.pointB;
            push()
            stroke(48,22,8);
            if(pointA.x<220){
            strokeWeight(7);
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y);
            }
            else{
             strokeWeight(3);
             line(pointA.x+25,pointA.y,pointB.x-10,pointB.y);
             line(pointA.x+25,pointA.y,pointB.x+30,pointB.y);
            }
            pop()
        }
    }
    
}