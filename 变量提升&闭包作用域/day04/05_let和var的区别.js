/* let&const VS var的区别
     + 变量提升
     + 在全局上下文中和GO的关系
     + 重复声明
     + 块级作用域
     + 暂时性死区
     + ...
 */


//console.log(a); //报错

/* 
 基于typeof检测一个未被声明的变量，不会报错
 反而输出结果为'undefined' => 这就是[暂时性死区]问题，可以理解为这是浏览器的一个BUG
*/
/* console.log(typeof a);//undefined

//let解决暂时性死区问题
let a = 10;
 */
/* 
  let VS const
  变量：我们声明出来的名字(更具体的说是存储在VO/AO中的)
  常量：具体值 如 1
*/

//let/const声明的都是'变量'

/* let a = 12;
a = 13;//让变量a重新和13关联在一起
console.log(a);//13
 */


/* 
 const声明的变量有一个特点：'不能修改它的关联指向，一旦和某个值关联，则不能再和其他值进行关联了'
*/
/* const b = 12;
b = 13;//Uncaught TypeError: Assignment to constant variable. */

//并且const声明的变量必须设置初始值，否则报错
/* const b; */

/* 改变对象b里面的name属性，说明了const确实声明的是变量 */
const b = {
    name: '馒头'
};

b.name = '包子';
console.log(b);//=> {name: "包子"}