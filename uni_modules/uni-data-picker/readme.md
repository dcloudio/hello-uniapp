## DataPicker 级联选择
> **组件名：uni-data-picker**
> 代码块： `uDataPicker`
> 关联组件：`uni-data-pickerview`、`uni-load-more`。


`<uni-data-picker>` 是一个选择类[datacom组件](https://uniapp.dcloud.net.cn/component/datacom)。

支持单列、和多列级联选择。列数没有限制，如果屏幕显示不全，顶部tab区域会左右滚动。

候选数据支持一次性加载完毕，也支持懒加载，比如示例图中，选择了“北京”后，动态加载北京的区县数据。

`<uni-data-picker>` 组件尤其适用于地址选择、分类选择等选择类。

`<uni-data-picker>` 支持本地数据、云端静态数据(json)，uniCloud云数据库数据。

`<uni-data-picker>` 可以通过JQL直连uniCloud云数据库，配套[DB Schema](https://uniapp.dcloud.net.cn/uniCloud/schema)，可在schema2code中自动生成前端页面，还支持服务器端校验。

在uniCloud数据表中新建表“uni-id-address”和“opendb-city-china”，这2个表的schema自带foreignKey关联。在“uni-id-address”表的表结构页面使用schema2code生成前端页面，会自动生成地址管理的维护页面，自动从“opendb-city-china”表包含的中国所有省市区信息里选择地址。


> **注意事项**
> 为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些错误。
> - 组件需要依赖 `sass` 插件 ，请自行手动安装
> - 如使用过程中有任何问题，或者您对uni-ui有一些好的建议，欢迎加入 uni-ui 交流群：871950839
> - `<uni-data-picker>` 内部包含了弹出层组件 `<uni-data-pickerview>` 外层的布局可能会影响弹出层，[详情](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Common_CSS_Questions)



### 平台差异说明

暂不支持在nvue页面中使用

### 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`componets`。

如需通过`npm`方式使用`uni-ui`组件，另见文档：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)

## API

### DataPicker Props

|属性名								| 类型						|	可选值 		 | 		默认值			| 说明|
|:-:									| :-:						|:-:				 | :-:					| :-:	|
|v-model 							|String/ Number	| -				 	 |	-						|绑定数据|
|localdata						|Array					| 					 |							|数据，[详情](https://gitee.com/dcloud/datacom)|
|preload 							|Boolean				| true/false |	false				|预加载数据|
|readonly 						|Boolean				| true/false |	false				|是否禁用|
|clear-icon 						|Boolean				| true/false |	true				|是否显示清除按钮|
|ellipsis 						|Boolean				| true/false |	true				|是否隐藏 tab 标签过长的文本|
|step-searh 					|Boolean				| true/false |	true				|分步查询时，点击节点请求数据|
|step-search-url			|String					| 					 |							|分步查询时，动态加载云端数据url格式，`https://xxx.com/{parentValue}`(当前版本暂不支持，下版支持)|
|self-field						|String					| 					 |							|分步查询时当前字段名称|
|parent-field					|String					| 					 |							|分步查询时父字段名称|
|collection						|String					| 					 |							|表名。支持输入多个表名，用 `,` 分割|
|field								|String					| 					 |							|查询字段，多个字段用 `,` 分割|
|where								|String					| 					 |							|查询条件，内容较多，另见jql文档：[详情](https://uniapp.dcloud.net.cn/uniCloud/uni-clientDB?id=jsquery)|
|orderby							|String					| 					 |							|排序字段及正序倒叙设置|
|popup-title					|String					| 					 |							|弹出层标题|
|map									|Object					|						 |{text:'text',value:'value'}|字段映射，将text/value映射到数据中的其他字段|

> ****
> `collection/where/orderby` 和 `<unicloud-db>` 的用法一致，[详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db)



### DataPicker Events

|事件称名					| 类型						| 说明																						|
|:-:							| :-:						|	:-:																						|
|@change 					|EventHandle		|	选择完成时触发 {detail: {value}}								|
|@nodeclick				|EventHandle		| 节点被点击时触发																|
|@stepsearch			|EventHandle		| 动态加载节点数据前触发(当前版本暂不支持，下版支持)	|
|@popupopened			|EventHandle		| 弹出层弹出时触发																|
|@popupclosed			|EventHandle		| 弹出层关闭时触发																|

### DataPicker Methods

|方法称名	|说明|参数|
|:-:|:-:|:-:|
|show|打开弹出层|-|
|hide|关闭弹出层|-|
|clear|清除已选项|-|

**使用方法：**
```js
this.$refs.picker.show() // `picker` 为组件的 ref 名称
```

### DataPicker Slots

|名称|说明|					
|:-:|:-:|						
|default|覆盖显示框内容|


### 基本用法

#### 云端数据

> **注意事项**
> - 云端数据需要关联服务空间
> - 下面示例中使用的表 `opendb-city-china`(中国城市省市区数据，含港澳台), 在[uniCloud控制台](https://unicloud.dcloud.net.cn/)使用opendb创建，[详情](https://gitee.com/dcloud/opendb)


```html
<template>
  <view>
    <uni-data-picker placeholder="请选择地址" popup-title="请选择城市" collection="opendb-city-china" field="code as value, name as text" orderby="value asc" :step-searh="true" self-field="code" parent-field="parent_code"
 @change="onchange" @nodeclick="onnodeclick">
    </uni-data-picker>
  </view>
</template>
```

```js
<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
      onchange(e) {
        const value = e.detail.value
      },
      onnodeclick(node) {}
    }
  }
</script>

```





#### 本地数据

```html
<template>
  <view>
    <uni-data-picker :localdata="items" popup-title="请选择班级" @change="onchange" @nodeclick="onnodeclick"></uni-data-picker>
  </view>
</template>
```

```js
<script>
  export default {
    data() {
      return {
        items: [{
          text: "一年级",
          value: "1-0",
          children: [
            {
              text: "1.1班",
              value: "1-1"
            },
            {
              text: "1.2班",
              value: "1-2"
            }
          ]
        },
        {
          text: "二年级",
          value: "2-0"
        },
        {
          text: "三年级",
          value: "3-0"
        }]
      }
    },
    methods: {
      onchange(e) {
        const value = e.detail.value
      },
      onnodeclick(node) {
      }
    }
  }
</script>

```


#### 自定义solt

```html
<uni-data-picker v-slot:default="{data, error, options}" popup-title="请选择所在地区">
  <view v-if="error" class="error">
    <text>{{error}}</text>
  </view>
  <view v-else-if="data.length" class="selected">
    <view v-for="(item,index) in data" :key="index" class="selected-item">
      <text>{{item.text}}</text>
    </view>
  </view>
  <view v-else>
    <text>请选择</text>
  </view>
</uni-data-picker>
```


> **注意事项**
> `localdata` 和 `collection` 同时配置时，`localdata` 优先



#### 完整示例

```html
<template>
	<view class="container">
		<uni-data-picker @change="onchange" @nodeclick="onnodeclick" @stepsearch="onstepsearch" @popupopened="onpopupopened"
		 @popupclosed="onpopupclosed">
		</uni-data-picker>
	</view>
</template>
```

```js
<script>
	export default {
		data() {
			return {
				count: 1
			}
		},
		methods: {
			onchange(e) {
				const value = e.detail.value
			},
			onnodeclick(node) {
				// node 当前点击节点
			},
			onstepsearch(node, resolve) {
				if (node.level === 0) {
					return resolve([{
						text: 'region1',
						value: 'region1'
					}, {
						text: 'region2',
						value: 'region1'
					}]);
				}

				var hasChild;
				if (node.text === 'region1') {
					hasChild = true;
				} else if (node.text === 'region2') {
					hasChild = false;
				} else {
					hasChild = Math.random() > 0.5;
				}

				setTimeout(() => {
					var data;
					if (hasChild) {
						data = [{
							text: 'zone' + this.count++,
							value: 'zone' + this.count++
						}, {
							text: 'zone' + this.count++,
							value: 'zone' + this.count++
						}];
					} else {
						data = [];
					}

					resolve(data);
				}, 500);
			},
			onpopupopened() {},
			onpopupclosed() {}
		}
	}
</script>

```


## 组件示例

点击查看：[https://hellouniapp.dcloud.net.cn/pages/extUI/data-picker/data-picker](https://hellouniapp.dcloud.net.cn/pages/extUI/data-picker/data-picker)