/* 
 基于ES6中的class重构下面的代码
*/
/* 
 函数的多种角色 
  - 类、私有属性、原型、静态私有属性方法
*/

/* 
function Modal(x, y) {
    // 给实例设置的私有属性方法
    this.x = x;
    this.y = y;
}
// 在类的原型上扩展的公共属性方法「供实例调用的」
Modal.prototype.z = 10;
Modal.prototype.getX = function () {
    console.log(this.x);
}
Modal.prototype.getY = function () {
    console.log(this.y);
}
// 把它当做普通对象，设置的静态私有属性方法
Modal.n = 200;
Modal.setNumber = function (n) {
    this.n = n;
}; 
*/
/* 
 class创建的类，只能基于new执行
 不能作为普通函数执行(更严谨)
*/
class Model{
    /* 没有逗号，它不是对象 */
    //构造函数体：给实例设置的私有属性和方法
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    //向类的prototype上扩展方法
    z = 10;//直接这样写，是给实例设置的私有属性和和方法
    getX(){
        console.log(this.x);
    }
    getY(){
        console.log(this.y);
    }
    //当做普通对象，设置的静态私有属性方法
    static n = 20;
    static setNumber(n){
        this.n = n;
    }
}

console.dir(Model);
console.dir(new Model);