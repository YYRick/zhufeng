function Fn() {
    this.x = 100;
    this.y = 200;
    this.getX = function () {
        console.log(this.x);
    }
}
Fn.prototype.getX = function () {
    console.log(this.x);
};
Fn.prototype.getY = function () {
    console.log(this.y);
};
let f1 = new Fn;
let f2 = new Fn;
console.log(f1.getX === f2.getX); //false
console.log(f1.getY === f2.getY); //true
console.log(f1.__proto__.getY === Fn.prototype.getY); //true
console.log(f1.__proto__.getX === f2.getX); //false
console.log(f1.getX === Fn.prototype.getX); //false
console.log(f1.constructor); //Fn
console.log(Fn.prototype.__proto__.constructor); //Object

// @1 先确定执行的是私有的还是实例公有的方法
// @2 确定方法执行中this “点原则”
// @3 代码执行中替换分析出来的this，找到对应的结果
f1.getX();
// 私有 this->f1
// console.log(f1.x) => 100

f1.__proto__.getX();
// 公有 this->f1.__proto__
// console.log(f1.__proto__.x) => undefined

f2.getY();
// 公有 this->f2
// console.log(f2.y) => 200

Fn.prototype.getY();
// 公有 this->Fn.prototype
// console.log(Fn.prototype.y) => undefined 
