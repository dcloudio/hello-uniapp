

## Fav 收藏按钮
> **组件名：uni-fav**
> 代码块： `uFav`


用于收藏功能，可点击切换选中、不选中的状态。

### 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`components`。

如需通过`npm`方式使用`uni-ui`组件，另见文档：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)

### 基本用法

在 ``template`` 中使用组件

```html
<uni-fav :checked="checked" @click="onClick"/>
<uni-fav :checked="checked" class="favBtn" circle="true" bgColor="#dd524d" bgColorChecked="#007aff" @click="onClick"/>
```

## API

### Fav Props

|属性名				|类型	|默认值												|说明				|
|:-:				|:-:	|:-:												|:-:				|
|star				|Boolean|true												|按钮是否带星星		|
|bgColor			|String	|#eeeeee											|未收藏时的背景色	|
|bgColorChecked	|String	|#007aff											|已收藏时的背景色	|
|fgColor			|String	|#666666											|未收藏时的文字颜色	|
|fgColorChecked	|String	|#FFFFFF											|已收藏时的文字颜色	|
|circle				|Boolean|false												|是否为圆角			|
|checked			|Boolean|false												|是否为已收藏		|
|contentText		|Object	|```{contentDefault: '收藏',contentFav: '已收藏'}```|收藏按钮文字		|


### Fav Events

|事件称名	|说明					|返回值	|
|:-:		|:-:					|:-:	|
|click		|点击 fav按钮 触发事件	|-		|


## 组件示例

点击查看：[https://hellouniapp.dcloud.net.cn/pages/extUI/fav/fav](https://hellouniapp.dcloud.net.cn/pages/extUI/fav/fav)