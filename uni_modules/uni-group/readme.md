

### Group 分组

分组组件可用于将组件分组，添加间隔，以产生明显的区块，组件名：``uni-group``，代码块： uGroup。

### 平台差异说明

如无特殊说明，则全平台可用

### 组件使用注意事项

为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些错误。

- 组件需要依赖 `sass` 插件 ，请自行手动安装
- 如使用过程中有任何问题，或者您对uni-ui有一些好的建议，欢迎加入 uni-ui 交流群：871950839


### 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`components`。

如需通过`npm`方式使用`uni-ui`组件，另见文档：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)


### 使用方式

在 ``template`` 中使用组件

```html
<uni-group title="分组1" top="20">
    <view>分组1 的内容</view>
    <view>分组1 的内容</view>
</uni-group>

<uni-group title="分组2">
    <view>分组2 的内容</view>
    <view>分组2 的内容</view>
</uni-group>
```

### 属性说明

|属性名|类型|默认值|说明|
|:-:|:-:|:-:|:-:|
|title|String|-|主标题|
|top|Number|-|分组间隔|
|mode|String|''|模式 ，card 为卡片模式|



## 组件示例

点击查看：[https://hellouniapp.dcloud.net.cn/pages/extUI/group/group](https://hellouniapp.dcloud.net.cn/pages/extUI/group/group)