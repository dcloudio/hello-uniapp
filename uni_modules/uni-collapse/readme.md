

## Collapse 折叠面板
> **组件名：uni-collapse**
> 代码块： `uCollapse`
> 关联组件：`uni-collapse-item`、`uni-icons`。


折叠面板用来折叠/显示过长的内容或者是列表。通常是在多内容分类项使用，折叠不重要的内容，显示重要内容。点击可以展开折叠部分。

> **注意事项**
> 为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些错误。
> - 组件需要依赖 `sass` 插件 ，请自行手动安装
> - `App` 端默认关闭组件动画 ，因为 `height` 动画开销比较大，会导致页面卡顿，请酌情使用动画
> - 如在使用组件过程从发现卡顿严重，请尝试停用组件动画，问题原因如上
> - 在小程序端组件内容发生变化，需要手动调用 resize() 方法，手动更新几点信息，避免出现内容错位
> - 如需自定义组件默认边框颜色等，请使用插槽自定义内容并合理使用 `border ` 和 `title-border` 属性
> - 折叠面板仅支持嵌套使用，请勿单独使用
> - 组件支持 nvue ，需要在 `manifest.json > app-plus` 节点下配置 `"nvueStyleCompiler" : "uni-app"` 
> - 如使用过程中有任何问题，或者您对uni-ui有一些好的建议，欢迎加入 uni-ui 交流群：871950839


### 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`components`。

如需通过`npm`方式使用`uni-ui`组件，另见文档：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)


### 基本用法

使用 `title` 属性指定面板显示内容 

使用 `open` 属性默认打开当前面板

使用 `disabled` 属性禁用面板


```html
<uni-collapse>
	<uni-collapse-item title="默认开启" :open="true">
		<text>折叠内容</text>
	</uni-collapse-item>
	<uni-collapse-item title="折叠内容">
			<text>折叠内容</text>
	</uni-collapse-item>
	<uni-collapse-item title="禁用状态" disabled>
		<text>折叠内容</text>
	</uni-collapse-item>
</uni-collapse>
```

### 手风琴效果

使用 `accordion` 属性，可以仅打开一个面板并关闭其他已经打开的面板，效果类似手风琴

设置 `accordion` 属性时，`open` 属性则生效在最后一个组件

```html
<uni-collapse accordion>
	<uni-collapse-item title="手风琴效果">
		<text>折叠内容</text>
	</uni-collapse-item>
	<uni-collapse-item title="手风琴效果">
			<text>折叠内容</text>
	</uni-collapse-item>
	<uni-collapse-item title="禁用状态" disabled>
		<text>折叠内容</text>
	</uni-collapse-item>
</uni-collapse>
```

### 动态设置折叠面板打开状态

使用 `v-model` 属性，动态设置面板的显示状态

使用 `name` 属性设置每个面板的唯一标识，如不设置使用默认索引，从字符串 `"0"` 开始记数

**注意**

- 如果 `accordion` 属性为 `true` 则 `v-model` 类型为 `String`
- 如果 `accordion` 属性为 `false` 则 `v-model` 类型为 `Array`
- 请注意 `v-model` 属性与 `open` 属性请勿一起使用 ，建议只使用 `v-model`

```html
<uni-collapse v-model="value">
	<uni-collapse-item name="key1" title="默认开启">
		<text>折叠内容</text>
	</uni-collapse-item>
	<uni-collapse-item name="key2" title="默认开启">
			<text>折叠内容</text>
	</uni-collapse-item>
	<uni-collapse-item name="key3" title="默认不开启">
			<text>折叠内容</text>
	</uni-collapse-item>
</uni-collapse>
```

```javascript
export default {
	data(){
		return {
			value:['key1','key2'],
			// 如果设置了 accordion 属性，则使用 string 类型
			// value:'key1'
		}
	}
}
```

### 使用动画

使用 `show-animation` 属性开启或关闭面板折叠动画，默认动画开启

**注意**

- `App` 端默认关闭组件动画 ，因为 height 动画开销比较大，会导致页面卡顿，请酌情使用动画，如出现明显卡顿，尝试关闭动画


```html
<uni-collapse>
	<uni-collapse-item :show-animation="true" title="开启动画">
		<text>折叠内容</text>
	</uni-collapse-item>
	<uni-collapse-item :show-animation="true"  title="开启动画">
			<text>折叠内容</text>
	</uni-collapse-item>
	<uni-collapse-item :show-animation="false"  title="不开启动画">
			<text>折叠内容</text>
	</uni-collapse-item>
</uni-collapse>
```

### 配置图片

使用 `thumb` 配置图片地址， 可在面板左侧显示一个图片

如需显示更多内容，如图标等，请见下方自定义插槽的说明

```html
<uni-collapse>
	<uni-collapse-item title="标题文字"
		thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png">
		<view class="content">
			<text class="text">折叠内容主体，可自定义内容及样式</text>
		</view>
	</uni-collapse-item>
</uni-collapse>
```

### 自定义插槽

如果需要自定义面板显示，可以使用 `title` 插槽达成完全自定义。下面是一个使用 `uni-list` 的列表示例，需要引入 `uni-list` 组件

```html
<uni-collapse>
	<!-- 因为list默认带一条分隔线，所以使用 titleBorder="none" 取消面板的分隔线 -->
	<uni-collapse-item title-border="none" :border="false">
		<template v-slot:title>
			<uni-list>
				<uni-list-item title="标题使用自定义标题插槽" :show-extra-icon="true" :extra-icon="extraIcon">
				</uni-list-item>
			</uni-list>
		</template>
		<view class="content">
			<text class="text">折叠内容主体，可自定义内容及样式</text>
		</view>
	</uni-collapse-item>
</uni-collapse>
```

**注意**

- 在折叠面板组件中使用list时，在 App-Nvue 下请勿单独使用 uni-list-item，会导致组件无法正常显示，其他平台不做限制
- 在默认插槽里使用 uni-list 组件与上方示例一样，直接写在默认插槽里即可

## API

### Collapse Props

|属性名|类型|默认值|说明|
|:-:|:-:|:-:|:-:|
|value/v-model|String/Array|-|当前激活面板改变时触发(如果是手风琴模式，参数类型为string，否则为array)|
|accordion|Boolean|false|是否开启手风琴效果	|

### Collapse Event

|事件称名|说明|返回值|
|:-:|:-:|:-:|
|@change|切换面板时触发	|切换面板时触发，如果是手风琴模式，返回类型为string，否则为array|

### Collapse Methods

|方法名称|说明|
|:-:|:-:|
|resize	|更新当前列表高度|

> **提示**
> - resize 方法解决动态添加数据，带动画的折叠面板高度不更新的问题
> - 需要在数据渲染完毕之后使用 `resize` 方法。推荐在 `this.$nextTick()` 中使用
> - 当前只有小程序端需要调用此方法，H5\App 端已经做了处理，不需要手动更新高度
> ```html
> 	<view>
> 		<uni-collapse ref="collapse" v-model="value">
> 			<uni-collapse-item title="默认开启" >
> 				<view class="content">
> 					<text class="text">{{content}}</text>
> 				</view>
> 			</uni-collapse-item>
> 			<uni-collapse-item title="折叠内容">
> 				<view class="content">
> 					<text class="text">折叠内容主体，这是一段比较长内容。默认折叠主要内容，只显示当前项标题。点击标题展开，才能看到这段文字。再次点击标题，折叠内容。</text>
> 				</view>
> 			</uni-collapse-item>
> 		</uni-collapse>
> 		<button class="button" type="primary" @click="add">动态修改内容</button>
> 	</view>
> ```
> ```javascript
> export default {
> 	data() {
> 		return {
> 			value:['0'],
> 			content: '折叠内容主体，可自定义内容及样式，点击按钮修改内容使高度发生变化。',
> 		}
> 	},
> 	methods: {
> 		add() {
> 			if (this.content.length > 35) {
> 				this.content = '折叠内容主体，可自定义内容及样式，点击按钮修改内容使高度发生变化。'
> 			} else {
> 				this.content = '折叠内容主体，这是一段比较长内容。通过点击按钮修改后内容后，使组件高度发生变化，在次点击按钮恢复之前的内容和高度。'
> 			}
> 			// TODO 小程序中不支持自动更新 ，需要手动resize 更新组件高度
> 			// #ifdef MP
> 			this.$nextTick(() => {
> 				this.$refs.collapse.resize()
> 			})
> 			// #endif
> 		}
> 	}
> }
> ```


### CollapseItem Props

|属性名|类型|默认值|说明|
|:-:|:-:|:-:|:-:|
|title|String|-|标题文字|
|thumb|String|-|标题左侧缩略图|
|disabled|Boolean|false|是否禁用|
|open|Boolean|false|是否展开面板|
|show-animation|Boolean|false|开启动画|
|border|Boolean|true|折叠面板内容分隔线|
|title-border|String|auto|折叠面板标题分隔线可选值见下方 **TitleBorder Params**|
|show-arrow|Boolean|true|是否显示右侧箭头|

#### TitleBorder Params

|参数名|说明|
|:-:|:-:|
|auto|分隔线自动显示|
|none|不显示分隔线|
|show|一直显示分隔线|

### Collapse Slots

|插槽名|说明|
|:-:| :-:|
|default|默认插槽|
|title|面板标题插槽，如使用此插槽禁用样式效果将失效|

## 组件示例

点击查看：[https://hellouniapp.dcloud.net.cn/pages/extUI/collapse/collapse](https://hellouniapp.dcloud.net.cn/pages/extUI/collapse/collapse)