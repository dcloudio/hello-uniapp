## List 列表
> **组件名：uni-list**
> 代码块： `uList`、`uListItem`
> 关联组件：`uni-list-item`、`uni-badge`、`uni-icons`、`uni-list-chat`、`uni-list-ad`


List 列表组件，包含基本列表样式、可扩展插槽机制、长列表性能优化、多端兼容。

在vue页面里，它默认使用页面级滚动。在app-nvue页面里，它默认使用原生list组件滚动。这样的长列表，在滚动出屏幕外后，系统会回收不可见区域的渲染内存资源，不会造成滚动越长手机越卡的问题。

uni-list组件是父容器，里面的核心是uni-list-item子组件，它代表列表中的一个可重复行，子组件可以无限循环。

uni-list-item有很多风格，uni-list-item组件通过内置的属性，满足一些常用的场景。当内置属性不满足需求时，可以通过扩展插槽来自定义列表内容。

内置属性可以覆盖的场景包括：导航列表、设置列表、小图标列表、通信录列表、聊天记录列表。

涉及很多大图或丰富内容的列表，比如类今日头条的新闻列表、类淘宝的电商列表，需要通过扩展插槽实现。

下文均有样例给出。

uni-list不包含下拉刷新和上拉翻页。上拉翻页另见组件：[uni-load-more](https://ext.dcloud.net.cn/plugin?id=29)

### [点击查看详细文档](https://uniapp.dcloud.io/component/uniui/uni-indexed-list)
#### 如使用过程中有任何问题，或者您对uni-ui有一些好的建议，欢迎加入 uni-ui 交流群：871950839 



## 基于uni-list扩展的页面模板

通过扩展插槽，可实现多种常见样式的列表

**新闻列表类**

1. 云端一体混合布局：[https://ext.dcloud.net.cn/plugin?id=2546](https://ext.dcloud.net.cn/plugin?id=2546)
2. 云端一体垂直布局，大图模式：[https://ext.dcloud.net.cn/plugin?id=2583](https://ext.dcloud.net.cn/plugin?id=2583)
3. 云端一体垂直布局，多行图文混排：[https://ext.dcloud.net.cn/plugin?id=2584](https://ext.dcloud.net.cn/plugin?id=2584)
4. 云端一体垂直布局，多图模式：[https://ext.dcloud.net.cn/plugin?id=2585](https://ext.dcloud.net.cn/plugin?id=2585)
5. 云端一体水平布局，左图右文：[https://ext.dcloud.net.cn/plugin?id=2586](https://ext.dcloud.net.cn/plugin?id=2586)
6. 云端一体水平布局，左文右图：[https://ext.dcloud.net.cn/plugin?id=2587](https://ext.dcloud.net.cn/plugin?id=2587)
7. 云端一体垂直布局，无图模式，主标题+副标题：[https://ext.dcloud.net.cn/plugin?id=2588](https://ext.dcloud.net.cn/plugin?id=2588)

**商品列表类**

1. 云端一体列表/宫格视图互切：[https://ext.dcloud.net.cn/plugin?id=2651](https://ext.dcloud.net.cn/plugin?id=2651)
2. 云端一体列表（宫格模式）：[https://ext.dcloud.net.cn/plugin?id=2671](https://ext.dcloud.net.cn/plugin?id=2671)
3. 云端一体列表（列表模式）：[https://ext.dcloud.net.cn/plugin?id=2672](https://ext.dcloud.net.cn/plugin?id=2672)