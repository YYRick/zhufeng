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

var a=0;
if(true){
    a=1;
    function a(){};
    a=21;
    console.log(a);
}
console.log(a);