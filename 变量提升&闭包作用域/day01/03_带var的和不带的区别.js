/* console.log(a);//=>报错
let a = 12;
a = 13;
console.log(a);
 */

/* 
  在全局作用域下，使用var/function声明的变量
  都相当于给window上添加了一个属性
*/

var a = 13;
console.log(a);
console.log(window.a);

/* 不写声明，直接定义就是直接给window上添加了一个属性 */
b = 33;
console.log(window.b);