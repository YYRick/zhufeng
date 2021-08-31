let cartModule = (function ($) {
	let $btns = $('.list i'),
		$counts = $('.list em'),
		$strongs = $('.list strong'),
		$ems = $('.info em');

	//=>实现加号减号的点击事件
	function handleClick() {
		$btns.click(function () {
			let $this = $(this),
				n = $this.index(); //=>JQ中的INDEX获取的是元素在兄弟结构中的索引
			//=>根据点击按钮，获取当前行中：存储数字、单价、总价这几个元素
			let $par = $this.parent(),
				$count = $par.children('em'),
				$strongs = $par.find('strong'),
				$price = $strongs.eq(0), //=>eq获取的依然是JQ对象,get获取的是JS对象
				$total = $strongs.eq(1);
			//=>0减号 2加号 根据点击的加减号，计算出最新购买的数量
			let x = parseFloat($count.html());
			if (n === 0) {
				x--;
				x < 0 ? x = 0 : null;
			} else {
				x++;
				x > 10 ? x = 10 : null;
			}
			$count.html(x);
			//=>获取单价计算总价
			$total.html(parseFloat($price.html()) * x + '元');
			//=>计算总信息
			computed();
		});
	}

	//=>计算总信息
	function computed() {
		let allCount = 0,
			allMoney = 0,
			allPrice = [];
		//=>计算总购买数
		$counts.each((index, item) => {
			allCount += parseFloat($(item).html());
		});
		$ems.eq(0).html(allCount);

		//=>计算总价格和最高单价
		$strongs.each((index, item) => {
			let itemVal = parseFloat($(item).html());
			if (index % 2 === 1) {
				allMoney += itemVal;
			} else {
				//=>只有购买了才进入比较的序列
				if (parseFloat($(item).next('strong').html()) === 0) {
					allPrice.push(0);
				}else{
                    allPrice.push(itemVal);
                }
			}
		});
		$ems.eq(1).html(allMoney);
		$ems.eq(2).html(Math.max(...allPrice));
	}

	return {
		init() { //=>init:function(){}
			handleClick();
		}
	}
})(jQuery);

cartModule.init();