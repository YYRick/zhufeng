~ function () {
	/*
	 * formatTime：时间字符串的格式化处理
	 *   @params
	 *     templete:[string] 我们最后期望获取日期格式的模板
	 *     模板规则:{0}->年  {1~5}->月日时分秒
	 *   @return
	 *     [string]格式化后的时间字符串
	 *  by yuanzhililan on 2019/08/13
	 */
	function formatTime(templete = "{0}年{1}月{2}日 {3}时{4}分{5}秒") {
		let timeAry = this.match(/\d+/g);
		return templete.replace(/\{(\d+)\}/g, (...[, $1]) => {
			let time = timeAry[$1] || "00";
			return time.length < 2 ? "0" + time : time;
		});
	}

	/* 扩展到内置类String.prototype上 */
	["formatTime"].forEach(item => {
		String.prototype[item] = eval(item);
	});
}();


let time = "2019-8-13 16:51:3";
console.log(time.formatTime());
console.log(time.formatTime("{0}年{1}月{2}日"));
console.log(time.formatTime("{1}-{2} {3}:{4}"));
time = "2019/8/13";
console.log(time.formatTime());
console.log(time.formatTime("{0}年{1}月{2}日"));
console.log(time.formatTime("{1}-{2} {3}:{4}"));


//=>服务器获取的
// "2019-8-13 16:51:3"
// "2019/8/13 16:51:3"
// "2019/8/13"
//=>想要转变为的格式
// "08月13日 16时51分"
// "2019年08月13日"
// "2019年08月13日 16时51分03秒"