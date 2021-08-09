var i = 20;
function fn(){
    i -= 2;
    return function (n){
        console.log((++i)-n);
    }
}

/* 
  i 18  f: function (n){
        console.log((++i)-n);
    }
*/
var f = fn();

f(1);//=>18  i = 19

f(2);//=>18  i = 20

fn()(3);//=>  i = 19 , 16

fn()(4);//=> i = 18 14

f(5);//=> i = 19  14

console.log(i);//=>19
