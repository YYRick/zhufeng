//=>利用单例模式搭建业务骨架
let cartModule = (function ($){
    let $btns = $('.list i'),
        $counts = $('.list em'),
        $strongs = $('.list strong'),
        $ems = $('.info em');
    
    //=>实现+/-号的点击事件
    function handleClick(){
        $btns.click(function(){
            let $this = $(this),
                //=>jQuery中的index获取的是元素在兄弟结构中的索引
                //=>但由于+/-号在页面结构中的位置是固定的，当前索引为0的是-号，为2的是+号
                index = $this.index();
            
            //=>根据点击按钮，获取当前行中：存储数字、单价、总价这几个元素
            let $par = $this.parent(),
                //=>商品个数
                $count = $par.children('em'),
                $strongs = $par.find('strong'),
                //=>eq获取的依然是jQuery对象，get获取的是原生JS对象
                //=>单价
                $price = $strongs.eq(0),
                //=>小计
                $total = $strongs.eq(1);


            //=>为0 -> -号  为2 -> +号
            //=>获取最初的商品个数，因为是字符串类型，需要将之转成数字类型
            let x = parseFloat($count.html());
            //=>根据点击的加减号，计算出最新的购买数量
            if(index === 0){
               //进行减少商品个数的操作
               x--;
               //商品个数不可能为负数
               x < 0 ? x = 0 : null;
            }else if(index === 2){
               //进行增加商品个数的操作
               x++;
               //限购商品的个数为10
               x > 10 ? x = 10 : null;
            }
            $count.html(x);

            //获取单价的计算总价
            $total.html(parseFloat($price.html()) * x + '元');

            //=>计算总信息
            computed();
        });
    }
 
    /* function handleClick(){
        //=>获取元素在整个集合中的索引
        $btns.each((index, item) => {
            //=>给每一次按钮绑定点击事件
            $(item).click(function () {
                let $this = $(this);
                console.log(index);//=> 0 1 2 3 4 5 6 .....
            })
        })
    } */

    //=>计算总信息
    function computed(){
        //=>计算总共购买的商品个数
        let allCount = 0,
            allMoney = 0,
            allPrice = [];

        $counts.each((index, item) => {
            allCount += parseFloat($(item).html());
        });

        $ems.eq(0).html(allCount);

        //=>计算总价格和最高单价
        $strongs.each((index, item) => {
            let itemval = parseFloat($(item).html());
            if(index % 2 === 1){
                //=>总价格
                allMoney += itemval;
            }else {
                //=>最高单价
                //=> 只有购买了才能进行比较的序列
                if(parseFloat($(item).next('strong').html()) !== 0){
                    allPrice.push(itemval);
                }
            }
        });
        $ems.eq(1).html(allMoney);
        $ems.eq(2).html(Math.max(...allPrice));
    }

    return {
        init(){
            handleClick();
        }
    }
})(jQuery);


cartModule.init();