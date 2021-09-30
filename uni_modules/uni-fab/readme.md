

## Fab 悬浮按钮
> **组件名：uni-fab**
> 代码块： `uFab`


点击可展开一个图形按钮菜单

### 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`components`。

如需通过`npm`方式使用`uni-ui`组件，另见文档：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)

> **注意事项**
> 为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些错误。
> - 不建议动态修改属性，可能会耗损部分性能。
> - 展开菜单暂不支持字体图标，使用图片路径时建议使用绝对路径，相对路径可能会有问题。
> - 选中状态要通过自己控制，如果不希望有选中状态，不处理 `active` 即可。 
> - 展开菜单建议最多显示四个，如果过多对于小屏手机可能会超出屏幕。


### 基本用法

在 `template` 中使用组件

```html
<template>
	<view>
		<uni-fab
			:pattern="pattern"
			:content="content"
			:horizontal="horizontal"
			:vertical="vertical"
			:direction="direction"
			@trigger="trigger"
		></uni-fab>
	</view>
</template>
```


## API

### Fab Props

|  属性名	|    类型	| 默认值		| 说明															|
| :-:		| :-:		| :-:			| :-:															|
| pattern	| Object	| -				| 可选样式配置项												|
| horizontal| String	| 'left'		| 水平对齐方式。`left`:左对齐，`right`：右对齐					|
| vertical	| String	| 'bottom'		| 垂直对齐方式。`bottom`:下对齐，`top`：上对齐					|
| direction	| String	| 'horizontal'	| 展开菜单显示方式。`horizontal`:水平显示，`vertical`：垂直显示	|
| popMenu	| Boolean	| true			| 是否使用弹出菜单											|
| content	| Array		| -				| 展开菜单内容配置项											|



**pattern配置项：**

|  参数				|    类型	| 默认值	| 说明				|
| :-:				|  :-:		| :-:		| :-:				|
| color				| String	| #3c3e49	| 文字默认颜色		|
| selectedColor		| String	| #007AFF	| 文字选中时的颜色	|
| backgroundColor	| String	| #ffffff	| 背景色			|
| buttonColor		| String	| #3c3e49	| 按钮背景色		|

**content配置项：**

|  参数				|    类型	| 说明			|
| :-:				|  :-:				| :-:		| :-:			|
| iconPath			| String	| 图片路径		|
| selectedIconPath	| String	| 选中后图片路径|
| text				| String	| 文字			|
| active			| Boolean	| 是否选中当前	|

### Fab Events

|  参数		|    类型	| 说明							|
| :-:		|  :-:		| :-:							|
| @trigger	| Function	| 展开菜单点击事件，返回点击信息|
| @fabClick	| Function	| 悬浮按钮点击事件				|






## 组件示例

点击查看：[https://hellouniapp.dcloud.net.cn/pages/extUI/fab/fab](https://hellouniapp.dcloud.net.cn/pages/extUI/fab/fab)