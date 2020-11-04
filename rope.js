class rope{
    constructor(body1,body2,offsetx,offsety){
        this.offsetx=offsetx
        this.offsety=offsety
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetx,y:this.offsety}
        }
        this.rope=constraint.create(options)
        World.add(world,this.rope)
    }
display(){
    var pointA=this.rope.bodyA.position
    var pointB=this.rope.bodyB.position
    strokeWeight(2)
    var anchor1X=pointA.x
    var anchor1Y=pointA.y
    var anchor2X=pointB.x+this.offsetx
    var anchor2Y=pointB.y+this.offsety
    line(anchor1X,anchor1Y,anchor2X,anchor2Y);
}
}