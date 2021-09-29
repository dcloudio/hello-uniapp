

## SearchBar 搜索栏

> **组件名：uni-search-bar**
> 代码块： `uSearchBar`


评分组件

### 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`components`。

如需通过`npm`方式使用`uni-ui`组件，另见文档：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)

### 基本用法

在 ``template`` 中使用组件

```html
<!-- 基本用法 -->
<uni-search-bar @confirm="search" @input="input" ></uni-search-bar>

<!-- v-model 用法 -->
<uni-search-bar @confirm="search" :focus="true" v-model="searchValue" @blur="blur" @focus="focus" @input="input" @cancel="cancel" @change="change" @clear="clear">

<!-- 自定义Placeholder -->
<uni-search-bar placeholder="自定placeholder" @confirm="search"></uni-search-bar>

<!-- 设置圆角 -->
<uni-search-bar :radius="100" @confirm="search"></uni-search-bar>
```


## API
### SearchBar Props

|属性名			|类型	|默认值	|说明																					|
|:-:			|:-:	|:-:	|:-:																					|
|value/v-model	|StringNumber	|	|搜索栏绑定值																		|
|placeholder	|String	|搜索	|搜索栏Placeholder																		|
|radius			|Number	|10		|搜索栏圆角，单位px																	|
|clearButton	|String	|auto	|是否显示清除按钮，可选值`always`-一直显示、`auto`-输入框不为空时显示、`none`-一直不显示	|
|cancelButton	|String	|auto	|是否显示取消按钮，可选值`always`-一直显示、`auto`-输入框不为空时显示、`none`-一直不显示	|
|cancelText		|String	|取消	|取消按钮的文字																			|
|bgColor		|String	|#F8F8F8|输入框背景颜色																			|
|maxlength		|Number	|100	|输入最大长度																			|
|focus		|Boolean	|false	|																	|


### SearchBar Events

|事件称名	|说明																|返回参数			|
|:-:		|:-:																|:-:				|
|@confirm	|uniSearchBar 的输入框 confirm 事件，返回参数为uniSearchBar的value	|e={value:Number}	|
|@input		|uniSearchBar 的 value 改变时触发事件，返回参数为uniSearchBar的value|e=value	|
|@cancel		|点击取消按钮时触发事件，返回参数为uniSearchBar的value				|e={value:Number}	|
|@clear		|点击清除按钮时触发事件，返回参数为uniSearchBar的value				|e={value:Number}	|
|@focus			|input 获取焦点时触发事件，返回参数为uniSearchBar的value				|e={value:Number}	|
|@blur			|input 失去焦点时触发事件，返回参数为uniSearchBar的value				|e={value:Number}	|

### 替换 icon 的 slot 插槽

|插槽称名	|说明																|
|:-:		|:-:																|
|searchIcon	|替换组件的搜索图标|
|clearIcon	|替换组件的清除图标|

```html
<!-- 替换组件的搜索图标 -->
<uni-search-bar placeholder="自定义searchIcon" @confirm="search" @cancel="cancel" cancel-text="cancel">
	<uni-icons slot="searchIcon" color="#999999" size="18" type="home" />
</uni-search-bar>

<!-- 替换组件的清除图标 -->
<uni-search-bar placeholder="自定义clearIcon" @confirm="search" @cancel="cancel" cancel-text="cancel">
	<view slot="clearIcon" style="color: #999999" >X</view>
</uni-search-bar>

```


## 组件示例

点击查看：[https://hellouniapp.dcloud.net.cn/pages/extUI/search-bar/search-bar](https://hellouniapp.dcloud.net.cn/pages/extUI/search-bar/search-bar)