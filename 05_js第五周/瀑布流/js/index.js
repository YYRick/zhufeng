let fallsModule = (function(){
    let fallsBox = document.querySelector('#fallsBox'),
        /* Array.from：将一个类数组集合变成一个数组，方便后续使用数组方法 */
        columns = Array.from(fallsBox.querySelectorAll('.column')),
        imgList = [];

    /* 存储后续获得的数据 */
    let data = [];

    //=> 工具类方法：offset 获取当前元素距离body的偏移(top/left)
    const offset = function offset(element){
        //=>获得当前元素的父级参照物以及距离其的偏移值
        let parent = element.offsetParent,
            top = element.offsetTop,
            left = element.offsetLeft;
        
        //获取距离body的偏移值
        while(parent){
            top += parent.clientTop + parent.offsetTop;
            left += parent.clientLeft + parent.offsetLeft;
            parent = parent.offsetParent;
        }
        
        return{
            top,
            left
        }

    };

    //从服务器获取数据
    const queryData = function queryData(){
        let xhr = new XMLHttpRequest;
        /* 是以index.html为标准设置相对定位的地址 */
        xhr.open('GET', './data.json', false);
        xhr.onreadystatechange = () => {
            if(xhr.readyState === 4 && xhr.status === 200){
                data = JSON.parse(xhr.responseText);
            }       
        };
        xhr.send();
    };

    //动态渲染数据
    const binding = function binding(){
        //把从服务器获取的数据(图片宽/高)，按照真实渲染的高度(230)，动态计算出真实渲染的高度
        /* 300 433  -> 230  230*(433/300)*/
        data = data.map(item => {
            let {
                 width, 
                 height
            } = item;
            item.width = 230;
            item.height = 230*(height/width);
            return item;
        });
        /*
        瀑布流的规则：每一次从数据中取出3条数据(group) 三列(columns)  
          + 三条数据，按照图片的高度排序[小，中，大]
          + 三列盒子，按照盒子的高度排序[大，中，小]
        */ 
        //不想产生块级上下文，就把let i提出来(写在循环里面，会产生很多个块级上下文，消耗性能)
        let i = 0,
            group;
        //=>每三个为一组
        for(; i < data.length; i += 3){
            //=>取出这三条数据
            group = data.slice(i, i+3);
            //=>将这三条数据(图片高度)进行排序(升序)
            group.sort((a, b) => a.height - b.height);
            //=>columns(盒子高度)也进行排序(降序)
            columns.sort((a, b) => b.offsetHeight - a.offsetHeight);
            //把排好序的数据依次插入到对应的，排好序的列中
            //=>循环三条数据中的每一项
            group.forEach((item, index) => {
                let {
                     pic,
                     height,
                     title,
                     link
                } = item;
                //动态创建每一个图片内容盒子
                let box = document.createElement('div');
                box.className = 'item';
                box.innerHTML = `<a href="${link}" target="_blank">
                    <div class="pic-box" style="height: ${height}px;">
                        <img src="" alt="" data-img="${pic}">
                    </div>
                    <p class="desc-box">${title}</p>
                </a>`;

                //=> 插入到指定列中
                columns[index].appendChild(box);
            });
        }

        //数据绑定完成后，获取到所有的img
        imgList = Array.from(fallsBox.querySelectorAll('.pic-box img'));
    };


    //图片的延迟加载(单张)
    const singleImgLazy = function singleImgLazy(img){
          //传递的img就是需要加载的图片
          let pic = img.getAttribute('data-img'),
              /* 等价于document.createElemeny('img) */
              /* 
                创建一个临时图片，防止图片加载失败时，因没有设置透明度，
                而是直接设置的display: none导致图片出现xx效果，很难看
              */
              temp = new Image;
          temp.src = pic;
          temp.onload = () =>{
              //加载成功：表示图片地址是正确的
              img.src = pic;
              img.style.opacity = 1;
          };
    };
    

    //图片的延迟加载(多张)
    const lazyImgsLoading = function lazyImgsLoading(){
         imgList.forEach(item =>{
             //item -> 当前迭代的图片
             let imgBox = item.parentNode,
                 HTML =  document.documentElement,
                 A = imgBox.offsetHeight + offset(imgBox).top,
                 B = HTML.clientHeight + HTML.scrollTop;
            if(A <= B) singleImgLazy(item);
         });
    };

    return {
       init(){
          queryData();
          binding();
          lazyImgsLoading();
          //=>注意：滚动的时候图片也延迟加载
          window.onscroll = lazyImgsLoading;
       }
    };
})();

fallsModule.init();