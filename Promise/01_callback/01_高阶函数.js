/* 
  高阶函数
    1.如果一个函数的参数也是一个函数(回调函数就是一种高阶函数)
    2.如果一个函数返回一个函数，那这个函数也是高阶函数
*/

//高阶函数的应用场景：为接下来讲promise做铺垫

//写一个业务代码：现在想扩展当前的业务代码
/*  
   直接把新方法例如todo写在say里面是不合适的，
   因为如果say是一个公共方法，在调用的时候会被扩展的方法也一起使用了
*/
function say(a, b){
    //todo...
    console.log('say', a, b);
}

//给方法say添加一个方法，在他执行之前调用

Function.prototype.before = function(callback){
    let that = this;
    //...args：剩余运算符
    return (...args) => {
        callback();
        this(...args);//展开运算符
    }
}

let beforeSay = say.before(function(){
   console.log('before say');
});

beforeSay('hello', 'world');