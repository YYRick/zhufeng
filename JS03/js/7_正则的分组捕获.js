/* let str = "130828199012040112";
let reg = /^(\d{6})(\d{4})(\d{2})(\d{2})\d{2}(\d)(?:\d|X)$/;
console.log(reg.exec(str));
console.log(str.match(reg)); */


/* //=>既要捕获到{数字}，也想单独的把数字也获取到，例如：第一次找到 {0} 还需要单独获取0
let str = "{0}年{1}月{2}日";

//=>不设置g只匹配一次，exec和match获取的结果一致（既有大正则匹配的信息，也有小分组匹配的信息）
let reg = /\{(\d+)\}/;
console.log(reg.exec(str));
console.log(str.match(reg));
//["{0}", "0",...] */

let reg = /\{(\d+)\}/g;
let str = "{0}年{1}月{2}日";
console.log(str.match(reg));

let aryBig=[],
    arySmall=[],
    res=reg.exec(str);
while(res){
    let [big,small]=res;
    aryBig.push(big);
    arySmall.push(small);
    res=reg.exec(str);
}
console.log(aryBig,arySmall);