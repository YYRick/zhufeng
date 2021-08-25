let time = "2019-08-13";
//=>变为"2019年08月13日"
let reg = /^(\d{4})-(\d{1,2})-(\d{1,2})$/;

//=>这样可以实现
time = time.replace(reg,"$1年$2月$3日");
console.log(time); //=>2019年08月13日

//=>还可以这样处理 [str].replace([reg],[function])
//1.首先拿REG和TIME进行匹配捕获，能匹配到几次就会把传递的函数执行几次（而且是匹配一次就执行一次）
//2.不仅把方法执行，而且REPLACE还给方法传递了实参信息（和exec捕获的内容一致的信息：大正则匹配的内容，小分组匹配的信息....）
//3.在函数中我们返回的是啥，就把当前大正则匹配的内容替换成啥
/*
time = time.replace(reg,(big,$1,$2,$3)=>{
    //=>这里的$1~$3是我们自己设置的变量
    console.log(big,$1,$2,$3);
});
*/
time = time.replace(reg,(...arg)=>{
    let [,$1,$2,$3]=arg;
    $2.length<2?$2="0"+$2:null;
    $3.length<2?$3="0"+$3:null;
    return $1+"年"+$2+"月"+$3+"日";
});

console.log(time);