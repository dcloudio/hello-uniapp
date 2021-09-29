

### Easyinput 增强输入框
> **组件名：uni-easyinput**
> 代码块： `uEasyinput`


easyinput 组件是对原生input组件的增强 ，是专门为配合表单组件[uni-forms](https://ext.dcloud.net.cn/plugin?id=2773)而设计的，easyinput 内置了边框，图标等，同时包含 input 所有功能


> **注意事项**
> 为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些错误。
> - 组件需要依赖 `sass` 插件 ，请自行手动安装
> - 如使用过程中有任何问题，或者您对uni-ui有一些好的建议，欢迎加入 uni-ui 交流群：871950839


### 平台差异说明

暂不支持在nvue页面中使用

### 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`components`。

如需通过`npm`方式使用`uni-ui`组件，另见文档：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)

### 基本用法

输入内容后，输入框尾部会显示清除按钮，点击可清除内容，如不需要展示图标，`clearable` 属性设置为 `false` 即可

`clearable` 属性设置为 `true` ，输入框聚焦且内容不为空时，才会显示内容

```html
<uni-easyinput v-model="value" placeholder="请输入内容"></uni-easyinput>
```


### 输入框带左右图标

设置 `prefixIcon` 属性来显示输入框的头部图标

设置 `suffixIcon` 属性来显示输入框的尾部图标 

注意图标当前只支持 `uni-icons` 内置的图标，当配置 `suffixIcon` 属性后，会覆盖 `:clearable="true"` 和 `type="password"` 时的原有图标

绑定 `@iconClick` 事件可以触发图标的点击 ，返回 `prefix` 表示点击左侧图标，返回 `suffix` 表示点击右侧图标

```html

<!-- 输入框头部图标 -->
<uni-easyinput prefixIcon="search" v-model="value" placeholder="请输入内容" @iconClick="onClick"></uni-easyinput>
<!-- 展示输入框尾部图标 -->
<uni-easyinput suffixIcon="search"  v-model="value" placeholder="请输入内容" @iconClick="onClick"></uni-easyinput>
```

### 输入框禁用

设置 `disable` 属性可以禁用输入框，此时输入框不可编辑

```html
<uni-easyinput disabled  v-model="value" placeholder="请输入内容"></uni-easyinput>
```

### 密码框

设置 `type="password"` 时，输入框内容将会不可见，由实心点代替，同时输入框尾部会显示眼睛图标，点击可切换内容显示状态

```html
<uni-easyinput type="password" v-model="password" placeholder="请输入密码"></uni-easyinput>
```

### 输入框聚焦

设置 `focus` 属性可以使输入框聚焦

如果页面存在多个设置 `focus` 属性的输入框，只有最后一个输入框的 `focus` 属性会生效

```html
<uni-easyinput focus v-model="password" placeholder="请输入内容"></uni-easyinput>
```


### 多行文本

设置 `type="textarea"` 时可输入多行文本

```html
<uni-easyinput type="textarea" v-model="value" placeholder="请输入内容"></uni-easyinput>
```

### 多行文本自动高度

设置 `type="textarea"` 时且设置 `autoHeight` 属性，可使用多行文本的自动高度，会跟随内容调整输入框的显示高度

```html
<uni-easyinput type="textarea" autoHeight v-model="value" placeholder="请输入内容"></uni-easyinput>
```

### 取消边框

设置 `:inputBorder="false"` 时可取消输入框的边框显示，同时搭配 `uni-forms` 的 `:border="true"` 有较好的效果

```html
<uni-forms border>
	<uni-forms-item label="姓名">
		<uni-easyinput :inputBorder="false" placeholder="请输入姓名"></uni-easyinput>
	</uni-forms-item>
	<uni-forms-item label="年龄">
		<uni-easyinput :inputBorder="false" placeholder="请输入年龄"></uni-easyinput>
	</uni-forms-item>
</uni-forms>
```


## API

### Easyinput Props

|属性名| 类型|	可选值|默认值|说明|
|:-:|:-:|:-:|:-:|:-:|
|value|String/ Number|-|-|输入内容|
|type|String|见 type Options|text|输入框的类型（默认text）|
|clearable|Boolean|-|true| 是否显示右侧清空内容的图标控件(输入框有内容且不禁用时显示)，点击可清空输入框内容|
|autoHeight|Boolean|-|false|	是否自动增高输入区域，type为textarea时有效|
|placeholder|String |-| - |	输入框的提示文字|
|placeholderStyle|String| -	| - |	placeholder的样式(内联样式，字符串)，如"color: #ddd"|
|focus|Boolean|-|false|是否自动获得焦点|
|disabled|Boolean|-|false|是否不可输入|
|maxlength|Number|-|140|最大输入长度，设置为 -1 的时候不限制最大长度|
|confirmType|String|-|done|设置键盘右下角按钮的文字，仅在type="text"时生效|
|clearSize|Number|-|15|清除图标的大小，单位px|
|prefixIcon|String|-|-|输入框头部图标	|
|suffixIcon|String|-|-|输入框尾部图标|
|trim|Boolean/String|见 trim Options	| false |	是否自动去除空格，传入类型为 Boolean 时，自动去除前后空格|
|inputBorder|Boolean|-|true|是否显示input输入框的边框|
|styles|Object|-|-|	样式自定义|
|passwordIcon|Boolean|-| true |	type=password 时，是否显示小眼睛图标|


#### Type Options

|属性名| 说明|
|:-:| :-:|
|text|文本输入键盘|
|textarea	|多行文本输入键盘|
|password	|密码输入键盘|
|number|数字输入键盘，注意iOS上app-vue弹出的数字键盘并非9宫格方式	|
|idcard|身份证输入键盘，仅支持微信、支付宝、百度、QQ小程序|
|digit|带小数点的数字键盘，仅支持微信、支付宝、百度、头条、QQ小程序	|

#### ConfirmType Options

平台差异与 [input](https://uniapp.dcloud.io/component/input) 相同

|属性名	| 说明|
|:-:| :-:|
|send|右下角按钮为“发送”	|
|search	|右下角按钮为“搜索”	|
|next|右下角按钮为“下一个”|
|go|右下角按钮为“前往”	|											
|done|右下角按钮为“完成”	|
	

#### Styles Options 
	
|属性名| 默认值 	|说明|
|:-:| :-:| :-:|
|color| #333|	输入文字颜色|
|disableColor	|#eee|	输入框禁用背景色|
|borderColor	|#e5e5e5	|	边框颜色|

#### Trim Options

传入类型为 `Boolean` 时，自动去除前后空格,传入类型为 `String` 时，可以单独控制，下面是可选值

|属性名|说明|
|:-:| :-:|
|both|去除两端空格|
|left|去除左侧空格|
|right|去除右侧空格|
|all|去除所有空格|
|none|不去除空格|


### Easyinput Events

|事件称名| 说明|返回值|
|:-:| :-:|:-:|
|@input|输入框内容发生变化时触发| -|
|@focus|输入框获得焦点时触发| -|
|@blur|输入框失去焦点时触发| -|
|@confirm|点击完成按钮时触发| -|
|@iconClick	|点击图标时触发| prefix/suffix	|


## 组件示例

点击查看：[https://hellouniapp.dcloud.net.cn/pages/extUI/easyinput/easyinput](https://hellouniapp.dcloud.net.cn/pages/extUI/easyinput/easyinput)