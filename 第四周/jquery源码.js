(function (global, factory) {
    /* 开启严格模式 */
	"use strict";

	if (typeof module === "object" && typeof module.exports === "object") {
		//=>支持ComonJS模块规范的执行这里(例如：Node.js)
	} else {
        //=>可以初步理解为浏览器或者(web-wiew)环境
        //=>我们由传入的实参可以知道这里的global === window
        //=> factory === function(window, noGlobal){}
		factory(global);
	}
   //=>利用了暂时性死区问题，因为typeof window，如果window不存在，系统不会像以前一样报错，而是输出undefined
   //=>所以通过typeof window !== 'undefined'来判断window是否存在，如果存在当前的global就是window，否则就是this
})(typeof window !== "undefined" ? window : this, function(window, noGlobal){
    //=>当我们传入实参之后可以知道factory(global)函数执行了
    //=>此时的形参window的值 === window
    //=>noGlobal没有传入实参，那么此时noGlobal === undefined

    'use strict';
    
    //=> jQuery的版本信息
    var version = "3.6.0",

    jQuery = function (selector, context) {
        return new jQuery.fn.init(selector, context);
    };
    
    //=>jQuery是一个类，jQuery.fn是jQuery原型设置的一个别名
	jQuery.fn = jQuery.prototype = {
        //=>这里面的都是jQuery公共的属性和方法
		
        jquery: version,
        
        //=>jQuery.prototype = {}，我们这样做，实际上是让jQuery原型重构了
        //=>原型一旦重构了，constructor就不存在了，为了保存完整，我们需要手动设置constructor = jQuery
		constructor: jQuery,
		
        length: 0,
        
        //=>转换为数组的方法
        toArray: function () {
            //=>this：一般是当前类的实例(jQuery对象)
			return slice.call(this);
		},
        

        //=> 把jQuery对象转换为原生js对象
        get: function (num) {
			if (num == null) {
				return slice.call(this);
			}
			return num < 0 ? this[num + this.length] : this[num];
		},


        each: function (callback) {
			return jQuery.each(this, callback);
		},

    };

});