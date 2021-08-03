### 原生js专题

#### js第一周笔试
- ECMAScript js语法 定义了js语法规范
- DOM 文档对象模型
- BOM 浏览器对象模型

- var/let/const/class/function/import

- 基本数据类型(存在栈中)
 + number数字类型
 + string 字符串类型
 + boolean 布尔类型
 + null
 + undefined
 + symbol
 + bigint

- 引用数据类型(存在堆中)
 + object 
 + function

- Boolean() ! !!

- null、undefined、false、0、''

- typeof
- instanceof
- constructor
- Object.prototype.toString.call()

- 0
- NaN
- NaN
- 1
- 0
- 0
- NaN
- NaN
- NaN
- 12
- 12.5

1) b: 22, 38
2) 报错
3) [1, 10] [4, 8]
4) 'object' 'string'
5) 'number'
6) '哈哈'

<!-- 
  有一个数组：ary=[1,2,3,4,5,6,7,8,9,10]; 把索引是3的倍数的项目依次打印出来
 -->

var ary=[1,2,3,4,5,6,7,8,9,10]; 
for( var i = 0;  i < ary.length; i++){
    if((i >= 3)&&(i % 3 == 0)){
        console.log(ary[i]);
    }
}