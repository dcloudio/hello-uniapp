
> `重要通知：组件升级更新 2.0.0 后，支持日期+时间范围选择，组件 ui 将使用日历选择日期，ui 变化较大，同时支持 PC 和 移动端。此版本不向后兼容，不再支持单独的时间选择（type=time）及相关的 hide-second 属性（时间选可使用内置组件 picker）。若仍需使用旧版本，可在插件市场下载*非uni_modules版本*，旧版本将不再维护`
## DatetimePicker 时间选择器
> **组件名：uni-datetime-picker**
> 代码块： `uDatetimePicker`


该组件的优势是，支持**时间戳**输入和输出（起始时间、终止时间也支持时间戳），可**同时选择**日期和时间。

若只是需要单独选择日期和时间，不需要时间戳输入和输出，可使用原生的 picker 组件。


___点击 picker 默认值规则：___

- 若设置初始值 value, 会显示在 picker 显示框中
- 若无初始值 value，则初始值 value 为当前本地时间 Date.now()， 但不会显示在 picker 显示框中


### 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`components`。

如需通过`npm`方式使用`uni-ui`组件，另见文档：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)

### 基本用法

在 ``template`` 中使用组件

```html
<template>
	<view class="page">
		<text class="example-info">可以同时选择日期和时间的选择器</text>
		<uni-section :title="'日期用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker type="date" :value="single" start="2021-3-20" end="2021-6-20" @change="change" />
		</view>
		<uni-section :title="'时间戳用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker returnType="timestamp" @change="changeLog($event)" start="2021-3-20" end="2021-5-20"  />
		</view>
		<uni-section :title="'日期时间用法：' + datetimesingle" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker type="datetime" v-model="datetimesingle" @change="changeLog" />
		</view>
		<uni-section :title="'v-model用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="single" />
		</view>
		<uni-section :title="'插槽用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="single">我是一个插槽，点击我</uni-datetime-picker>
		</view>
		<uni-section :title="'无边框用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="single" :border="false" />
		</view>
		<uni-section :title="'disabled用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="single" disabled />
		</view>
		<uni-section :title="'日期范围用法：' + '[' + range + ']'" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="range" type="daterange" start="2021-3-20" end="2021-5-20"
				rangeSeparator="至" />
		</view>
		<uni-section :title="'日期时间范围用法：' + '[' + datetimerange + ']' " type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="datetimerange" type="datetimerange"
				start="2021-3-20 12:00:00" end="2021-6-20 20:00:00" rangeSeparator="至" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				single: '2021-04-3',
				datetimesingle: '2021-04-3',
				range: ['2021-03-8', '2021-4-20'],
				datetimerange: ['2021-03-20 20:10:10', '2021-05-10 10:10:10'],
			}
		},

		watch: {
			datetimesingle(newval) {
				console.log('单选:', this.datetimesingle);
			},
			range(newval) {
				console.log('范围选:', this.range);
			},
			datetimerange(newval) {
				console.log('范围选:', this.datetimerange);
			}
		},
		mounted() {
			setTimeout(() => {
				this.datetimesingle = '2021-5-1'
				this.single = '2021-5-1'
			},1000)
		},

		methods:{
			change(e) {
				this.single = e
				console.log('-change事件:', e);
			}
		}
	}
</script>

<style lang="scss">
	@import '@/common/uni-nvue.scss';
</style>
```

## API

### DatetimePicker Props

|属性名						|类型														|默认值		|值域																	|说明																											|
|:-:							|:-:														|:-:			|																			|:-:																											|
|type							|String													|datetime	|date/daterange/datetime/datetimerange|选择器类型																								|
|value						|String、Number、Array(范围选择)、Date|-				|-																		|输入框当前值																							|
|start						|String、Number									|-				|-																		|最小值，可以使用日期的字符串（String）、时间戳（Number）	|
|end							|String、Number									|-				|-																		|最大值，可以使用日期的字符串（String）、时间戳（Number）	|
|return-type			|String													|string		|timestamp 、string、date										|返回值格式																								|
|border						|Boolean								|true			|																			|是否有边框																								|
|rangeSeparator		|String													|'-'			|-																		|选择范围时的分隔符																				|
|placeholder			|String													|-				|-																		|非范围选择时的占位内容																		|
|start-placeholder|String													|-				|-																		|范围选择时开始日期的占位内容															|
|end-placeholder	|String													|-				|-																		|范围选择时结束日期的占位内容															|
|disabled					|Boolean								|false		|																			|是否不可选择																							|
|clear-icon				|Boolean								|true			|																			|是否显示清除按钮														|
|hide-second			|Boolean								|false		|																			|是否显示秒，只显示时分												|




### DatetimePicker Events

|事件名称	|说明																								|返回值																																													|
|:-:			|:-:																								|:-:																																														|
|change		|确定日期时间时触发的事件，参数为当前选择的日期对象	|单选返回日期字符串，如：'2010-02-3'；范围选返回日期字符串数组，如：['2020-10-1',  '2021-4-1']	|
|maskClick|点击遮罩层触发																			|-																																															|

### Popup Methods

|方法称名	|说明|参数|
|:-:|:-:|:-:|
|show|打开弹出层|-|
|close|关闭弹出层	|-|
|clear|清除上次选中的状态和值|-|

 ### 

## 组件示例

点击查看：[https://hellouniapp.dcloud.net.cn/pages/extUI/datetime-picker/datetime-picker](https://hellouniapp.dcloud.net.cn/pages/extUI/datetime-picker/datetime-picker)