

## DataCheckbox 数据驱动的单选复选框
> **组件名：uni-data-checkbox**
> 代码块： `uDataCheckbox`


本组件是基于uni-app基础组件checkbox的封装。本组件要解决问题包括：

1. 数据绑定型组件：给本组件绑定一个data，会自动渲染一组候选内容。再以往，开发者需要编写不少代码实现类似功能
2. 自动的表单校验：组件绑定了data，且符合[uni-forms](https://ext.dcloud.net.cn/plugin?id=2773)组件的表单校验规范，搭配使用会自动实现表单校验
3. 本组件合并了单选多选
4. 本组件有若干风格选择，如普通的单选多选框、并列button风格、tag风格。开发者可以快速选择需要的风格。但作为一个封装组件，样式代码虽然不用自己写了，却会牺牲一定的样式自定义性

在uniCloud开发中，`DB Schema`中配置了enum枚举等类型后，在web控制台的[自动生成表单](https://uniapp.dcloud.io/uniCloud/schema?id=autocode)功能中，会自动生成``uni-data-checkbox``组件并绑定好data

> **注意事项**
> 为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些错误。
> - 组件需要依赖 `sass` 插件 ，请自行手动安装
> - 本组件为数据驱动，目的是快速投入使用，只可通过 style 覆盖有限样式，不支持自定义更多样式
> - 如使用过程中有任何问题，或者您对uni-ui有一些好的建议，欢迎加入 uni-ui 交流群：871950839
> - 组件支持 nvue ，需要在 `manifest.json > app-plus` 节点下配置 `"nvueStyleCompiler" : "uni-app"` 
> - 如组件显示有问题 ，请升级 `HBuilderX` 为 `v3.1.0` 以上


### 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`components`。

如需通过`npm`方式使用`uni-ui`组件，另行文档：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)

### 基本用法

设置 `localdata` 属性后，组件会通过数据渲染出对应的内容，默认显示的是单选框 

需要注意 `:multiple="false"` 时（单选） ， `value/v-model` 的值是 `String|Number` 类型

```html
<template>
	<view>
		<uni-data-checkbox v-model="value" :localdata="range" @change="change"></uni-data-checkbox>
	</view>
</template>

```

```javascript

export default {
	data() { 
		return {
			value: 0,
			range: [{"value": 0,"text": "篮球"	},{"value": 1,"text": "足球"},{"value": 2,"text": "游泳"}]
		}
	},
	methods: {
		change(e){
			console.log('e:',e);
		}
	}
}
```

### 多选框

设置 `multiple` 属性，组件显示为多选框

需要注意 `:multiple="true"` 时（多选） ， `value/v-model` 的值是 `Array` 类型

```html
<template>
	<view>
		<uni-data-checkbox multiple v-model="value" :localdata="range" @change="change"></uni-data-checkbox>
	</view>
</template>

```

```javascript

export default {
	data() { 
		return {
			value: [0,2],
			range: [{"value": 0,"text": "篮球"	},{"value": 1,"text": "足球"},{"value": 2,"text": "游泳"}]
		}
	},
	methods: {
		change(e){
			console.log('e:',e);
		}
	}
}
```

### 设置最大最小值

设置 `:multiple="true"` 时（多选） ，可以设置 `min`、`max` 属性 

如果选中个数小于 `min` 属性设置的值，那么选中内容将不可取消，只有当选中个数大于等于 `min`且小于 `max` 时，才可取消选中

如果选中个数大于等于 `max` 属性设置的值，那么其他未选中内容将不可选

```html
<template>
	<view>
		<uni-data-checkbox min="1" max="2" multiple v-model="value" :localdata="range" @change="change"></uni-data-checkbox>
	</view>
</template>

```

```javascript

export default {
	data() { 
		return {
			value: [0,2],
			range: [{"value": 0,"text": "篮球"	},{"value": 1,"text": "足球"},{"value": 2,"text": "游泳"}]
		}
	},
	methods: {
		change(e){
			console.log('e:',e);
		}
	}
}
```

### 设置禁用

如果需要禁用某项，需要在 `localdata` 属性的数据源中添加 `disable` 属性，而不是在组件中添加 `disable` 属性

```html
<template>
	<view>
		<uni-data-checkbox v-model="value" :localdata="range" @change="change"></uni-data-checkbox>
	</view>
</template>

```

```javascript

export default {
	data() { 
		return {
			value: 0,
			range: [{
					"value": 0,
					"text": "篮球"
				},
				{
					"value": 1,
					"text": "足球",
					// 禁用当前项
					"disable":true
				},
				{
					"value": 2,
					"text": "游泳"
				}
			]
		}
	},
	methods: {
		change(e){
			console.log('e:',e);
		}
	}
}
```


### 自定义选中颜色

设置 `selectedColor` 属性，可以修改组件选中后的图标及边框颜色

设置 `selectedTextColor` 属性，可以修改组件选中后的文字颜色，如不填写默认同 `selectedColor` 属性 ，`mode` 属性为 `tag` 时，默认为白色

```html
<template>
	<view>
		<uni-data-checkbox　selectedColor＝"red" selectedTextColor="red" multiple v-model="value" :localdata="range" @change="change"></uni-data-checkbox>
	</view>
</template>

```

```javascript

export default {
	data() { 
		return {
			value: [0,2],
			range: [{"value": 0,"text": "篮球"	},{"value": 1,"text": "足球"},{"value": 2,"text": "游泳"}]
		}
	},
	methods: {
		change(e){
			console.log('e:',e);
		}
	}
}
```

### 更多模式

设置 `mode` 属性，可以设置更多显示样式，目前内置样式有四种 `default/list/button/tag` 

如果需要禁用某项，需要在 `localdata` 属性的数据源中添加 `disable` 属性，而不是在组件中添加 `disable` 属性

```html
<template>
	<view>
		<!-- 默认 default -->
		<uni-data-checkbox v-model="value" :localdata="range" @change="change"></uni-data-checkbox>
		<!-- 列表 list ，显示左侧图标 -->
		<uni-data-checkbox mode="list" icon="left" v-model="value" :localdata="range" @change="change"></uni-data-checkbox>
		<!-- 列表 list ，显示右侧图标 -->
		<uni-data-checkbox mode="list" icon="right" v-model="value" :localdata="range" @change="change"></uni-data-checkbox>
		<!-- 按钮 button -->
		<uni-data-checkbox mode="button" v-model="value" :localdata="range" @change="change"></uni-data-checkbox>
		<!-- 标签 tag -->
		<uni-data-checkbox mode="tag" v-model="value" :localdata="range" @change="change"></uni-data-checkbox>
	</view>
</template>

```

```javascript

export default {
	data() { 
		return {
			value: 0,
			range: [{"value": 0,"text": "篮球"	},{"value": 1,"text": "足球"},{"value": 2,"text": "游泳"}]
		}
	},
	methods: {
		change(e){
			console.log('e:',e);
		}
	}
}
```


## API

### DataCheckbox Props

| 属性名			| 类型							|可选值									| 默认值| 说明																													|
| :-:					| :-:								|:-:										|:-:		| :-:																														|
|value/v-model|Array/String/Number|-											|-			|默认值，multiple=true时为 Array类型，否则为 String或Number类型	|
|localdata		|Array							|-											|-			|本地渲染数据，												|
|mode					| String						|default/list/button/tag|default|显示模式			|
|multiple			|Boolean						|-											|false	|是否多选		|
|min					|String/Number			|-											|-			|最小选择个数 ，multiple为true时生效		|
|max					|String/Number			|-											|-			|最大选择个数 ，multiple为true时生效		|
|wrap					|Boolean						|-											|-			|是否换行显示				|
|icon					|String							|left/right							|left		|list 列表模式下 icon 显示的位置	|
|selectedColor|String							|-											|#007aff|选中颜色|
|selectedTextColor|String					|-											|#333		|选中文本颜色，如不填写则自动显示|
|emptyText 	|String					|-											|暂无数据		|没有数据时显示的文字 ，本地数据无效|
|map 				|Object					|-											|{text:'text',value:'value'}		|字段映射，将text/value映射到数据中的其他字段|

#### Localdata Options

`localdata` 属性的格式为数组，数组内每项是对象，需要严格遵循如下格式

|属性名		| 说明				|
|:-:			| :-:				|
|text			|显示文本			|
|value		|选中后的值		|
|disable	|是否禁用			|

#### Mode Options 

|属性名		| 说明							|
|:-:			| :-:							|
|default	|默认值，横向显示		|
|list			|列表							|
|button		|按钮							|
|tag			|标签							|


### DataCheckbox Events

| 事件名	| 事件说明								| 返回参数|
| :-:		| :-:									| :-:			|
| @change| 选中状态改变时触发事件	| -				|




## 组件示例

点击查看：[https://hellouniapp.dcloud.net.cn/pages/extUI/data-checkbox/data-checkbox](https://hellouniapp.dcloud.net.cn/pages/extUI/data-checkbox/data-checkbox)