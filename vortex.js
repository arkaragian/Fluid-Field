function Vortex(posx, posy, strength) {
    this.x = posx;
    this.y = posy;
    this.strength = strength;
    
    
    this.velocOn = velocOn;
    function velocOn(p){
        var dx=distancex(this,p);
        var dy=distancey(this,p);
        var r =distance(p,this);
        var angle = Math.atan2(dy,dx);
        var ux = (this.strength/r)*Math.sin(angle);
        var uy = -(this.strength/r)*Math.cos(angle);
        //angle = toDegrees(angle);
        //console.log("dx ="+dx+" dy ="+dy+" angle ="+toDegrees(angle)+" r="+r+" ux ="+ux+" uy ="+uy);
        var u = new Vector(ux,uy);
        return u;
    }
    
    this.draw = draw;
    function draw(context){
        var halfArrowWidth = 5;
        var r = 20;
        if(this.strength < 0){
            context.strokeStyle = "rgb(0,255,0)";
            context.beginPath()
            context.arc(this.x,this.y,r,Math.PI/2,Math.PI);
            context.stroke();
            
            context.beginPath()
            context.moveTo(this.x-r,this.y);
            context.lineTo(this.x-r-halfArrowWidth,this.y+halfArrowWidth);
            context.lineTo(this.x-r+halfArrowWidth,this.y+halfArrowWidth);
            context.lineTo(this.x-r,this.y);
            context.stroke();
            
            context.fillStyle = "rgb(0,255,0)";
            context.fillRect(this.x,this.y,2,2)
        } else {
            context.strokeStyle = "rgb(0,0,255)";
            context.beginPath()
            context.arc(this.x,this.y,r,Math.PI,3*Math.PI/2);
            context.stroke();
                        
            context.beginPath()
            context.moveTo(this.x-r,this.y);
            context.lineTo(this.x-r-halfArrowWidth,this.y-halfArrowWidth);
            context.lineTo(this.x-r+halfArrowWidth,this.y-halfArrowWidth);
            context.lineTo(this.x-r,this.y);
            context.stroke();
            
            context.fillStyle = "rgb(0,0,255)";
            context.fillRect(this.x,this.y,2,2)
        }
    }
} //End of Vortex