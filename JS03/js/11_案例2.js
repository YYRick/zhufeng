let str = "good good study，day day up！";
let reg = /\b([a-zA-Z])[a-zA-Z]*\b/g;
//=>函数被执行了六次，每一次都把正则匹配信息传递给函数
//=>每一次ARG:["good","g"] ["good","g"] ["study","s"]...
str = str.replace(reg,(...arg)=>{
    let [content,$1]=arg;
    $1=$1.toUpperCase();
    content=content.substring(1);
    return $1+content;
});
console.log(str); //=>"Good Good Study，Day Day Up！"