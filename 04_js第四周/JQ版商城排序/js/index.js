/* 
 *基于单例模式搭建业务骨架 
 */
let shopModule = (function ($){
    //=>想要操作谁就先获取谁(项目中尽可能把创建变量提前并且都放在一起)
    let $navList = $('.navbar-nav li'),
        $cardBox = $('.card-deck'),
        $cardList = null,//=>刚开始的时候页面中并没有这个元素，只有数据绑定到页面中的时候才有
        _DATA = null;
    
    
    //=>queryData：从服务器获取数据
    function queryData(){
        //=>基于jQuery中的AJAX方法来获取数据
        $.ajax({
            url:'json/product.json',
            method:"GET",
            async:false,
            success: result => {
                //=>从服务器获取数据成功会执行success，
                //=>ressult存储的就是获取到的数据
                //=>并且数据默认就已经转换为JSON格式的对象了
                _DATA = result;
            }
        });
    }

    //=>bindHTML：把数据绑定在页面中
    function bindHTML(){
        //=>确保获取的数据存在
        if(!_DATA) return;

        let HTMLStr = ``;
        $.each(_DATA,(index, item) => {
            let {title, img, price, hot, time} = item;

            HTMLStr += `<div class="card" time="${time}" price="${price}" hot="${hot}">
            <img src="${img}" class="card-img-top" alt="">
            <div class="card-body">
              <h6 class="card-title">${title}</h6>
              <p class="card-text">价格：￥${price}</p>
              <p class="card-text">好评：${hot}</p>
              <p class="card-text">
                 <small class="text-muted">上架时间：${time}</small>
              </p>
            </div>
          </div>`;
        });
        //=>jQuery.html等价于innerHTML
        $cardBox.html(HTMLStr);

        //=>数据绑定完成后获取所有的card
        $cardList = $cardBox.children('.card');
    }

    //=>sortHandle：实现商城排序
    function sortHandle(){
        //=>添加自定义属性data-type，用于标识是升序还是降序
        $navList.attr('data-type', -1);
        //基于jQuery的内置循环机制，给所有li绑定事件
        $navList.on('click', function(){
            //=>this：当前点击的Li(注意：它是原生JS对象) => $(this)变成jQuery对象
            let $this = $(this),
            //=>获取自定义属性值
            /* 
                'time'
                'price'
                'hot'
            */
            pai = $this.attr('pai');
            $this.attr('data-type', $this.attr('data-type') * -1).siblings().attr('data-type', -1);
            $cardList.sort((a, b) =>{
                let $A = $(a),
                    $B = $(b);
                $A = $A.attr(pai);
                $B = $B.attr(pai);
                
                pai === "time" ? ($A = $A.replace(/-/g, ""), $B = $B.replace(/-/g, "")):null;
                return ($A - $B) * $this.attr('data-type');
            });
            $cardList.each((index, item) => {
                $cardBox.append(item);
            });
        });
    }


    
    return {
       /* 
         es6语法：等价于init: function(){};
         =>init是当前模块的入口，想让商城排序开始执行，
         我们只需要执行init方法，在init中会按照顺序，
         依次完成具体的业务逻辑
       */
       init(){
           /* 
             按照需要执行的顺序依次写入
            */
           queryData();
           bindHTML();
           sortHandle();
       }
    }
})(jQuery);

shopModule.init();