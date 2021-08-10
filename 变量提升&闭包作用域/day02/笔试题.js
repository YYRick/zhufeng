var a = 100;
function fn() {
    alert(a); 
    var a = 200;
    alert(a);   
}
fn();//=> undefined  200
alert(a); //=> 100  
var a;
alert(a);  //=>100  
var a = 300;
alert(a);  //=>300 