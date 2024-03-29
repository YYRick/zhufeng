## jQuery
> 一款伟大的，用原生JS封装的，操作DOM的类库：他里面封装了大量的方法(在原生的版本中v1.xxx，这些方法兼容所有的浏览器)，基于这些方法我们可以快速的进行DOM操作和项目开发

***如何学习jQuery***

- 看API文档
- 看书：<锋利的jQuery第二版>
- 大量做案例
> 在学习阶段，案例可以用原生js做一遍，用JQ再做一遍
- 学习JQ源码
  + 更好的掌握JQ的应用，写出高性能可扩展的项目代码
  + 让自己的JS能力，尤其是组件、插件等封装的能力直接上一个新台阶

***JQ的三大版本***
- v1.xxx 第一代版本
  + jquery-1.11.3.min.js
  第一代版本的特点：大而全，方法是兼容所有浏览器的(包括IE6)，主要应用需要兼容的PC端项目中

- v2.xxx 第二代版本
主要是为移动端的开发准备的，不在兼容低版本浏览器(例如：IE8及以下)，配合出现的还有jQuery mobile等UI库。但是，第二代版本在移动端方面的处理不如Zepto.js

- v3.xxx 第三代版本(更推荐研究第三代版本)
也不再兼容IE低版本浏览器了，它从性能等方面都要比之前的强，但是生不逢时，此时正好是angular/vue/react这种框架崛起的时代，大家已经不再基于操作DOM的思想开发了，JQ也就慢慢退出舞台了

### JQ中常用的方法

```javascript
//=> 1.获取DOM元素
//操作方法：JQ选择器(根据选择器类型快速获取需要的元素)
格式：$([selector], [context])
$('#box')
$('.box a')/$('a', box)
.......
//节点之间关系的属性：用JQ选择器获取的元素，我们设置变量名的时候一般都以$开始
let $box = $('.box');
$box.children('a');//获取.box下面的所有a元素节点
$box.prev();//获取上一个哥哥元素节点
$box.prev('p');//获取它上一个标签名为p的哥哥节点
$box.prevAll();//获取所有哥哥的元素节点
$box.next();//获取它下一个的弟弟节点
$box.nextAll();//获取所有弟弟节点
$box.siblings(); //=>获取所有的兄弟
$box.index(); //=>获取索引
$box.parent();//=> 获取父元素
$box.parents();//=> 获取所有的祖先元素，一直到document
//=>2.DOM增删改


//=>3.操作自定义属性

//=>4.操作CSS样式(盒子模型)
```

