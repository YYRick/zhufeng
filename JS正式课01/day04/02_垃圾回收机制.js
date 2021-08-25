/* 
   堆内存的释放机制
      + 如果堆内存的引用地址被其它事务所引用，堆内存不能释放掉
      + 如果没有东西占用该堆内存的引用地址，浏览器会在空闲时释放掉
      + 手动释放堆内存引用地址：obj = null
 */

let obj = {
    name: 'zhufeng'
}

obj = null;

/* 
  闭包的形式不一定是大函数套小函数
*/
function test(){
    return function(){
        console.log('哈哈哈');
    }
}

let fn = test();

function test1(){
    document.body.onclick = function(){
        console.log('嘿嘿嘿');
    }
}

test1();