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

f = function () {return true;};
g = function () {return false;};
(function () {
    if ([] == ![]) {
        f = function () {return false;}
        function g() {return true;}
    }
})();
console.log(f());//false
console.log(g());//false