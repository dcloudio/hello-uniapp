
## FilePicker 文件选择上传

> **组件名：uni-file-picker**
>  代码块： `uFilePicker`


文件选择上传组件，可以选择图片、视频等任意文件并上传到当前绑定的服务空间

> **注意事项**
> 为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些错误。
> - 组件需要依赖 `sass` 插件 ，请自行手动安装
> - 如不绑定服务空间，`autoUpload`默认为`false`且不可更改
> - 选择文件目前只支持 `H5` 和 `微信小程序平台` ，且 `微信小程序平台` 使用 `wx.chooseMessageFile()`
> - v-model 值需要自动上传成功后才会绑定值，一般只用来回显数据
> - 如使用过程中有任何问题，或者您对uni-ui有一些好的建议，欢迎加入 uni-ui 交流群：871950839



## API

### FilePicker Props

| 属性名					| 类型			| 默认值	| 可选值								| 说明																	|
| :-:						| :-:			| :-:		| :-:									| :-:																	|
| v-model/value	| Array\Object	| -			| -						| 组件数据，通常用来回显 ,类型由`return-type`属性决定	，**格式见下文**	|
| disabled			| Boolean	| false	| -										| 组件禁用								|
| readonly			| Boolean	| false	| -										| 组件只读，不可选择，不显示进度，不显示删除按钮								|
| return-type		| String	| array	| array/object				| 限制 `value` 格式，当为 `object`	 时	，组件只能单选，且会覆盖	|
| disable-preview| Boolean	| false	| -									| 禁用图片预览，仅	`mode:grid`生效	|
| del-icon			| Boolean	| true	| -										| 是否显示删除按钮	|
| auto-upload		| Boolean	| true	| -										| 是否自动上传，值为`true`则只触发@select,可自行上传|
| limit					| Number\String	| 9	| -									| 最大选择个数 ，h5 会自动忽略多选的部分			|
| title					| String	| -			| -										| 组件标题，右侧显示上传计数			|
| mode					| String	| list	| list/grid						| 选择文件后的文件列表样式								|
| file-mediatype| String	| image	| image/video/all			| 选择文件类型,all 只支持 H5 和微信小程序平台	|
| file-extname	| Array\String		| -			| -						| 选择文件后缀，字符串的情况下需要用逗号分隔（推荐使用字符串），根据 `file-mediatype` 属性而不同|
| list-styles	  | Object	| -			| -										| `mode:list` 时的样式			|
| image-styles	| Object	| -			| -										| `mode:grid` 时的样式	|


### value 格式 

三个属性必填，否则影响组件显示

```json 
[
	{
		"name":"file.txt",
		"extname":"txt",
		"url":"https://xxxx",
		// ...
	}
]

```

### list-styles 格式 

```json 
{
	"borderStyle":{
		"color":"#eee",		// 边框颜色
		"width":"1px",		// 边框宽度
		"style":"solid", 	// 边框样式
		"radius":"5px" 		// 边框圆角，不支持百分比
	},
	"border":false, // 是否显示边框
	"dividline":true // 是否显示分隔线
}
```

### image-styles 格式 

```json 
{
	"height": 60,	// 边框高度
	"width": 60,	// 边框宽度
	"border":{ // 如果为 Boolean 值，可以控制边框显示与否
		"color":"#eee",		// 边框颜色
		"width":"1px",		// 边框宽度
		"style":"solid", 	// 边框样式
		"radius":"50%" 		// 边框圆角，支持百分比
	}
}
```

### FilePicker Events

|事件称名		|说明							|	返回值	|					
|:-:			|:-:							|	:-:	|
|@select	| 选择文件后触发 		| 见下文|
|@progress|文件上传时触发			| 见下文|
|@success	|上传成功触发				| 见下文|
|@fail		|上传失败触发				| 见下文|
|@delete	|文件从列表移除时触发| 见下文|


#### Callback Params

`**注意**：如果绑定的是腾讯云的服务空间 ，tempFilePaths 将返回 fileID`

```json
{
	"progress"			: Number, 		// 上传进度 ，仅 @progress 事件包含此字段
	"index"				: Number, 		// 上传文件索引 ，仅 @progress 事件包含此字段
	"tempFile"			: file, 		// 当前文件对象 ，包含文件流，文件大小，文件名称等，仅 @progress 事件包含此字段
	"tempFiles"			: files, 		// 文件列表,包含文件流，文件大小，文件名称等
	"tempFilePaths"		: filePaths, 	// 文件地址列表，@sucess 事件为上传后的线上文件地址
}

```


### FilePicker Methods

通过 `$ref` 调用

| 方法称名						| 说明			|		参数 		|				
| :-:								| :-:		  |		:-:		  |				
| upload()						| 手动上传 	，如`autoUpload`为`false`  ，必须调用此方法| - |
| clearFiles(index:Number)	| 清除选择结果| 传如 Number　为删除指定下标的文件 ，不传为删除所有|

### FilePicker Slots

插槽可定义上传按钮显示样式 

|	插槽名 	| 说明 |
| :-:			| :-:		  |
|	default	|默认插槽|

## 组件用法

### 基础用法

```html
<uni-file-picker 
	v-model="imageValue" 
	fileMediatype="image" 
	mode="grid" 
	@select="select" 
	@progress="progress" 
	@success="success" 
	@fail="fail" 
/>
```

```javascript
export default {
		data() {
			return {
				imageValue:[]
			}
		},
		methods:{
			// 获取上传状态
			select(e){
				console.log('选择文件：',e)
			},
			// 获取上传进度
			progress(e){
				console.log('上传进度：',e)
			},
			
			// 上传成功
			success(e){
				console.log('上传成功')
			},
			
			// 上传失败
			fail(e){
				console.log('上传失败：',e)
			}
		}
}

```

### 选择指定后缀图片，且限制选择个数

配置 `file-mediatype` 属性为 `image`，限定只选择图片

配置 `file-extname` 属性为 `'png,jpg'`，限定只选择 `png`和`jpg`后缀的图片

配置 `limit` 属性为 1 ，则最多选择一张图片

配置 `mode` 属性为 `grid` ，可以使用九宫格样式选择图片


```html
<uni-file-picker 
	v-model="imageValue"  
	file-mediatype="image"
	mode="grid"
	file-extname="png,jpg"
	:limit="1"
	@progress="progress" 
	@success="success" 
	@fail="fail" 
	@select="select"
/>
```

### 手动上传

配置 `auto-upload` 属性为 `false` ，可以停止自动上传，通过`ref`调用`upload`方法自行选择上传时机

```html
<view>
	<uni-file-picker  ref="files" :auto-upload="false"/>
	<button @click="upload">上传文件</button>
</view>
```

```javascript
export default {
		data() {},
		methods:{
			upload(){
				this.$refs.files.upload()
			}
		}
}

```

### 单选图片且点击再次选择

配置 `disable-preview` 属性为 `true`，禁用点击预览图片功能

配置 `del-icon` 属性为 `false`，隐藏删除按钮

配置 `return-type` 属性为 `object`，设置 `value` 类型 ，如需绑定 `array`类型 ，则设置`limit:1`，可达到一样的效果



```html
<uni-file-picker 
	disable-preview
	:del-icon="false"
	return-type="object"
>选择头像</uni-file-picker>
```

### 自定义样式

配置 `image-styles` 属性，可以自定义`mode:image`时的回显样式

配置 `list-styles` 属性，可以自定义`mode:video|| mode:all`时的回显样式

```html
<view>
	<uni-file-picker fileMediatype="image" :image-styles="imageStyles"/>
	<uni-file-picker fileMediatype="all" :list-styles="listStyles"/>
</view>
```

```javascript
export default {
		data() {
			imageStyles:{
				width:64,
				height:64,
				border:{
					color:"#ff5a5f",
					width:2,
					style:'dashed',
					radius:'2px'
				}
			},
			listStyles:{
				// 是否显示边框
				border: true,
				// 是否显示分隔线
				dividline: true,
				// 线条样式
				borderStyle: {
					width:1,
					color:'blue',
					radius:2
				}
			}
		}
}

```



### 使用插槽 

使用默认插槽可以自定义选择文件按钮样式

```html
<uni-file-picker 
	v-model="value" file-mediatype="all">
	<button>选择文件</button>
</uni-file-picker>
```



## 组件示例

点击查看：[https://hellouniapp.dcloud.net.cn/pages/extUI/file-picker/file-picker](https://hellouniapp.dcloud.net.cn/pages/extUI/file-picker/file-picker)