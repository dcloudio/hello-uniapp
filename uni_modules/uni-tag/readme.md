

## Tag 标签
> **组件名：uni-tag**
> 代码块： `uTag`


用于展示1个或多个文字标签，可点击切换选中、不选中的状态 。

### 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`components`。

如需通过`npm`方式使用`uni-ui`组件，另见文档：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)

### 基本用法

在 ``template`` 中使用组件
```html
<uni-tag text="标签"></uni-tag>
<uni-tag text="标签" type="error" :circle="true"></uni-tag>
<uni-tag text="标签" @click="bindClick"></uni-tag>
```

## API

### Tag Props

|属性名		|类型		|默认值	|说明																											|
|:-:			|:-:		|:-:		|:-:																											|
|text			|String	|-			|标签内容																										|
|size			|String	|normal	|大小尺寸，可选值：normal、small																				|
|type			|String	|default|颜色类型，可选值：default（灰色）、primary（蓝色）、success（绿色）、warning(黄色)、error(红色)、royal(紫色)	|
|disabled	|Boolean|false	|是否为禁用状态																									|
|inverted	|Boolean|false	|是否无需背景颜色（空心标签）																					|
|circle		|Boolean|false	|是否为圆角																										|


### Tag Events

|事件称名		|说明							|返回值	|
|:-:			|:-:							|:-:	|
|@click		|点击 Tag 触发事件	|-		|



## 组件示例

点击查看：[https://hellouniapp.dcloud.net.cn/pages/extUI/tag/tag](https://hellouniapp.dcloud.net.cn/pages/extUI/tag/tag)