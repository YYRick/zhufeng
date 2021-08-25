;(function(){
    //构造函数
    var Tab = function(opt){
       this.tabs = document.getElementsByClassName(opt.tabItem);
       this.pages = document.getElementsByClassName(opt.pageItem);

       this.bindClick(opt.tabItem, opt.pageItem, opt.cur, opt.active);
    }
    //方法
    Tab.prototype = {
       bindClick: function(tabItem, pageItem, cur, active){
           var tabs = this.tabs;
           var pages = this.pages;

           for(var i = 0; i < tabs.length; i++){
               (function(j){
                   tabs[j].onclick = function(){
                       for(var k = 0; k < tabs.length; k++){
                           tabs[k].className = tabItem;
                           pages[k].className = pageItem;
                       }

                       this.className = tabItem + ' ' + cur;
                       pages[j].className = pageItem + ' ' + active;
                   }
               })(i);
           }
       }
    }
    //抛到全局去使用
    window.Tab = Tab;
})();