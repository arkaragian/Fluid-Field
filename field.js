function Field(posx, posy, strength) {
    this.x = posx;
    this.y = posy;
    this.strength = strength;
        
    this.velocOn = velocOn;
    function velocOn(p){
        var dx=distancex(this,p);
        var dy=distancey(this,p);
        var r =distance(p,this);
        var angle = Math.atan2(dy,dx);
        var ux = (this.strength/r)*Math.cos(angle);
        var uy = (this.strength/r)*Math.sin(angle);
        //angle = toDegrees(angle);
        //console.log("dx ="+dx+" dy ="+dy+" angle ="+toDegrees(angle)+" r="+r+" ux ="+ux+" uy ="+uy);
        var u = new Vector(ux,uy);
        return u;
    }
    
    this.draw = draw;
    function draw(context){
        var r = 15;
        var arrow=8;
        if(this.strength < 0){
            context.strokeStyle = "rgb(0,255,0)";
    
            context.beginPath()
            
            context.moveTo(this.x-r,this.y-r);
            context.lineTo(this.x-r-arrow/2,this.y-r+arrow/2);
            context.lineTo(this.x-r+arrow/2,this.y-r-arrow/2);
            context.lineTo(this.x-r+arrow/2,this.y-r+arrow/2);
            context.lineTo(this.x-r-arrow/2,this.y-r+arrow/2);
            
            context.moveTo(this.x+r,this.y-r);
            context.lineTo(this.x+r+arrow/2,this.y-r+arrow/2);
            context.lineTo(this.x+r-arrow/2,this.y-r-arrow/2);
            context.lineTo(this.x+r-arrow/2,this.y-r+arrow/2);
            context.lineTo(this.x+r+arrow/2,this.y-r+arrow/2);

            context.moveTo(this.x+r,this.y+r);
            context.lineTo(this.x+r+arrow/2,this.y+r-arrow/2);
            context.lineTo(this.x+r-arrow/2,this.y+r-arrow/2);
            context.lineTo(this.x+r-arrow/2,this.y+r+arrow/2);
            context.lineTo(this.x+r,this.y+r);
            
            context.moveTo(this.x-r,this.y+r);
            context.lineTo(this.x-r-arrow/2,this.y+r-arrow/2);
            context.lineTo(this.x-r+arrow/2,this.y+r-arrow/2);
            context.lineTo(this.x-r+arrow/2,this.y+r+arrow/2);
            context.lineTo(this.x-r,this.y+r);
            
            context.stroke();
        } else {
            context.strokeStyle = "rgb(0,0,255)";
            context.beginPath()
            
            context.moveTo(this.x-r,this.y-r);
            context.lineTo(this.x-r+arrow,this.y-r);
            context.lineTo(this.x-r,this.y-r+arrow);
            context.lineTo(this.x-r,this.y-r);
            
            context.moveTo(this.x+r,this.y-r);
            context.lineTo(this.x+r,this.y-r+arrow);
            context.lineTo(this.x+r-arrow,this.y-r);
            context.lineTo(this.x+r,this.y-r);
            
            context.moveTo(this.x+r,this.y+r);
            context.lineTo(this.x+r-arrow,this.y+r);
            context.lineTo(this.x+r,this.y+r-arrow);
            context.lineTo(this.x+r,this.y+r);
            
            context.moveTo(this.x-r,this.y+r);
            context.lineTo(this.x-r,this.y+r-arrow);
            context.lineTo(this.x-r+arrow,this.y+r);
            context.lineTo(this.x-r,this.y+r);
            
            context.stroke();
        }
        context.beginPath()
        context.moveTo(this.x-r,this.y-r);
        context.lineTo(this.x+r,this.y+r);
        context.stroke();
        
        context.beginPath()
        context.moveTo(this.x+r,this.y-r);
        context.lineTo(this.x-r,this.y+r);
        context.stroke();
    }
} //End of Field