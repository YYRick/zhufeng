class Fn {
    constructor(num){
        this.x = this.y = num;
    }
    
    sum(){
        console.log(this.x + this.y);
    }

    static a = 1;
}
Fn.prototype.x = 20;