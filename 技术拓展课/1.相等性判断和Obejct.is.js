/* 
   js中关于相等性的判断
   截止es6版本，有四种相等判断的算法
     + 全等 === 
     + 等于 ==
     + 零值相等  -0 === +0
     + 同值相等  -0 !== +0  NaN === NaN
 */

/* 
  js中提供有关相等判断的操作方法
    + 严格相等 ===  Strict Equality
    + 非严格(抽象/非约束)相等 == Loose(自由的、不受限制的) Equality  名词、学术用语
    + Object.is(val1,val2)  es6新增的API  判断两个参数是否是同一值
 */


/* 
  严格相等 ===  Strict Equality
    特点：不进行隐式类型转换 - 类型相同/值也要相等
    例如：1 === '1' ? false   1  === 2 ? false
    引用值必须是同一地址
    var obj = {}  obj === obj ? true  {} === {} ? false
    两个NaN或者NaN和其他值都不相等
    NaN === NaN ? false   NaN === undefined ? false
    +0和-0相等
    +0 === -0 ？true
    +Infinity 和 -Infinity 不相等
    +Infinity === -Infinity ? false
 */


/* 
  如何让 a !== a ? true 成立
   a => NaN
 */


/*  
  非严格相等  Abstract equality
     特性：隐式类型转换 - 等式两边都有可能被转换
     转换之后还是要用严格相等来进行比较

     ToPrimitive(A)通过尝试调用 A 的A.toString() 和 A.valueOf() 方法，将参数 A 转换为原始值（Primitive）
*/

/* 
   任何对象都与undefined/null不相等,除了窄对象
   ({}) === undefined ? false
   ({}) === null ? false

   窄对象 -> document.all
   typeof decument.all  -> 'undefined'
   document.all == undefined ? true
*/


/* 
  === vs ==  的优势?
   + 全等对于结果的预测更清晰明确
   + 全等是不进行隐式类型转换的，比==更快
 */


/* 
  falsy值: 转换后是false的值  规定8个
   fasle 0 -0 8n "" '' `` null undefined  NaN
*/


/* 
 同值相等  same-value  主要是针对零
   +0 !== -0 ? false 成立
   NaN === NaN  ? true 成立
 */

//同值相等下：+0 !== -0
var obj = {};
Object.defineProperty(obj, 'myZero', {
  value: -0,
  /* 不可删 */
  writable: false,
  /* 不可写 */
  configurable: false,
  /* 不可枚举 */
  enumerable: false
})

/* 写+0/0 抛出异常，不能重复定义myZero的属性   -0不会 */
Object.defineProperty(obj, 'myZero', {
  value: -0,
  /* 
    Uncaught TypeError: Cannot redefine property: myZero
  */
})

//同值相等下NaN === NaN ? true 是成立的
var obj1 = {};
Object.defineProperty(obj1, 'myNaN', {
  value: NaN,
  writable: false,
  configurable: false,
  enumerable: false
})

//不会抛出异常 证明在同值相等的情况下NaN === NaN
Object.defineProperty(obj1, 'myNaN', {
  value: NaN,
})


/* 
 同值相等的底层实现是通过Object.is()来实现的
 注意：Object.is() 是es6抛出来的方法
 es5并没有暴露出js引擎中的同值相等的方法
*/


/* 
  Object.is()
    es2015/es6  判断依据是同值相等
    同值相等和严格相等的区别：
     +0 !== -0 ? true
     NaN === NaN ? true
*/
var a = NaN,
  b = NaN;
var res = Object.is(a, b);
console.log(res);//=>true

var a = +0,
  b = -0;
var res = Object.is(a, b);
console.log(res);//=>false


//实现Object.is()
Object.myIs = function (a, b) {
  if (a === b) {
    return a !== 0 || 1 / a === 1 / b;
  }
  return a !== a && b !== b;
}

const res1 = Object.myIs(NaN, NaN);
console.log(res1);//=>true
