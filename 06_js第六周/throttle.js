/*
* throttle：函数节流
*   是为了缩减执行频率，当达到了一定的时间间隔就会执行一次
*   @params
*      func:需要执行的函数
*      wait:设置的间隔时间
*   @return
*      返回可被调用的函数
* by yyrick on 2021/09/16
*/
let throttle = function (func, wait) {
    let timeout = null,
        result = null,
        previous = 0; //=>上次执行时间点
    return function (...args) {
      let now = new Date,
          context = this;
      //=>remaining小于等于0，表示上次执行至此所间隔时间已经超过一个时间间隔
      let remaining = wait - (now - previous);
      // console.log(remaining);
      if (remaining <= 0) {
        clearTimeout(timeout);
        previous = now;
        timeout = null;
        result = func.apply(context, args);
      } else if (!timeout) {
        timeout = setTimeout(() => {
          previous = new Date;
          timeout = null;
          result = func.apply(context, args);
        }, remaining);
      }
      return result;
    };
};