

## Steps 步骤条
> **组件名：uni-steps**
> 代码块： `uSteps`


步骤条，常用于显示进度

### 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`components`。

如需通过`npm`方式使用`uni-ui`组件，另见文档：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)

### 基本用法

在 ``template`` 中的使用

```html
<!-- 基本用法 -->
<uni-steps :options="[{title: '事件一'}, {title: '事件二'}, {title: '事件三'}, {title: '事件四'}]" :active="1"></uni-steps>

<!-- 纵向排列 -->
<uni-steps :options="[{title:'买家下单',desc:'2018-11-11'},{title:'卖家发货',desc:'2018-11-12'},{title:'买家签收',desc:'2018-11-13'},{title:'交易完成',desc:'2018-11-14'}]" direction="column" :active="2"></uni-steps>
```


## API

### Steps Props

|属性名					|类型		|	可选值				|默认值	|说明																|
|:-:						|:-:		|	:-:					|:-:		|:-:																|
|active					|Number	|	-						|0			|当前步骤															|
|**direction**	|String	|	row/column	|row		|排列方向|
|active-color		|String	|	-						|#1aad19|选中状态的颜色														|
|options				|Array	|	-						| - 		|数据源，格式为：[{title:'xxx',desc:'xxx'},{title:'xxx',desc:'xxx'}]|

#### Direction Options
| 属性名		| 说明		|
| :-:			| :-:		|
| row			| 横向		|
| column	| 纵向		|


## 组件示例

点击查看：[https://hellouniapp.dcloud.net.cn/pages/extUI/steps/steps](https://hellouniapp.dcloud.net.cn/pages/extUI/steps/steps)