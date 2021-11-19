

## NumberBox 数字输入框
> **组件名：uni-number-box**
> 代码块： `uNumberBox`


带加减按钮的数字输入框。

### 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`components`。

如需通过`npm`方式使用`uni-ui`组件，另见文档：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)

### 基本用法

在 ``template`` 中使用组件

```html
<uni-number-box></uni-number-box>
<uni-number-box v-model = "vModelValue" />
<uni-number-box :min="0" :max="9"></uni-number-box>
<uni-number-box @change="bindChange"></uni-number-box>
```

## API

### NumberBox Props

|属性名				|类型		|默认值	|说明										|
|:-:					|:-:		|:-:		|:-:										|
|value/v-model|Number	|0			|输入框当前值						|
|min					|Number	|0			|最小值									|
|max					|Number	|100		|最大值									|
|step					|Number	|1			|每次点击改变的间隔大小	|
|disabled			|Boolean|false	|是否为禁用状态					|

### NumberBox Events

|事件名称	|说明																				|返回值	|
|:-:		|:-:																				|:-:		|
|change	|输入框值改变时触发的事件，参数为输入框当前的 value	|-			|
|focus	|输入框聚焦时触发的事件，参数为 event 对象	|-			|
|blur	|输入框失焦时触发的事件，参数为 event 对象	|-			|


## 组件示例

点击查看：[https://hellouniapp.dcloud.net.cn/pages/extUI/number-box/number-box](https://hellouniapp.dcloud.net.cn/pages/extUI/number-box/number-box)