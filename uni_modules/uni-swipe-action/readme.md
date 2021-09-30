

## SwipeAction 滑动操作
> **组件名：uni-swipe-action**
> 代码块： `uSwipeAction`、`uSwipeActionItem`


通过滑动触发选项的容器

> **注意事项**
> 为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些错误。
> - swipeAction的跟手联动是非常考验性能的。为了提高交互体验，本组件在 app 端 vue 页面、h5、微信小程序使用了wxs 技术，nvue 页面使用 bindingx 技术，可以达到流畅的体验。在其他小程序平台由于底层不支持优化技术，只能使用使用普通 js ，此时性能一般。
> - `uni-swipe-action` 和 `uni-swipe-action-item` 需要同时使用
> - `uni-swipe-action` 不能嵌套在 `swiper` 中使用 
> - 长列表不建议使用 autoClose属性，会影响组件性能，造成卡顿，原因是打开之后要通知其他已经打开的组件关闭，会导致多个组件重新渲染
> - 事件中传入 `$event` 获取额外参数
> - 向下兼容，需要将 `options` 属性替换成 `right-options`
> - 如使用过程中有任何问题，或者您对uni-ui有一些好的建议，欢迎加入 uni-ui 交流群：871950839


### 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`components`。

如需通过`npm`方式使用`uni-ui`组件，另见文档：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)


## 基本用法

在 ``template`` 中的使用

```html
<uni-swipe-action>
	<!-- 基础用法 -->
	<uni-swipe-action-item :right-options="options" :left-options="options" @click="onClick" @change="change">
		<view>SwipeAction 基础使用场景</view>
	</uni-swipe-action-item>
	<!-- 使用插槽 （请自行给定插槽内容宽度）-->
	<uni-swipe-action-item>
		<template v-slot:left>
			<view><text>置顶</text></view>
		</template>
		<view>
			<text >使用插槽</text>
		</view>
		<template v-slot:right>
			<view><text>删除</text></view>
		</template>
	</uni-swipe-action-item>
	<!-- 混合用法 -->
	<uni-swipe-action-item :right-options="options">
		<template v-slot:left>
			<view><text>置顶</text></view>
		</template>
		<view><text>混合使用</text></view>
	</uni-swipe-action-item>
</uni-swipe-action>

<!-- 禁止滑动 -->
<uni-swipe-action>
	<uni-swipe-action-item :disabled="true" :right-options="options">
		<view>SwipeAction 基础使用场景</view>
	</uni-swipe-action-item>
</uni-swipe-action>

<!-- 按组使用 -->
<uni-swipe-action>
    <uni-swipe-action-item :right-options="options"  @click="bindClick" @change="swipeChange($event, index)">
		<view >item1</view>
    </uni-swipe-action-item>
    <uni-swipe-action-item :right-options="options"  @click="bindClick" @change="swipeChange($event, index)">
		<view>item2</view>
    </uni-swipe-action-item>
    <uni-swipe-action-item :right-options="options"  @click="bindClick" @change="swipeChange($event, index)">
		<view>item3</view>
    </uni-swipe-action-item>
</uni-swipe-action>

```


```javascript
export default {
  data(){
    return {
      options:[
        {
            text: '取消',
            style: {
                backgroundColor: '#007aff'
            }
        }, {
            text: '确认',
            style: {
                backgroundColor: '#dd524d'
            }
        }
      ]
    }
  },
  methods:{
    onClick(e){
      console.log('点击了'+(e.position === 'left' ? '左侧' : '右侧') + e.content.text + '按钮')
    },
    swipeChange(e,index){
      console.log('当前状态：'+ e +'，下标：' + index)
    }
  }
}

```

## API

### SwipeAciton Props

|属性名|类型|可选值|默认值|是否必填|说明|
|:-:|:-:|:-:|:-:|:-:|:-:|
|show|String|left/right/none|none	|否|开启关闭组件，auto-close = false 时生效|
|threshold|Number|-|20|否|滑动阙值|
|disabled|Boolean|-|false|否|是否禁止滑动|
|autoClose|Boolean|-|true|否|其他组件开启的时候，当前组件是否自动关闭，**注意：长列表使用会有性能问题**|
|left-options|Array/Object	|-|-|否|左侧选项内容及样式|
|right-options|Array/Object	|-|-|否|右侧选项内容及样式|

#### LeftOptions & RightOptions Options

|参数|类型|是否必填	|说明|
|:-:|:-:|:-:|:-:|
|text|String|是|按钮的文字	|
|style|Object|否|按钮样式{backgroundColor,color,fontSize}，backgroundColor默认为：#C7C6CD，color默认为：#FFFFFF，fontSize默认为：14px	|



### SwipeAction Events

|事件称名	|说明|返回值|
|:-:|:-:|:-:|
|@click|点击选项按钮时触发事件|e = {content,index} ，content（点击内容）、index（下标）、position (位置信息)	|
|@change|组件打开或关闭时触发|left:左侧 ，right：右侧，none：关闭|

### SwipeAction Methods

方法通过 ref 调用 

|方法称名	|说明|
|:-:|:-:|
|resize()|动态添加数据后，如不能正常滑动，需要主动调用此方法，微信小程序、h5、app-vue 不生效|
|close-all()|关闭所有已经打开的组件|
### SwipeAction Slots

|名称|说明|
|:-:|:-:|
|-|默认插槽自定义显示内容|
|default|默认内容插槽|
|left|左侧滑动内容	，会覆盖	leftOptions 内容|
|right|右侧滑动内容	，会覆盖	rightOptions 内容|

> **提示**
> - iOS 端由于存在bounce效果，滑动体验略差，建议禁止bounce效果，禁止方式如下：
> ```javascript
> {
> 	"path": "swipe-action/swipe-action",
> 	"style": {
> 		"navigationBarTitleText": "SwipeAction 滑动操作",
> 		"disableScroll":true,
> 		"app-plus":{
> 			"bounce":"none"
> 		}
> 	}
> }
> ```


### Q&A
1. Q：动态加载数据，组件滑动失效是怎么回事
- A：是因为组件会在加载的时候获取相应的节点信息数据 ，获取需要滑动的距离，所以有时候动态加载数据之后，可能是时机的问题，导致节点信息获取失败 ，那么组件就不能正常滑动。
- A：如果是在其他页面通过 vuex 或者uni.$emit 等手段来更新其他页面 uni-swipe-action 数据 ，同样会发生不能滑动的现象，原因是页面隐藏后是不能获取到页面信息的，所以回到 uni-swipe-action 页面后，新增的组件节点信息获取肯定是错误的，所以不能滑动。
- A：值的高兴的是在 1.2.2 版本中重构了组件滑动逻辑 ，在微信小程序、h5、app-vue 中使用了 wxs 优化滑动性能，并且不需要担心动态新增组件导致组件无法滑动的问题，节点信息在滑动时实时获取。
- A：因为其他平台无法使用 wxs ，所以还是会出现无法滑动的问题怎么处理？1.2.2 版本提供了 resize() 方法，无法滑动时调用 resize() 方法重新渲染组件即可，调用方法时要保证节点已经渲染完毕。

2. Q：运行到 nvue 下没有样式
- A：因为 nvue 下样式默认不能使用复杂的css选择器，所以需要在 manifest.json 中配置  "nvueStyleCompiler" 属性
	```json
	// manifest.json
	{
		 "nvueStyleCompiler" : "uni-app",
	}
	```

## 组件示例

点击查看：[https://hellouniapp.dcloud.net.cn/pages/extUI/swipe-action/swipe-action](https://hellouniapp.dcloud.net.cn/pages/extUI/swipe-action/swipe-action)