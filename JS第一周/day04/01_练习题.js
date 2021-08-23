let x = 5;
/* 
function fn(x){...}：匿名函数具名化
该函数名不能在外部使用，也不能修改
*/
const fn = function fn(x){
    return function (y){
        console.log(y + (++x));
    }
};
let f = fn(6);
f(7);//14
fn(8)(9);//18
f(10);//18
console.log(x);//5
