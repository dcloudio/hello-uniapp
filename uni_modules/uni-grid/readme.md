

## Grid 宫格
> **组件名：uni-grid**
> 代码块： `uGrid`


宫格组件。

### 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`components`。

如需通过`npm`方式使用`uni-ui`组件，另见文档：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)

> **注意事项**
> 为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些错误。
> - 删除组件自带圆点角标效果，完全交给用户实现，示例有简单角标效果实现
> - Grid 组件仅在自定义组件模式下支持
> - column 属性最大值最好不要超过 5 个，如果超过，需要注意内容显示
> - 支付宝小程序平台需要在支付宝小程序开发者工具里开启 component2 编译模式，开启方式： `详情 --> 项目配置 --> 启用 component2 编译`
> - 为了避免高度显示错误组件内必须要有内容


### 基本用法

在 ``template`` 中使用组件

```html
<!-- 一般用法 -->
<uni-grid :column="3">
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
</uni-grid>

<!-- 不带边框并矩形显示 -->
<uni-grid :column="3" :showBorder="false"  :square="false">
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
</uni-grid>
```

## API

### Grid Props

**uni-grid 属性说明：**

|属性名		|类型	|默认值	|说明				|
|:-:		|:-:	|:-:	|:-:				|
|column		|Number	|3		|每列显示个数		|
|borderColor|String	|#d0dee5|边框颜色			|
|showBorder	|Boolean|true	|是否显示边框		|
|square		|Boolean|true	|是否方形显示		|
|highlight	|Boolean|true	|点击背景是否高亮	|

### Grid Events
|事件名	|说明			|返回值											|
|:-:	|:-:			|:-:											|
|@change|点击 grid 触发	|e={detail:{index:0}}，index 为当前点击 gird 下标|


### GridItem Props

|属性名|类型		|默认值	|说明										|
|:-:	|:-:		|:-:	|:-:										|
|index|Number	|-		|子组件的唯一标识 ，点击gird会返回当前的标识|


## 组件示例

点击查看：[https://hellouniapp.dcloud.net.cn/pages/extUI/grid/grid](https://hellouniapp.dcloud.net.cn/pages/extUI/grid/grid)