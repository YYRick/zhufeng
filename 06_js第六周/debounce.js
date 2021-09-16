/* 
 * debounce：函数防抖
 *   @params
 *      func：要执行的函数
 *      wait：间隔等待时间
 *      immediate：在开始边界还是在结束边界触发执行(true=>在开始边界)
 *   @return
 *      可被调用的函数
 * by yyrick on 2021/09/16
 */
function debounce(func, wait, immediate){
    let result = null, 
        timeout = null;

    return function(...args){
        let context = this,
            now = immediate && !timeout;
        //=>在设置新的定时器之前，我们要把之前设置的定时器都清理掉
        //=>因为防抖的目的是在等待时间内，只能执行一次
        clearTimeout(timeout);
        timeout = setTimeout(()=>{
            if(!immediate) result = func.call(context, ...args);
            timeout = null;
        }, wait);

        if(now) result = func.call(context, ...args);
        return result;
    }
}