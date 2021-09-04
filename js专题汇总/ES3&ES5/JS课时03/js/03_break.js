var i = 1;

/* 
 打印1-10
*/
for(;i;){
    console.log(i);
    i++;
    if(i == 11){
        i = 0;//此时等价于break
    }
}

/* 
  从0开始做加法，总和小于100
*/
var sum = 0;
for(var i = 0; i < 100; i++){
    sum += i;
    if(sum >= 100){
        break;
    }
    console.log(i,sum);
}