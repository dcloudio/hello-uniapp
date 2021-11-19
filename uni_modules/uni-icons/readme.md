

## Icons 图标
> **组件名：uni-icons**
> 代码块： `uIcons`


用于展示 icons 图标 。

### 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`components`。

如需通过`npm`方式使用`uni-ui`组件，另见文档：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)

### 基本用法

在 ``template`` 中使用组件

```html
<uni-icons type="contact" size="30"></uni-icons>
```

### 扩展图标用法

1. 需要自行在项目 App.vue 中引入 css 图标扩展库（注意: css 图标库引用的 .ttf 文件路径是否正确）
	
	```html
	<style lang="scss">
	/* 扩展图标库 */
	@import '@/static/iconfont.css';
	</style>
	```
2. 在 ``template`` 中使用组件

	```html
	<uni-icons class="mr-30" type="icon-kongxincai" font-family="iconfont" color="#007AFF" size="20"></uni-icons>
	```




## API

### Icons Props

|属性名	|类型		|默认值	|说明				|
|:-:	|:-:		|:-:	|:-:				|
|size	|Number		|24		|图标大小			|
|type	|String		|-		|图标图案，参考示例	|
|color	|String		|-		|图标颜色			|
|font-family(仅 vue 支持)	|String		|uniicons		|图标库字体家族			|


### Icons Events
|事件名	|说明			|返回值|
|:-:	|:-:			|:-:  |
|@click|点击 Icon 触发事件|-    |



## 组件示例

点击查看：[https://hellouniapp.dcloud.net.cn/pages/extUI/icons/icons](https://hellouniapp.dcloud.net.cn/pages/extUI/icons/icons)