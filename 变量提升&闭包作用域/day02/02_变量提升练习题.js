/* f=function(){
    return true;
};
g=function(){
    return false;
};
~function(){
 if(g()&&[]==![]){
     f=function(){return false;};
     function g(){
         return true;
     }
 }
}();
console.log(f());
console.log(g()); */

/* var a=0;
if(true){
    a=1;
    function a(){};
    a=21;
    console.log(a);
}
console.log(a); */

/* console.log(num);
console.log(fn);
if([]){
    // 只要进到当前if条件中，会立即对fn进行赋值；
    fn()
    var num=100;
    function fn(){console.log("a")}
}
console.log(fn); */

/* console.log(obj.f1);
var obj={
    f1:function(){
       console.log(1)
    }
} */

function fn(){
    console.log(f2);
    return function f1(){
    }
    function f2(){
        console.log("f2")
    }
}
fn();//=>f2函数