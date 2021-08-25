/*下列函数输出什么？ 怎么改让其输出0~9*/
function test(){
  var arr = [];
  for(var i = 0; i < 10; i++){
    arr[i] = function(){
      document.write(i + ' ');
    }
  }
  return arr;
}

var myArr = test();

for(var j = 0; j < 10; j++){
  myArr[j]();
}


//方法一
function test1(){
  for(var i = 0; i < 10; i++){
    (function(){
      document.write(i + ' ');
    }());
  }
}

test1();


//方法2
function test2(){
  var arr = [];
  for(var i = 0; i < 10; i++){
    (function(j){
      arr[j] = function(){
        document.write(j + ' ');
      }
    })(i);
  }
  return arr;
}

test2();

var myArr = test2();

for(var j = 0; j < 10; j++){
  myArr[j]();
}