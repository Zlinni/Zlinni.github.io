/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","920c879554f8bd027d0dd8bb3d4ab635"],["/about/index.html","3a91064eac90f80c0badc60ce3db1d21"],["/archives/2021/11/index.html","0cf1bbc8ef9949604e71d95d9d110e33"],["/archives/2021/12/index.html","7d714ae9c66bd0ddee4764530f78ca48"],["/archives/2021/index.html","790c51db8ba731433b10f80b34399c74"],["/archives/2021/page/2/index.html","9e8ecef0fb433d675e761373f5eb794f"],["/archives/2022/01/index.html","eb199e6c6985c8ac833ca95fa91c36bf"],["/archives/2022/01/page/2/index.html","6c4b6d7f1fd8913c81feed2d4cce3c2d"],["/archives/2022/02/index.html","e6cb8c4556c9a06244ed962ee14a41e9"],["/archives/2022/03/index.html","a4b7134bf59cae1f9b627236d88cf290"],["/archives/2022/04/index.html","9e872e5d6f629a463f58f8c335c6fd19"],["/archives/2022/04/page/2/index.html","cc7f127abdb415557563ce76174edde9"],["/archives/2022/04/page/3/index.html","40cbc26f8325270844285614e3651e0a"],["/archives/2022/05/index.html","8308b5acdc9f6e527b5cd36282a1f9ed"],["/archives/2022/05/page/2/index.html","59d4982563ea841b8d9da3a7e440cead"],["/archives/2022/06/index.html","16181ec1762739f92d431df6f6832434"],["/archives/2022/07/index.html","8e8cb8639013182016649babac8b912b"],["/archives/2022/08/index.html","2bd8497495dd6c75f859bfe42a06d761"],["/archives/2022/09/index.html","81c379a05a07bda372e95af71061bf7d"],["/archives/2022/index.html","d8d3c739b4d65e4b3052ab4bcdcec20e"],["/archives/2022/page/2/index.html","c617bd4b521198787e5713bbb9404183"],["/archives/2022/page/3/index.html","fcea7594bb978d79f9fe6e44f4930b56"],["/archives/2022/page/4/index.html","a340f675fdfb8801f38c7190a69b5f0d"],["/archives/2022/page/5/index.html","967482a8c249ffa3347c7dfc211498f0"],["/archives/2022/page/6/index.html","39eeb78c3ff4befc435fdd80db94db09"],["/archives/2022/page/7/index.html","e09f5e0f1f3c1d1abc4b9f3c5082a784"],["/archives/2022/page/8/index.html","71829939e2d8244ea4cf3a08b93000a9"],["/archives/2023/01/index.html","d52659c8fad19b0e3bebe35070259cb0"],["/archives/2023/02/index.html","5785e40e7ad157e21fb892827ee74e59"],["/archives/2023/03/index.html","98fe4af2aee7a880c068126d81c43c65"],["/archives/2023/10/index.html","30f18745b1b809c031672801a259f435"],["/archives/2023/index.html","69ab837f7152ee867feb7b25ad1559f9"],["/archives/2024/01/index.html","d48276deed042ca8bf7c2c2c2df5b465"],["/archives/2024/index.html","28746e476e5629e6b40157c5b8ad40b5"],["/archives/index.html","0a238a5ff813e6c8b0e4a276e198b2ef"],["/archives/page/10/index.html","f9df4d83a2e1d201cd86c0018642cbf9"],["/archives/page/11/index.html","27fbaedeead2cebbe70262a3f2873a81"],["/archives/page/2/index.html","d0b11e553db619f4fd2e3c1865fbfbb1"],["/archives/page/3/index.html","4666631ed9754fa4fb3e2f0dc68ac4a9"],["/archives/page/4/index.html","bf0ee7b68d25aabf15189578be65e74f"],["/archives/page/5/index.html","2c9c97036172fb262342221dbb0142eb"],["/archives/page/6/index.html","aa2e1ac3eb2b4df6577d45c775cd339a"],["/archives/page/7/index.html","2ed53ff1949411c6d92d4e81c84cdab0"],["/archives/page/8/index.html","2a2e5acfe1b7d5cc48c9b325dcfd89a5"],["/archives/page/9/index.html","23d67c8676418e4483c77f1d8755d453"],["/artitalk/index.html","e788fc1ac4246b4938b501e5cece23c2"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/atom.xml","a5f6a4499261796c1644edd9a852aa1f"],["/bb/index.html","0c4e17162ba408b10745d62b4e09d82c"],["/categories/CSS系列/index.html","660c8cdbf82c047950714738a2f3244f"],["/categories/JS系列/index.html","4682b7fe2e7930c41fedf2b99af836e2"],["/categories/JS系列/page/2/index.html","1ab836982eeaaa2a3636dcf5caa3b1f3"],["/categories/Vue系列/index.html","d6befea37b9dfb5790dd0b8a940e16f0"],["/categories/Vue系列/page/2/index.html","9470eb9c7c9cc141dad09c5b711b3cb4"],["/categories/Vue系列/page/3/index.html","640b88f2b4842c006d006cf11e0f7ffe"],["/categories/Webpack系列/index.html","9a85ca80870e44c543f993056bba03b7"],["/categories/index.html","9072358b860792245472cb58f1c06091"],["/categories/前端基础/index.html","9de107fd5db39be7f9ea81282f8774df"],["/categories/前端基础/page/2/index.html","e9464a6a82e33e33b613b87ce031e5cf"],["/categories/前端进阶/index.html","54f4124f1942c918cd22162f39a7d09e"],["/categories/工程化系列/index.html","fd7abc9e0eab0ca29c5ea738ab8bcf9b"],["/categories/日常杂谈/index.html","a1d4484d05911d7728fee1a11cd5a9c5"],["/categories/浏览器系列/index.html","3e0fe97725b52913ad9bdacbee457ce1"],["/categories/算法指南/Binary-Tree/index.html","ea2655d6555cdc763da0ae593566d670"],["/categories/算法指南/index.html","73a18334465c3e0405c78a52d8a27b5f"],["/categories/算法指南/page/2/index.html","aedc46f0a47981f7d42ae60489b8d1d3"],["/categories/网络系列/index.html","a3e924733c69f3db1be821f001d87407"],["/categories/面试指南/index.html","b252a931b97fc95537429f8408993abe"],["/categories/魔改系列/index.html","7f654000316f5bed9c5a3c55e1dedfb6"],["/css/animate.min.css","55009d64191e6f9e712a841773ee6611"],["/css/aplayer.css","ddcbd79780067c3941f243a7bebdd559"],["/css/bgc.css","af61378e9e8a5b159cd5d9e729b88a4f"],["/css/custom.css","ba55f423a7cb6d329a503a799ca66f34"],["/css/index.css","6a0a3befce44551923752d0d5632af10"],["/css/neonlight.css","da78e969661c4d6e9f4c1213eba8b8d6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/157b9e6bd3841296e9df46651f8bec6-removebg-preview.png","bb308ab2ed4cf5731f1d0d15a7f9030d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/4444.png","65f700e782700cb3dfd7af0db59ca2ca"],["/img/9050f3deb48f8c54cbb518ec34292df5e1fe7f94.png","c743ccd196007aeb31f107b4b493e6b5"],["/img/React系列/react.png","a0c6e00a32c0c09f7767d22e1174a532"],["/img/React系列/react入门与实践.jpg","bec260ee5125459b10146c1ffc40fa49"],["/img/aaa.jpg","6a5a7844633c5bb81b35b0a914d35547"],["/img/afternew.png","5d5fb374e7d442f980ffc785fecbea25"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/beforenew.png","69f79b27b5abcf1d4b8cf4be3559db39"],["/img/bgc.jpg","1b811783648f9ef2352ada176a7c33cf"],["/img/bgc/1.png","4586c5fa0183b05b7452cb5373c0c60d"],["/img/bgc/2.png","a7c142f1bc2ab6a76e8187c2272cae1e"],["/img/bgc/3.png","087631d84d82550e4292baf6653e0bcf"],["/img/bgc/4.png","7826c94c76e084de3df4cc54055683b2"],["/img/bgc/5.png","3716efdaf9a0d6cdf08576e5239e2e0c"],["/img/bgc/MileStone项目杂谈.jpg","5cf842d5df8a84981ecc60bc446e862a"],["/img/bgc/after.png","9fabcb0ed02d2c28a8dd76a9fb7a5bcf"],["/img/bgc/ajax.jpg","f058544f8a1d9565d0fcbba2beeb77b6"],["/img/bgc/before.png","d42e0836dc7aeb5c6ac3036047d5f1d9"],["/img/bgc/bgc.jpg","d3823f30edf3b54a4dda8968c050d9fb"],["/img/bgc/code2.jpg","f6ef52f88effeb006200656835768019"],["/img/bgc/css.png","6500e8c6985e7e7cff88d28d7f557aa4"],["/img/bgc/cyberpunk.jpg","72b2ed74a64f89915c5504a7905456b8"],["/img/bgc/default.jpg","d47700fa220cbda3101d7d51137c3338"],["/img/bgc/echarts.jpg","ca9cff91ec072fde7477863a1861406a"],["/img/bgc/even.jpg","d29e7de6f6eec69bfe754aa9838785cf"],["/img/bgc/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/bgc/gio.png","9c5e50718601d3774f3b33d09af388f8"],["/img/bgc/html.jpg","f77f736241eae0e090eb336a50918a74"],["/img/bgc/index.jpg","b8c3debd17dc84991778826d8bcddf40"],["/img/bgc/javaweb.png","90e836a17db8d912128bb829760dd4bf"],["/img/bgc/jojologo-removebg-preview.png","30822d43dc3df2211c9ee69e17000feb"],["/img/bgc/jojologo.jpg","068874ae20beffb79fedacb43cc85fd9"],["/img/bgc/jojologo3.jpg","9bdc7f6dde78a90a8925aba6bfe4199e"],["/img/bgc/jolin.png","90bd8c8e1b3773ba73bd0558a2f287c7"],["/img/bgc/jolinlogo.png","97a9083e5a819fef92c7c35fd009d2e6"],["/img/bgc/jquery.jpg","558f23b412317052dec339ffa779abed"],["/img/bgc/jquery.png","4b5c2de1fa3c9e03af2ca364c1c04d12"],["/img/bgc/landingpage.jpg","ab88217fb76d9e40c573c2fc3cf24a45"],["/img/bgc/logo2.png","98c8dec7017d4bfb2640834b4182dd32"],["/img/bgc/meiriyimian.jpg","541d97c206eb47370fbe664fc13d59bb"],["/img/bgc/milestone.jpg","8f43613c730f4d2c970819c39ff54b29"],["/img/bgc/ms1.jpg","00c7088badb76fbef0bed92e9ddb4626"],["/img/bgc/neonlight.jpg","aa5ba11e9a7abf5622486e1c2aec0710"],["/img/bgc/neonlight1.jpg","3566a1e4cd2c598aa06723541ad98c32"],["/img/bgc/neonlight8.jpg","d29e7de6f6eec69bfe754aa9838785cf"],["/img/bgc/nodejs.jpg","b190f2f48b3fab7557ba2d631154e1fd"],["/img/bgc/odd.png","022ef01c84264cabd9b65bdf1310e363"],["/img/bgc/onepiece.jpg","63441a8c9e6a4a4e550dcfd404530b4f"],["/img/bgc/op2.png","9d5104b349c6158cfa6dfa538ac9c9a2"],["/img/bgc/picgo.jpg","7db7ea9485a1c89e88fc64dfa740fc65"],["/img/bgc/rgb.jpg","c005c879eda29330c0585adac2bd9596"],["/img/bgc/shuzuquchong.jpg","fbf2db16cd99b76ab50b01b6fc64be60"],["/img/bgc/sjk.jpg","8b2ded959ee7d10ff589a4a81a71863a"],["/img/bgc/standard.jpg","058bcd3e8ac10ab50b0b7bf89c9f4e9a"],["/img/bgc/ubuntu.jpg","e2d49e81d44b8f301fc19c9e01c36393"],["/img/bgc/vue.jpg","ebd691a3825d42e739ab1cf368a85cb9"],["/img/bgc/wallhaven-1kyv8g.jpg","378a6e569aca24abec148d5f1e682e67"],["/img/bgc/wallhaven-2kvmgx.jpg","e1daba962018ac96e469af51bbfa3c00"],["/img/bgc/wallhaven-39wq39.jpg","8d580decfec38587f2c4686104b6b79b"],["/img/bgc/wallhaven-3zwpz3.jpg","1339aac62b3107e83e99b9e29a1f6aa6"],["/img/bgc/wallhaven-4lzgkq.jpg","107a0a3e6a7ae4150b4c3ca6f9739617"],["/img/bgc/wallhaven-76m9z9.jpg","7e7928239f7251ec6f594dca854239b6"],["/img/bgc/wallhaven-83rdp2.jpg","99e2d160c974671cd86e06aba9f58bff"],["/img/bgc/wallhaven-962ogx.jpg","1d0757ba5b17159318d0b5ac3f5fede0"],["/img/bgc/wallhaven-e7vop8.jpg","f6296b43308523d3ed3a7bdb9f331310"],["/img/bgc/wallhaven-p8d93e.jpg","27b85425c9bfdc3ede5101c3c54acec7"],["/img/bgc/wallhaven-xl15ml.png","c45cb99d0b00810f907bfb9a449019a9"],["/img/bgc/wallhaven-xlpx3z.jpg","af9114f7b84f0fe62e46c59e5587f678"],["/img/bgc/wallhaven-ymly3x.jpg","d72691420acd959ea9f506ae7e0afb14"],["/img/bgc/wallhaven-ymqq3k.jpg","8fb484f0e6d3f4091502234af96b79ea"],["/img/bgc/wallhaven-z8jk1g.png","a21c5ece7546f999cde38800d60b4284"],["/img/bgc/wallhaven-z8xqqo.jpg","171c931cf04af4fb5ddadf142ec379d1"],["/img/bgc/wallhaven-zm32go.jpg","8393ec224ca82aa2ad571a350885b361"],["/img/bgc/whitejotailang.png","3d61863dc9eb0847385a5e7052d117b0"],["/img/bgc/xinfengjotaro.png","a82cf6d179ebe79e4d776f9717765d77"],["/img/bgc/牛客网刷题record.jpg","4925e7cdba5881aab3cfa850d6d748dd"],["/img/css系列/css.jpg","d72691420acd959ea9f506ae7e0afb14"],["/img/css系列/flex布局.jpg","7a1e7eb07b07bd5cf287cfddd0e7d6bf"],["/img/css系列/landingpage落地页.jpg","a1ca74704f2181af8e9660952b7f208c"],["/img/empire.png","f93146076c2cd52c440843a1d473bffd"],["/img/favicon.png","9a3f70c3d35fa52f4c506aca79ad3ecc"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/head/boji.jpg","2f4a0ec31d68cbba1a4dd8feb79e62b1"],["/img/head/jojo.png","cdb4b455a1328b2293446e226fe8472d"],["/img/head/jotaro.jpg","38c37b3c624e637b366bb387e9bce0f5"],["/img/head/jotarofire.png","b54c5a3f45fb40f17d8ad2ebebc4cc82"],["/img/head/waku.png","1255a7b487f395761db866cb3b0ad25c"],["/img/head/waku22.png","6fe83c965b61147dd9282f502a1a35d0"],["/img/head/waku3.png","af308bb019a5b87ac6211ee5eaae5331"],["/img/joji.png","1b5797a3744888577f385739acce641d"],["/img/jojiimg.png","3991e6710f446a26c3640e04be9ba851"],["/img/joker.png","34cc2d991e42c8ff6bcaa94c4aeb997b"],["/img/js系列/TypeScriptChallenges.jpg","a32e79f3af48a723f7199e74a6b6e521"],["/img/js系列/Vue3_Canvas实现动态登陆背景页面.jpg","ee110dcf925f9f50676d8d880721abe7"],["/img/js系列/js.jpg","9cb4292c3957074128fcaa5f21f49592"],["/img/js系列/js自检.jpg","8d1adbedeeeb63015d4a22e90d2e4fab"],["/img/js系列/jwt实战教程.jpg","ee3f0b932649dd593c8e43be734fb11a"],["/img/js系列/从0到1TypeScript.jpg","7fd4b8e3e7ef1e64042e15698d45c4fe"],["/img/js系列/代码之美JS篇.jpg","f67e9ad2350337f71eca46b876d5428c"],["/img/js系列/你所不知道的JavaScript①--数据类型及周边.jpg","58e12d21174ce3ce40f486ab614e148e"],["/img/js系列/你所不知道的JavaScript②--this及周边.jpg","5ea1037f8c9a4f45b22a212b751b3e2e"],["/img/js系列/你所不知道的JavaScript③--原型及周边.jpg","4ed0bca28bce5ee78b0d6e8758a0e243"],["/img/js系列/你所不知道的JavaScript④--异步任务与事件.jpg","5229551969b6721d1c5409efaa477137"],["/img/js系列/你所不知道的JavaScript⑤--垃圾回收与内存泄漏.jpg","ef757e74e061e1fa06fe0c24bc6c59c2"],["/img/js系列/你所不知道的JavaScript⑥--面向对象与模块化.jpg","040219388ffe1d9f7a60b3b2640b6ceb"],["/img/js系列/你所不知道的JavaScript总集篇.jpg","fc3a37e9e989f31e42f6c00f99431f75"],["/img/js系列/快速上手Mongoose.jpg","f339c04327ee2a3d089d196d085ee5a9"],["/img/js系列/正则.jpg","b43995a5f3429b3403d9b70874e4c09d"],["/img/killerqueen.gif","9f182907f87f5cbfbc03ee8e5504cc3b"],["/img/sjk.jpg","360f2a555d5e53805e1aae70c9583152"],["/img/standCharts.png","842236aac7ef690d5960784795424544"],["/img/standCharts2.png","48a7b669a21511b076116aba376342ca"],["/img/vue系列/LIS.jpg","fb63d6385012e5d35d82eabaa7b4da07"],["/img/vue系列/MileStone项目杂谈.jpg","864814cfec7090c7f7672288f6c5ea55"],["/img/vue系列/Pinia大菠萝入门与实践.jpg","e6d1c2907a54bcfbe6239e4ea3f82be4"],["/img/vue系列/Vuejs灵魂之问.jpg","6a3144b7e195301bb5c3c7e1e01828cf"],["/img/vue系列/Vue打包优化+可视化js体积.jpg","182ee55931ccb779d29fc74d34ef311d"],["/img/vue系列/Vue核心.jpg","a648e4912bee2736614bdf04ce5a3660"],["/img/vue系列/Vue组件化编程+Vuex.jpg","b0d5a15ea9a3b008f5c991cf18a19b8b"],["/img/vue系列/Vue静态资源.jpg","b7bb82e4ea50721ed42257418f1e91dc"],["/img/vue系列/component.jpg","7a591eff4c3a003191ce4951060f22ff"],["/img/vue系列/diff.jpg","b5baac643b2d3d3a5d2ecae67cad1807"],["/img/vue系列/footok项目杂谈.jpg","808029aaca4c11580c07a20264ea6a23"],["/img/vue系列/histroy模式vue项目部署到githubpage.jpg","ff4e9d385ef6986ecbb517545653bf61"],["/img/vue系列/mini总集.jpg","fb5ea0d07ef09950ed3a3ad142c73fd5"],["/img/vue系列/parse.jpg","384aa19b0fe7c3bb87f5136e88e4862a"],["/img/vue系列/patch.jpg","a5aa73a7ba9c88194d0720f4c0703f33"],["/img/vue系列/reactive.jpg","dd8faa33fd069d4569e607e9bfeec376"],["/img/vue系列/scheduler.jpg","8bf1a1a40f6c8d047631a554e39dd3b9"],["/img/vue系列/vnode.jpg","28059846aed3d0bc810b21df7e8d9dad"],["/img/vue系列/vue-router.jpg","fad083f4766950505240facd0eee048d"],["/img/vue系列/vue.jpg","0f50356c8b790c9150747c2e12a77dbe"],["/img/vue系列/vue3.jpg","82d50f5dd5f563b81f23b17d93b7a029"],["/img/vue系列/利用h函数编写组件.jpg","21ed353bda66251f2441753ef01a7357"],["/img/vue系列/深入浅出vuejs.jpg","68ccbe86c5af0a2bed1528ed0ab48e1b"],["/img/wallhaven-x8jl83.jpg","0141db506a6b4556789c4bb700132de4"],["/img/webpack系列/Mock封装与实操.jpg","ad148479585d88d74f9cbf673f315c3d"],["/img/webpack系列/Vite官方文档浓缩.jpg","c737026042f086019f1b2945dad4c148"],["/img/webpack系列/webpack.png","e538823bb9c2c1a8750efd9bf634a6b2"],["/img/webpack系列/webpack5实战指南.jpg","518a53fcd6b5e987ccc8f8f2945f6522"],["/img/webpack系列/前端工程化①打包器的资源处理.jpg","0ae3e67412235bd77aa6bb5b9b4d33f5"],["/img/webpack系列/前端工程化②打包体积优化.jpg","058f5f081e81f7b0c7d47b2566ec52c4"],["/img/webpack系列/前端工程化③Bundless基础设施建设.jpg","2acdd48c0cc319c870e570826522b879"],["/img/下载.png","8c081ca3fdd80d66d0ec62c12d242c0c"],["/img/前端进阶/Docker学习笔记.png","bfa637da3802ed3e420b9e1612c36640"],["/img/前端进阶/Mock封装与实操.jpg","74381a453acf24c182b5f4d2f456dd2d"],["/img/前端进阶/bgc.jpg","767fb429d216f1d9ab6df65572258080"],["/img/前端进阶/jest单元测试学习.png","f3624743afbe018a7959abae1048620e"],["/img/前端进阶/microapp微前端实践.jpg","6c04e46e3c9b5627028ce26f58361925"],["/img/前端进阶/npm发布前端工具库.png","093f27c21f327f83138547e71637522c"],["/img/前端进阶/技巧记录.png","215907cb3b845211ce1016df66a2304b"],["/img/吉良吉影.jpg","68cb01b6f0e01ba60a163ff7af0d12f7"],["/img/图层 1.png","d0d35e3b8b3e53ec54452a4d80f2563e"],["/img/基础系列/ajax.jpg","a078df41d2eb99cd8cfa1c5bbd278c9f"],["/img/基础系列/css.jpg","e9201166d1c5ed23dd40886cd5a05122"],["/img/基础系列/echarts.jpg","c6b72698453178260ec732ed447fac12"],["/img/基础系列/html.jpg","e8a2d084ec809ba3ae96bf0310c3f356"],["/img/基础系列/javaweb基础.jpg","b5ee06a3bfadd453f89a1f92fc5ec7f4"],["/img/基础系列/js基础.jpg","688fb7bce2a030dc5949f6475f0ec175"],["/img/基础系列/linux入门.jpg","30c4bed5581c132f716e17d64b2ab994"],["/img/基础系列/mysql入门.jpg","3d0cbf14bbf50a10cfa8330d3c91d70d"],["/img/基础系列/nodejs基础.jpg","ba81f3fb38d97af0187fef3b1c959fdd"],["/img/基础系列/基础.jpg","7184f74a27f009f7510de06e2db5e9ce"],["/img/基础系列/浅谈ES6-11.jpg","c59cade5923eae9171f6bf01d8b35b07"],["/img/基础系列/浅谈Jquery.jpg","3dfd620955e9f6ec7f460b99d36e86e2"],["/img/日常系列/搬砖日记.jpg","90d1869276b09e4e0e89cf224ce76d4a"],["/img/日常系列/日常.jpg","43264ebdd62da3df884798f946caeb85"],["/img/日常系列/春招落幕暑期已至.jpg","4213c07b9669dd7eed38a017b0eebc2a"],["/img/日常系列/秋招面试杂谈.jpg","33d1eebbd64a7c87498910a657c16635"],["/img/浏览器系列/浏览器.jpg","03cc69a4f46cb1e709c024790a537979"],["/img/浏览器系列/浏览器性能指标.jpg","383402c1659f21ae13c22000c873f926"],["/img/算法系列/Algorithm算法日记.jpg","c814f49a91c1af9498dc830568b66df1"],["/img/算法系列/bt0.jpg","a714910f7f2f51b0ce5d92d7419c3c73"],["/img/算法系列/bt1.jpg","4b6394bf5a8c0dd10630be97533b5f03"],["/img/算法系列/bt2.jpg","e37071c2cfd9c61e71284443e73c0b0a"],["/img/算法系列/bt3.jpg","2de04fb313dd38ec19d175f43ca645bd"],["/img/算法系列/bt4.jpg","eccfcb95ffa2961c599a8929d51c1ee0"],["/img/算法系列/bt5.jpg","37fd6d2977b7c2c1957cbf6b915d761c"],["/img/算法系列/bt6.jpg","2bed02b1d24dad73d243a92c32ec15d1"],["/img/算法系列/bt7.jpg","1f2d83925c94e2bd371d032d2c780b8b"],["/img/算法系列/bt8.jpg","65dab81aace586aad2a490f796b1f1aa"],["/img/算法系列/codetop100.jpg","af2af58eb7389758c4ec2b33bb6a9652"],["/img/算法系列/算法.jpg","f7ce08fa54554e6ea0f33284e4932ebc"],["/img/算法系列/融会贯通八大排序.jpg","6ff2ac6616e2fc07dfe8bf6d0f88cca0"],["/img/网络系列/CDN内容分发网络.jpg","9fab3a20652f9cb160ed9491102e1ab9"],["/img/网络系列/CSRF跨站点请求伪造.jpg","985f2d1ebad297b1d3ae4f66c3fdbc80"],["/img/网络系列/DNS域名系统.jpg","04a7db8f68daa9c545fd91f52e6fe589"],["/img/网络系列/HTTP1.0-3.0打怪升级.jpg","d25d513b2653de55aa036413271f38ee"],["/img/网络系列/HTTP灵魂之问.jpg","16d2885008efaaac3afbe09f0311f2d5"],["/img/网络系列/XSS跨站脚本攻击.jpg","4d361901c4c585c5859d84cb62388311"],["/img/网络系列/landingpage落地页.jpg","46548b66920a4f478aeb4c8e4d928151"],["/img/网络系列/tcp粘包拆包.jpg","aa39ebb8791e5391bdd4871b40778c38"],["/img/网络系列/浅谈TCP_UDP.jpg","18d7da90125db2a1590387ea90536726"],["/img/网络系列/网络.jpg","e28b5bb63656ff956631f68e498a9a24"],["/img/面试系列/三道题入门async和await.jpg","79102c0a4eae6a9fafcf3620df8da962"],["/img/面试系列/从浏览器地址栏输入url到显示页面的步骤.jpg","551a0a6ac542781f4077c2fe064d4c87"],["/img/面试系列/八种方法掌握数组去重.jpg","d9b7a3d7d0dcd5ebaf2199b63cef3a43"],["/img/面试系列/八股.jpg","3dc4ec49816bd763d0c4cfe61a29a99d"],["/img/面试系列/前端登陆指南.jpg","bf8d0e64e166a3bb94c83b7a2810c6dd"],["/img/面试系列/手撕万物js篇.jpg","e98065be31e11fbf9f561079a44f21af"],["/img/面试系列/每日一面快乐无限.jpg","42a8d301ba1878c0eef11e5a9eda25f8"],["/img/面试系列/牛客网刷题record.jpg","b03550166db26459d06fba580b0f2626"],["/img/面试系列/计算机网络不完全指南.jpg","e384ec0fefe86454751f60484ffb5519"],["/img/面试系列/面试.jpg","95f4692dc4396aef2d73a47adfa5e38d"],["/img/魔改系列/Animation主页动画处理.jpg","38d22d51f19863165dc407f561f89518"],["/img/魔改系列/Aplayer设置与优化.jpg","99a8b8bdec684008090e86e51fc6c2a4"],["/img/魔改系列/Butterfly魔改合集.jpg","032ec1df7721d17186c121e24d9fd144"],["/img/魔改系列/Cyberpunk配色魔改.jpg","893dab33728496e1a28a18809c140d56"],["/img/魔改系列/Hexo搭建+Github.jpg","fc82a58d7e5960691ac5942268336ad6"],["/img/魔改系列/JOJO石之海信封魔改.jpg","35ac13b125e056130c58d31b30ec2a91"],["/img/魔改系列/PicoGo图床.jpg","90aa107dbd8b01282bc2f7af5ce09092"],["/img/魔改系列/RGB头像魔改.jpg","559d97f8d7c85dc413beec4257c90d37"],["/img/魔改系列/替身面板生成器.jpg","1d6974d09a5bc3b55aee26647c6436ad"],["/img/魔改系列/魔改.jpg","0b1b2ff5b44a7c7fd487aaee3ec96095"],["/index.html","e55ad926f398818aee1657be265d1193"],["/js/addele.js","94536e349616a11f5cd6008913459d6c"],["/js/addnodestory.js","d5cddd7fe34e38e0782ff0fa2e477e2c"],["/js/collection.js","3c008c6c91d7adbdc49c77a67c9fa008"],["/js/eve.js","cbadadeff4a46fe1ce17d953908df467"],["/js/fadeIn.js","f4ddb49cb2efe27b756f423aec60a279"],["/js/jljy.js","f3d21b134ccc9d0dfdbd610a4ca93d66"],["/js/main.js","240e062def7897dd4c03a12bf07fdc65"],["/js/pwanewdir.js","08ac73a973855be130adaf469df1de8c"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/js/wow.min.js","4b253cabaafa86647183695c4c4365e7"],["/lib/Meting.min.js","7b5e05378aa5c4dbdccbe9a34cf30adb"],["/link/index.html","a3bc4eea13a60671dc9f05f19343fcb8"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","6d9b31af84be07871c628328d4162048"],["/live2d-widget/demo/demo.html","ddabed04896079696623255ca934c5de"],["/live2d-widget/demo/login.html","69b5f251f312135cbb5dd1b9ff59b7d8"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","0a4a7474046ce58dde9d78670e7514c4"],["/messageboard/index.html","2e6fc7a498279b97524e4a66a87c677d"],["/page/10/index.html","f10249f247f0fb84b2c9bb9297e755aa"],["/page/11/index.html","693168cdce963ee816100eb72a40171b"],["/page/2/index.html","a3dfc07a796c62fe6e709aa9996b3ba6"],["/page/3/index.html","bdcfd54ce911b36d4a0cdfb8df139520"],["/page/4/index.html","9de5a75ba0fdcbb78e7db5af459a2338"],["/page/5/index.html","37690ce13d9f2bbf3a2d97cdf542de9c"],["/page/6/index.html","280d23bf6bdc357684f5518da706ca7f"],["/page/7/index.html","3830740c6b743bd365c66a9973ddd59a"],["/page/8/index.html","6ffc0ac4f2824b1b63ecbdc4b7670b58"],["/page/9/index.html","44255071f34f98982536dcae153982e2"],["/posts/101229148/index.html","1eefdb824630219f85959d64e0e17da1"],["/posts/1033180007/index.html","ef5fe46a6d53384bd41b503bcd346932"],["/posts/1034828441/index.html","5abe1893b8e64f348e4e358ef71b4e56"],["/posts/1041482613/index.html","b7b999f1f1f05ba1dfd40e2b9ba1cd6b"],["/posts/1060178397/index.html","5be014dd80e150db6a817a6dc0bb2ae7"],["/posts/1131280526/index.html","a7d76785d082a75dc9ccbab011a89cb4"],["/posts/1144587061/index.html","c0ebb114e5073e98c0a61e0484ea1a23"],["/posts/1161612098/index.html","3aaad13ae2f0cd7b794cacacd7bb4da8"],["/posts/1168983266/index.html","eb77bb4f0a8bb36fe474d1b4e2278932"],["/posts/1222301607/index.html","248663f76c7be3adb25b694ad7fe19c0"],["/posts/1276934816/index.html","b57a0881af60a8621cc2250b1a05b000"],["/posts/1282894956/index.html","ee411684619d15f82c69f634eed4b3da"],["/posts/1284303576/index.html","4cbdf358aac4a07d39887cafa818ea4a"],["/posts/1295992950/index.html","0022798b16c634c6ac11a6f215da76f2"],["/posts/1323151960/index.html","d293334247c74b5d61888ad36567c06d"],["/posts/1333180961/index.html","3b153488b104962ecd165155f31a0833"],["/posts/1378896606/index.html","ab670063c0c10288f790459c0e3797d7"],["/posts/1410341477/index.html","efcc9198477bd89f6d2afeac052e320f"],["/posts/1410341478/index.html","c1b0848da09431fd95ffb7a47176471f"],["/posts/1435485109/index.html","34850381ed661494d7df35ec213263c3"],["/posts/1513600459/index.html","3cba9abd0f9354b118128d68c33adba8"],["/posts/1572391089/index.html","e6c5055c917f2d233c68ac61898c60ff"],["/posts/1583217180/index.html","d6369633260b88b5d4c2647646366f55"],["/posts/1652193583/index.html","3fa6ec81bb79c63808d9b210187e3c5a"],["/posts/1703341700/index.html","57b33ecf64a2fb17d743b714e60976f8"],["/posts/172401470/index.html","e9b484295ce72b1a924f0d4f95127ea7"],["/posts/1805418661/index.html","127aa02d105aaaa1770547aae342f465"],["/posts/1936792829/index.html","6c755de31a51f16e4693ad192b6141a1"],["/posts/1946841451/index.html","cac8e857c8d28d2015656c6aae561b84"],["/posts/200511804/index.html","9a84f0386740ec0c14d2fc4c8e074c94"],["/posts/2008259094/index.html","7de7b6a9ec2a5c86506afe56524c722d"],["/posts/20231015115155/index.html","26a87ec1ae6ceeada6c770049714864f"],["/posts/2046694271/index.html","167c44255ed680554a7760b52936c273"],["/posts/2062480448/index.html","f8e2ffc363ac61c18d7ca7740a406a09"],["/posts/2090815300/index.html","d6a6176e2c83cead613dffcd19c0b01f"],["/posts/2097459314/index.html","24f7aa6c8e238313b5a6b0ac1d49e911"],["/posts/2151465192/index.html","7819bf6f1708a94aa670f1f178292e40"],["/posts/2161165336/index.html","2f283b14332abeda3aaea0f4aafaefca"],["/posts/2402725415/index.html","63f90b7e48dc6f8f05813d557530fc20"],["/posts/2435599292/index.html","2359d8723bfc3c23ed5ada13a5f4da18"],["/posts/2458362678/index.html","87057c19b1137caa41b47fbe829dd96f"],["/posts/2475189015/index.html","9172894ff3980e03ae0788a93d732ca8"],["/posts/252205597/index.html","38f9f97ed1f1c20037567d1e7f15b950"],["/posts/2576354353/index.html","82f7d0bf519be0d466fee9972b040dda"],["/posts/2582393250/index.html","dadcd7120a08de1e2642d798458a013a"],["/posts/2593223670/index.html","c496ed0ca7847d0c23acd465db69f9fd"],["/posts/2732070170/index.html","97a524c4efefa1d30e275d30d342b087"],["/posts/2778725059/index.html","028d863de2523ce524bd7b930739a763"],["/posts/2797606246/index.html","ddc563b182c8c8be031e3b7873e49466"],["/posts/2881010164/index.html","424d5d57e1c5798f623968a834e333f6"],["/posts/2906490375/index.html","d768113e2d7b2fe84ea445c34d55fa99"],["/posts/2961638573/index.html","5cb69fcf83b66a4c4ee8f6873d15bd63"],["/posts/2976841894/index.html","cca8d25a3cab2e7c9918ca42dbde41a1"],["/posts/2992649876/index.html","df3b162fa973d1ef8f1341f94a060d3c"],["/posts/3034349472/index.html","afeed2b339a53be8a03492a3f0c4d0bb"],["/posts/3074605191/index.html","5226193c939ea1a74f9d3575897b86f2"],["/posts/308272463/index.html","61de398b6fd9163a90d573a6c8d3e29e"],["/posts/3090245434/index.html","36308ad878105192b6d42a655e83d1fc"],["/posts/3103992604/index.html","1b3fc401b32e03eb703761e5bd4957a7"],["/posts/3106196216/index.html","3a24901981d502f774579897c8739d7b"],["/posts/3179434621/index.html","756f7f84e1fe044b0d49d3695beee6c6"],["/posts/3250811507/index.html","80ee1663f16dd04d5643cc2eb55c6376"],["/posts/3318597918/index.html","3ae965f4ee875bd0edcc6a1e19b2ad91"],["/posts/3350941666/index.html","b93bd39f9bfc3a52c86cca79a520ed5a"],["/posts/3355969119/index.html","c3010320a688623f99e515441569fa5b"],["/posts/3383846748/index.html","bb371ea7d9ad4c0d3df8e8a5abf97f0f"],["/posts/3440987103/index.html","b02412a8a9e96822bd33c4639994a12b"],["/posts/3451170570/index.html","c3d6afe6f6dd406404448de50842138e"],["/posts/347129926/index.html","e6f967fc3b720b4b54a1dfd30b2609cd"],["/posts/3500150157/index.html","c5a4ce577c9991f585859d7b9c2a91a9"],["/posts/351158764/index.html","7433fb30a24f2ca140db3c513d8f5f0f"],["/posts/3541433463/index.html","d6bfa44453704d9c05205e39711371a4"],["/posts/3551608196/index.html","26c3c642a7b5dbf28424dd588016c9d0"],["/posts/3583084017/index.html","fd534e640dac862fd8292cea94f3f0e9"],["/posts/3679159268/index.html","181c7bc8776cebf554be0a3f2e8431f2"],["/posts/3689993699/index.html","dcc79cf2dde8fe8258eb4634bfd08cbb"],["/posts/3693633031/index.html","4d6fc6cfeb99e961377211e05facf921"],["/posts/369987328/index.html","3d9864fc5cb8d9c4a981d61307ae451d"],["/posts/3737568820/index.html","4ae0d876ae795923eb2411a7d83b4a78"],["/posts/3894586884/index.html","619f6c7b89a7b04b57e55980cecd23d0"],["/posts/3906343608/index.html","1ca768f0214042aebe324b5ba6dd519d"],["/posts/3924507216/index.html","bcf16a7002f0fa71476dffaf314184c0"],["/posts/3931945421/index.html","4b3eb3357642a7a793dbcd9445c3c0ed"],["/posts/394001834/index.html","b3b2724c7d525cd565e158479af40818"],["/posts/394596529/index.html","0930664b14f33616ccfcfdbccf153651"],["/posts/4033900294/index.html","9fb6c9ea674d7c1b3f17ee0bfcf53659"],["/posts/4154491119/index.html","e92b64c076a4ff3cf1d860553b477c6f"],["/posts/4161554500/index.html","0ee4e3abfe6038d2fb36dbebdc243f16"],["/posts/4172318439/index.html","46651251ad9e10447fec68311c6c961f"],["/posts/447422923/index.html","8ccd455b0889e9c4f51b82cbf1727686"],["/posts/44742292888/index.html","70eb5d0979af020b64323cb44f44538b"],["/posts/453733915/index.html","e5ed3110b133aa8a9b03dea5c20c199c"],["/posts/559196830/index.html","2ea3939ca31c9ecab669a6757cc1639d"],["/posts/606001916/index.html","04a573babd998bc600c34a1d886aa538"],["/posts/678017232/index.html","8e6235bc3d2d1ef126c6494e60a85c2c"],["/posts/686027467/index.html","e8d96e2f98d46b756e25d246b2f622c5"],["/posts/719712725/index.html","9f600a9689c74bcdb912aea5a8520171"],["/posts/732690854/index.html","db4ec8d74f86edc7107b5b4eb92d817a"],["/posts/811989321/index.html","7a63a9943fac8e3e7cf73b8591bc73c3"],["/posts/849555402/index.html","e2c76aad55b621efc06cb021d4fb3a85"],["/posts/961371178/index.html","dfe9bdaaa769c577ebfab4c25c47d8d3"],["/posts/96411472/index.html","b38b24cd26533e8f8dcdc6dc89184c13"],["/posts/972193328/index.html","715c6140fa388a2ac02e748715257e7a"],["/posts/977460013/index.html","49aff691e158012923ac2aa7b1c509f1"],["/sitemap.xml","a6f8570b805bfcfe3263e9b87f3ac04d"],["/sw-register.js","766e84c58f65cdd6c9bf14a28b7f9696"],["/tags/Ajax/index.html","1fbb61fdf600683fb1edd0232a729767"],["/tags/Echarts/index.html","7691cd1a8db954c02a983dc9f80e632b"],["/tags/GitHub/index.html","8dc89e1f5349cfaaa9b652bdb8405d28"],["/tags/HTML/index.html","a12a6ec9e84af6023079e48f8652ccc7"],["/tags/Jquery/index.html","ef1c15f7ebcf0d6c94ecdfe55e60a181"],["/tags/Linux/index.html","ac43db1cf925180e86a59ce526370afa"],["/tags/Mock/index.html","c5ed7013f94878d9857efb343d4ee5df"],["/tags/TanStack-Query/index.html","8d688d9d9804c35ed49f8bfad2abd74a"],["/tags/Vue/index.html","a11f4b2678f216797d309f70c3cbfae7"],["/tags/Vue/page/2/index.html","f34a39017dcae87fff99bb532cfe7bcc"],["/tags/Vue/page/3/index.html","47e2489717add34bcf0cc4c17f012b51"],["/tags/Webpack/index.html","40830f5e4e4445bd934cd47140cd285f"],["/tags/casl/index.html","30d7137094b40b657775361e76d1ca11"],["/tags/css/index.html","b94ea2921dc3d097d36d8bc6c9790dc2"],["/tags/docker/index.html","6073c38820a5bf9f5f4340cca9ec5810"],["/tags/es6/index.html","337a349ca2a64be284fb73a33a51d21c"],["/tags/hexo/index.html","489fe58da7df275c5b7a73d7747b9073"],["/tags/http/index.html","8097893c7aaf94baffd38130eafb439f"],["/tags/index.html","961a0f3ab76bfb05e597397c5f8c34a2"],["/tags/javascript/index.html","3d8a6cfbaed736e6821a0f81735cfafe"],["/tags/javaweb/index.html","8712b8ef1d565345e5cbff126487fdbb"],["/tags/js/index.html","8a6ac4c368dbd4e928cb57c81f400033"],["/tags/js/page/2/index.html","7335c55ef0f44059a19188d09997dd9f"],["/tags/microapp/index.html","7b0fb7816872d872184887529a1577f8"],["/tags/mongodb/index.html","895738ebeaa39bdb37a44536139a5289"],["/tags/mysql/index.html","41ffadbba6f8828301d22af40f3e2a5f"],["/tags/nodejs/index.html","3521eb400525a6ee94ee067a5a02c7f8"],["/tags/nosql/index.html","16a61878f6da46a6df348f9d12faa404"],["/tags/npm/index.html","ea9b09fbb3952ffca6ba48806df67afb"],["/tags/ts/index.html","4b8f08aa6f1cf3cd3b8bdc258c2d6085"],["/tags/前端/index.html","6bb90222a5ea0b09dca26a998c647bde"],["/tags/前端/page/2/index.html","4beb164c2abe3d7b64de0a7c019df0e4"],["/tags/前端/page/3/index.html","747971943c36d2fe5b4290f9281a4dec"],["/tags/前端/page/4/index.html","8c65cfeea7ed51f5d2563da94b5d5d69"],["/tags/单元测试/index.html","51cce143bdff7dd9cfa144a3be8e51f7"],["/tags/工具/index.html","2b3c717e459b180b83e17b4277593e51"],["/tags/日常/index.html","08eb34f395fce421bf4d58806e78ef51"],["/tags/浏览器/index.html","3dc25db044b0e9f0237d3c2ed6aef7ee"],["/tags/算法/index.html","6b83c12a8e09f1d5080ba5adb5117ef7"],["/tags/网络/index.html","bb6d1fb870f3d218b4568b76a0378f64"],["/tags/网络安全/index.html","52136a0ae97d2b8e682e1906cd219bf2"],["/tags/计算机网络/index.html","0fd3a4133c19f943f94670a65b4e8c49"],["/tags/设计/index.html","9bca0038c213326c4bc1f825abf4fad6"],["/tags/面试/index.html","55b4c4a87d79bf829eec9d6fb57fcba0"],["/tags/面试/page/2/index.html","53e9838f8d11ed9d50a544f28cf7fa17"],["/tags/魔改/index.html","f8b659dfb6d53fe530992b0fd9f4c48c"]];
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
