function test(){
    console.log(b);
    if(a){
        var b = 2;
    }
    c = 3;
    console.log(c);
}

var a;
test();
a = 1;
console.log(a);