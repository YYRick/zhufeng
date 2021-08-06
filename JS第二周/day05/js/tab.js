var tabBox = document.getElementById('tabBox');
var tabList = tabBox.getElementsByTagName('div');
var navBox = document.getElementById('navBox');
var navList = navBox.getElementsByTagName('li');

//循环3个li，给每一个li都绑定点击事件
for(var i = 0; i < navList.length; i++){
    navList[i].onclick = function(){
        changeTab(i);
    }
}

//封装函数，实现选项卡的切换
function changeTab(clickIndex){
    //1.先让所有的li和div都没有选中的样式
    for(var i = 0; i < navList.length; i++){
        navList[i].className = '';
        tabList[i].className = '';
    }
    //2.点击的是谁就给谁加样式类
    navList[clickIndex].className = 'active';
    tabList[clickIndex].className = 'active';
}