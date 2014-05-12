function Particle(posx, posy) {
    this.x = posx;
    this.y = posy;
    this.veloc = new Vector(0,0);
    
    
    this.draw = draw;
    function draw(context){        
        //Draw Vector
//        context.beginPath();
//        context.moveTo(this.x, this.y);
//        context.lineTo(this.x+10*this.veloc.x, this.y+10*this.veloc.y);
//        context.lineWidth=1;
//        context.strokeStyle="#FFFFFF";
//        context.stroke();
        
        //Draw Point
        context.fillStyle = "rgb(255,0,0)";
        context.fillRect(this.x,this.y,1,1);
    }
    
    this.setVeloc = setVeloc;
    function setVeloc(Vector){
        this.veloc = Vector;
    }
    
    this.calcPos = calcPos;
    function calcPos(dt){
        this.x = this.x + dt*this.veloc.x;
        this.y = this.y + dt*this.veloc.y;
    }
    
    this.addVeloc = addVeloc;
    function addVeloc(v){
        this.veloc.add(v);
    }
} //End of Particle