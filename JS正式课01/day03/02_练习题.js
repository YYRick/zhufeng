console.log(a,b);
var a=12,
    b=12;
function fn(){
    console.log(a,b);
    var a=b=13;
    console.log(a,b);
}
fn();
console.log(a,b);


