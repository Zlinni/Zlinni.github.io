if (window.location.pathname.match('about')) {
    var articleContainer = document.getElementById('article-container');
    var standBg = document.getElementById('standBox');
    // 必填项 打上wow类名
    standBg.classList.add("wow"),
        // 必填项 打上动画类名
        standBg.classList.add("animate__bounceOutLeft"),
        // 动画执行时间
        standBg.setAttribute("data-wow-duration", "1.5s"),
        // 动画延迟多久后执行
        standBg.setAttribute("data-wow-delay", "0"),
        // 动画执行次数
        standBg.setAttribute("data-wow-iteration", "1")
    var introBox = document.createElement('div');

    let introArr = ['私の名前はZlinniです。', '今年20歳です', '私は広東技術師範大学に住んでいます。', '結婚していません', '亀友チェーン百貨店で働いています。',
        '毎日遅くても8時までに家に帰ります。', 'タバコは吸わないし、お酒もあまり飲まないです。', '夜11時に寝ます。', '毎日必ず8時間寝ます。', '寝る前に熱い牛乳を一杯飲みます。',
        '20分間のストレッチをして体をリラックスさせてからベッドに入ります。', 'これでほとんど一眠りして夜が明けるまでです。', '朝目が覚めたら赤ちゃんのように疲れやストレスが残らないようにします。',
        '健康診断の結果も異常なしです。', 'これは私という人が心の平和な人生を過ごしたいと願っているということです。'
    ];
    for (let i = 0; i < introArr.length; i++) {
        var introWord = document.createElement('p');
        introWord.innerText = introArr[i];
        introWord.classList.add('wow');
        introWord.classList.add('animate__bounceInLeft');
        introBox.style.textAlign = 'center';
        introWord.setAttribute("data-wow-duration", "1.5s");
        introWord.setAttribute("data-wow-delay", "0");
        introWord.setAttribute("data-wow-iteration", "1");
        introBox.appendChild(introWord);
    }
    articleContainer.append(introBox);
    wow = new WOW({
        boxClass: 'wow',
        // 当用户滚动时显示隐藏框的类名称
        animateClass: 'animated',
        // 触发 CSS 动画的类名称（动画库默认为"animate.css"库）
        offset: 0,
        // 定义浏览器视口底部与隐藏框顶部之间的距离。
        // 当用户滚动并到达此距离时，将显示隐藏的框。
        mobile: true,
        // 在移动设备上打开/关闭wow.js。
        live: true
        // 在页面上检查新的 wow.js元素。
    })
    wow.init();
    standBg.addEventListener('click',function(e){
        e.preventDefault();
        e.stopPropagation();
        standBg.childNodes[0].childNodes[0].src = '../img/killerqueen.gif';
        setTimeout(() => {
            location.reload();
        }, 2000);
    })
}