/*
 * 图片延迟加载的N种实现方案
 *   + 基于JS盒模型实现的懒加载方案
 *   + 基于getBoundingClientRect的进阶方案
 *   + 终极方案:IntersectionObserver
 *   + 未来设想:img.loading=lazy
 */
let imageModule = (function () {
    let columns = Array.from(document.querySelectorAll('.column')),
        loadingBox = document.querySelector('.loadingBox'),
        lazyImageBoxs;

    // 创建一个监听器：处理图片的延迟加载
    let config = {
        threshold: [1]
    };
    let ob = new IntersectionObserver(changes => {
        changes.forEach(item => {
            let {
                isIntersecting,
                target
            } = item;
            if (isIntersecting) {
                // 完全出现在视口中
                singleImgLoading(target);
                // 移除对当前盒子的监听
                ob.unobserve(target);
            }
        });
    }, config);

    // 监听是否到达底部
    const watchBottom = function watchBottom() {
        let obLoading = new IntersectionObserver(async changes => {
            let item = changes[0];
            if (item.isIntersecting) {
                // 到底部了：加载更多的数据
                let data = await utils.ajax('./data.json');
                bindHTML(data);
                lazyImgsFunc();
            }
        });
        obLoading.observe(loadingBox);
    };

    // 数据绑定
    const bindHTML = function bindHTML(data) {
        data = data.map(item => {
            let w = item.width,
                h = item.height;
            h = h / (w / 230);
            item.width = 230;
            item.height = h;
            return item;
        });
        for (let i = 0; i < data.length; i += 3) {
            let group = data.slice(i, i + 3);
            group.sort((a, b) => a.height - b.height);
            columns.sort((a, b) => b.offsetHeight - a.offsetHeight);
            group.forEach((item, index) => {
                let {
                    pic,
                    link,
                    title,
                    height
                } = item;
                let card = document.createElement('div');
                card.className = "card";
                card.innerHTML = `<a href="${link}">
					<div class="lazyImageBox" style="height:${height}px">
						<img src="" alt="" data-img="${pic}">
					</div>
					<p>${title}</p>
				</a>`;
                columns[index].appendChild(card);
            });
        }
        lazyImageBoxs = Array.from(document.querySelectorAll('.lazyImageBox'));
    };

    // 单张图片加载
    const singleImgLoading = function singleImgLoading(imgBox) {
        let img = imgBox.querySelector('img'),
            trueImg = img.getAttribute('data-img'),
            tempImg = new Image();
        tempImg.src = trueImg;
        tempImg.onload = function () {
            img.src = trueImg;
            img.style.opacity = 1;
            tempImg = null;
        };
    };

    // 根据条件规则，控制哪些延迟加载
    const lazyImgsFunc = function lazyImgsFunc() {
        // 把所有的盒子去监听
        lazyImageBoxs.filter(imgBox => {
            return imgBox.getAttribute('isWatch') !== "TRUE";
        }).forEach(imgBox => {
            ob.observe(imgBox);
            imgBox.setAttribute('isWatch', 'TRUE');
        });
    };

    return {
        // 模块的入口:管控执行的逻辑
        async init() {
            let data = await utils.ajax('./data.json');
            bindHTML(data);
            lazyImgsFunc();
            watchBottom();
        }
    }
})();
imageModule.init();