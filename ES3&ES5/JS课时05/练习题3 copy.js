var b = 3;
console.log(a);
function a(a){
    console.log(a);//=>function a(){}
    var a = 2;
    console.log(a);//=>2
    function a(){};
    var b = 5;
    console.log(b);//=>5
}

a(1);

/* 
  GO = {
     b: undefined,
     a: function a(a){
    console.log(a);
    var a = 2;
    console.log(a);
    function a(){};
    var b = 5;
    console.log(b);
}
  }
  AO = {
     a: undefined, ->1 
     -> function a(){}
     -> 2
     b: undefined, ->5
  }
*/