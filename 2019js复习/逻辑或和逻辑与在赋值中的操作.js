/* 
  A || B ：首先验证A的真假，如果A为真，就返回A的值；否则返回B的值。
  A && B : A为真就返回B的值，A为假就返回A的值
  &&的优先级高于||
*/

let a = 0 || false;
console.log(a);//=> false

a = 1 || false;
console.log(a);//=> 1

a = 1 && 100;
console.log(a);//=> 100

a = 0 && 100;
console.log(a);//=> 0

a = 0 || 1 && 2 || 3;
console.log(a);//=> 2


//使用场景
function fn(x, callback){
    //参数初始化
    x = x || 0;


    //保证传入的第二个参数是个函数
    callback && callback();
}