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
        /* 
          为什么不直接new一个jQuery实例，而是通过init，
          先把new出来的实例赋给init，再转给jQuery

          就像是老大jQuery想要一个儿子，但是他自己不想生，
          而是就委托init替他生，然后再把这个孩子过继给jQuery他自己

          避免new(jQuery不想new)，直接$()就可以创建一个jQuery的实例
        */
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

        eq: function (i) {
			var len = this.length,
				j = +i + (i < 0 ? len : 0);
			return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
		},
    };


    /* 
      jQuery给我们提供的方法放到了两个位置上面
        1.原型上 jQuery.prototype = {...}
          //=>创建jQuery实例才能调用这上面的方法
          //=>$()就是jQuery实例
          $().get();
        2.对象上 jQuery.ajax = ...
          //=>直接调用
          $.ajax();
    */

    //=>jQuery也是一个普通对象
    jQuery.ajax = function (url, options){
       
    };

    init = jQuery.fn.init = function (selector, context, root) {
        var match, elem;
        
        /* 
          如果我什么都不传，那就是返回当前实例
          所以$() => 就是当前jQuery的一个实例
        */
        if (!selector) {
            return this;
        }

        /* 
          我们并没有传入root的实参，所以默认是rootjQuery
          => rootjQuery = jQuery(document);
          代表整个文档
        */
        root = root || rootjQuery;

        /* 
         如果你传入的selector选择器是一个字符串，
         就做下面这些事情：通过选择器获取我们所需要的元素  
        */
        if (typeof selector === "string") {
            if (selector[0] === "<" &&
                selector[selector.length - 1] === ">" &&
                selector.length >= 3) {

                // Assume that strings that start and end with <> are HTML and skip the regex check
                match = [null, selector, null];

            } else {
                match = rquickExpr.exec(selector);
            }

            // Match html or make sure no context is specified for #id
            if (match && (match[1] || !context)) {

                // HANDLE: $(html) -> $(array)
                if (match[1]) {
                    context = context instanceof jQuery ? context[0] : context;

                    // Option to run scripts is true for back-compat
                    // Intentionally let the error be thrown if parseHTML is not present
                    jQuery.merge(this, jQuery.parseHTML(
                        match[1],
                        context && context.nodeType ? context.ownerDocument || context : document,
                        true
                    ));

                    // HANDLE: $(html, props)
                    if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                        for (match in context) {

                            // Properties of context are called as methods if possible
                            if (isFunction(this[match])) {
                                this[match](context[match]);

                                // ...and otherwise set as attributes
                            } else {
                                this.attr(match, context[match]);
                            }
                        }
                    }

                    return this;

                    // HANDLE: $(#id)
                } else {
                    elem = document.getElementById(match[2]);

                    if (elem) {

                        // Inject the element directly into the jQuery object
                        this[0] = elem;
                        this.length = 1;
                    }
                    return this;
                }

                // HANDLE: $(expr, $(...))
            } else if (!context || context.jquery) {
                return (context || root).find(selector);

                // HANDLE: $(expr, context)
                // (which is just equivalent to: $(context).find(expr)
            } else {
                return this.constructor(context).find(selector);
            }

            // HANDLE: $(DOMElement)
        } else if (selector.nodeType) {//=> 如果传入是个元素节点，则做下面这些事情
            this[0] = selector;
            this.length = 1;
            return this;
        } else if (isFunction(selector)) {
            return root.ready !== undefined ?
                root.ready(selector) :
                selector(jQuery);
        }

        return jQuery.makeArray(selector, this);
    };

    init.prototype = jQuery.fn;


    var _jQuery = window.jQuery,
        _$ = window.$;
    /* 
      noConflict：转移$的使用权，因为有可能其它类库也使用了$,
      为了避免冲突，转移$的使用权
    */
	jQuery.noConflict = function (deep) {
        //=>转移$的使用去权
		if (window.$ === jQuery) {
			window.$ = _$;
		}

		if (deep && window.jQuery === jQuery) {
            //=>转移jQuery的使用权
			window.jQuery = _jQuery;
		}

		return jQuery;
	};


    jQuery.extend = jQuery.fn.extend = function () {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[0] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		/* 
          第一项可传可不传，第二项必须要传，所做的处理
        */
		if (typeof target === "boolean") {
			deep = target;
			target = arguments[i] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if (typeof target !== "object" && !isFunction(target)) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if (i === length) {
			target = this;
			i--;
		}

		for (; i < length; i++) {

			// Only deal with non-null/undefined values
			if ((options = arguments[i]) != null) {

				// Extend the base object
				for (name in options) {
					copy = options[name];

					// Prevent Object.prototype pollution
					// Prevent never-ending loop
					if (name === "__proto__" || target === copy) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (jQuery.isPlainObject(copy) ||
							(copyIsArray = Array.isArray(copy)))) {
						src = target[name];

						// Ensure proper type for the source value
						if (copyIsArray && !Array.isArray(src)) {
							clone = [];
						} else if (!copyIsArray && !jQuery.isPlainObject(src)) {
							clone = {};
						} else {
							clone = src;
						}
						copyIsArray = false;

						// Never move original objects, clone them
						target[name] = jQuery.extend(deep, clone, copy);

						// Don't bring in undefined values
					} else if (copy !== undefined) {
						target[name] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

    if (typeof noGlobal === "undefined") {
        //=>把jQuery赋值给window下的jQuery和$
		window.jQuery = window.$ = jQuery;
	}

});

/* 
  extend：向jQuery中继续扩展方法
  extend的使用方式
   + $.extend(); //=>扩展到jQuery对象上，一般是为了完善类库，提供更多的工具方法
   + $.fn.extend();//=>扩展到jQuery原型上，一般是为了写jQuery插件，让jQuery的实例来调用
   + $().extend();//=>这种不常用
*/

//=>向jQuery对象上扩展方法
$.extend({
    queryURLParms: function(url){
       //.......
    }
});

//=>调用扩展方法
$.queryURLParms('http://www.baidu.com');

/* 
  noConflict：jQuery对象上的方法
  jQuery.noConflict或者$.noConflict
*/
let j = jQuery.noConflict();//=> j === jQuery
//=>此时既可以使用jQuery()调用方法也可以使用j()调用方法
let A = jQuery.noConflict(true);
//=>此时连jQuery也被转移了使用权，还可以通过A()调用方法;

//=> 在外面可以直接调用了
$();
jQuery();

//=>实际上调用的是
/* 
  jQuery = function (selector, context) {
        return new jQuery.fn.init(selector, context);
    };
*/
//=> 基于jQuery选择器创建出来的是jQuery类的一个实例
//=> 它就可以调用jQuery原型上的方法
/* 
   1.创建出来的jQuery实例是一个类数组(jQuery对象)，这个类数组是基于makeArray创建出来的
   2.selector 支持三种数据格式
     + [string]
       - 选择器 $('.box')
       - 创建元素$('<div>...</div>')
     + [元素对象：JS原生对象]
       把原生JS对象转化为jQuery对象(只有转成jQuery对象才能调用jQuery中的方法)
       把jQuery对象转化为原生JS对象：直接基于索引获取即可，例如：$A[0]，
       真实项目中建议大家使用jQuery自带的get方法实现，因为它更加完善，可以支持负数索引：$A.get(0)
       eq方法也是根据索引获取集合中的某一项(也支持负数索引)，只不过返回的结果不是原生JS对象，依然是jQuery的一个实例
     + [函数]
       $(function(){}) 等待页面中的DOM结构加载完成后再执行函数，等价于$(document).ready(function(){})
*/
$('.box')
