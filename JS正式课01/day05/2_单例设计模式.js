//存在的问题：全局变量污染
var name = '曹雅倩';
var age = 18;
var BF = false;

/* 下面的会把上面的覆盖掉 */
var name = "李利颖";
var age = 62;
var BF = true; 

// 解决1：闭包
(function () {
    var name = '曹雅倩';
    var age = 18;
    var BF = false;
})();
(function () {
    var name = "李利颖";
    var age = 62;
    var BF = true;
})(); 

//解决2：对象
/* 
  把描述同一事物的属性和方法放在一起，实现了分组的效果，
  避免了全局变量的污染；每一个对象都是一个单独的实例(个体/堆内存空间)，
  所以我们把这种方案称之为“单例设计模式”，person1也被叫做命名空间[namespace]
*/
var person1 = {
    name: '曹雅倩',
    age: 18,
    BF: false
};
var person2 = {
    name: '李利颖',
    age: 62,
    BF: true
}; 


/* 高级单例设计模式 */
// 资讯板块[高级单例设计模式]
var newsModule = (function () {
    var box = null;
    var query = function query() {};

    // 需求：把这个私有的方法setVal，在其它板块中使用
    var setVal = function setVal() {};

    // 解决1：直接挂载到GO中「弊端：挂载的东西多了，很可能有引发全局变量污染」
    window.setVal = setVal;

    // 解决2：基于返回值，返回一个对象（命名空间），里面包含需要供外部调用的属性和方法即可
    return {
        setVal: setVal,
        query: query
    };
})();

// 换肤板块
var skinModule = (function () {
    var box = null;
    var query = function query() {};
    setVal();

    return {};
})();

// 搜索板块
var searchModule = (function () {
    var query = function query() {};
    newsModule.setVal();

    return {};
})();