/*
 * 下面代码是否可以，每隔1000MS依次输出 0 1 2 3 4 5 ?
 * 如果不可以，说明为啥？
 * 以及如何解决？
 */
//不行,i是全局变量
/* for(var i = 0; i < 5; i++){
    setTimeout(function(){
        console.log(i);
    },(i+1)*1000);
} */

/* 
 解决方案
*/
for(var i = 0; i < 5; i++){
    (function(i){
        setTimeout(function(){
            console.log(i);
        },(i+1)*1000);
    })(i);
}


var fn = function fn(i) {
    return function () {
        console.log(i);
    };
};
for (var i = 0; i < 5; i++) {
    // 第一轮 全局i=0 设置定时器{1000}  
    //   + fn(0)  EC(FN1) 私有i=0 返回一个小函数0x001
    //   + setTimeout(0x001,1000)
    setTimeout(fn(i), (i + 1) * 1000);
}

// new Array(5).fill(null) 创建一个长度为5的数组，每一项填充null，把其变为密集数组，这样可以forEach
//   “_”就是形参占位，原本应该有个形参变量，但是我不想用，所以我占个位即可
new Array(5).fill(null).forEach(function (_, index) {
    // 第一轮  EC(AN1) index=0  设置定时器{1000}  闭包
    // 第二轮  EC(AN2) index=1  设置定时器{2000}  闭包
    // ...
    setTimeout(function () {
        console.log(index);
    }, (index + 1) * 1000);
});


// 真实项目中都这样搞，使用let
for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, (i + 1) * 1000);
}


//====终极方案：基于定时器传参「核心：闭包」
for (var i = 0; i < 5; i++) {
    setTimeout(function (i) {
        console.log(i);
    }, 1000, i);
}