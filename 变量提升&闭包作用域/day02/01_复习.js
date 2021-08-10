/* 
  作用域
*/
//全局作用域
/* function fn(){
    //私有作用域
    n = 3;
}
var n = 2;
fn();
console.log(n);//=>3 */


/* 浏览器底层运行机制 */
/* 
 ECStack  执行环境栈
 EC(G) 全局执行上下文
 VO  全局变量对象
 AO  私有变量对象
 GO 全局对象
*/


/* 变量提升 */

/* console.log(a); */
if(1=="1"){
 /*   console.log(a);  */
   let a=2;
   console.log(a);
}
console.log(a);