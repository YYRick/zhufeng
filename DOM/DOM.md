### DOM专题
- DOM(Document Object Model) 文档对象模型
- DOM对象是宿主对象(浏览器提供的，而不是es提供的)

### js中分为三种对象
### 本地对象(Native Object)
  + Object Function Array String Number 
  + Boolean Error EvaError SyntaxError
  + RangeError ReferenceError TypeError
  + URIError Date RegExp
### 内置对象(Built-in Object)
  + 分两种：Global   Math
  Global其实在ECMA中没有，但是代表了这一类对象
  全局方法
     + isNaN()  parseInt()  Number() 
     + decodeUI  encodeUI
  全局属性
     + Infinity NaN undefined

本地对象和内置对象都是ESMA的内部对象(ECMA提供的)

### 宿主对象(Host Object)
是执行JS脚本的环境提供的对象(即浏览器对象)
因为不同浏览器之间提供的方法可能不同->存在兼容性问题
浏览器对象window(BOM)和document(DOM)
其实DOM是包含在BOM里面的，但是因为DOM有W3C规范，所以被摘出来了

### DOM的作用
通过浏览器提供的这一套方法表示或者操作HTML和XML

- XML：可以自定义标签
```XML
<person>
    <name>张三</name>
    <sex>男</sex>
    <age>18</age>
</person>
```
XML -> XHTML(过渡阶段) -> HTML
- 标签和元素的区别
  + person是一个标签，但是由这个标签及其包裹的内容叫做元素

- 大驼峰和小驼峰
  + 小驼峰：第一个单词首字母不大写，之后的每个单词的首字母都大写
  + 大驼峰：单词首字母都大写
- DOM是不能直接操作CSS的
它是通过操作style属性给标签添加内联样式(内联样式的优先级高，覆盖原先的css样式)来更改css样式的

### DOM基本方法
```css
    //获取id名为box1的元素
    var box1 = document.getElementById('box1');
    console.log(box1);
    //获取标签名为div的一组元素(返回值是一个类数组)
    var boxes = document.getElementsByTagName('div');
    console.log(boxes);
    //获取类名为box的一组元素
    var C_boxs = document.getElementsByClassName('box');
    console.log(C_boxs);
```

### document对象
- 代表整个HTM文档
- 在DOM中document代表最上级
- document是一个对象

### getElementById

注意：在大公司里面id称为钩子，不会使用id获取元素，通常是作为和后端对接使用的(数据注入)

### 遍历节点树/遍历元素节点树

