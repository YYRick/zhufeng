### 珠峰vue专题
> 周啸天

### 区分框架和类库
- 1.类库
> jQuery、Zepto、underscore...
类库提供的是真实项目中常用的方法，它是一个工具包，基于这个工具包可以快速开发任何项目

- 2.插件
> TAB选项卡插件、banner轮播图插件、dialog模态框插件、DRAG拖拽插件....
> iscroll局部滚动插件、jQuery中有许多的插件
插件是把项目中某一个具体的功能进行封装


- 3.UI组件
> bootstrap、swiper、mui....
UI组件库一般是多个插件的集合体，不仅提供了JS对应的功能，而且把结构、样式等也都实现了，我们只需要做一位CV工程师就可以了

- 4.框架
> vue、react、uni-app、react native、flutter、angular
一般来说，框架是类库和组件的综合体，里面提供了大量供我们操作的方法，也有配套的UI组件库供我们快速开发；框架是具备独立编程思想的，例如：vue是MVVM思想，让我告别传统的DOM操作，按照视图和数据的相互渲染来完成项目开发，但是不管怎么变，都一定会比我们之前基于原生操作更简单，性能更好...


- 市面上常用的框架：vue(MVVM)/react(MVC)
- APP框架：uni-app/react native/flutter

- vue学习版本：2.6.x


### 声明式编程 VS 命令式编程


### vue：渐进式框架
> 渐进式：按需导入使用，不用一次性全部引入使用


vue全家桶
- vue: 基础模块(基础语法、核心实现、组件开发、相关指令等等)
- vue-router：构建SPA单页面应用的路由
- Vuex：公共状态管理
- Vue-cli：Vue脚手架
- Vue-UI组件库：Vue-element、iview、vux...

### MVC & MVVM


### vue是MVVM框架
- M: model数据层
- v: view视图层
- VM：viewmodel：数据和视图的监听层(当数据或者视图发生改变，VM层会监听到，同时把对应的另外一层跟着改变或者重新渲染）
  + 数据层改变：vm会帮我们重新渲染视图
  + 视图层改变：vm也会帮我们把数据重新更改


### vue初使用
- npm/yarn init -y
> 生成package.json

- yarn/npm add vue
> 下载安装vue包

- vue版本：2.6.14

- yarn速度比npm更快