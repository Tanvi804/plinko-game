class Particle{
	constructor(x,y,r)
	{
		var options={
			isStatic:false
			}
		this.x=x;
		this.y=y;
		this.r=10;
		this.body=Bodies.circle(this.x, this.y, 10, options)
		this.color=color(random(0,255),random(0,255),random(0,255))
		World.add(world, this.body);
	}

	display()
	{
		var Pos=this.body.position;	
		push()
		translate(Pos.x, Pos.y);
		rotate(this.body.angle)
		fill(this.color)
		//fill(color(random(0,255),random(0,255),random(0,255)))
		ellipseMode(RADIUS);
		ellipse(0,0, this.r);
		pop()
 }
}