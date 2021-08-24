//自执行函数，避免全局污染
;(function(){
   //1、基于AJAX获取服务器数据
   //+ 1.首先创建AJAX的实例
   let data = null,
       xhr = new XMLHttpRequest;

   //+ 2.编写请求格式代码
   /* 
    参数1：get或者post
    参数2：请求链接
    参数3：是否同步异步请求  false：同步/true：异步
   */
   xhr.open('GET','json/product.json',false);

   //监听服务器端返回的信息
   xhr.onreadystatechange = function(){
      /* 
        status：http状态码
        readyState：请求状态
      */
      //只有http状态码为200并且请求状态为4的时候才能成功返回信息
      if(xhr.status === 200 && xhr.readyState === 4){
          //基于responseText获取返回的信息
          data = xhr.responseText;
      }
   };

   // +4.发起请求
   xhr.send();
   
   //将JSON格式的字符串转成JSON对象
   data = JSON.parse(data);
   console.log(data);
})();