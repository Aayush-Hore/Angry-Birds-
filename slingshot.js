class Slingshot
{

constructor(objectA,objectB)
{

var options={
bodyA:objectA,
bodyB:objectB,
length:10,
stiffness:0.04
}
this.rope = Constraint.create(options);
World.add(world,this.rope);

}
display(){

   var PointA = this.rope.bodyA.position;
   
   var PointB = this.rope.bodyB.position;

line(PointA.x,PointA.y,PointB.x,PointB.y);

}  
}