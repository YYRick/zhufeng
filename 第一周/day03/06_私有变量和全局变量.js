var a=12,b=13,c=14;
function fn(a){
   console.log(a,b,c); 
   var b=c=a=20;
   console.log(a,b,c);
}
fn(a);//=> 12/undefined/14  20/20/20
console.log(a,b,c);//=> 12/13/20