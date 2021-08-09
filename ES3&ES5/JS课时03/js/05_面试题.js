/*
  打印0-100的数
  ()只能有一句，不能写比较
  {}不能出现i++ i--
 */
var i = 101;
for(;i--;){
	console.log(i);
}

/* 
 10的N次方
*/
var n = 5;
var num = 1;
for(var i = 0; i < n; i++){
    num*=10;
}
console.log(num);


/* 
 n的阶乘
*/
var n = 5;
var num = 1;
for(var i = 1;i <= 5; i++){
    num *= i;
}
console.log(num);

/* 
  打印987
*/
var num = 789;

var a = num % 10;//=>9
var b = (num - a) % 100 / 10;//=>8
var c = (num - a - b *10)/100;//=>7

console.log(""+a+b+c);

/* 
  打印三个数中的最大数
*/
var a = 181;
    b = 23;
    c = 233;

if(a > b){
  if(a > c){
    console.log(a);
  }else{
    console.log(c);
  }
}else{
  if(b > c){
    console.log(b);
  }else{
    console.log(c);
  }
}


/* 打印100以内的质数 */
//质数：只能被1和自己整除的数

//c：记录被整除的次数
//注意：质数只能被整除两次
var c = 0;
for(var i = 2; i < 100; i++){
   for(var j = 1; j <= i; j++){
     if(i % j == 0){
       c++;
     }
   }
   
   //判断是否为质数
   if(c == 2){
     console.log(i);
   }
   
   //重新计数
   c = 0;
}