

## NoticeBar 通告栏
> **组件名：uni-notice-bar**
> 代码块： `uNoticeBar`


通告栏组件 。

### 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`components`。

如需通过`npm`方式使用`uni-ui`组件，另见文档：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)
 
### 基本用法

在 ``template`` 中使用组件

```html
<!-- 基本用法 -->
<uni-notice-bar single="true" text="[单行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>
<uni-notice-bar text="[多行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>

<!-- 文字滚动 -->
<uni-notice-bar scrollable="true" single="true" text="[单行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>

<!-- 显示图标 -->
<uni-notice-bar showIcon="true" text="[多行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>

<!-- 显示关闭按钮 -->
<uni-notice-bar showClose="true" showIcon="true" text="这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>

<!-- 查看更多 -->
 <uni-notice-bar @getmore="getMore" :showGetMore="true" moreText="查看更多" single="true" text="[单行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>
```

> **注意**
> 如果需要异步获取内容后展示需要使用`v-if`进行控制，`<uni-notice-bar v-if="text" :text="text"></uni-notice-bar>`


## NoticeBar API

### NoticeBar Props

|属性名				|类型	|默认值	|说明												|
|:-:				|:-:	|:-:	|:-:												|
|speed				|Number	|100	|文字滚动的速度，默认100px/秒						|
|text				|String	|-		|显示文字											|
|background-color	|String	|#fffbe8|背景颜色											|
|color				|String	|#de8c17|文字颜色											|
|moreColor			|String	|#999999|查看更多文字的颜色									|
|moreText			|String	|-		|设置“查看更多”的文本								|
|single				|Boolean|false	|是否单行											|
|scrollable			|Boolean|false	|是否滚动，为true时，NoticeBar为单行				|
|showIcon			|Boolean|false	|是否显示左侧喇叭图标								|
|showClose			|Boolean|false	|是否显示左侧关闭按钮								|
|showGetMore		|Boolean|false	|是否显示右侧查看更多图标，为true时，NoticeBar为单行|

### NoticeBar Events

|事件名称	|说明						|返回值	|
|:-:		|:-:						|:-:	|
|@click		|点击 NoticeBar 触发事件	|-		|
|@close		|关闭 NoticeBar 触发事件	|-		|
|@getmore	|点击”查看更多“时触发事件	|-		|


## 组件示例

点击查看：[https://hellouniapp.dcloud.net.cn/pages/extUI/notice-bar/notice-bar](https://hellouniapp.dcloud.net.cn/pages/extUI/notice-bar/notice-bar)