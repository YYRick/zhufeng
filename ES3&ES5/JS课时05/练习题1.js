function test(a){
    console.log(a);//=>function a(){}
    var a = 1;
    console.log(a);//=>1
    function a(){};
    console.log(a);//=>1
    var b = function(){};
    console.log(b);//=>function(){}
    function d(){}
}

test(2);

/* 
  A0  activation object
  活跃对象 函数上下文
  1.寻找形参和变量声明
  2.实参赋值给形参
  3.找函数声明，赋值
  4.执行

  AO = {
      a: undefined -> 2 ->function a(){} -> 1
      b: undefined -> function(){}
      d: function d(){}
  }
*/