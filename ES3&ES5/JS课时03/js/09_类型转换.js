/* 
  显式类型转换
*/
//Number 转数字
var a = '123';
console.log(typeof Number(a));//=>number
console.log(Number(true));//=>1
console.log(Number(false));//=>0
console.log(Number(undefined));//=>NaN
console.log(Number(null));//=>0

//parseInt/parseFloat
/* 
  对于parseInt来说，这些都是NaN
*/
console.log(parseInt(true));
console.log(parseInt(false));
console.log(parseInt(null));
console.log(parseInt(undefined));
console.log(parseInt(NaN));

/* 
  parseInt不会进行四舍五入
  他会直接把小数点后面的全部抛弃
*/
console.log(parseInt(3.99));//=>3

/* 
  parseInt([value],[进制])
  默认为十进制
*/
var a = 'b';
/* 1 2 3 4 5 6 7 8 9 a b c d e f */
console.log(parseInt(a,16));//=>11

var a = 32;
//代表a是以十六进制代表的数  3*16+2 = 50
console.log(parseInt(a,16));//=>50

/* 
 parseInt遇到非数字就会停止查找，
 并返回之前查找的数字
*/
console.log(parseInt('abc123'));//=>NaN
console.log(parseInt('123abc'));//=>123

/* 
  parseFloat 只能识别一个小数点
*/
console.log(parseFloat('3.1415926'));//=>3.1415926
console.log(parseFloat('3.1415.926'));//=>3.1415

var num = parseFloat('3.1465926');
//toFixed：保留N位小数，是四舍五入的
console.log(num.toFixed(2));//=>3.15


//String() 不常用
console.log(typeof('' + 123));

var str = 123;
str = null;
//toString(radix) 和parseInt一样也有进制参数
/* console.log(str.toString()); *///=>报错，因为null和undefined都没有toString()方法

/* 
  Boolean()
*/
//undefined、null、NaN、""(空字符串)、0、false都是false
//其余的都是true
/* 
  隐式类型转换
*/

var a = '123';
a++;
console.log(a);//=>124

//字符串拼接
a = 'a' + 1;
console.log(a);//=>'a1'

/* 
  > < >= <= 都会进行隐式转换 =>Numebr
*/
a = '3' * 2;
console.log(a);//=>6

a = '2' > 1;
console.log(a);//=>true

a = 1 < '2';
console.log(a);//=>true

//转ascli
a = 'a' > 'b';
console.log(a);

a = 1 == '1';
console.log(a);//=>true
a = 1 === '1';//全等不进行隐式类型转换
console.log(a);//=>false

//NaN和任何值都不相等
a = NaN == NaN;//=>false

var a1 = 2 > 1 > 3;
var a2 = 2 > 1 == 1;
console.log(a1,a2);//=>false,true


a1 = undefined > 0;
a2 = undefined < 0;
var a3 = undefined == 0;
console.log(a1,a2,a3);//=>false,false,false
a1 = null > 0;
a2 = null < 0;
var a3 = null == 0;
console.log(a1,a2,a3);//=>false,false,false


a = null == undefined;
console.log(a);//=>true


a = '123';
/* 
 字符串前面加+/- 都会把字符串隐式转换为number类型
*/
console.log(typeof(-a)+(+a));