

## Link 链接
> **组件名：uni-link**
> 代码块： `uLink`


uni-link是一个外部网页超链接组件，在小程序内复制url，在app内打开外部浏览器，在h5端打开新网页。

### 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`components`。

如需通过`npm`方式使用`uni-ui`组件，另见文档：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)

### 基本用法

在 ``template`` 中使用组件

```html
<uni-link href="https://uniapp.dcloud.io/" text="https://uniapp.dcloud.io/"></uni-link>
```

## API

### Link Props

|属性名				|类型		|默认值										|说明							|
|:-:					|:-:		|:-:										|:-:							|
|href					|String	|-											|链接地址						|
|text					|String	|-											|显示文字						|
|download     |String |-                      |H5平台下载文件名        |
|showUnderLine|Boolean|true										|是否显示下划线					|
|copyTips			|String	|已自动复制网址，请在手机浏览器里粘贴该网址	|在小程序端复制链接时的提示语	|
|color				|String	|#999999								|链接文字颜色					|
|fontSize			|String	|14											|链接文字大小，单位px			|


### Link Slots

|名称|说明|					
|:-:|:-:|						
|default|自定义内容，回覆盖原有的内容显示（仅 vue 支持）|


## 组件示例

点击查看：[https://hellouniapp.dcloud.net.cn/pages/extUI/link/link](https://hellouniapp.dcloud.net.cn/pages/extUI/link/link)