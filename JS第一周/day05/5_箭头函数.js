/* function sum(x, y){
    return x + y;
} */

//使用箭头函数改写
/* const sum = (x, y) =>{
    return x + y;
}
 */
//简便写法
/* const sum = (x, y) => x + y;  */


/*
 * 箭头函数 ArrowFunction
 */
// 正常语法
/* const sum = (x, y) => {
    return x + y;
}; */

// 如果函数体中只有一句话，而是return啥啥，则可以省略大括号和return
/* const sum = (x, y) => x + y; */

// 如果只有一个形参，可以省略小括号
/* const sum = x => x + 10; */


/* function fn(x) {
    return function (y) {
        return x + y;
    }
} */
/* const fn = x => y => x + y;
console.log(fn(10)(20));  */


// =======箭头函数中没有arguments，但是可以使用ES6中的剩余运算符来获取实参集合
/* const fn = (...params) => {
    // console.log(arguments); //Uncaught ReferenceError: arguments is not defined
    // console.log(params); //[10,20,30]
    // @1 arguments如果存在，获取的集合也是类数组集合，不能直接使用数组的方法
    // @2 params获取的是数组集合，可以直接使用数组的方法的
    console.log(params);
};
fn(10, 20, 30);  */

// =======箭头函数中没有自己的THIS，函数中出现的THIS是其上级上下文中的THIS
/* let obj = {
    name: 'zhufeng',
    // 等价于“fn: function () {}”，ES6的新语法规范
    fn() {
        // this->obj
        let self = this;
        setTimeout(function () {
            // this->window  对于普通回调函数“匿名函数”来说，一般方法中的this都是window，除非在触发回调函数执行的时候，我们自己(或者浏览器)做过一些特殊的处理，更改过其this...
            console.log(self.name);
        }, 1000);
    }
};
obj.fn(); */


let obj = {
    name: 'zhufeng',
    fn() {
        // this->obj
        setTimeout(() => {
            // this->箭头函数中没有this，用的是上级上下文中的
            console.log(this.name);
        }, 1000);
    }
};
obj.fn();
