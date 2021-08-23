~ function(){
   /* 第一步：从服务器获取需要展示的数据，然后绑定在页面中 */
   // 1.基于AJAX获取服务器端数据，把数据存储到data中
   //首先创建AJAX的实例
   let data = null,
   //AJAX请求类的一个实例
       xhr = new XMLHttpRequest;
   //打开请求的链接，基于get请求和同步编程完成
   //参数1：请求方式  参数2: 数据链接  参数2：同步/异步  false：同步
   xhr.open('GET', 'json/product.json', false);
   //监听服务器返回的状态信息(在HTTP状态码为200，请求状态为4的时候能拿到数据)
   xhr.onreadystatechange = function(){
       //status：HTTP状态码    readyState：请求状态
       if(xhr.status === 200 && xhr.readyState === 4){
          //基于responseText获取响应回来的信息 
          data = xhr.responseText;
       }
   };
   //发起AJAX请求
   xhr.send();
   //把获取的JSON字符串转换为对象
   data = JSON.parse(data);

   //2.把获取的数据展示在页面中
   //根据获取的DATA：DATA当中有多少项，我就动态创建出多少个CARD盒子（项目中都是基于字符串拼接的方式，把需要创建的CARD拼出来）
   let htmlStr = ``;
   data.forEach(item => {
       /* 
          ITEM是每一项（对象），包含需要展示的每一个产品的详细信息：
          我们需要拿出每一项信息来展示到页面中（拼到模板字符串中）
       */
      let {
        id,
        title,
        price,
        time,
        hot,
        img
      } = item;
      //把需要的数据绑定在元素card的自定义属性data-xxx上面
      //(后期需要这些数据，直接基于自定义属性获取即可)
       htmlStr += `<div class="card" 
                        data-price="${price}" 
                        data-hot="${hot}" 
                        data-time="${time}">
       <img src="${img}" class="card-img-top" alt="">
       <div class="card-body">
         <h6 class="card-title">${title}</h6>
         <p class="card-text">价格：￥${price}</p>
         <p class="card-text">好评：${hot}</p>
         <p class="card-text"><small class="text-muted">上架时间：${time}</small></p>
       </div>
     </div>`;
   });

  //把拼接好的CARD字符串，放到页面指定容器中（card-deck）
	let cardDeck = document.querySelector('.card-deck');
	cardDeck.innerHTML = htmlStr;

  //=>第三步：点击实现升降序排序
  let navList = document.querySelectorAll('.navbar-nav li'),
      cardList = cardDeck.querySelectorAll('.card');
  
  //循环给所有的按钮绑定点击事件，点击的时候按照指定的规则排序
  for(let i = 0; i < navList.length; i++){
      let item = navList[i];
      //=>控制排序方式：是价格还是热点还是上架时间
      //设置自定义属性data-type存储排序方法 {1：升序  2：降序}
      item['data-type'] = -1;//=>用于控制升降序
      item.onclick = function(){
        //=>点击当前的某个按钮，让其按照升降序切换，而其余的都应该回归原始-1
			  [].forEach.call(navList, item => (item === this ? this['data-type'] *= -1 : item['data-type'] = -1));
        //类数组转成数组
        cardList=[].slice.call(cardList, 0);
        //升降序
        cardList.sort((next, cur) => {
           //获取当前按钮记录的排序方式 data-time/data-price/data-hot
           let pai = this.getAttribute('data-pai');
           cur = cur.getAttribute(pai);
           next = next.getAttribute(pai);
           if(pai === 'data-time'){
              //获取的是日期数据，我们需要把字符串中的'-'去除
              cur = cur.replace(/-/g, '');
              next = next.replace(/-/g, '');
           }
           return (next - cur)*this['data-type'];
        });
        cardList.forEach(item => cardDeck.appendChild(item));
      }
  }
  
}();

