//自执行函数：避免全局污染
;(function (){
   //1、基于AJAX获取服务端数据，把获取的数据存储到data中[AJAX四步]
   // + 1.首先创建AJAX实例
   let data = null,
       //xhr：创建的AJAX实例
       xhr = new XMLHttpRequest;
   
   // + 2.AJAX请求格式
   /* 
    参数1：请求方式  get/post
    参数2：请求的数据链接 
    参数3：是否同步异步 false：同步  true：异步
   */
   xhr.open('GET','json/product.json',false);

   // + 3.监听服务器返回的状态信息
   /* 
     只有http状态码为200，并且请求状态为4的时候才能成功获取数据
   */
   xhr.onreadystatechange = function(){
       //http状态码：status  请求状态：readyState 
       if(xhr.status === 200 && xhr.readyState === 4){
             //基于responseText获取响应回来的信息 
             data = xhr.responseText;
       }
   };

   // + 4.发起AJAX请求
   xhr.send();
   
   // + 5.把获取的JSON字符串转成对象
   data = JSON.parse(data);
})();

