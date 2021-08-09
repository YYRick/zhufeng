/* 
  自动执行
  执行完成以后立即释放
*/
//IIFE -> immediately-invoked function expression
//=>常用于初始化函数

//常用写法
/* (function(){
    
})(); */

//W3C建议写法
/* 
  立即执行函数也是有返回值的
  通过将立即执行函数赋值给一个变量可以获得立即执行函数的返回值
*/
var num = (function(a, b){
  console.log(a + b);
}(2, 4));
//被括号包裹起来的都是表达式
(function test(){});

/* 一定是表达式才能被执行符号执行 */
(function test1(){
  console.log(1);
})();

var test2 = function(){
  console.log(1);
}();

/* function test3(){
  console.log(1);
}(); =>会报错*/

var test = function(){
  console.log(2);
}();

console.log(test);// 2 undefined   立即执行函数  然后test1就被销毁了

/* 
  函数声明变成表达式的方法 + - ! || &&
  注意：函数表达式会忽略函数名
*/
+ function(){
  console.log(1);
}();

- function(){
  console.log(2);
}();

! function(){
  console.log(3);
}();

undefined || function(){
  console.log(4);
}();

2 && function(){
  console.log(5);
}();
