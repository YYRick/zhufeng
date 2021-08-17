- 1.值类型和对象类型的数据有什么不同？（4分）
  + 值类型存储在栈中，对象类型的数据存储在堆中
- 2.let与var有什么区别。（4分）
  + let 不存在变量提升
  + let 不允许重复声明
  + let 存在块级作用域
  + let 存在暂时性死区

- 3.简要描述一下变量提升机制。（4分）
  + 在当前作用域中，带var的声明提升，带function的声明和定义都进行提升

- 4.函数的上级作用域由什么决定？（2分）
  + 函数创建时所在上下文

- 5.什么是闭包？（2分）
  + 函数执行，形成一个不销毁的作用域

- 6.函数和箭头函数的区别（2分）
  + 箭头函数没有this
  + 箭头函数没有arguments
  + 箭头函数没有prototype属性

- 7.下面代码是否可以，每隔1000MS依次输出 0 1 2 3 4 5 ?
如果不可以，说明为啥？
以及如何解决？(4分)
```js
 for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, (i + 1) * 1000);
 }
```
不可以，i是全局变量，等定时器执行时，i已经变成了4
```js
  for (var i = 0; i < 5; i++) {
        setTimeout(function (i) {
            console.log(i);
        }, (i + 1) * 1000, i);
      }
```

```js
for (var i = 0; i < 5; i++) {
        setTimeout((function(j){
            return function () {
            console.log(j);
        }
        })(i), (i + 1) * 1000);
    }
```

### 基础编程题
- 
  + undefined 10
  + 10 20
  + 报错

- 
  + 2,undefined,3
  + 4,5,6
  + 1,6,7

- 