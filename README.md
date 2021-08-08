### JS代码运行的环境
  + 浏览器
  + Node  -> 使用的也是webkit内核(V8)
  + webview [这种模式叫做Hybrid混合APP开发]  ->webkit内核
   通过webview我们可以把H5webApp放到原生APP中运行
  + .......


### 浏览器内核
  + webkit内核(V8)
  + IE -> Trident
  + 火狐 -> Gecko
  + 谷歌 -> 现在用的是Blink
  + 欧朋 -> presto(已废弃)/从14代版本开始也是webkit


### ECStack
  + JS代码之所以能够运行在浏览器中，是因为浏览器提供了一个
  供代码执行的栈内存 ->称作执行环境栈(执行上下文栈)ECStack（Execution Context Stack)
  + ECStack的作用
    - 供JS代码执行
    - 存储原始值&变量

### EC(Execution Context)
-  执行上下文(用于区分代码执行的环境)
#### EC(G)：全局执行上下文
- 全局代码都会在全局执行上下文中执行

### VO(variable Objec)
- 用于存储当前上下文中声明的变量
  + 全局变量对象  -> VO(G)
  + 私有变量对象  -> AO(xx)

### =赋值的操作
