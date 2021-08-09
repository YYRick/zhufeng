/* 
  typeof 检测数据类型
*/
var arr = [1,2,3,4,5,6,7];

console.log(typeof(null));//object,这是一个bug
console.log(typeof(arr));

var test = function test(){
    console.log(1);
}
/* 
  typeof的返回值是字符串类型
*/
console.log(typeof test);//=>function

console.log(typeof(a));//=>undefined

console.log(typeof(typeof(a)));//=>string