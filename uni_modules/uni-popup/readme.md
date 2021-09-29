

## Popup 弹出层
> **组件名：uni-popup**
> 代码块： `uPopup`
> 关联组件：`uni-popup-dialog`,`uni-popup-message`,`uni-popup-share`,`uni-transition`


弹出层组件，在应用中弹出一个消息提示窗口、提示框等


> **注意事项**
> 为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些错误。
> - 组件需要依赖 `sass` 插件 ，请自行手动安装
> - `uni-popup-message` 、 `uni-popup-dialog` 等扩展ui组件，需要和 `uni-popup` 配套使用，暂不支持单独使用
> - `nvue` 中使用 `uni-popup` 时，尽量将组件置于其他元素后面，避免出现层级问题
> - `uni-popup` 并不能完全阻止页面滚动，可在打开 `uni-popup` 的时候手动去做一些处理，禁止页面滚动
> - 如果想在页面渲染完毕后就打开 `uni-popup` ，请在 `onReady` 或 `mounted` 生命周期内调用，确保组件渲染完毕
> - 在微信小程序开发者工具中，启用真机调试，popup 会延时出现，是因为 setTimeout 在真机调试中的延时问题导致的，预览和发布小程序不会出现此问题
> - 使用 `npm` 方式引入组件，如果确认引用正确，但是提示未注册组件或显示不正常，请尝试重新编译项目
> - `uni-popup` 中尽量不要使用 `scroll-view` 嵌套过多的内容，可能会影响组件的性能，导致组件无法打开或者打开卡顿
> - `uni-popup` 不会覆盖原生 tabbar 和原生导航栏
> - 组件支持 nvue ，需要在 `manifest.json > app-plus` 节点下配置 `"nvueStyleCompiler" : "uni-app"` 
> - 如使用过程中有任何问题，或者您对uni-ui有一些好的建议，欢迎加入 uni-ui 交流群：871950839



### 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`components`。

如需通过`npm`方式使用`uni-ui`组件，另见文档：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)


### 基本用法 

**示例**

```html
<button @click="open">打开弹窗</button>
<uni-popup ref="popup" type="bottom">底部弹出 Popup</uni-popup>
```

```javascript
export default {
   methods:{
      open(){
        // 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持 ['top','left','bottom','right','center']
        this.$refs.popup.open('top')
      }
   }
}

```

### 设置主窗口背景色

在大多数场景下，并不需要设置 `background-color` 属性，因为`uni-popup`的主窗口默认是透明的，在向里面插入内容的时候 ，样式完全交由用户定制，如果设置了背景色 ，例如 `uni-popup-dialog` 中的圆角就很难去实现，不设置背景色，更适合用户去自由发挥。

而也有特例，需要我们主动去设置背景色，例如 `type = 'bottom'` 的时候 ，在异型屏中遇到了底部安全区问题（如 iphone 11），因为 `uni-popup`的主要内容避开了安全区（设置`safe-area:true`），导致底部的颜色我们无法自定义，这时候使用 `background-color` 就可以解决这个问题。 

**示例**

```html
<button @click="open">打开弹窗</button>
<uni-popup ref="popup" type="bottom" background-color="#fff">底部弹出 Popup</uni-popup>
```

### 禁用打开动画
在某些场景 ，可能不希望弹层有动画效果 ，只需要将 `animation` 属性设置为 `false` 即可以关闭动画。

**示例**

```html
<button @click="open">打开弹窗</button>
<uni-popup ref="popup" type="center" :animation="false">中间弹出 Popup</uni-popup>
```

### 禁用点击遮罩关闭
默认情况下，点击遮罩会自动关闭`uni-popup`，如不想点击关闭，只需将`mask-click`设置为`false`，这时候要关闭`uni-popup`，只能手动调用 `close` 方法。

**示例**

```html
<button @click="open">打开弹窗</button>
<uni-popup ref="popup" :mask-click="false">
	<text>Popup</text>
	<button @click="close">关闭</button>
</uni-popup>
```

```javascript
export default {
	data() {
		return {}
	},
	onReady() {},
	methods: {
		open() {
			this.$refs.popup.open('top')
		},
		close() {
			this.$refs.popup.close()
		}
	}
}

```

## API

### Popup Props 

|属性名|类型|默认值|说明|
|:-:|:-:|:-:|:-:|
|animation|Boolean|true|是否开启动画|
|type|String|'center'|弹出方式|
|mask-click|Boolean|true|蒙版点击是否关闭弹窗|
|background-color|String|'none'|主窗口背景色|
|safe-area|Boolean|true|是否适配底部安全区|

#### Type Options

|属性名|说明|
|:-:| :-:|
|top|顶部弹出	|
|center|居中弹出|
|bottom|底部弹出|
|left|左侧弹出|
|right|右侧弹出|
|message|预置样式 ：消息提示|
|dialog|预置样式 ：对话框|
|share|预置样式 ：底部弹出分享示例	|


### Popup Methods

|方法称名	|说明|参数|
|:-:|:-:|:-:|
|open|打开弹出层|open(String:type) ，如果参数可代替 type 属性|
|close|关闭弹出层	|-|


### Popup Events

|事件称名|说明|返回值|
|:-:|:-:|:-:|
|change|组件状态发生变化触发|e={show: true｜false,type:当前模式}|
|maskClick|点击遮罩层触发|-|


## 扩展组件说明
`uni-popup` 其实并没有任何样式，只提供基础的动画效果，给用户一个弹出层解决方案，仅仅是这样并不能满足开发需求，所以我们提供了三种基础扩展样式

### uni-popup-message 提示信息

将 `uni-popup` 的`type`属性改为 `message`，并引入对应组件即可使用消息提示 ，*该组件不支持单独使用*

**示例**

```html
<uni-popup ref="popup" type="message">
	<uni-popup-message type="success" message="成功消息" :duration="2000"></uni-popup-message>
</uni-popup>
```

### PopupMessage Props

|属性名|类型|默认值|说明|
|:-:|:-:|:-:|:-:|
|type|String|success|消息提示主题|
|message|String|-|消息提示文字|
|duration|Number|3000|消息显示时间，超过显示时间组件自动关闭，设置为0 将不会关闭，需手动调用 close 方法关闭|

#### Type Options

|属性名|说明|
|:-:| :-:|
|success|成功	|
|warn|警告|
|error|失败|
|info|消息|

### PopupMessage Slots

|名称|说明|					
|:-:|:-:|						
|default|消息内容，会覆盖 message 属性|

### uni-popup-dialog 对话框

将 `uni-popup` 的`type`属性改为 `dialog`，并引入对应组件即可使用对话框 ，*该组件不支持单独使用*

**示例**

```html
<button @click="open">打开弹窗</button>
<uni-popup ref="popup" type="dialog">
	<uni-popup-dialog mode="input" message="成功消息" :duration="2000" :before-close="true" @close="close" @confirm="confirm"></uni-popup-dialog>
</uni-popup>
```

```javascript
export default {
	methods: {
		open() {
			this.$refs.popup.open()
		},
		/**
		 * 点击取消按钮触发
		 * @param {Object} done
		 */
		close() {
			// TODO 做一些其他的事情，before-close 为true的情况下，手动执行 close 才会关闭对话框
			// ...
			this.$refs.popup.close()
		},
		/**
		 * 点击确认按钮触发
		 * @param {Object} done
		 * @param {Object} value
		 */
		confirm(value) {
			// 输入框的值
			console.log(value)
			// TODO 做一些其他的事情，手动执行 close 才会关闭对话框
			// ...
			this.$refs.popup.close()
		}
	}
}
```

### PopupDialog Props

|属性名|类型|默认值|说明|
|:-:|:-:|:-:|:-:|
|type|String|success|对话框标题主题，可选值： success/warn/info/error|
|mode|String|base| 对话框模式，可选值：base（提示对话框）/input（可输入对话框）|
|title|String|-|对话框标题|
|content|String|-|对话框内容，base模式下生效|
|value| String\Number|-|输入框默认值，input模式下生效|
|placeholder|String|-|输入框提示文字，input模式下生效|
|before-close|Boolean|false	| 是否拦截按钮事件，如为true，则不会关闭对话框，关闭需要手动执行 uni-popup 的 close 方法|

#### PopupDialog Events

|事件称名	|说明|返回值|
|:-:|:-:|:-:|
|close|点击dialog取消按钮触发|-|
|confirm|点击dialog确定按钮触发|e={value:input模式下输入框的值}|

### PopupDialog Slots

|名称|说明|					
|:-:|:-:|						
|default|自定义内容，回覆盖原有的内容显示|

### uni-popup-share 分享示例

分享示例，不作为最终可使用的组件，只做为样式组件，供用户自行修改，`后续的开发计划是实现实际的分享逻辑，参数可配置`。

将 `uni-popup` 的 `type` 属性改为 `share`，并引入对应组件即可使用 ，*该组件不支持单独使用*

**示例**

```html
<uni-popup ref="popup" type="share">
	<uni-popup-share title="分享到" @select="select"></uni-popup-share>
</uni-popup>
```

### PopupShare Props

|属性名|类型|默认值|说明|
|:-:|:-:|:-:| :-:			|
|title|String|-|分享弹窗标题|
|before-close|Boolean|false	| 是否拦截按钮事件，如为true，则不会关闭对话框，关闭需要手动执行 uni-popup 的 close 方法|

### PopupShare Events

|事件称名|说明|返回值|
|:-:|:-:|:-:|
|select|选择触发|e = {item,index}：所选参数|

**Tips**
- share 分享组件，只是作为一个扩展示例，如果需要修改数据源，请到组件内修改

## 帮助
在使用中如遇到无法解决的问题，请提 [Issues](https://github.com/dcloudio/uni-ui/issues) 给我们。



## 组件示例

点击查看：[https://hellouniapp.dcloud.net.cn/pages/extUI/popup/popup](https://hellouniapp.dcloud.net.cn/pages/extUI/popup/popup)