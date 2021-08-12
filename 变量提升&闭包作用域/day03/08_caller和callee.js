function test(){
    //返回函数本身
    console.log(arguments.callee);
    //返回是谁调用的函数
    console.log(arguments.callee.caller);
}

test();