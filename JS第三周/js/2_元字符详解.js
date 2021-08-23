/* //^$
//以数字开头
let reg = /^\d/;
console.log(reg.test('zhufeng')); //=>false
console.log(reg.test('2019zhufeng'));  //=>true
console.log(reg.test('zhufeng2019'));  //=>false

//以数字结尾
reg = /\d$/;
console.log(reg.test('zhufeng')); //=>false
console.log(reg.test('2019zhufeng'));  //=>false
console.log(reg.test('zhufeng2019'));  //=>true


//^$两个都不加
reg = /\d/
console.log(reg.test('zhufeng')); //=>false
console.log(reg.test('2019zhufeng'));  //=>true
console.log(reg.test('zhufeng2019'));  //=>true


//^$两个都加
reg = /^\d$/
console.log(reg.test('zhufeng')); //=>false
console.log(reg.test('2019zhufeng'));  //=>false
console.log(reg.test('zhufeng2019'));  //=>false
 */





//2.转义字符
//=>.不是小数点，是代表除\n外的任意字符
/* let reg = /^2.3$/;
console.log(reg.test("2.3"));//=>true
console.log(reg.test("2@3"));//=>true
console.log(reg.test("23"));//=>false */

/* reg = /^2\.3$/;
console.log(reg.test("2.3"));//=>true
console.log(reg.test("2@3"));//=>false */


/* let reg = /^18|29$/;
console.log(reg.test("18")); //=>true
console.log(reg.test("29")); //=>true
console.log(reg.test("129")); //=>true
console.log(reg.test("189")); //=>true
console.log(reg.test("1829")); //=>true
console.log(reg.test("829")); //=>true
console.log(reg.test("182")); //=>true */

/* reg = /^(18|29)$/;
console.log(reg.test("18")); //=>true
console.log(reg.test("29")); //=>true
console.log(reg.test("129")); //=>false
console.log(reg.test("189")); //=>false
//=>只能是18或者29中的一个了 */

//4.[]：中括号
/* 
  @或者+
*/
/* let reg = /^[@+]$/;
console.log(reg.test("@")); //=>true
console.log(reg.test("+")); //=>true
console.log(reg.test("@@")); //=>false
console.log(reg.test("@+")); //=>false */


/* reg = /^[\d]$/; //=>\d在中括号中还是0-9
console.log(reg.test("d"));//=>false
console.log(reg.test("\\"));//=>false
console.log(reg.test("9"));//=>true */

/* 
  以\或者d开头或者以\或者d结尾
*/
/* reg = /^[\\d]$/; 
console.log(reg.test("d"));//=>true
console.log(reg.test("\\"));//=>true
console.log(reg.test("9"));//=>true */

//2.中括号中不存在多位数
/*
   1或者8 
 */
/* reg = /^[18]$/;
console.log(reg.test("1")); //=>true
console.log(reg.test("8")); //=>true
console.log(reg.test("18")); //=>false
 */

/* 
  1或者0-2或者9
*/
/* reg = /^[10-29]$/;
console.log(reg.test("1"));//=>true
console.log(reg.test("9"));//=>true
console.log(reg.test("0"));//=>true
console.log(reg.test("2"));//=>true
console.log(reg.test("10"));//=>false */

/* reg = /^[\n]$/;
console.log(reg.test('\\'));
console.log(reg.test('n'));
console.log(reg.test('\n'));
console.log(reg.test('\\n')); */



/* reg = /[\w]/;
console.log(reg.test('_'));
console.log(reg.test('s'));
console.log(reg.test('3'));
console.log(reg.test('\\n')); */

