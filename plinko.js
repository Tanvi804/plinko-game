class Plinko{
	constructor(x,y)
	{
		var options={
			isStatic:true,
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
		var plinkoPos=this.body.position;	
		push()
		translate(plinkoPos.x, plinkoPos.y);
		rotate(this.body.angle)
		fill(255,0,255)
		ellipseMode(RADIUS);
		ellipse(0,0, this.r);
		pop()
 }
}