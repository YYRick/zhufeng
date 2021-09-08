/* 
   词法解析是在变量提升之前的

   报错，并且报的是个语法错误，在词法解析阶段就报错了，
   在let声明之前就使用了a变量

   写项目的时候尽量避免出现变量提升

   注意：let/const 不存在变量提升
*/
/* console.log(a); */
    
/* let a= 12;
    
function fn(){
    console.log(a);
    
    let a=13;   
    
}
    
fn();
    
console.log(a); */

/* if(1 === 1){
    var a = 12;//=> 没有块级作用域，还是全局下的变量a
    //=> let所在的大括号形成了一个块级作用域
    let b = 13;
}
console.log(a);//=> 12
console.log(b);//=> 报错 */

{
    var a = 13;
    let b = 14;
}

console.log(window.a === a);//=> true