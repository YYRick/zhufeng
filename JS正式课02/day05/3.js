var a = 2;
console.log(typeof a);
/* var b = new Number(3);
console.log(b instanceof Number); */
a.add = 3
new Number(a).add = 3;//delete
/* var a = new Number(a)
a.add = 3
console.log(a.add);

console.log(a+b);
 */
var str = 'abc';
//new String(str)
console.log(new String(str));
str.length = 2;


var arr