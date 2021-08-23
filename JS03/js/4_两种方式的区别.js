//=>构造函数因为传递的是字符串，\需要写两个才代表斜杠
let reg = /\d+/g;
reg = new RegExp("\\d+","g");

//=>正则表达是中的部分内容是变量存储的值
//1.两个斜杠中间包起来的都是元字符（如果正则中要包含某个变量的值，则不能使用字面量方式创建）
let type = "yuanzhi";
reg = /^@"+type+"@$/; 
console.log(reg.test("@yuanzhi@")); //=>false
console.log(reg.test('@"""typeeeee"@')); //=>true
//2.这种情况只能使用构造函数方式（因为它传递的规则是字符串，只有这样才能进行字符串拼接）
reg = new RegExp("^@"+type+"@$");
console.log(reg.test("@yuanzhi@"));//=>true