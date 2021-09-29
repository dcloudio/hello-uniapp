

## CountDown 倒计时
> **组件名：uni-countdown**
> 代码块： `uCountDown`


倒计时组件。

### 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`components`。

如需通过`npm`方式使用`uni-ui`组件，另见文档：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)

### 基本用法

在 ``template`` 中使用组件

```html
<!-- 一般用法 -->
<uni-countdown :day="1" :hour="1" :minute="12" :second="40"></uni-countdown>

<!-- 不显示天数 -->
<uni-countdown :show-day="false" :hour="12" :minute="12" :second="12"></uni-countdown>

<!-- 修改颜色 -->
<uni-countdown color="#FFFFFF" background-color="#00B26A" border-color="#00B26A" :day="1" :hour="2" :minute="30" :second="0"></uni-countdown>
```

## API

### Countdown Props 

|属性名				|类型	|默认值	|说明				|
|:-:				|:-:	|:-:	|:-:				|
|backgroundColor	|String	|#FFFFFF|背景色				|
|color				|String	|#000000|文字颜色			|
|splitorColor		|String	|#000000|分割符号颜色			|
|day				|Number	|0		|天数				|
|hour				|Number	|0		|小时				|
|minute				|Number	|0		|分钟				|
|second				|Number	|0		|秒					|
|showDay			|Boolean|true	|是否显示天数		|
|showColon			|Boolean|true	|是否以冒号为分隔符	|
|start			|Boolean|true	|是否初始化组件后就开始倒计时|

### Countdown Events

|事件称名	|说明							|返回值	|
|:-:		|:-:							|:-:		|
|@timeup|倒计时时间到触发事件	|-			|


## 组件示例

点击查看：[https://hellouniapp.dcloud.net.cn/pages/extUI/countdown/countdown](https://hellouniapp.dcloud.net.cn/pages/extUI/countdown/countdown)