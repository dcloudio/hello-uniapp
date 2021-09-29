

## IndexedList 索引列表
> **组件名：uni-indexed-list**
> 代码块： `uIndexedList`


用于展示索引列表。

### 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`components`。

如需通过`npm`方式使用`uni-ui`组件，另见文档：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)

### 基本用法

在 ``template`` 中使用组件

```html
<uni-indexed-list :options="list" :showSelect="false" @click="bindClick"></uni-indexed-list>
```

## API

### IndexedList Props

|属性名		|类型	|默认值	|说明														|
|:-:		|:-:	|:-:	|:-:														|
|options	|Object	|-		|索引列表需要的数据对象										|
|showSelect	|Boolean|-		| 展示模式，true 为展示默认，false 为选择模式，默认为 false	|

**options 数据格式说明**

```json
[{
	"letter": "A",
	"data": [
		"阿克苏机场",
		"阿拉山口机场",
		"阿勒泰机场",
		"阿里昆莎机场",
		"安庆天柱山机场",
		"澳门国际机场"
	]
}, {
	"letter": "B",
	"data": [
		"保山机场",
		"包头机场",
		"北海福成机场",
		"北京南苑机场",
		"北京首都国际机场"
	]
}]
```

### IndexedList Events

|事件名	|说明															|返回值	|
|:-:		|:-:															|:-:	|
|click	|点击列表事件 ，返回当前选择项的事件对象	|-		|


## 组件示例

点击查看：[https://hellouniapp.dcloud.net.cn/pages/extUI/indexed-list/indexed-list](https://hellouniapp.dcloud.net.cn/pages/extUI/indexed-list/indexed-list)