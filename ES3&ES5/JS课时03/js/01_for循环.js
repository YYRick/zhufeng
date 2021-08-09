/* 多次执行相同代码的简便写法 */

/*
    1.定义初始值 i
    2.设置判断条件
    3.条件成立，执行语句；条件不成立，终止循环
*/
for(var i = 0; i < 10; i++){
    console.log(i);
}

/* 另类写法 */
var i = 0;
for(;i < 10;){
    console.log(i);
    i++;
}

/* while 循环 */
var i = 0;
while(i < 100){
    console.log(i);
    i++;
}
