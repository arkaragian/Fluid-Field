function Stream(ux,uy) {
    this.ux = ux;
    this.uy = uy;
    
    
    this.velocOn = velocOn;
    function velocOn(p){
        return new Vector(this.ux,this.uy);
    }
    
    this.draw = draw;
    function draw(canvas){
        return;
    }
} //End of Stream