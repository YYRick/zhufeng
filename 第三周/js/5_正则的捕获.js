let str = "yuanzhi2019yangfan2020qihang2021";
/*let reg = /\d+/;


console.log(reg.lastIndex);
console.log(reg.exec(str));//=>["2019", index: 7, input: "yuanzhi2019yangfan2020qihang2021", groups: undefined]
console.log(reg.lastIndex);
console.log(reg.exec(str));//=>["2019", index: 7, input: "yuanzhi2019yangfan2020qihang2021", groups: undefined]

reg = /\d+/g;
console.log(reg.exec(str)); //=>["2019"...]
console.log(reg.lastIndex); //=>11 设置全局匹配修饰符g后，第一次匹配完，lastIndex会自己修改
console.log(reg.exec(str)); //=>["2020"...]
console.log(reg.lastIndex); //=>22
console.log(reg.exec(str)); //=>["2021"...]
console.log(reg.lastIndex); //=>32
console.log(reg.exec(str)); //=>null 当全部捕获后，再次捕获的结果是null，但是lastIndex又回归了初始值零，再次捕获又从第一个开始了...
console.log(reg.lastIndex); //=>0
console.log(reg.exec(str)); //=>["2019"...]
 */



//注意事项
let reg = /\d+/g;
if (reg.test(str)) {
	//=>验证一下:只有正则和字符串匹配我们在捕获
	console.log(reg.lastIndex); //=>11 基于TEST匹配验证后，LASTINDEX已经被修改为第一次匹配后的结果，所以下一次捕获不再从头开始了
	console.log(reg.exec(str)); //=>["2020"...]
}