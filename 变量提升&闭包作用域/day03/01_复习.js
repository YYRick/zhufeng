

/* 
  私有作用域
*/
function fn(b){
    /* fn中形参b和变量a都是属于fn的私有变量 */
    var a = 2;
    console.log(a);
    //不带var是给window添加属性，属于全局变量
    c  = 333;
}
fn();
console.log(window.c);//=>333






/* 变量提升特殊性 */


//重复声明

console.log(fn);
function fn(){
    console.log(3);
}
var fn = 3;
console.log(fn);
