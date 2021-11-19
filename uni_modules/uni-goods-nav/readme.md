

### GoodsNav 商品导航
*已经支持在nvue页面中使用*

商品加入购物车，立即购买，组件名：`uni-goods-nav`，代码块： uGoodsNav。

### 使用方式

引用组件 

```javascript
import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
export default {
    components: {uniGoodsNav}
}
```

使用组件

```html
<uni-goods-nav :fill="true"  :options="options" :buttonGroup="buttonGroup"  @click="onClick" @buttonClick="buttonClick" />
```

```javascript
export default {
	data () {
	  return {
	    options: [{
			icon: 'headphones',
			text: '客服'
		}, {
			icon: 'shop',
			text: '店铺',
			info: 2,
			infoBackgroundColor:'#007aff',
			infoColor:"red"
		}, {
			icon: 'cart',
			text: '购物车',
			info: 2
		}],
	    buttonGroup: [{
	      text: '加入购物车',
	      backgroundColor: '#ff0000',
	      color: '#fff'
	    },
	    {
	      text: '立即购买',
	      backgroundColor: '#ffa200',
	      color: '#fff'
	    }
	    ]
	  }
	},
	methods: {
	  onClick (e) {
	    uni.showToast({
	      title: `点击${e.content.text}`,
	      icon: 'none'
	    })
	  },
	  buttonClick (e) {
	    console.log(e)
	    this.options[2].info++
	  }
	}
}
```

### 属性说明

|属性名		|类型	|默认值	|说明			|
|:-:		|:-:	|:-:	|:-:			|
|options	|Array	|-		|组件参数		|
|buttonGroup|Array	|-		|组件按钮组参数	|
|fill		|Boolean|false	|按钮是否平铺	|


**options 参数说明：**

|属性名				|类型	|默认值	|说明													|
|:-:				|:-:	|:-:	|:-:													|
|text				|String	|-		|显示文字												    |
|icon				|String	|		|图标，[参考](https://ext.dcloud.net.cn/plugin?id=28)	    |
|info				|Number	|0		|右上角数字角标											|
|infoBackgroundColor|String	|#ff0000|角标背景色												|
|infoColor			|String	|#fff	|角标前景色												|

**buttonGroup 参数说明：**

|属性名				|类型	|默认值	|说明		|
|:-:				|:-:	|:-:	|:-:		|
|text				|String	|-		|按钮文字		|
|backgroundColor	|String	|-		|按钮背景色	|
|color				|String	|-		|字体颜色		|

### 事件说明

|事件名			|说明				|返回值				|
|:-:			|:-:				|:-:				|
|@click			|左侧点击事件			|e = {index,content}|
|@buttonClick	|右侧按钮组点击事件	|e = {index,content}|

### 插件预览地址

[https://uniapp.dcloud.io/h5/pages/extUI/goods-nav/goods-nav](https://uniapp.dcloud.io/h5/pages/extUI/goods-nav/goods-nav)

## 组件示例

点击查看：[https://hellouniapp.dcloud.net.cn/pages/extUI/goods-nav/goods-nav](https://hellouniapp.dcloud.net.cn/pages/extUI/goods-nav/goods-nav)