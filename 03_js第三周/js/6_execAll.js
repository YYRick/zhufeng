/* 
  需求：编写一个方法execAll，执行一次可以把所有匹配的结果捕获到（前提正则一定要设置全局修饰符g）
*/

;(function(){
    /* 
      str = ''  设置初始默认值
    */
    function execAll(str = ''){
       //验证是否加g
       if(!this.global) return this.exec(str);
       /*
         ary：存储捕获的结果 
         str：要匹配的字符串
         res：捕获的结果
       */
       let ary = [],
           res = this.exec(str);
       while(res){
           ary.push(res[0]);
           res = this.exec(str);
       }
       return ary.length === 0 ? null : ary;
    }
    RegExp.prototype.execAll = execAll;
})();

let reg = /\d+/g;
let str = 'zhufeng2019@2021'
console.log(reg.execAll(str));
str = 'zhufeng'
console.log(reg.execAll(str));


//=>字符串中的MATCH方法，可以在执行一次的情况下，捕获到所有匹配的数据（前提：正则也得设置G才可以）
console.log("yyrick@2019@ccc2021".match(reg));