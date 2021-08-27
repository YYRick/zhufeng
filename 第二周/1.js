/* function Fn(){
    let a = 1;
    this.a = a;
    console.log(this);
}
console.log(Fn);
Fn.prototype = new Fn;
console.log(Fn.prototype);
console.log(new Fn);

let A = new Fn;
console.log(A);

let obj = new String;
console.log(obj);

new Fn

new Fn(); */

var o = Object();
var c = new Object();
console.log(o);
console.log(c);