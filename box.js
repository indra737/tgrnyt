class Box{
    constructor(x, y,w,h,r,g,b) {
        var options = {
            'restitution':0.9,
            'friction':1,
            'density': 0.5
            
        }

        this.width =w;
        this.height =h;
        this.body = Bodies.rectangle(x, y, this.width,this.height, options);
      this.r=r
      this.g=g
      this.b=b
        this.visibility=255
        World.add(world, this.body);

      }
     
      show(){
        var pos =this.body.position;
        var angle= this.body.angle;
      
        if(this.body.speed<5){
        push()
       
        translate(pos.x,pos.y)
        rotate(angle)
       
        rectMode(CENTER);
        fill(this.r,this.g,this.b);
        stroke(0)
        rect(0,0,this.width,this.height);
        pop()
        }else {
          World.remove(world,this.body);
          push()
          this.visibility-=0.01
         tint(255,this.visibility)
       pop()
        }

      
    }
}