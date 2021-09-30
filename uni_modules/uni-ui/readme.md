# uni-ui 介绍

## uni-ui产品特点

### 1. 高性能

目前为止，在小程序和混合app领域，暂时还没有比 `uni-ui` 更高性能的框架。
- 自动差量更新数据

虽然uni-app支持小程序自定义组件，所有小程序的ui库都可以用。但小程序自定义组件的ui库都需要使用setData手动更新数据，在大数据量时、或高频更新数据时，很容易产生性能问题。

而 `uni-ui` 属于vue组件，uni-app引擎底层自动diff更新数据。当然其实插件市场里众多vue组件都具备这个特点。
- 优化逻辑层和视图层通讯折损

非H5，不管是小程序还是App，不管是app的webview渲染还是原生渲染，全都是逻辑层和视图层分离的。这里就有一个逻辑层和视图层通讯的折损问题。
比如在视图层拖动一个可跟手的组件，由于通讯的损耗，用js监听很难做到实时跟手。

这时就需要使用css动画以及平台底层提供的wxs、bindingx等技术。不过这些技术都比较复杂，所以 `uni-ui` 里做了封装，在需要跟手式操作的ui组件，比如swiperaction列表项左滑菜单，就在底层使用了这些技术，实现了高性能的交互体验
- 背景停止

很多ui组件是会一直动的，比如轮播图、跑马灯。即便这个窗体被新窗体挡住，它在背景层仍然在消耗着硬件资源。在Android的webview版本为chrome66以上，背景操作ui会引发很严重的性能问题，造成前台界面明显卡顿。

而 `uni-ui` 的组件，会自动判断自己的显示状态，在组件不再可见时，不会再消耗硬件资源。

### 2. 全端

 `uni-ui` 的组件都是多端自适应的，底层会抹平很多小程序平台的差异或bug。

比如导航栏navbar组件，会自动处理不同端的状态栏。
比如swiperaction组件，在app和微信小程序上会使用交互体验更好的wxs技术，但在不支持wxs的其他小程序端会使用js模拟类似效果。

 `uni-ui` 还支持nvue原生渲染，[详见](https://github.com/dcloudio/uni-ui/tree/nvue-uni-ui)

未来 `uni-ui` 还会支持pc等大屏设备。

### 3. 与uni统计自动集成实现免打点

uni统计是优秀的多端统计平台，见[tongji.dcloud.net.cn](https://tongji.dcloud.net.cn)。

除了一张报表看全端，它的另一个重要特点是免打点。
比如使用 `uni-ui` 的navbar标题栏、收藏、购物车等组件，均可实现自动打点，统计页面标题等各种行为数据。
当然你也可以关闭uni统计，这不是强制的。

### 4. 主题扩展

 `uni-ui` 支持[uni.scss](https://uniapp.dcloud.io/collocation/uni-scss)，可以方便的切换App的风格。

ui是一种需求非常发散的产品，DCloud官方也无意用 `uni-ui` 压制第三方ui插件的空间，但官方有义务在性能和多端方面提供一个开源的标杆给大家。

我们欢迎更多优秀的ui组件出现，也欢迎更多人贡献 `uni-ui` 的主题风格，满足更多用户的需求。


# 快速开始

## 方式一：使用 uni_modules 安装（推荐）

使用 `uni_modules` 方式安装组件库，可以直接通过插件市场导入，通过右键菜单快速更新组件，不需要引用、注册，直接在页面中使用 `uni-ui` 组件。[点击安装 uni-ui 组件库](https://ext.dcloud.net.cn/plugin?id=55)

**注意：下载最新的组件目前仅支持 uni_modules ,非 uni_modules 版本最高支持到组件的1.2.10版本**

如不能升级到 `uni_modules` 版本，可以使用 `uni_modules` 安装好对应组件，将组件拷贝到对应目录。

例如需更新 `uni-list`和`uni-badge` ,将 `uni_modules>uni-list>components`和`uni_modules>uni-badege>components`下所有目录拷贝到如下目录即可：

**目录示例**
```json {2,3,4,5,6,7}
┌─components              组件目录
│  ├─uni-list             list 列表目录
│  │  └─uni-list.vue      list 组件文件
│  ├─uni-list-item        list-item 列表目录
│  │  └─uni-list-item.vue list 组件文件
│  ├─uni-badge         	  badge 角标目录
│  │  └─uni-badge.vue     badge 组件文件
│  └─ //....              更多组件文件
├─pages                   业务页面文件存放的目录
│  ├─index
│  │  └─index.vue         index示例页面
├─main.js                 Vue初始化入口文件
├─App.vue                 应用配置，用来配置App全局样式以及监听 应用生命周期
├─manifest.json           配置应用名称、appid、logo、版本等打包信息，详见
└─pages.json              配置页

```


## 方式二：使用 npm 安装

在 `vue-cli` 项目中可以使用 `npm` 安装 `uni-ui` 库 ，或者直接在 `HBuilderX` 项目中使用 `npm` 。（不推荐后一种方式）

> **注意**
> cli 项目默认是不编译 `node_modules` 下的组件的，导致条件编译等功能失效 ，导致组件异常
> 需要在根目录创建 `vue.config.js` 文件 ，增加 `@dcloudio/uni-ui` 包的编译即可正常
> ```javascript
> // vue.config.js
> module.exports = {
> 		transpileDependencies:['@dcloudio/uni-ui']
> }
> ```



**准备 sass**

`vue-cli` 项目请先安装 sass 及 sass-loader，如在 HBuliderX 中使用，可跳过此步。

- 安装 sass
```
 npm i sass -D   或   yarn add sass -D  
```

- 安装 sass-loader
```
npm i sass-loader@10.1.1 -D   或   yarn add sass-loader@10.1.1 -D
```

> sass-loader 请使用低于 @11.0.0 的版本，[sass-loader@11.0.0 不支持 vue@2.6.12 ](https://stackoverflow.com/questions/66082397/typeerror-this-getoptions-is-not-a-function)


**安装 uni-ui**

```
npm i @dcloudio/uni-ui   或   yarn add @dcloudio/uni-ui
```



在 ``script`` 中引用组件：

```javascript
import {uniBadge} from '@dcloudio/uni-ui'
//import uniBadge from '@dcloudio/uni-ui/lib/uni-badge/uni-badge.vue' //也可使用此方式引入组件
export default {
    components: {uniBadge}
}
```


在 ``template`` 中使用组件： 

```html
<uni-badge text="1"></uni-badge>
<uni-badge text="2" type="success" @click="bindClick"></uni-badge>
<uni-badge text="3" type="primary" :inverted="true"></uni-badge>
```
> **注意**
> - `CLI` 引用方式， `H5` 端不支持在 `main.js` 中全局注册组件，如有需求请使用（[easyCom](https://uniapp.dcloud.io/collocation/pages?id=easycom)） 的方式引用组件
> - 使用 npm 安装的组件，默认情况下 babel-loader 会忽略所有 node_modules 中的文件 ，导致条件编译失效，需要通过配置 `vue.config.js` 解决：
> ```javascript
> // 在根目录创建 vue.config.js 文件，并配置如下
> module.exports = {
> 	transpileDependencies: ['@dcloudio/uni-ui']
> }
> ```


## 使用 npm + easycom 

使用 `npm` 安装好 `uni-ui` 之后，需要配置 `easycom` 规则，让 `npm` 安装的组件支持  `easycom`

打开项目根目录下的 `pages.json` 并添加 `easycom` 节点：

```javascript {8}
// pages.json

{
	"easycom": {
		"autoscan": true,
		"custom": {
			// uni-ui 规则如下配置
			"^uni-(.*)": "@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue"
		}
	},
	
	// 其他内容
	pages:[
		// ...
	]
}

```

### uni-ui 已支持的组件列表
|组件名|组件说明|
|---|---|
|uni-badge|[数字角标](https://ext.dcloud.net.cn/plugin?name=uni-badge)|
|uni-calendar|[日历](https://ext.dcloud.net.cn/plugin?name=uni-calendar)|
|uni-card|[卡片](https://ext.dcloud.net.cn/plugin?name=uni-card)|
|uni-collapse|[折叠面板](https://ext.dcloud.net.cn/plugin?name=uni-collapse)|
|uni-combox|[组合框](https://ext.dcloud.net.cn/plugin?name=uni-combox)|
|uni-countdown|[倒计时](https://ext.dcloud.net.cn/plugin?name=uni-countdown)|
|uni-data-checkbox|[数据选择器](https://ext.dcloud.net.cn/plugin?name=uni-data-checkbox)|
|uni-data-picker|[数据驱动的picker选择器](https://ext.dcloud.net.cn/plugin?name=uni-data-picker)|
|uni-dateformat|[日期格式化](https://ext.dcloud.net.cn/plugin?name=uni-dateformat)|
|uni-datetime-picker|[日期选择器](https://ext.dcloud.net.cn/plugin?name=uni-datetime-picker)|
|uni-drawer|[抽屉](https://ext.dcloud.net.cn/plugin?name=uni-drawer)|
|uni-easyinput|[增强输入框](https://ext.dcloud.net.cn/plugin?name=uni-easyinput)|
|uni-fab|[悬浮按钮](https://ext.dcloud.net.cn/plugin?name=uni-fab)|
|uni-fav|[收藏按钮](https://ext.dcloud.net.cn/plugin?name=uni-fav)|
|uni-file-picker|[文件选择上传](https://ext.dcloud.net.cn/plugin?name=uni-file-picker)|
|uni-forms|[表单](https://ext.dcloud.net.cn/plugin?name=uni-forms)|
|uni-goods-nav|[商品导航](https://ext.dcloud.net.cn/plugin?name=uni-goods-nav)|
|uni-grid|[宫格](https://ext.dcloud.net.cn/plugin?name=uni-grid)|
|uni-group|[分组](https://ext.dcloud.net.cn/plugin?name=uni-group)|
|uni-icons|[图标](https://ext.dcloud.net.cn/plugin?name=uni-icons)|
|uni-indexed-list|[索引列表](https://ext.dcloud.net.cn/plugin?name=uni-indexed-list)|
|uni-link|[超链接](https://ext.dcloud.net.cn/plugin?name=uni-link)|
|uni-list|[列表](https://ext.dcloud.net.cn/plugin?name=uni-list)|
|uni-load-more|[加载更多](https://ext.dcloud.net.cn/plugin?name=uni-load-more)|
|uni-nav-bar|[自定义导航栏](https://ext.dcloud.net.cn/plugin?name=uni-nav-bar)|
|uni-notice-bar|[通告栏](https://ext.dcloud.net.cn/plugin?name=uni-notice-bar)|
|uni-number-box|[数字输入框](https://ext.dcloud.net.cn/plugin?name=uni-number-box)|
|uni-pagination|[分页器](https://ext.dcloud.net.cn/plugin?name=uni-pagination)|
|uni-popup|[弹出层](https://ext.dcloud.net.cn/plugin?name=uni-popup)|
|uni-rate|[评分](https://ext.dcloud.net.cn/plugin?name=uni-rate)|
|uni-row|[布局-行](https://ext.dcloud.net.cn/plugin?name=uni-row)|
|uni-search-bar|[搜索栏](https://ext.dcloud.net.cn/plugin?name=uni-search-bar)|
|Section|[标题栏](https://ext.dcloud.net.cn/plugin?name=uni-section)|
|uni-segmented-control|[分段器](https://ext.dcloud.net.cn/plugin?name=uni-segmented-control)|
|uni-steps|[步骤条](https://ext.dcloud.net.cn/plugin?name=uni-steps)|
|uni-swipe-action|[滑动操作](https://ext.dcloud.net.cn/plugin?name=uni-swipe-action)|
|uni-swiper-dot|[轮播图指示点](https://ext.dcloud.net.cn/plugin?name=uni-swiper-dot)|
|uni-table|[表格](https://ext.dcloud.net.cn/plugin?name=uni-table)|
|uni-tag|[标签](https://ext.dcloud.net.cn/plugin?name=uni-tag)|
|uni-title|[章节标题](https://ext.dcloud.net.cn/plugin?name=uni-title)|
|uni-transition|[过渡动画](https://ext.dcloud.net.cn/plugin?name=uni-transition)|


### 其他

- uni-ui 是全端兼容的基于flex布局的、无dom的ui库
- uni-ui 是uni-app内置组件的扩展。注意与web开发不同，uni-ui不包括基础组件，它是基础组件的补充。web开发中有的开发者习惯用一个ui库完成所有开发，但在uni-app体系中，推荐开发者首先使用性能更高的基础组件，然后按需引入必要的扩展组件。


> **注意**
> - `uni-ui` 不支持使用 `Vue.use()` 的方式安装



### 贡献代码
在使用 `uni-ui` 中，如遇到无法解决的问题，请提 [Issues](https://github.com/dcloudio/uni-ui/issues) 给我们，假如您有更好的点子或更好的实现方式，也欢迎给我们提交 [PR](https://github.com/dcloudio/uni-ui/pulls)