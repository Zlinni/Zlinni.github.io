//定义加入收藏夹函数
    function join_favorite(siteUrl, siteName) {

        //捕获加入收藏过程中的异常
    
        try {
    
            //判断浏览器是否支持document.all
    
            if (document.all) {
    
                //如果支持则用external方式加入收藏夹
    
                window.external.addFavorite(siteUrl, siteName);
    
            } else if (window.sidebar) {
    
                //如果支持window.sidebar，则用下列方式加入收藏夹
    
                window.sidebar.addPanel(siteName, siteUrl, '');
    
            }
    
        }
    
        //处理异常
        catch (e) {
    
            alert("加入收藏夹失败，请使用Ctrl+D快捷键进行添加操作!");
    
        }
    
    }
    
