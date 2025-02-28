/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","e05d90b958485e9275f245938c557d34"],["/about/index.html","1a5cc548ea8600712aa1b5a477dbd709"],["/archives/2021/11/index.html","63eb199fdad011653fd3c89f6d203772"],["/archives/2021/12/index.html","86c5dfa1e97350d5ebc3af00ca71c8a4"],["/archives/2021/index.html","37ba23aa663e40c4b43b17aada6255a5"],["/archives/2021/page/2/index.html","9620bdea83783368396aba728c38562b"],["/archives/2022/01/index.html","c80fcc7978db8bd1b63f1dc2d9d43615"],["/archives/2022/01/page/2/index.html","20e13203239d72b78cfaf1e07c41d8a0"],["/archives/2022/02/index.html","5f242d4ad6a8c091582fa9e9a99a3a5e"],["/archives/2022/03/index.html","e25ad5ee89aaddc026f1c78020c73523"],["/archives/2022/04/index.html","27100e21c60e0277e600de6f5df9be10"],["/archives/2022/04/page/2/index.html","bbb671071ccbebb2efc410e271382a70"],["/archives/2022/04/page/3/index.html","c33eb62d3463f3a426b8a4b9ccdc6ca4"],["/archives/2022/05/index.html","c45a05fb67ab46b30292a4019e5e3081"],["/archives/2022/05/page/2/index.html","4ae5318b214e84c8f54c9e4232a008de"],["/archives/2022/06/index.html","b29e70f5e00a92203efef83ebcff863f"],["/archives/2022/07/index.html","bd4110dd67226c7aaaacc050060a94b8"],["/archives/2022/08/index.html","ae04e8ac65326e5a03ae754250729072"],["/archives/2022/09/index.html","0678019f18d0a3ad46c46dcfee3c158c"],["/archives/2022/index.html","673009673c860b88311e4cce2634d925"],["/archives/2022/page/2/index.html","6a494c0b6569fdb92b921f6f62f20d4f"],["/archives/2022/page/3/index.html","175d5901f33db49eb881f3125093da99"],["/archives/2022/page/4/index.html","9348e811e9636e88715d4d4e1ff9b298"],["/archives/2022/page/5/index.html","1fd436584e41d0cfc3e0365408d93636"],["/archives/2022/page/6/index.html","0a26cc7bfe0f6dcb261121e5e38eba89"],["/archives/2022/page/7/index.html","b997b438bb527ac66d686da2f15abc92"],["/archives/2022/page/8/index.html","37ef1a9dcf931b38197cde7d52a84153"],["/archives/2023/01/index.html","9a0a0e198a7e95459bc3b6cf78e69ddc"],["/archives/2023/02/index.html","748bf14782693bfb191e91927d4c796e"],["/archives/2023/03/index.html","e7898119a0af263886beb76366b1e9ab"],["/archives/2023/10/index.html","21be0a69a70f9123cfa161fa7fd77f65"],["/archives/2023/index.html","4d33438ba22d63d3a2540fb841c7271f"],["/archives/2024/01/index.html","2725dd4548d275dfe427d2890791ec68"],["/archives/2024/05/index.html","17f15472028f1138a590b772590d385b"],["/archives/2024/index.html","8d0a682acbfd7c5d3ea85782cee85631"],["/archives/index.html","1c024f8ff77f6a3a335309e60e25ad4f"],["/archives/page/10/index.html","33d7960077e90e242b47334c0e46c6fc"],["/archives/page/11/index.html","934a899a08a1c503cd4b0dfb89002768"],["/archives/page/2/index.html","312366ece0761cbcf7a6f9ff447c1a69"],["/archives/page/3/index.html","214eaae89fcee396f0c6236988d8bb41"],["/archives/page/4/index.html","004e198670f47b7440ba407842dbf704"],["/archives/page/5/index.html","0ca73d64a146c78101f90b7a25f5590d"],["/archives/page/6/index.html","7652b6473b449cd46b73aaf8a201203a"],["/archives/page/7/index.html","3116b2feaa781d8dca5d22b5436b5068"],["/archives/page/8/index.html","2361117234c6c78e22f31ef1fb61fc5a"],["/archives/page/9/index.html","f868d68e20cef3f0dc7b345457791d8d"],["/artitalk/index.html","6f8cd715719c060194e9e7e9fbaa0e76"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/atom.xml","38c4efa341951c04912aeb4c2ba9cb5a"],["/bb/index.html","67c2059da914ac49c7be02c197be7d3e"],["/categories/CSS系列/index.html","d9ad6fb9387a01357ec82896c79f1ded"],["/categories/JS系列/index.html","57b9794a7ea57f6b4fb5e7422beee2ec"],["/categories/JS系列/page/2/index.html","b121b037238b7eacc56f1548b4b93b9e"],["/categories/Vue系列/index.html","036d8607778a27a3af6c3aebf6bff580"],["/categories/Vue系列/page/2/index.html","e27077f4cb0fefae4e017766bb35314d"],["/categories/Vue系列/page/3/index.html","4ef082c6cfec80c9d988fc8a340fd0aa"],["/categories/Webpack系列/index.html","fdbe6724b14051da76e62d9e03e3e770"],["/categories/index.html","2151d3ed399a5f3279be0a15a0a33116"],["/categories/前端基础/index.html","dfaab6354d71465f3f776a416dbb10ee"],["/categories/前端基础/page/2/index.html","bc78a3a2827173ed25a8d732dab64066"],["/categories/前端进阶/index.html","36a6d41abfd7f5bfc2260292ddd03a58"],["/categories/工程化系列/index.html","0625906879a3de56c8656a5a75cd089d"],["/categories/日常杂谈/index.html","d4de2c6b1148b9b94da4f4382c12a871"],["/categories/浏览器系列/index.html","ef17eeb073a6e439357bf79b350c880f"],["/categories/算法指南/Binary-Tree/index.html","c9df4cf7d75a834cab275615db11f615"],["/categories/算法指南/index.html","01ee3ee910a4305f9de5a88a3fe17633"],["/categories/算法指南/page/2/index.html","c14b7c5cd45d475c4a7ca8cc9b5cc2c2"],["/categories/网络系列/index.html","f4cbb19c1d331d4fe8b66884b3e7c3ea"],["/categories/面试指南/index.html","e7d5314a504384a9d18aa50bec7bbb0d"],["/categories/魔改系列/index.html","2d8c8b2d3a480f63c8aaf8e708de0dfd"],["/css/animate.min.css","55009d64191e6f9e712a841773ee6611"],["/css/aplayer.css","ddcbd79780067c3941f243a7bebdd559"],["/css/bgc.css","af61378e9e8a5b159cd5d9e729b88a4f"],["/css/custom.css","ba55f423a7cb6d329a503a799ca66f34"],["/css/index.css","6a0a3befce44551923752d0d5632af10"],["/css/neonlight.css","da78e969661c4d6e9f4c1213eba8b8d6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/157b9e6bd3841296e9df46651f8bec6-removebg-preview.png","bb308ab2ed4cf5731f1d0d15a7f9030d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/4444.png","65f700e782700cb3dfd7af0db59ca2ca"],["/img/9050f3deb48f8c54cbb518ec34292df5e1fe7f94.png","c743ccd196007aeb31f107b4b493e6b5"],["/img/React系列/react.png","a0c6e00a32c0c09f7767d22e1174a532"],["/img/React系列/react入门与实践.jpg","bec260ee5125459b10146c1ffc40fa49"],["/img/aaa.jpg","6a5a7844633c5bb81b35b0a914d35547"],["/img/afternew.png","5d5fb374e7d442f980ffc785fecbea25"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/beforenew.png","69f79b27b5abcf1d4b8cf4be3559db39"],["/img/bgc.jpg","1b811783648f9ef2352ada176a7c33cf"],["/img/bgc/1.png","4586c5fa0183b05b7452cb5373c0c60d"],["/img/bgc/2.png","a7c142f1bc2ab6a76e8187c2272cae1e"],["/img/bgc/3.png","087631d84d82550e4292baf6653e0bcf"],["/img/bgc/4.png","7826c94c76e084de3df4cc54055683b2"],["/img/bgc/5.png","3716efdaf9a0d6cdf08576e5239e2e0c"],["/img/bgc/MileStone项目杂谈.jpg","5cf842d5df8a84981ecc60bc446e862a"],["/img/bgc/after.png","9fabcb0ed02d2c28a8dd76a9fb7a5bcf"],["/img/bgc/ajax.jpg","f058544f8a1d9565d0fcbba2beeb77b6"],["/img/bgc/before.png","d42e0836dc7aeb5c6ac3036047d5f1d9"],["/img/bgc/bgc.jpg","d3823f30edf3b54a4dda8968c050d9fb"],["/img/bgc/code2.jpg","f6ef52f88effeb006200656835768019"],["/img/bgc/css.png","6500e8c6985e7e7cff88d28d7f557aa4"],["/img/bgc/cyberpunk.jpg","72b2ed74a64f89915c5504a7905456b8"],["/img/bgc/default.jpg","d47700fa220cbda3101d7d51137c3338"],["/img/bgc/echarts.jpg","ca9cff91ec072fde7477863a1861406a"],["/img/bgc/even.jpg","d29e7de6f6eec69bfe754aa9838785cf"],["/img/bgc/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/bgc/gio.png","9c5e50718601d3774f3b33d09af388f8"],["/img/bgc/html.jpg","f77f736241eae0e090eb336a50918a74"],["/img/bgc/index.jpg","b8c3debd17dc84991778826d8bcddf40"],["/img/bgc/javaweb.png","90e836a17db8d912128bb829760dd4bf"],["/img/bgc/jojologo-removebg-preview.png","30822d43dc3df2211c9ee69e17000feb"],["/img/bgc/jojologo.jpg","068874ae20beffb79fedacb43cc85fd9"],["/img/bgc/jojologo3.jpg","9bdc7f6dde78a90a8925aba6bfe4199e"],["/img/bgc/jolin.png","90bd8c8e1b3773ba73bd0558a2f287c7"],["/img/bgc/jolinlogo.png","97a9083e5a819fef92c7c35fd009d2e6"],["/img/bgc/jquery.jpg","558f23b412317052dec339ffa779abed"],["/img/bgc/jquery.png","4b5c2de1fa3c9e03af2ca364c1c04d12"],["/img/bgc/landingpage.jpg","ab88217fb76d9e40c573c2fc3cf24a45"],["/img/bgc/logo2.png","98c8dec7017d4bfb2640834b4182dd32"],["/img/bgc/meiriyimian.jpg","541d97c206eb47370fbe664fc13d59bb"],["/img/bgc/milestone.jpg","8f43613c730f4d2c970819c39ff54b29"],["/img/bgc/ms1.jpg","00c7088badb76fbef0bed92e9ddb4626"],["/img/bgc/neonlight.jpg","aa5ba11e9a7abf5622486e1c2aec0710"],["/img/bgc/neonlight1.jpg","3566a1e4cd2c598aa06723541ad98c32"],["/img/bgc/neonlight8.jpg","d29e7de6f6eec69bfe754aa9838785cf"],["/img/bgc/nodejs.jpg","b190f2f48b3fab7557ba2d631154e1fd"],["/img/bgc/odd.png","022ef01c84264cabd9b65bdf1310e363"],["/img/bgc/onepiece.jpg","63441a8c9e6a4a4e550dcfd404530b4f"],["/img/bgc/op2.png","9d5104b349c6158cfa6dfa538ac9c9a2"],["/img/bgc/picgo.jpg","7db7ea9485a1c89e88fc64dfa740fc65"],["/img/bgc/rgb.jpg","c005c879eda29330c0585adac2bd9596"],["/img/bgc/shuzuquchong.jpg","fbf2db16cd99b76ab50b01b6fc64be60"],["/img/bgc/sjk.jpg","8b2ded959ee7d10ff589a4a81a71863a"],["/img/bgc/standard.jpg","058bcd3e8ac10ab50b0b7bf89c9f4e9a"],["/img/bgc/ubuntu.jpg","e2d49e81d44b8f301fc19c9e01c36393"],["/img/bgc/vue.jpg","ebd691a3825d42e739ab1cf368a85cb9"],["/img/bgc/wallhaven-1kyv8g.jpg","378a6e569aca24abec148d5f1e682e67"],["/img/bgc/wallhaven-2kvmgx.jpg","e1daba962018ac96e469af51bbfa3c00"],["/img/bgc/wallhaven-39wq39.jpg","8d580decfec38587f2c4686104b6b79b"],["/img/bgc/wallhaven-3zwpz3.jpg","1339aac62b3107e83e99b9e29a1f6aa6"],["/img/bgc/wallhaven-4lzgkq.jpg","107a0a3e6a7ae4150b4c3ca6f9739617"],["/img/bgc/wallhaven-76m9z9.jpg","7e7928239f7251ec6f594dca854239b6"],["/img/bgc/wallhaven-83rdp2.jpg","99e2d160c974671cd86e06aba9f58bff"],["/img/bgc/wallhaven-962ogx.jpg","1d0757ba5b17159318d0b5ac3f5fede0"],["/img/bgc/wallhaven-e7vop8.jpg","f6296b43308523d3ed3a7bdb9f331310"],["/img/bgc/wallhaven-p8d93e.jpg","27b85425c9bfdc3ede5101c3c54acec7"],["/img/bgc/wallhaven-xl15ml.png","c45cb99d0b00810f907bfb9a449019a9"],["/img/bgc/wallhaven-xlpx3z.jpg","af9114f7b84f0fe62e46c59e5587f678"],["/img/bgc/wallhaven-ymly3x.jpg","d72691420acd959ea9f506ae7e0afb14"],["/img/bgc/wallhaven-ymqq3k.jpg","8fb484f0e6d3f4091502234af96b79ea"],["/img/bgc/wallhaven-z8jk1g.png","a21c5ece7546f999cde38800d60b4284"],["/img/bgc/wallhaven-z8xqqo.jpg","171c931cf04af4fb5ddadf142ec379d1"],["/img/bgc/wallhaven-zm32go.jpg","8393ec224ca82aa2ad571a350885b361"],["/img/bgc/whitejotailang.png","3d61863dc9eb0847385a5e7052d117b0"],["/img/bgc/xinfengjotaro.png","a82cf6d179ebe79e4d776f9717765d77"],["/img/bgc/牛客网刷题record.jpg","4925e7cdba5881aab3cfa850d6d748dd"],["/img/css系列/css.jpg","d72691420acd959ea9f506ae7e0afb14"],["/img/css系列/flex布局.jpg","7a1e7eb07b07bd5cf287cfddd0e7d6bf"],["/img/css系列/landingpage落地页.jpg","a1ca74704f2181af8e9660952b7f208c"],["/img/empire.png","f93146076c2cd52c440843a1d473bffd"],["/img/favicon.png","9a3f70c3d35fa52f4c506aca79ad3ecc"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/head/boji.jpg","2f4a0ec31d68cbba1a4dd8feb79e62b1"],["/img/head/jojo.png","cdb4b455a1328b2293446e226fe8472d"],["/img/head/jotaro.jpg","38c37b3c624e637b366bb387e9bce0f5"],["/img/head/jotarofire.png","b54c5a3f45fb40f17d8ad2ebebc4cc82"],["/img/head/waku.png","1255a7b487f395761db866cb3b0ad25c"],["/img/head/waku22.png","6fe83c965b61147dd9282f502a1a35d0"],["/img/head/waku3.png","af308bb019a5b87ac6211ee5eaae5331"],["/img/joji.png","1b5797a3744888577f385739acce641d"],["/img/jojiimg.png","3991e6710f446a26c3640e04be9ba851"],["/img/joker.png","34cc2d991e42c8ff6bcaa94c4aeb997b"],["/img/js系列/TypeScriptChallenges.jpg","a32e79f3af48a723f7199e74a6b6e521"],["/img/js系列/Vue3_Canvas实现动态登陆背景页面.jpg","ee110dcf925f9f50676d8d880721abe7"],["/img/js系列/js.jpg","9cb4292c3957074128fcaa5f21f49592"],["/img/js系列/js自检.jpg","8d1adbedeeeb63015d4a22e90d2e4fab"],["/img/js系列/jwt实战教程.jpg","ee3f0b932649dd593c8e43be734fb11a"],["/img/js系列/从0到1TypeScript.jpg","7fd4b8e3e7ef1e64042e15698d45c4fe"],["/img/js系列/代码之美JS篇.jpg","f67e9ad2350337f71eca46b876d5428c"],["/img/js系列/你所不知道的JavaScript①--数据类型及周边.jpg","58e12d21174ce3ce40f486ab614e148e"],["/img/js系列/你所不知道的JavaScript②--this及周边.jpg","5ea1037f8c9a4f45b22a212b751b3e2e"],["/img/js系列/你所不知道的JavaScript③--原型及周边.jpg","4ed0bca28bce5ee78b0d6e8758a0e243"],["/img/js系列/你所不知道的JavaScript④--异步任务与事件.jpg","5229551969b6721d1c5409efaa477137"],["/img/js系列/你所不知道的JavaScript⑤--垃圾回收与内存泄漏.jpg","ef757e74e061e1fa06fe0c24bc6c59c2"],["/img/js系列/你所不知道的JavaScript⑥--面向对象与模块化.jpg","040219388ffe1d9f7a60b3b2640b6ceb"],["/img/js系列/你所不知道的JavaScript总集篇.jpg","fc3a37e9e989f31e42f6c00f99431f75"],["/img/js系列/快速上手Mongoose.jpg","f339c04327ee2a3d089d196d085ee5a9"],["/img/js系列/正则.jpg","b43995a5f3429b3403d9b70874e4c09d"],["/img/killerqueen.gif","9f182907f87f5cbfbc03ee8e5504cc3b"],["/img/sjk.jpg","360f2a555d5e53805e1aae70c9583152"],["/img/standCharts.png","842236aac7ef690d5960784795424544"],["/img/standCharts2.png","48a7b669a21511b076116aba376342ca"],["/img/vue系列/LIS.jpg","fb63d6385012e5d35d82eabaa7b4da07"],["/img/vue系列/MileStone项目杂谈.jpg","864814cfec7090c7f7672288f6c5ea55"],["/img/vue系列/Pinia大菠萝入门与实践.jpg","e6d1c2907a54bcfbe6239e4ea3f82be4"],["/img/vue系列/Vuejs灵魂之问.jpg","6a3144b7e195301bb5c3c7e1e01828cf"],["/img/vue系列/Vue打包优化+可视化js体积.jpg","182ee55931ccb779d29fc74d34ef311d"],["/img/vue系列/Vue核心.jpg","a648e4912bee2736614bdf04ce5a3660"],["/img/vue系列/Vue组件化编程+Vuex.jpg","b0d5a15ea9a3b008f5c991cf18a19b8b"],["/img/vue系列/Vue静态资源.jpg","b7bb82e4ea50721ed42257418f1e91dc"],["/img/vue系列/component.jpg","7a591eff4c3a003191ce4951060f22ff"],["/img/vue系列/diff.jpg","b5baac643b2d3d3a5d2ecae67cad1807"],["/img/vue系列/footok项目杂谈.jpg","808029aaca4c11580c07a20264ea6a23"],["/img/vue系列/histroy模式vue项目部署到githubpage.jpg","ff4e9d385ef6986ecbb517545653bf61"],["/img/vue系列/mini总集.jpg","fb5ea0d07ef09950ed3a3ad142c73fd5"],["/img/vue系列/parse.jpg","384aa19b0fe7c3bb87f5136e88e4862a"],["/img/vue系列/patch.jpg","a5aa73a7ba9c88194d0720f4c0703f33"],["/img/vue系列/reactive.jpg","dd8faa33fd069d4569e607e9bfeec376"],["/img/vue系列/scheduler.jpg","8bf1a1a40f6c8d047631a554e39dd3b9"],["/img/vue系列/vnode.jpg","28059846aed3d0bc810b21df7e8d9dad"],["/img/vue系列/vue-router.jpg","fad083f4766950505240facd0eee048d"],["/img/vue系列/vue.jpg","0f50356c8b790c9150747c2e12a77dbe"],["/img/vue系列/vue3.jpg","82d50f5dd5f563b81f23b17d93b7a029"],["/img/vue系列/利用h函数编写组件.jpg","21ed353bda66251f2441753ef01a7357"],["/img/vue系列/深入浅出vuejs.jpg","68ccbe86c5af0a2bed1528ed0ab48e1b"],["/img/wallhaven-x8jl83.jpg","0141db506a6b4556789c4bb700132de4"],["/img/webpack系列/Mock封装与实操.jpg","ad148479585d88d74f9cbf673f315c3d"],["/img/webpack系列/Vite官方文档浓缩.jpg","c737026042f086019f1b2945dad4c148"],["/img/webpack系列/webpack.png","e538823bb9c2c1a8750efd9bf634a6b2"],["/img/webpack系列/webpack5实战指南.jpg","518a53fcd6b5e987ccc8f8f2945f6522"],["/img/webpack系列/前端工程化①打包器的资源处理.jpg","0ae3e67412235bd77aa6bb5b9b4d33f5"],["/img/webpack系列/前端工程化②打包体积优化.jpg","058f5f081e81f7b0c7d47b2566ec52c4"],["/img/webpack系列/前端工程化③Bundless基础设施建设.jpg","2acdd48c0cc319c870e570826522b879"],["/img/下载.png","8c081ca3fdd80d66d0ec62c12d242c0c"],["/img/前端进阶/Docker学习笔记.png","bfa637da3802ed3e420b9e1612c36640"],["/img/前端进阶/Mock封装与实操.jpg","74381a453acf24c182b5f4d2f456dd2d"],["/img/前端进阶/bgc.jpg","767fb429d216f1d9ab6df65572258080"],["/img/前端进阶/jest单元测试学习.png","f3624743afbe018a7959abae1048620e"],["/img/前端进阶/microapp微前端实践.jpg","6c04e46e3c9b5627028ce26f58361925"],["/img/前端进阶/npm发布前端工具库.png","093f27c21f327f83138547e71637522c"],["/img/前端进阶/技巧记录.png","215907cb3b845211ce1016df66a2304b"],["/img/吉良吉影.jpg","68cb01b6f0e01ba60a163ff7af0d12f7"],["/img/图层 1.png","d0d35e3b8b3e53ec54452a4d80f2563e"],["/img/基础系列/ajax.jpg","a078df41d2eb99cd8cfa1c5bbd278c9f"],["/img/基础系列/css.jpg","e9201166d1c5ed23dd40886cd5a05122"],["/img/基础系列/echarts.jpg","c6b72698453178260ec732ed447fac12"],["/img/基础系列/html.jpg","e8a2d084ec809ba3ae96bf0310c3f356"],["/img/基础系列/javaweb基础.jpg","b5ee06a3bfadd453f89a1f92fc5ec7f4"],["/img/基础系列/js基础.jpg","688fb7bce2a030dc5949f6475f0ec175"],["/img/基础系列/linux入门.jpg","30c4bed5581c132f716e17d64b2ab994"],["/img/基础系列/mysql入门.jpg","3d0cbf14bbf50a10cfa8330d3c91d70d"],["/img/基础系列/nodejs基础.jpg","ba81f3fb38d97af0187fef3b1c959fdd"],["/img/基础系列/基础.jpg","7184f74a27f009f7510de06e2db5e9ce"],["/img/基础系列/浅谈ES6-11.jpg","c59cade5923eae9171f6bf01d8b35b07"],["/img/基础系列/浅谈Jquery.jpg","3dfd620955e9f6ec7f460b99d36e86e2"],["/img/工程化系列/TanStack Query 请求状态管理.jpg","568517056bb19df8c9d7e341f53e775c"],["/img/工程化系列/TanStack Table 的表格状态管理.jpg","5f258c763015caaad8bd4a16be9414ac"],["/img/工程化系列/vee-validate 的表单状态管理.jpg","82cf7c189bf9392ba6c15be72a62ef0e"],["/img/工程化系列/基于CASL的权限管理方案.jpg","e3fde376106c3bd4fa06ae47627b897e"],["/img/日常系列/搬砖日记.jpg","90d1869276b09e4e0e89cf224ce76d4a"],["/img/日常系列/日常.jpg","43264ebdd62da3df884798f946caeb85"],["/img/日常系列/春招落幕暑期已至.jpg","4213c07b9669dd7eed38a017b0eebc2a"],["/img/日常系列/秋招面试杂谈.jpg","33d1eebbd64a7c87498910a657c16635"],["/img/浏览器系列/浏览器.jpg","03cc69a4f46cb1e709c024790a537979"],["/img/浏览器系列/浏览器性能指标.jpg","383402c1659f21ae13c22000c873f926"],["/img/算法系列/Algorithm算法日记.jpg","c814f49a91c1af9498dc830568b66df1"],["/img/算法系列/bt0.jpg","a714910f7f2f51b0ce5d92d7419c3c73"],["/img/算法系列/bt1.jpg","4b6394bf5a8c0dd10630be97533b5f03"],["/img/算法系列/bt2.jpg","e37071c2cfd9c61e71284443e73c0b0a"],["/img/算法系列/bt3.jpg","2de04fb313dd38ec19d175f43ca645bd"],["/img/算法系列/bt4.jpg","eccfcb95ffa2961c599a8929d51c1ee0"],["/img/算法系列/bt5.jpg","37fd6d2977b7c2c1957cbf6b915d761c"],["/img/算法系列/bt6.jpg","2bed02b1d24dad73d243a92c32ec15d1"],["/img/算法系列/bt7.jpg","1f2d83925c94e2bd371d032d2c780b8b"],["/img/算法系列/bt8.jpg","65dab81aace586aad2a490f796b1f1aa"],["/img/算法系列/codetop100.jpg","af2af58eb7389758c4ec2b33bb6a9652"],["/img/算法系列/算法.jpg","f7ce08fa54554e6ea0f33284e4932ebc"],["/img/算法系列/融会贯通八大排序.jpg","6ff2ac6616e2fc07dfe8bf6d0f88cca0"],["/img/网络系列/CDN内容分发网络.jpg","9fab3a20652f9cb160ed9491102e1ab9"],["/img/网络系列/CSRF跨站点请求伪造.jpg","985f2d1ebad297b1d3ae4f66c3fdbc80"],["/img/网络系列/DNS域名系统.jpg","04a7db8f68daa9c545fd91f52e6fe589"],["/img/网络系列/HTTP1.0-3.0打怪升级.jpg","d25d513b2653de55aa036413271f38ee"],["/img/网络系列/HTTP灵魂之问.jpg","16d2885008efaaac3afbe09f0311f2d5"],["/img/网络系列/XSS跨站脚本攻击.jpg","4d361901c4c585c5859d84cb62388311"],["/img/网络系列/landingpage落地页.jpg","46548b66920a4f478aeb4c8e4d928151"],["/img/网络系列/tcp粘包拆包.jpg","aa39ebb8791e5391bdd4871b40778c38"],["/img/网络系列/浅谈TCP_UDP.jpg","18d7da90125db2a1590387ea90536726"],["/img/网络系列/网络.jpg","e28b5bb63656ff956631f68e498a9a24"],["/img/面试系列/三道题入门async和await.jpg","79102c0a4eae6a9fafcf3620df8da962"],["/img/面试系列/从浏览器地址栏输入url到显示页面的步骤.jpg","551a0a6ac542781f4077c2fe064d4c87"],["/img/面试系列/八种方法掌握数组去重.jpg","d9b7a3d7d0dcd5ebaf2199b63cef3a43"],["/img/面试系列/八股.jpg","3dc4ec49816bd763d0c4cfe61a29a99d"],["/img/面试系列/前端登陆指南.jpg","bf8d0e64e166a3bb94c83b7a2810c6dd"],["/img/面试系列/手撕万物js篇.jpg","e98065be31e11fbf9f561079a44f21af"],["/img/面试系列/每日一面快乐无限.jpg","42a8d301ba1878c0eef11e5a9eda25f8"],["/img/面试系列/牛客网刷题record.jpg","b03550166db26459d06fba580b0f2626"],["/img/面试系列/计算机网络不完全指南.jpg","e384ec0fefe86454751f60484ffb5519"],["/img/面试系列/面试.jpg","95f4692dc4396aef2d73a47adfa5e38d"],["/img/魔改系列/Animation主页动画处理.jpg","38d22d51f19863165dc407f561f89518"],["/img/魔改系列/Aplayer设置与优化.jpg","99a8b8bdec684008090e86e51fc6c2a4"],["/img/魔改系列/Butterfly魔改合集.jpg","032ec1df7721d17186c121e24d9fd144"],["/img/魔改系列/Cyberpunk配色魔改.jpg","893dab33728496e1a28a18809c140d56"],["/img/魔改系列/Hexo搭建+Github.jpg","fc82a58d7e5960691ac5942268336ad6"],["/img/魔改系列/JOJO石之海信封魔改.jpg","35ac13b125e056130c58d31b30ec2a91"],["/img/魔改系列/PicoGo图床.jpg","90aa107dbd8b01282bc2f7af5ce09092"],["/img/魔改系列/RGB头像魔改.jpg","559d97f8d7c85dc413beec4257c90d37"],["/img/魔改系列/替身面板生成器.jpg","1d6974d09a5bc3b55aee26647c6436ad"],["/img/魔改系列/魔改.jpg","0b1b2ff5b44a7c7fd487aaee3ec96095"],["/index.html","213b448ea8909a1a79cc0c2629c4c9cc"],["/js/addele.js","94536e349616a11f5cd6008913459d6c"],["/js/addnodestory.js","d5cddd7fe34e38e0782ff0fa2e477e2c"],["/js/collection.js","3c008c6c91d7adbdc49c77a67c9fa008"],["/js/eve.js","cbadadeff4a46fe1ce17d953908df467"],["/js/fadeIn.js","f4ddb49cb2efe27b756f423aec60a279"],["/js/jljy.js","f3d21b134ccc9d0dfdbd610a4ca93d66"],["/js/main.js","240e062def7897dd4c03a12bf07fdc65"],["/js/pwanewdir.js","08ac73a973855be130adaf469df1de8c"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/js/wow.min.js","4b253cabaafa86647183695c4c4365e7"],["/lib/Meting.min.js","7b5e05378aa5c4dbdccbe9a34cf30adb"],["/link/index.html","2acbe7045f755cb7c7ec54fc480fddbe"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","6d9b31af84be07871c628328d4162048"],["/live2d-widget/demo/demo.html","ddabed04896079696623255ca934c5de"],["/live2d-widget/demo/login.html","69b5f251f312135cbb5dd1b9ff59b7d8"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","0a4a7474046ce58dde9d78670e7514c4"],["/messageboard/index.html","e8826f276584eb8970e50bf9a1aca8e6"],["/page/10/index.html","e5235c8c7b25e94b84f44f5fced4962e"],["/page/11/index.html","1ed03e3f3a434ad3757ebd7f9038878a"],["/page/2/index.html","61f2a6384b8db0858156e2e6ca48b8f5"],["/page/3/index.html","2feeac0d85422a8c1959ee637f85b356"],["/page/4/index.html","85bc5c333d61bf355d15409884898a03"],["/page/5/index.html","2bd87ba0516dcbae9066527bd671d728"],["/page/6/index.html","588297da6c7b81316d538e9d6358fa57"],["/page/7/index.html","b012c42a3e707f7b988d17bddc9c43d4"],["/page/8/index.html","3ba768fca37f537d38c5ca780ccc2676"],["/page/9/index.html","22d56bfd7ec5e5bbc2ffebc87ddd9870"],["/posts/101229148/index.html","6126f5a3653d73b93db4bb6fef788d08"],["/posts/1033180007/index.html","dca6524a622c3d2e4bee91402ee2fbbd"],["/posts/1034828441/index.html","35e370bb53606fb3bb86b2337fc6bf21"],["/posts/1041482613/index.html","77b2241097c12707ca9acd90e2ed5621"],["/posts/1060178397/index.html","01042a278cb55abe557b9b8e42b206ac"],["/posts/1131280526/index.html","ff47cfd4cbb22374823baac60797af82"],["/posts/1144587061/index.html","cd128c44ebd06f03391d708290c96101"],["/posts/1161612098/index.html","36c63bbcd94c02beb4b6ffb422834c3e"],["/posts/1168983266/index.html","c9fea28b261256c68fd7ddf0f227de1c"],["/posts/1222301607/index.html","f335d70dd6d85da9cf09fa97dd5d95ed"],["/posts/1276934816/index.html","145c48b6c4d67693c38107296365503b"],["/posts/1282894956/index.html","f63a85724795eaec66d34d8be8a5ac27"],["/posts/1284303576/index.html","463ec5959a3ae1e65c6f1a918e36c8d4"],["/posts/1295992950/index.html","7c3c5922a7ecf0105dc5e681513b3d36"],["/posts/1323151960/index.html","ab0bd2620edbcddac59efcfc344596bc"],["/posts/1333180961/index.html","6cab906087078d0c483dd9d25b1efed1"],["/posts/1378896606/index.html","b17f4cda51fb2137f84c6f62043b94ba"],["/posts/1410341477/index.html","3d0db5c75bfe1c301d8308d37c31970e"],["/posts/1410341478/index.html","3779d4ae9a6bf32b2579d6e642f9f4d4"],["/posts/1435485109/index.html","1cebb2d4fac3b24f42d4d9ca1743475d"],["/posts/1513600459/index.html","385ab64340df4abea36e0d85d5d299c8"],["/posts/1572391089/index.html","c6acaa24070e5053db167964cbbea5d9"],["/posts/1583217180/index.html","e7b945a44b51bafc00856a3ffc9be0e9"],["/posts/1652193583/index.html","827994306d5608f5b92e423b0ac96813"],["/posts/1703341700/index.html","1293b4df6c951496497b547146c3aaec"],["/posts/172401470/index.html","a348b678937e950ac612f2bc0608f050"],["/posts/1805418661/index.html","f1ea49efafdca998700cd65176ac2977"],["/posts/1936792829/index.html","febfd6458b2ff2aae03cda7b1c73ac6b"],["/posts/1946841451/index.html","51311683eabde05e85b5687dfd76607f"],["/posts/200511804/index.html","4c30b229ad167b6869928659c200a6b3"],["/posts/2008259094/index.html","ceb545171f011d611424f871edeaf87d"],["/posts/20231015115155/index.html","7c272190c575f11ece405c64aeb54546"],["/posts/20240531115155/index.html","d20d07834e587c2ea1e0281d6d40822e"],["/posts/2046694271/index.html","fb16a0a6df063e280d0b960788f83a44"],["/posts/2062480448/index.html","cc3e791bab7301d2a0bc3d757c0be172"],["/posts/2090815300/index.html","f6a54ef012e0bef4e08cb0de373b59fa"],["/posts/2097459314/index.html","b65a7d57618f11d80f09017183002fef"],["/posts/2151465192/index.html","d9421b1d703f9a11fb59e27a77c9c26d"],["/posts/2161165336/index.html","9ff713cde9477bd53cf7881b6a95ab31"],["/posts/2402725415/index.html","bdfeb2a54c75b44b4bbaa247bf73c63a"],["/posts/2435599292/index.html","234e620ab341beef2f107e8f81c15a0c"],["/posts/2458362678/index.html","5e264ed1f5b2efab43c062d0aeae14ae"],["/posts/2475189015/index.html","c83c0e59e07cce1665bc36e454373233"],["/posts/252205597/index.html","d7990fe075368d822640f76cb072e3e8"],["/posts/2576354353/index.html","d5f2381e89873263526b20ad6a32e4e2"],["/posts/2582393250/index.html","40cefb9873396402d3caec3ab01ed9db"],["/posts/2593223670/index.html","622011f011ee01063adc8f3e3e85ab0f"],["/posts/2732070170/index.html","731769d9321e79c77661e5b352652195"],["/posts/2778725059/index.html","31fa47d87eb14d148e5f67345e4da299"],["/posts/2797606246/index.html","69f7b962c78ebd4571ff23a9a579bdab"],["/posts/2881010164/index.html","1efbe810be8fd401847a200641256a62"],["/posts/2906490375/index.html","cd63bb43aab3ea4987d90f7b4b63e2ef"],["/posts/2961638573/index.html","52a3360ba2a40c87ff0b1900621a2fe3"],["/posts/2976841894/index.html","0e779b71c9baf7116a19f47045044a50"],["/posts/2992649876/index.html","1648d42155e268225b78a853335b84bb"],["/posts/3034349472/index.html","03b5a24242f0d583bf70aa8574c348dd"],["/posts/3074605191/index.html","807b45f69e7a6f76039ea0c48dc837d4"],["/posts/308272463/index.html","5886290e60e43c7d7030ce951b6e80c9"],["/posts/3090245434/index.html","1b2e018b4e6a9e2617e6db335a64b2d4"],["/posts/3103992604/index.html","1854bf4b3603c7565b990b52d4d3c15c"],["/posts/3106196216/index.html","6ab0e08d8c475ce9de97c64ffac5cfaa"],["/posts/3179434621/index.html","536fd127cca220b9fbe4714cbe6c6d79"],["/posts/3250811507/index.html","dd40e56f42f926071f007e2cdbe4e56f"],["/posts/3318597918/index.html","ba2fd519446a4a7b79858612d8a55415"],["/posts/3350941666/index.html","c2b9cd426e2e206a9035e0095d43c35f"],["/posts/3355969119/index.html","6a2a16ed6d7833315ae5bb2cfc800edd"],["/posts/3383846748/index.html","502ac7a70dbc340fd1625119ad9b228e"],["/posts/3440987103/index.html","1282272826899d708b69dd9c355c2174"],["/posts/3451170570/index.html","8c3209c628a4b65f884cc2ccbe6f77cf"],["/posts/347129926/index.html","faefe4d0a49f6e47bbea0eb56b41d8ec"],["/posts/3500150157/index.html","d0f957e0adce51d8d8157aa974ffd0c2"],["/posts/351158764/index.html","9a6bd063253280b5f6dda22588c9b76c"],["/posts/3541433463/index.html","2f9309ed586fea8ef5f5cd0da03695d9"],["/posts/3551608196/index.html","dc190cff1afcc15c21363087724ac0b1"],["/posts/3583084017/index.html","70f6b247c8991fa76f4839482c2a5674"],["/posts/3679159268/index.html","5370a35a269d9ff9c7a47b4cf5a3f421"],["/posts/3689993699/index.html","3846b58a52c1d9c2eed6db0ef13f56da"],["/posts/3693633031/index.html","8e0d80f4022e2c85d6d6742589682bf0"],["/posts/369987328/index.html","1dd2a5737ff4be5940271c9c41e2f032"],["/posts/3737568820/index.html","034c00e70f4c8327c0e4bf294033341f"],["/posts/3894586884/index.html","17f93262f37cdfbd3563659c8fc4706e"],["/posts/3906343608/index.html","5edf9b3bb3f99dfc93e8433f383dd866"],["/posts/3924507216/index.html","11e550adef8fa0b53f9cb04fbb52f989"],["/posts/3931945421/index.html","b04a7e5213e92e0f9a930cd8240c1edf"],["/posts/394001834/index.html","280232459747018e6138402f87068bd7"],["/posts/394596529/index.html","a341602e1d0a65f87f3548a2febc49ad"],["/posts/4033900294/index.html","49c3e17f0a8e2499582cfcc9c8a46220"],["/posts/4154491119/index.html","775654f53728ed0ad663237c2eee6261"],["/posts/4161554500/index.html","13585c2abf110df4eb44ae37d96a1f9a"],["/posts/4172318439/index.html","86fd4fe9b5fa8b917c0c4aed89e74c8a"],["/posts/447422923/index.html","bcf8e8f108ea1f5c1ded9be83852fe83"],["/posts/44742292888/index.html","8dc8e1c965dc24c145be1f3b2d2d8987"],["/posts/453733915/index.html","96748c900e6ac0ee508e0de709e199b3"],["/posts/559196830/index.html","73803a2f4d26b9276010bf683d4daab0"],["/posts/606001916/index.html","ae227512dc03d9a60ce9c675b8757165"],["/posts/678017232/index.html","350df9fbe08b5c71579e157f064098cf"],["/posts/686027467/index.html","8f47ca3267fc40ab0e25ecba241485d7"],["/posts/719712725/index.html","0c4520016d902049461651f36eedda25"],["/posts/732690854/index.html","33064a6d5d6443aca4ff21f8d3269148"],["/posts/811989321/index.html","00eb8a16ecfeb6d71bca2e9fd0c20c6d"],["/posts/849555402/index.html","b7192c322526bfa617b1c7e48c7531af"],["/posts/961371178/index.html","f9dd2f4bbe7c6a64a5fd3825db387c0e"],["/posts/96411472/index.html","edbf068650a813e53de1e0731dcbbd3f"],["/posts/972193328/index.html","c8305a20cf9c9bd715c57b2d0a951f53"],["/posts/977460013/index.html","da81674b1da3ba0d5bae03c3b35bd520"],["/sitemap.xml","9ab441059e84570022ee83ed140bc34d"],["/sw-register.js","9dc1a73eea8b153e38a3067fcd03b37f"],["/tags/Ajax/index.html","45c59a28e3b54b4147dfeed9b955f0eb"],["/tags/Echarts/index.html","6b405e8a1c7fbcc9f18123866aff6f42"],["/tags/GitHub/index.html","a47d00f1931c49bef200f342598d60ed"],["/tags/HTML/index.html","59596eef7ba0048e992bf843699360d0"],["/tags/Jquery/index.html","ae06799d3d743baedca2f9b983726951"],["/tags/Linux/index.html","56375f41b74a59e0ba46d4412a6bed34"],["/tags/Mock/index.html","983ef33e8c9096c8109a32f13fd17776"],["/tags/TanStack-Query/index.html","3cd0994f2e7f6335b2d4b013dd96d8d2"],["/tags/Vue/index.html","27addab0c5c87c4954138192a5a476c6"],["/tags/Vue/page/2/index.html","f99fcddde8589a24d5672718fd4f2761"],["/tags/Vue/page/3/index.html","2bb423c0bf3fcaeb651a38b33cc4abaa"],["/tags/Webpack/index.html","8ce65e12b713e6fd0a0e2789e2c0c984"],["/tags/casl/index.html","34f291de8c60ff8ec19c0e97be6747b7"],["/tags/css/index.html","95c409a2ac05f8a4d2c6e380c9492cba"],["/tags/docker/index.html","e0db4c890d4c78f4c5a943fbff0f806d"],["/tags/es6/index.html","d62ff3dcdacd9f1f4a1d4328f5407fdd"],["/tags/hexo/index.html","74af95febccb9998db02819f324e55e4"],["/tags/http/index.html","6f7fcc54d63ca9d4889118822fafd8bb"],["/tags/index.html","7aaca74f5b47c010a4a7497c0fde9f06"],["/tags/javascript/index.html","90f2f347141fbc604d524ff9b503a181"],["/tags/javaweb/index.html","a034429a2533b3870ba94973eaad8dd2"],["/tags/js/index.html","3884bdd60b2f9b6b18ccb871a7751ef4"],["/tags/js/page/2/index.html","e98fe78b4a188dfe05f0f8c69e67eb40"],["/tags/microapp/index.html","d565c2f719906d2297f56e7f84f9bb7d"],["/tags/mongodb/index.html","693edbc60ae6fe0936c1c6ce996a1f86"],["/tags/mysql/index.html","b2b29531969084d5e54d382609404398"],["/tags/nodejs/index.html","32d19ef086c2178ce40507f8278c0f0b"],["/tags/nosql/index.html","3d9f590ff18122cb740f2d17bcee6f52"],["/tags/npm/index.html","06f5a575c250d06500aba07ed41ee837"],["/tags/ts/index.html","7b67fcfd6c9b19c272d884ab4266a934"],["/tags/vee-validate/index.html","b4ebabe4c54e610cee82811f331213d3"],["/tags/zod/index.html","1dcfee0872c3ef1987df1fbe01792cf1"],["/tags/前端/index.html","9fc886e5cdd698cd50959f6eaa85b807"],["/tags/前端/page/2/index.html","355d66bb2966db24e7d91cbf419ff491"],["/tags/前端/page/3/index.html","32d6fd0aec20a17ef2e7d21fb8c8b8fb"],["/tags/前端/page/4/index.html","8ae73a1f7a712d3ebe879b9d28c82877"],["/tags/前端/page/5/index.html","d8078f2dd218e310544e2f6738a4a903"],["/tags/单元测试/index.html","467cf858b1c66db31b941529ea2ce0fd"],["/tags/工具/index.html","7d24f95f40090fc7316941e3d3caa75e"],["/tags/日常/index.html","85d6fff8bfd21579910ab4dfc85affc9"],["/tags/浏览器/index.html","35fa84b24f0b2077f3b5365235c167c9"],["/tags/算法/index.html","2c8802b89201a2eab459b9165c681f0b"],["/tags/网络/index.html","8bfe2a3bca11ad71a7bace8503283397"],["/tags/网络安全/index.html","3a642af4eb7e03f5f79581ffe27cf02b"],["/tags/计算机网络/index.html","520bf8e6a34ebbadd3d81d5941987cc0"],["/tags/设计/index.html","b585f54ca014dc509c0c9edead4347c1"],["/tags/面试/index.html","cec8747797927fed020fe28189d384cc"],["/tags/面试/page/2/index.html","aeba33b2a51497b57d60cac161e4a42e"],["/tags/魔改/index.html","809f6ed00051621ea0d44797962652f8"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});





/* eslint-enable */
