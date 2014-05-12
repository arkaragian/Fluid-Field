function Vector(x, y) {
    this.x = x;
    this.y = y;
        
    this.add = add;
    function add(v){
        this.x = this.x + v.x;
        this.y = this.y + v.y;
    }
} //End of vector