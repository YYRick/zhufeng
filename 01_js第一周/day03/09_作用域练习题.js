var n=10;
function fn(){
    var n=20;
    function f(){
        n++;
        console.log(n);
    }
    f();
    return f;
}
/* 
 AO
  - <EC(fn),EC(G)>
  - n = 21
  - f  ->  <EC(f),EC(fn)>
    - => 21
  - x -> <EC(f),EC(fn)>
*/
var x=fn();
/*
 AO 
 x - ><EC(f),EC(fn)>
 22
*/
x();
x();
console.log(n);