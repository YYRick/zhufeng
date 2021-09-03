/* 
  this是函数执行的主体(谁执行的)
    + this是谁和函数在哪创建的或者在哪执行的都没有关系
  this指向的规律
    + 1.给元素的某个事件绑定方法，当事件触发方法执行的时候，方法中的this是当前操作的元素
    + 2.方法执行，看方法前面是否有点，
        - 有点：前面是谁this就是谁
        - 没有点：this是window(注意：严格模式下 没有点是undefined)
    + 3.在构造函数模式执行中，函数体中的this是当前类的实例

*/

/* let obj = {
    fn: fn
};


function Fn(){
    this.name = 'xxx';
}
let f = new Fn();
 */

var json ={

    val:10,

    dbl:function(){
        //作用域是栈不是堆，所以它的上级作用域是全局作用域
        val*=2;
    }

};

json.dbl();

alert(json.val+val);
