

### NavBar 导航栏
*已经支持在nvue页面中使用*

导航栏组件，主要用于头部导航，组件名：``uni-nav-bar``，代码块： uNavBar。

### 使用方式

在 ``script`` 中引用组件 

```javascript
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
export default {
    components: {uniNavBar}
}
```

在 ``template`` 中使用组件

```html
<uni-nav-bar left-icon="back" left-text="返回" right-text="菜单" title="导航栏组件"></uni-nav-bar>
```

### 属性说明

|属性名				|类型	|默认值	|说明																						|
|:-:				|:-:	|:-:	|:-:																						|
|title				|String	|-		|标题文字																					|
|leftText			|String	|-		|左侧按钮文本																				|
|rightText			|String	|-		|右侧按钮文本																				|
|leftIcon			|String	|-		|左侧按钮图标（图标类型参考 [Icon 图标](http://ext.dcloud.net.cn/plugin?id=28) type 属性）	|
|rightIcon			|String	|-		|右侧按钮图标（图标类型参考 [Icon 图标](http://ext.dcloud.net.cn/plugin?id=28) type 属性）	|
|color				|String	|#000000|图标和文字颜色																				|
|backgroundColor	|String	|#FFFFFF|导航栏背景颜色																				|
|fixed				|Boolean|false	|是否固定顶部																				|
|statusBar			|Boolean|false	|是否包含状态栏																			|
|shadow				|Boolean|false	|导航栏下是否有阴影																			|

### 插槽说明

开发者使用 NavBar 时，支持向 NavBar 里插入不同内容，以达到自定义的目的。

|slot名	|说明				|
|:-:	|:-:				|
|left	|向导航栏左侧插入	|
|right	|向导航栏右侧插入	|
|default|向导航栏中间插入	|

```html
<uni-nav-bar>
    <view>标题栏</view>
    <view slot="left">left</view>
    <view slot="right">right</view>
</uni-nav-bar>
```

### 事件说明

|事件名			|说明				|返回值	|
|:-:			|:-:				|:-:	|
|@clickLeft	|左侧按钮点击时触发	|-		|
|@clickRight	|右侧按钮点击时触发	|-		|

### 插件预览地址

[https://uniapp.dcloud.io/h5/pages/extUI/nav-bar/nav-bar](https://uniapp.dcloud.io/h5/pages/extUI/nav-bar/nav-bar)

## 组件示例

点击查看：[https://hellouniapp.dcloud.net.cn/pages/extUI/nav-bar/nav-bar](https://hellouniapp.dcloud.net.cn/pages/extUI/nav-bar/nav-bar)