let ary = [1, 2, 3, 4, 5];
/* 
 item：数组的每一项
 index：索引
*/
/* ary.forEach((item, index) =>{
   console.log(item, index);
}) */

//手写forEach方法
Array.prototype.myForEach = function(fn){
    //使用this获取调用的数组
    //fn是传的函数体
    for(var i = 0; i < this.length; i++){
        fn(this[i], i);
    }
}

ary.myForEach((item, index) => {
    console.log(item, index);
})