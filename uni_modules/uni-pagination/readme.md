

## Pagination 分页器
> **组件名：uni-pagination**
> 代码块： `uPagination`


分页器组件，用于展示页码、请求数据等。

### 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`components`。

如需通过`npm`方式使用`uni-ui`组件，另见文档：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)

### 基本用法

在 ``template`` 中使用组件

```html
<uni-pagination title="标题文字" total="20"></uni-pagination>
<uni-pagination title="标题文字" show-icon="true" total="50" current="2"></uni-pagination>
```

## API

### Pagination Props

|属性名		|类型	|默认值	|说明						|
|:-:		|:-:	|:-:	|:-:						|
|prevText	|String	|上一页	|左侧按钮文字				|
|nextText	|String	|下一页	|右侧按钮文字				|
|current	|Number	|1		|当前页						|
|total		|Number	|0		|数据总量					|
|pageSize	|Number	|10		|每页数据量					|
|showIcon	|Boolean|false	|是否以 icon 形式展示按钮	|


### Pagination Events

|事件称名	|说明				|返回值																		|
|:-:		|:-:				|:-:																				|
|@change|点击页码按钮时触发	|e={type,current} current为当前页，type值为：next/prev，表示点击的是上一页还是下一个	|


## 组件示例

点击查看：[https://hellouniapp.dcloud.net.cn/pages/extUI/pagination/pagination](https://hellouniapp.dcloud.net.cn/pages/extUI/pagination/pagination)