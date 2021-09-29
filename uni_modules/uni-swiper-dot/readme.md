

## SwiperDot 轮播图指示点
> **组件名：uni-swiper-dot**
> 代码块： `uSwiperDot`


自定义轮播图指示点

> **注意事项**
> 为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些错误。
> - 本组件依赖 `swiper` 组件,请与`swiper`组件配合使用
> - `width` 与 `height` 如非必要，请勿设置过大，或者过小
> - `swiper-item` 尽量控制在一定数量之内，否则指示点可能会超出屏幕
> - 暂不支持垂直方向的指示点


### 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`components`。

如需通过`npm`方式使用`uni-ui`组件，另见文档：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)

### 基本用法

在 ``template`` 中的使用

```html
<uni-swiper-dot :info="info" :current="current" field="content" :mode="mode">
	<swiper class="swiper-box" @change="change">
		<swiper-item v-for="(item ,index) in info" :key="index">
			<view class="swiper-item">
				{{item.content}}
			</view>
		</swiper-item>
	</swiper>
</uni-swiper-dot>
```

```javascript
export default {
	data() {
		return {
			info: [{
				content: '内容 A'
			}, {
				content: '内容 B'
			}, {
				content: '内容 C'
			}],
			current: 0,
			mode: 'round',
		}
	},
	methods: {
		change(e) {
			this.current = e.detail.current;
		}
	}
}
```

## API

### SwiperDod Props

|属性名		|类型	|默认值	|说明																			|
|:-:		|:-:	|:-:	|:-:																			|
|current	|Number	|0		|当前指示点索引，必须是通过 `swiper` 的 `change` 事件获取到的 `e.detail.current`|
|mode		|String	|default|指示点的类型，可选值：default 、round 、nav	 、 indexes 						|
|field		|String	|-		| mode 为 nav 时，显示的内容字段（mode = nav 时必填）							|
|info		|Array	|-		|轮播图的数据，通过数组长度决定指示点个数										|
|dotsStyles	|Object	|-		|指示点样式																	|

#### dotsStyles Options

|属性名					|类型	|默认值							|说明														|
|:-:					|:-:	|:-:							|:-:														|
|width					|Number	| 8								|指示点宽度 **在 mode = nav、mode = indexes 时不生效**		|
|bottom					|Number	| 10							|指示点距 `swiper` 底部的高度								|
|color					|Color	| '#fff'						|指示点前景色，**只在 mode = nav ，mode = indexes 时生效**	|
|backgroundColor		|Color	| 'rgba(0, 0, 0, .3)'			|未选择指示点背景色											|
|border					|Border	| '1px rgba(0, 0, 0, .3) solid'	|未选择指示点边框样式										|
|selectedBackgroundColor|Color	| '#333'						|已选择指示点背景色，**在 mode = nav 时不生效**				|
|selectedBorder			|Border	| '1px rgba(0, 0, 0, .9) solid'	|已选择指示点边框样式，**在 mode = nav 时不生效**			|



## 组件示例

点击查看：[https://hellouniapp.dcloud.net.cn/pages/extUI/swiper-dot/swiper-dot](https://hellouniapp.dcloud.net.cn/pages/extUI/swiper-dot/swiper-dot)