//不允许重复声明
/* let a;
var a;
 *///Uncaught SyntaxError: Identifier 'a' has already been declared
//存在暂时性死区
/* console.log(a);
let a; *///Uncaught ReferenceError: Cannot access 'a' before initialization

/* console.log(typeof a);
let a; *///Uncaught ReferenceError: Cannot access 'a' before initialization


let a=10,
b=10;
let fn=function(){
    console.log(a);
    let a=b=20;                   
    console.log(a,b);
};
fn();
console.log(a,b)
