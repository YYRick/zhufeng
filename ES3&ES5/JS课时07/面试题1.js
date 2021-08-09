/* 
  实参不写会报错
  传入实参js引擎会认为这是一个表达式
  但是不会打印1
*/
function test(a){
  console.log(1);
}(6);