/* 
 * myPush：手写实现push方法
 *   @params
 *      ...args  需要添加进数组的项
 *   @return
 *      [array]  添加新项之后的新数组
 * by yyrick on 2021/8/02
 */

Array.prototype.myPush = function(){
     for(var i = 0; i < arguments.length; i++){
        //this指向要调用它的对象 
        this[this.length] = arguments[i];
     }
     //返回值
     return this.length;
}

var ary = [2, 3, 5, 7, 9];
console.log(ary.myPush(1, 4, 6, 8, 10));
console.log(ary);