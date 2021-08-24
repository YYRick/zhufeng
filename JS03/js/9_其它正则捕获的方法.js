/* let str = "zhufeng@2019|zhufeng@2020"; */
//=>把"zhufeng"替换成"珠峰"
//1.不用正则，执行一次只能替换一个
/*
str = str.replace("zhufeng","珠峰").replace("zhufeng","珠峰");
console.log(str);
*/
//2.使用正则会简单一点
/* str = str.replace(/zhufeng/g,"珠峰");
console.log(str); */


let str = "zhufeng@2019|zhufeng@2020";
//=>把"zhufeng"替换为"zhufengpeixun"
str=str.replace("zhufeng","zhufengpeixun").replace("zhufeng","zhufengpeixun");
//"zhufengpeixunpeixun@2019|zhufeng@2020" 每一次替换都是从字符串第一个位置开始找的（类似于正则捕获的懒惰性）
console.log(str);
//=>基于正则g可以实现
str = str.replace(/zhufeng/g,"zhufengpeixun");
console.log(str);
