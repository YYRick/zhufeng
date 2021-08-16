'use strict'

console.log(this);

//推荐使用const
const fn = function fn(){
    console.log(this);
}

let obj ={
    name: 'obj',
    fn
}

console.log(obj);

let arr = [10, 20],
    push = arr.push;
push(); //this->undefined
arr.push(); //this->arr
arr.__proto__.push(); //this->arr.__proto__
Array.prototype.push(); //this->Array.prototype
