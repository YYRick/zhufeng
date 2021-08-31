/* 
  现在的主流开发模式都是基于数据驱动开发的，很少再去通过操作DOM来进行开发了 
  数据驱动实现购物车计算器案例 
*/
let cartModule = (function ($) {
    let $list = $('.list'),
	    $info = $('.info'),
		$btns = null;

	//=>准备数据模型(页面就是按照数据模型渲染出来的)
	let _DATA = [{
		//=>标识
		id: 1,
		//=>购买次数
		count: 0,
		//=>商品单价
		price: 12.5,
		//=>商品总价
		total: 0
	},{
		id: 2,
		count: 0,
		price: 10.5,
		total: 0
	},{
		id: 3,
		count: 0,
		price: 8.5,
		total: 0
	},{
		id: 4,
		count: 0,
		price: 8,
		total: 0
	},{
		id: 5,
		count: 0,
		price: 14.5,
		total: 0
	}];
    
	//=>按照数据模型渲染视图
	function render(){
		//=>渲染操作区视图
        let str = ``;
		$.each(_DATA,(index, item) => {
			let {
				  count, 
				  price, 
				  total,
				  id
				} = item;
			str += `<li>
				<i group = "${id}"></i>
				<em>${count}</em>
				<i group = "${id}"></i>
				<span>
					单价：<strong>${price}元 </strong> 小计：<strong>${total}元</strong>
				</span>
			</li>`;
		});
        $list.html(str);

		//=>渲染总计信息区视图
		let counts = 0,
		    totals = 0,
		    maxprice = 0;

		_DATA.forEach(item => {
			counts += item.count;
			totals += item.total;
			//=>购买才进行最高单价的计算
			if(item.count > 0){
               maxprice < item.price ? maxprice = item.price : null;
			}
		})

		str = `<span>商品共合计：<em>${counts}</em>件</span>
		<span>共花费了：<em>${totals}</em>元</span>
		<span>其中最贵的商品单价是：<em>${maxprice}</em>元</span>`;
		$info.html(str);

		//执行事件绑定
		handle();
	}

    //=>点击按钮操作(不操作DOM，只改变_DATA的数据)
	function handle(){
        $btns = $list.find('i');
		$btns.click(function(){
           let $this = $(this),
		       n = $this.index(),
			   group = parseFloat($this.attr('group'));
		   
		   //=>map和forEach类似，但是map支持返回值(retrun的是啥就把数组中当前项改成啥)
		   //=>修改数据
		   _DATA = _DATA.map(item => {
				if(item.id === group){
					//判断+/-号
					if(n === 0){
						item.count--;
						item.count < 0 ? item.count = 0 : null; 
					}else{
					    item.count++;
					    item.count < 0 ? item.count = 0 : null; 
					}
					item.total = item.price * item.count;
				}
			    return item;    
		   });
           //重新渲染
		   render();
		});
	}



	return {
		init() { 
			render();
		}
	}
})(jQuery);

cartModule.init();