/* console.log(a);//undefined
if (!('a' in window)) {
  var a = 13;
}
console.log(a);//undefined
 */
/* console.log(fn);//undefined
fn();//报错 
if ('fn' in window) {
  fn();
  function fn() {
    console.log('哈哈哈');
  }
}
fn();  */

/* 忽略报错的影响，即下列代码还能继续执行则答案是？
   '哈哈哈' '哈哈哈'
*/

/* f = function () {return true;};
g = function () {return false;};
(function () {
    if (g() && [] == ![]) {//报错
        f = function () {return false;}
        function g() {return true;}
    }
})();
console.log(f());
console.log(g()); */

/* f = function () {return true;};
g = function () {return false;};
(function () {
    if ([] == ![]) {
        f = function () {return false;}
        function g() {return true;}
    }
})();
console.log(f());//false
console.log(g());//false */

/* let/const/class从语法上都不允许重复声明*/
/* function sum(a) {
    console.log(a);//报错
    let a = 100;
    console.log(a);
}
sum(200);
 */

/* 
 EC(G) 
   obj
   a
   fn -> 0x000 [[scope]]:EC(G)
   变量提升  var a; function fn(obj){...};
*/
var obj = {
  a: '包子',
  b: '面条'
};
var a = 'name';
function fn(obj) {
  console.log(obj);
  //把变量a存储的值作为属性名去操作
  obj[a] = '珠峰';
  obj.b = '馒头';
  obj = {};
  obj[1] = 1;
  console.log(obj);
}
fn(obj);
console.log(obj);
