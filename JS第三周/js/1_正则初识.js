let str = 'good good study, day day up!';
//  \d+：是否包含连续的多个数字
let reg = /\d+/;
console.log(reg.test(str));//=>false

str = '2021-8-23';
console.log(reg.exec(str));


//创建正则的两种方式
//字面量
let reg1 = /\d+/;

//构造函数模式创建
/* 
  两个参数：元字符字符串，修饰符字符串
*/
let reg2 = new RegExp('\\d+');//转义字符


/* 常用的元字符 */
