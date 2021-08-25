var Tab = function(mode){
    /* 判断用户是否输入指定的参数，如果不是默认设置为fade */
    this.mode = mode == "fade" || mode == 'slide' ? mode : 'fade';
    
    this.oPage = $('.J_page');
    this.oTab = $('.J_tab');
    this.oPageWrap = this.oPage.children('.page-wrap');
    this.oPageItems = this.oPage.find('.item');

    this.init();
}

Tab.prototype.init = function(){
    this.setMode();
    this.bindEvent();
}

Tab.prototype.setMode = function(){
    this.oPageWrap.addClass(this.mode);
}

Tab.prototype.bindEvent = function(){
    this.oTab.on('click', '.item', $.proxy(this.tabClick, this));
}

Tab.prototype.tabClick = function(e){
    var e = e || window.event,
        tar = e.target || e.srcElement,
        curIdx = $(tar).index();

    if(tar.className === 'item'){
      $(tar).addClass('current').siblings('.item').removeClass('current');
      this._pageChange(curIdx);
    }
}



Tab.prototype._pageChange = function(index){
    switch(this.mode){
        case 'fade':
            this._fadePage(index);
            break;
        case 'slide':
            this._slidePage(index);
            break;
        default:
            this._fadePage(index);
            break;
    }
}

Tab.prototype._fadePage = function(index){
    this.oPageItems.eq(index).fadeIn(100).siblings('.item').fadeOut(100);
}

Tab.prototype._slidePage = function(index){
    this.oPageWrap.animate({
      left: (-index * 500) + 'px'
    });
}

new Tab('slide');