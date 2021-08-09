var i = 1;
/* 条件永远满足，就会陷入死循环 */
for(; i;){
    console.log(i);
    i++;
} 