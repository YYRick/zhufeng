//函数柯里化、函数反柯里化

/* 面试题：判断数据类型 */
//常用的判断类型的方法有四种：
/* 
  1.typeof  不能细分对象类型
  2.constructor 可以找到这个变量是由谁构造出来的
  3.instanceof 判断这个变量是谁的实例  通过__proto__
  4.Object.prototype.toString.call()  不能细分谁是谁的实例
*/

//函数柯里化：将一个函数细化
/* function isType(type){
   return function(value){
       return Object.prototype.toString.call(value) === `[object ${type}]`;
   }
}

let isArray = isType('Array');
console.log(isArray('hello'));
console.log(isArray([]));
 */


//通过一个柯里化函数，实现通用的柯里化方法
function isType(type, value){
   return Object.prototype.toString.call(value) === `[object ${type}]`;
}

const currying = (fn, arr = []) =>{
   let len = fn.length;//这里获取的是参数的个数
   return function(...args){
       //=>高阶函数
       let concatValue = [...arr, ...args];
       if(concatValue.length < len){
          return currying(fn, concatValue);//递归，不停的产生函数
       }else{
          return fn(...concatValue);
       }
   } 
}

let isArray = currying(isType)('Array');
let isString = currying(isType)('String');

console.log(isArray([]));
console.log(isString('123'));


