/* 
编程语言分类
+ 面向过程 POP「Process Oriented Programming」：C语言  编程语言之母
+ 面向对象 OOP「Object Oriented Programming」
     + JAVA  编程语言之父
     + JavaScript
     + PHP/Python/Ruby/Go/C#(ASP.NET)/C++/VB... 
面向对象是一个非常伟大的编程思想，而JS就是基于这个思想构建出来的一门编程语言，所以在JS中存在：对象、类、实例 三个概念!!

+ 对象：JS中一切我们学习和使用的东西都是对象(研究对象)，它是一个泛指，“万物皆对象”
+ 类：按照特征特点，把事物进行归纳分类「大类(父类)->小类(子类)」；而且类一定会赋予它的每个成员，一些公共的属性和方法；
+ 实例：具体的事物，类中的每一个具体的成员；每一个实例都具备一些自己独有的属性和方法（私有的特征），也会具备类赋予他的公共属性和方法（公有的特征）
*/

/* JS中的内置类:
  + 每一个数据类型值都有一个自己所属的内置类：Number类(每一个数字都是他的实例)、String类、Boolean类、Symbol类、BigInt类、Object类、Array类、RegExp类、Date类、Error类、Function类...
  + 每一个元素标签都有一个自己所属的内置类，例如：
    div -> HTMLDivElement -> HTMLElement -> Element -> Node -> EventTarget -> Object
    p -> HTMLParagraphElement -> HTMLElement ...
  + 每一个类赋予其实例的公共属性方法，在类的原型对象上，例如：Array.prototype
*/