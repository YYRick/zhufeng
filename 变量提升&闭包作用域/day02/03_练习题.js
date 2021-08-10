/* 
 全局作用域中，使用var/function关键声明的变量也会保存在GO中
 可以通过window访问
*/
function test(){
    var a =  1;
    /* 不带声明关键字，默认就是给window上添加属性 */
    b = 1;
}
test();
console.log(window.b);//=>1 
console.log(window.a);//=>undefined 


