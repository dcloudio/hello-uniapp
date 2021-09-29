

## Drawer 抽屉
> **组件名：uni-drawer**
> 代码块： `uDrawer`


抽屉侧滑菜单。

> **注意事项**
> 为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些错误。
> - `width` 属性仅在 `vue` 页面生效，`nvue` 页面因性能问题，不支持动态设置宽度，如需修改，请下载组件修改源码


### 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`components`。

如需通过`npm`方式使用`uni-ui`组件，另见文档：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)

### 基本用法


在 ``template`` 中使用组件

```html
<template>
	<view>
		<button @click="showDrawer" type="primary">右侧弹出 显示Drawer</button>
		<uni-drawer ref="showRight" mode="right" :mask-click="false">
			<scroll-view style="height: 100%;" scroll-y="true">
				<button @click="closeDrawer" type="primary">关闭Drawer</button>
				<view v-for="item in 60" :key="item">可滚动内容 {{ item }}</view>
			</scroll-view>
		</uni-drawer>
	</view>
</template>

<script>
	export default {
		methods: {
			showDrawer() {
				this.$refs.showRight.open();
			},
			closeDrawer() {
				this.$refs.showRight.close();
			}

		}
	}
</script
```

## API

### Drawer Props

|属性名			|类型	|默认值	|说明															|
|:-:			|:-:	|:-:	|:-:															|
|mask			|Boolean|true	|是否显示遮罩													|
|maskClick		|Boolean|true	|点击遮罩是否可以关闭抽屉										|
|mode			|String	|left	|Drawe滑出位置，可选值：left（从左侧滑出）， right（从右侧滑出）|
|width			|Number	|220	|Drawe 宽度，仅vue页面设置生效									|




### Drawer Events

|事件名	|说明				|返回值	|
|:-:		|:-:				|:-:	|
|@change|抽屉状态发生变化触发事件	|true：抽屉已经打开；false：抽屉已经关闭；	|

### Drawer Methods

|方法称名	|说明		|参数|
|:-:		|:-:		|:-:|
|open		|打开抽屉	|-|
|close	|关闭抽屉	|-|




## 组件示例

点击查看：[https://hellouniapp.dcloud.net.cn/pages/extUI/drawer/drawer](https://hellouniapp.dcloud.net.cn/pages/extUI/drawer/drawer)