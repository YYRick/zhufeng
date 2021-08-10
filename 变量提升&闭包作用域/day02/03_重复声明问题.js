/* 
 var重复声明会被忽略，但重复赋值可以进行覆盖
*/

console.log(a);//=>undefined
var a = 100;
//会被忽略
var a;
console.log(a);//=>100

/* console.log(test);
function test(){
    console.log(333);
}

var test; */
