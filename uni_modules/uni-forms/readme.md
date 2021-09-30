

## Forms 表单

> **组件名：uni-forms**
> 代码块： `uForms`、`uni-forms-item`
> 关联组件：`uni-forms-item`、`uni-easyinput`、`uni-data-checkbox`、`uni-group`。


uni-app的内置组件已经有了 `<form>`组件，用于提交表单内容。

然而几乎每个表单都需要做表单验证，为了方便做表单验证，减少重复开发，`uni ui` 又基于 `<form>`组件封装了 `<uni-forms>`组件，内置了表单验证功能。

`<uni-forms>` 提供了 `rules`属性来描述校验规则、`<uni-forms-item>`子组件来包裹具体的表单项，以及给原生或三方组件提供了 `binddata()` 来设置表单值。

每个要校验的表单项，不管input还是checkbox，都必须放在`<uni-forms-item>`组件中，且一个`<uni-forms-item>`组件只能放置一个表单项。

`<uni-forms-item>`组件内部预留了显示error message的区域，默认是在表单项的底部。

另外，`<uni-forms>`组件下面的各个表单项，可以通过`<uni-group>`包裹为不同的分组。同一`<uni-group>`下的不同表单项目将聚拢在一起，同其他group保持垂直间距。`<uni-group>`仅影响视觉效果。

> **注意事项**
> 为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些错误。
> - 组件需要依赖 `sass` 插件 ，请自行手动安装
> - `resetFields` 方法不会重置原生组件和三方组件的值
> - 如果配置 `validateTrigger` 属性为 `bind` 且表单域组件使用 `input` 事件触发会耗损部分性能，请谨慎使用
> - 组件支持 nvue ，需要在 `manifest.json > app-plus` 节点下配置 `"nvueStyleCompiler" : "uni-app"` 
> - uni-forms 中不包含其他表单组件，如需使用 uni-easyinput、uni-data-checkbox 等组件，需要自行引入
> - 如使用过程中有任何问题，或者您对uni-ui有一些好的建议，欢迎加入 uni-ui 交流群：871950839


### 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`components`。

如需通过`npm`方式使用`uni-ui`组件，另见文档：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)

### 基本用法 

`uni-forms` 组件通常用来做表单校验和提交。每一个 `uni-forms-item` 是它的一个表单域组件，用来承载表单具体内容，`uni-forms-item` 中可以嵌套 `uni-easyinput`、`uni-data-checkbox` 和 uni-app内置的表单组件 ，不过 uni-app 的内置表单组件需要通过 `binddata` 或者 `uni-forms` 提供的 `setValue` 方法，将内容与 `uni-forms` 关联，才可完成表单的校验与提交（详见后文`表单校验` 部分）

```html
<template>
	<view class="">
		<uni-forms :modelValue="formData">
			<uni-forms-item label="姓名" name="name">
				<uni-easyinput type="text" v-model="formData.name" placeholder="请输入姓名" />
			</uni-forms-item>
			<uni-forms-item required name="hobby" label="兴趣爱好">
				<uni-data-checkbox multiple v-model="formData.hobby" :localdata="hobby"/>
			</uni-forms-item>
		</uni-forms>
		<button @click="submitForm">Submit</button>
	</view>
</template>
```

### 对齐方式

使用 `label-position` 属性可以设置所有表单域的位置，默认在左侧

```html
<template>
	<view class="">
		<uni-forms :modelValue="formData" label-position="top">
			<uni-forms-item label="姓名" name="name">
				<uni-easyinput type="text" v-model="formData.name" placeholder="请输入姓名" />
			</uni-forms-item>
			<uni-forms-item required name="hobby" label="兴趣爱好">
				<uni-data-checkbox multiple v-model="formData.hobby" :localdata="hobby"/>
			</uni-forms-item>
		</uni-forms>
	</view>
</template>
```

## 表单校验

表单校验还可以直接通过 `uniCloud web 控制台` 快速根据 `schema` 自动生成表单维护界面，比如新建页面和编辑页面，自动处理校验规则，更多参考[DB Schema](https://uniapp.dcloud.io/uniCloud/schema)

### 如何使用 

1. `uni-forms` 需要通过 `rules` 属性传入约定的校验规则，详细描述下文`校验规则说明`。
```html
<!-- rules 内容详见下方完整示例 -->
<uni-forms ref="form" :rules="rules">
	...
</uni-forms>
```

2. `uni-forms` 需要绑定`modelValue`属性，值为表单的key\value 组成的对象。
```html
<!-- formData、rules 内容详见下方完整示例 -->
<uni-forms ref="form" :modelValue="formData" :rules="rules">
	...
</uni-forms>
```

3. `uni-forms-item` 需要设置 `name` 属性为当前字段名，字段为 `String` 类型而非变量。
```html
<!-- formData、rules 内容详见下方完整示例 -->
<uni-forms :modelValue="formData" :rules="rules">
	<uni-forms-item label="姓名" name="name">
		<uni-easyinput type="text" v-model="formData.name" placeholder="请输入姓名" />
	</uni-forms-item>
	<uni-forms-item required name="hobby" label="兴趣爱好">
		<uni-data-checkbox multiple v-model="formData.hobby" :localdata="hobby"/>
	</uni-forms-item>
</uni-forms>
```

4. 如果使用`uni-easyinput` 和 `uni-data-checkbox` 等关联组件，只需绑定 v-model，无需其他操作。
5. 如果使用原生 input、checkbox 或三方组件等，只需要给组件绑定 `binddata` 方法即可触发表单校验，无需绑定事件到 `methods` 中，见下方完整示例。
6. `binddata('name',$event.detail.value,'form')"` 方法接受三个值，
	- 第一个参数传入当前表单组件所在的 name，同当前父组件 `uni-forms-item` 绑定属性 `name` 的值
	- 第二个参数传入需要校验的值，内置组件可以通过 `$event.detail.value` 获取到组件的返回值，自定义组件传入需要校验的值即可
	- 第三个参数传入 `uni-forms` 组件绑定属性 `ref` 的值，通常在多表单的时候需要传入，用来区分表单，如页面中仅有一个 `uni-forms` 可忽略
7. 如果内置 `binddata` 方法无法满足需求，在当前页面的 `methods` 中复写此方法即可，复写此方法需要调用 `uni-forms` 的 `setValue` 来触发表单校验，见下方 `setValue`方法说明

**完整示例**

```html
<template>
	<view>
		<uni-forms ref="form" :modelValue="formData" :rules="rules">
			<uni-forms-item label="姓名" name="name">
				<uni-easyinput type="text" v-model="formData.name" placeholder="请输入姓名" />
			</uni-forms-item>
			<uni-forms-item label="邮箱" name="email">
				<input class="input" v-model="formData.email" type="text" placeholder="请输入用户名" @input="binddata('email',$event.detail.value)" />
			</uni-forms-item>
		</uni-forms>
		<button @click="submit">Submit</button>
	</view>
</template>
			 
```

```javascript
export default {
	data() {
		return {
			// 表单数据
			formData: {
				name: 'LiMing',
				email: 'dcloud@email.com'
			},
			rules: {
				// 对name字段进行必填验证
				name: {
					rules: [{
							required: true,
							errorMessage: '请输入姓名',
						},
						{
							minLength: 3,
							maxLength: 5,
							errorMessage: '姓名长度在 {minLength} 到 {maxLength} 个字符',
						}
					]
				},
				// 对email字段进行必填验证
				email: {
					rules: [{
						format: 'email',
						errorMessage: '请输入正确的邮箱地址',
					}]
				}
			}
		}
	},
	methods: {
		/**
		 * 复写 binddata 方法，如果只是为了校验，无复杂自定义操作，可忽略此方法
		 * @param {String} name 字段名称
		 * @param {String} value 表单域的值
		 */
		// binddata(name,value){
		// 通过 input 事件设置表单指定 name 的值
		//   this.$refs.form.setValue(name, value)
		// },
		// 触发提交表单
		submit() {
			this.$refs.form.validate().then(res=>{
				console.log('表单数据信息：', res);
			}).catch(err =>{
				console.log('表单错误信息：', err);
			})
		}
	}
}
```

> **注意**
> `modelValue` 对象目前有比较严格的格式要求：
> - 尽量不要使用嵌套的数据结构，因为表单域指定的`name`值与 modeValue 的 key 是一一对应的，只有一种情况例外，那就是动态校验表单，见下方`动态校验表单`章节


### 校验规则说明

校验规则接受一个 `Object` 类型的值，通过传入不同的规则来表示每个表单域的值该如何校验

对象的 `key` 表示当前表单域的字段名，`value` 为具体的校验规则

以下为 `value` 所包含的内容：

|属性名|类型|说明|
|:-:|:-:|:-:|
|rules|Array|校验规则，见下方 `rules 属性说明`|
|validateTrigger| String| 表单校验时机|
|label|String|当前表单域的字段中文名，多用于 `errorMessage` 的显示，可不填|


```javascript
rules: {
	// 对name字段进行必填验证
	name: {
		// name 字段的校验规则
		rules:[
			// 校验 name 不能为空
			{
				required: true,
				message: '请填写姓名',
			},
			// 对name字段进行长度验证
			{
				minLength: 3,
				maxLength: 5,
				message: '{label}长度在 {minLength} 到 {maxLength} 个字符',
			}
		],
		// 当前表单域的字段中文名，可不填写
		label:'姓名',
		validateTrigger:'submit'
	}
}

```


### rules 属性说明
每一个验证规则中，可以配置多个属性，下面是一些常见规则属性。实际上这里的规范，与uniCloud的[DB Schema](https://uniapp.dcloud.io/uniCloud/schema?id=validator)规范相同。

|属性名|类型|默认值|可选值|说明	|
|:-:|:-:|:-:|:-:|:-:|
|required|Boolean|-|-|是否必填，配置此参数不会显示输入框左边的必填星号，如需要，请配置`uni-forms-item`组件的的required为true|
|range|Array|-|-|数组至少要有一个元素，且数组内的每一个元素都是唯一的。	|
|format|String|-|-|内置校验规则，如这些规则无法满足需求，可以使用正则匹配或者自定义规则	|
|pattern|RegExp|-|-|正则表达式，注意事项见下方说明|
|maximum|Number|-|-| 校验最大值(大于)|
|minimum|Number|-|-| 校验最小值(小于)		|
|maxLength|Number|-|-| 校验数据最大长度		|
|errorMessage|String|-|-|校验失败提示信息语，可添加属性占位符，当前表格内属性都可用作占位符|
|trigger|String|bind| bind/submit|校验触发时机|
|validateFunction|Function|-|-|自定义校验规则	|


**format属性值说明**

|属性名|说明|
|:-:|:-:|
|string|必须是 string 类型，默认类型|
|number|必须是 number 类型|
|boolean|必须是 boolean 类型|
|array|必须是 array 类型|
|object|必须是 object 类型|
|url|必须是 url 类型|
|email|必须是 email 类型|


> **pattern属性说明**
> 在小程序中，json 中不能使用正则对象，如：`/^\S+?@\S+?\.\S+?$/`，使用正则对象会被微信序列化，导致正则失效。
> 所以建议统一使用字符串的方式来使用正则 ，如`'^\\S+?@\\S+?\\.\\S+?$'` ，需要注意 `\` 需要使用 `\\` 来转译。
> 如验证邮箱：/^\S+?@\S+?\.\S+?$/ （注意不带引号）,或使用 "^\\S+?@\\S+?\\.\\S+?$"（注意带引号需要使用 `\` 转义）		



### validateFunction 自定义校验规则使用说明
`uni-forms` 的 `rules` 基础规则有时候不能满足项目的所有使用场景，这时候可以使用 `validateFunction` 来自定义校验规则

`validateFunction` 方法返回四个参数 `validateFunction:function(rule,value,data,callback){}` ，当然返回参数名开发者可以自定义：
 - rule :  当前校验字段在 rules 中所对应的校验规则
 - value : 当前校验字段的值
 - data	:  所有校验字段的字段和值的对象
 - callback : 校验完成时的回调，一般无需执行callback，返回true(校验通过)或者false(校验失败)即可 ，如果需要显示不同的 `errMessage`，如果校验不通过需要执行 callback('提示错误信息')，如果校验通过，执行callback()即可


> **注意**
> 需要注意，如果需要使用 `validateFunction` 自定义校验规则,则不能采用 `uni-forms` 的 `rules` 属性来配置校验规则，这时候需要通过`ref`，在`onReady`生命周期调用组件的`setRules`方法绑定验证规则
> 无法通过props传递变量，是因为微信小程序会过滤掉对象中的方法，导致自定义验证规则无效。
> 	





```html
<template>
	<view>
		<uni-forms ref="form" :modelValue="formData">
			<uni-forms-item label="兴趣爱好" required name="hobby">
				<uni-data-checkbox v-model="formData.hobby" multiple :localdata="hobbys" />
			</uni-forms-item>
		</uni-forms>
		<button class="button" @click="submit">校验表单</button>
	</view>
</template>

```

```javascript
export default {
	data() {
		return {
			formData:{
				
			},
			rules: {
				hobby: {
					rules: [{
						required: true,
						errorMessage: '请选择兴趣',
					},{
						validateFunction:function(rule,value,data,callback){
							if (value.length < 2) {
								callback('请至少勾选两个兴趣爱好')
							}
							return true
						}
					}]
				}
			}
		}
	},
	onReady() {
		// 需要在onReady中设置规则
		this.$refs.form.setRules(this.rules)
	},
	methods: {
		submit(form) {
			this.$refs.form.validate().then(res=>{
				console.log('表单数据信息：', res);
			}).catch(err =>{
				console.log('表单错误信息：', err);
			})
		}
	}
}

```


### validateFunction 异步校验

上面的自定义校验方式为同步校验 ，如果需要异步校验，`validateFunction` 需要返回一个 `Promise` ，校验不通过 执行 `reject(new Error('错误信息'))` 返回对应的错误信息，如果校验通过则直接执行 `resolve()` 即可，在异步校验方法中，不需要使用 `callback` 。

```html
<template>
	<view>
		<uni-forms :modelValue="formData" ref="form">
			<uni-forms-item name="age" label="年龄">
				<uni-easyinput v-model="formData.age" type="text" placeholder="请输入年龄" />
			</uni-forms-item>
		</uni-forms>
		<button class="button" @click="submit">校验表单</button>
	</view>
</template>

```

```javascript
export default {
	data() {
		return {
			formData:{
				age:''
			},
			rules: {
				age: {
					rules: [{
						required: true,
						errorMessage: '请输入年龄',
					},{
						validateFunction: (rule, value, data, callback) => {
							// 异步需要返回 Promise 对象
							return new Promise((resolve, reject) => {
								setTimeout(() => {
									if (value > 10 ) {
										// 通过返回 resolve
										resolve()
									} else {
										// 不通过返回 reject(new Error('错误信息'))
										reject(new Error('年龄必须大于十岁'))
									}
								}, 2000)
							})
						}
					}]
				}
			}
		}
	},
	onReady() {
		// 需要在onReady中设置规则
		this.$refs.form.setRules(this.rules)
	},
	methods: {
		/**
		 * 表单提交
		 * @param {Object} event
		 */
		submit() {
			uni.showLoading()
			this.$refs.form.validate().then(res => {
				uni.hideLoading()
				console.log('表单数据信息：', res);
			}).catch(err => {
				uni.hideLoading()
				console.log('表单错误信息：', err);
			})
		}
	}
}

```


### 动态表单校验

`uni-forms v1.0.44` 开始增加了动态校验表单的相关内容。

多用于同一个字段需要添加多次的场景，如需要动态创建多个域名参与检验。

1. 在 `formData` 中定义个变量用来接受同一个字段的多个结果。
```javascript
dynamicFormData: {
	email: '',
	// domains 字段下会有多个结果
	domains: {}
}
```


2. 使用 `uni-forms-item` 的 `rules` 属性定义单个表单域的校验规则。
```html
<uni-forms-item :label="item.label+' '+index" required
	:rules="[{'required': true,errorMessage: '域名项必填'}]" :key="item.id">
	...
</uni-forms-item>
```

3. `name` 需要动态指定，格式为： `字段[唯一值]`
```html
<uni-forms-item 
	required
	:label="item.label+' '+index" 
	:name="'domains[' + item.id + ']'"
	:rules="[{'required': true,errorMessage: '域名项必填'}]" 
	:key="item.id"
	>
	...
</uni-forms-item>
```

4. 需要绑定值的组件的 v-model 也需要动态指定，格式为：`数据源.字段[唯一值]`
```html
<uni-forms-item 
	required
	:label="item.label+' '+index" 
	:name="'domains[' + item.id + ']'"
	:rules="[{'required': true,errorMessage: '域名项必填'}]" 
	:key="item.id"
	>
	<uni-easyinput v-model="dynamicFormData.domains[item.id]" placeholder="请输入域名" />
</uni-forms-item>
```

**完整示例**

```html

<uni-forms ref="dynamicForm" :rules="dynamicRules" :modelValue="dynamicFormData">
	<uni-forms-item label="邮箱" required name="email">
		<uni-easyinput v-model="dynamicFormData.email" placeholder="请输入姓名" />
	</uni-forms-item>
	<template v-for="(item,index) in dynamicLists">
		<uni-forms-item :label="item.label+' '+index" required
			:rules="[{'required': true,errorMessage: '域名项必填'}]" :key="item.id"
			:name="'domains[' + item.id + ']'">
			<view class="form-item">
				<uni-easyinput v-model="dynamicFormData.domains[item.id]" placeholder="请输入域名" />
				<button class="button" size="mini" type="default" @click="del(item.id)">删除</button>
			</view>
		</uni-forms-item>
	</template>

</uni-forms>
<view class="button-group">
	<button type="primary" size="mini" @click="add">新增域名</button>
	<button type="primary" size="mini" @click="submit('dynamicForm')">提交</button>
</view>

```

```javascript
export default {
	data() {
		return {
			// 数据源
			dynamicFormData: {
				email: '',
				domains: {}
			},
			// 动态表单数据
			dynamicLists: [],
			// 规则
			dynamicRules: {
				email: {
					rules: [{
						required: true,
						errorMessage: '域名不能为空'
					}, {
						format: 'email',
						errorMessage: '域名格式错误'
					}]
				}
			}
		}
	},
	methods: {
		// 新增表单域
		add() {
			this.dynamicLists.push({
				label: '域名',
				id: Date.now()
			})
		},
		// 删除表单域
		del(id) {
			let index = this.dynamicLists.findIndex(v => v.id === id)
			this.dynamicLists.splice(index, 1)
		},
		// 提交
		submit(ref) {
			this.$refs[ref].validate((err,value)=>{
				console.log(err,value);
			})
		},
	}
}

// 返回值格式 ，根据自有业务，自行处理数据
{
	emial:'',
	domains:{
		id1:'',
		id2:'',
		...
	}
}
```


### 表单校验时机说明

不管是在规则里还是`uni-forms`、`uni-forms-item`里，都有 `validateTrigger` 属性， `validateTrigger` 属性规定了表单校验时机，当前只有 `bind`、`submit` 两个值域

- `bind` ： 数据绑定时触发校验，`uni-esayinput` 、`uni-data-checkbox` 组件表现为数据发生变化时。其他内置或三方组件为 `binddata` 事件执行时机

```html

<template>
	<view>
		<uni-forms  ref="form" :modelValue="formData" validate-trigger="bind">
			<uni-forms-item name="age" label="年龄">
				<!-- uni-easyinput 的校验时机是数据发生变化， 即触发 input 时 -->
				<uni-easyinput v-model="formData.age" type="text" placeholder="请输入年龄" />
			</uni-forms-item>
			<uni-forms-item  name="email" label="邮箱">
			 <!-- input 的校验时机是触发 binddata 时， 即触发 blur 时 -->
				<input v-model="formData.email"  @blur="binddata('email',$event.detail.value)" />
			</uni-forms-item>
			<button class="button" @click="submit">校验表单</button>
		</uni-forms>
	</view>
</template>

```

- `submit`： 只有提交表单才会触发表单校验


对于表单校验时机，同时只会有一个 `validateTrigger` 发生作用，它的作用权重为

**`规则 > uni-forms-item > uni-forms `**

- 如果规则里配置 `validateTrigger` ，则优先使用规则里的 `validateTrigger` 属性来决定表单校验时机
- 如果规则里没有配置 `validateTrigger` ，则优先使用 `uni-forms-item` 的 `validateTrigger` 属性来决定表单校验时机
- 如果 `uni-forms-item` 组件里没有配置 `validateTrigger` ，则优先使用 `uni-forms` 的 `validateTrigger` 属性来决定表单校验时机
- 以此类推，如果都没有使用 `validateTrigger` 属性，则会使用 `uni-forms` 的 `validateTrigger` 属性默认值来决定表单校验时机


## API

### Forms Props

|属性名|类型|默认值|可选值|说明|
|:-:|:-:|:-:|:-:|:-:|
|value [即将废弃]|Object|-|-| 表单数据|
|modelValue|Object|-|-| 表单数据|
|rules|Object|-|-|表单校验规则|
|validate-trigger|String|submit|bind/submit| 表单校验时机|
|label-position|String|left|top/left|label 位置|
|label-width|String/Number|75|-|label 宽度，单位 px|
|label-align|String|left| left/center/right|label 居中方式|
|err-show-type|String|undertext| undertext/toast/modal|表单错误信息提示方式|
|border|Boolean|false|-|是否显示分格线|

### Forms Events

|事件称名|说明|										
|:-:|:-:|									
|validate|任意表单项被校验后触发，返回表单校验信息|		

### Forms Methods

|方法称名|说明|						
|:-:| :-:|						
|submit[即将废弃]| 对整个表单进行校验的方法，会返回一个 promise|
|validate|对整个表单进行校验的方法，会返回一个 promise|
|setValue|设置表单某一项 name 的对应值，通常在 uni-forms-item 和自定表单组件中使用|
|validateField|部分表单进行校验|
|clearValidate|移除表单的校验结果|
|resetFields|重置表单, 需要把 `uni-forms` 的`modelValue`属性改为 `v-model` ,且对内置组件可能不生效|



### validate(keepItem:Array,callback:Function) 方法说明
`validate` 方法是对整个表单进行校验，方法接受两个参数

|参数称名|类型|说明|						
|:-:| :-:|:-:|						
|keepItem|Array|保留不参与校验的字段|
|callback|Function|校验完成返回函数|

校验成功后，校验对象只保留指定了`name`的字段（只要 ``uni-forms-item` 绑定了 `name`，哪怕不校验，也会返回），如果需要保留其他字段，则需要 `keepItem` 属性

```html

<template>
	<view>
		<uni-forms  ref="form" :modelValue="formData">
			<uni-forms-item name="age" label="年龄">
				<uni-easyinput v-model="formData.age" type="text" placeholder="请输入年龄" />
			</uni-forms-item>
			
			<button class="button" @click="submit">校验表单</button>
		</uni-forms>
	</view>
</template>

```

```javascript
export default {
	data() {
		return {
			formData:{
				age:''
			},
			rules: {
				// ...
			}
		}
	},
	onLoad(){
		this.formData.id = 'testId'
	},
	methods: {
		submit() {
			// 在 onLoad 生命周期中，formData添加了一个 id 字段 ，此时这个字段是不参数校验的，所以结果中不返回
			// 在 validate(['id']) 方法中，指定第一个参数 ，即可返回id字段
			this.$refs.form.validate(['id'],(err,formData)=>{
				if(!err){
					console.log('success',formData)
				}
			})
		}
	}
}

```


`validate` 方法还可以返回一个 `Promise` 对象，如果使用了 `callback` 则`Promise` 返回 `null`，`validate` 方法会优先使用 `callback`。

`callback` 方法会返回两个返回值 :
- 第一个返回值为检验结果，如果校验失败，则返回失败信息，如果成功，返回 `null` 
- 第二个返回值校验数据


```javascript

// 使用 callback
// 如果不需要 keepItem 参数 ，则可以省略
this.$refs.form.validate((err,formData)=>{
	// 如果校验成功 ，err 返回 null
	if(!err){
		console.log('success',formData)
		return
	}
	console.log('error',err)
}).then(res=>{
	// res 返回 null
})

// 使用 Promise
// 对整个表单进行校验，返回一个 Promise
this.$refs.form.validate().then((res)=>{
	// 成功返回，res 为表单数据
	// 其他逻辑处理 
	// ...
}).catch((err)=>{
	// 表单校验验失败，err 为具体错误信息
	// 其他逻辑处理
	// ...
})

```

### setValue(name:String,value:any) 方法说明

`setValue` 方法通常用于内置组件或三方组件返回值的校验，因为`uni-esayinput` 等 uni 开头的组件内置了对 `uni-forms`的支持，所以这些组件返回的值可以直接使用，但是比如像`input` 这些内置组件值的变化，无法及时通知 `uni-forms` ，从而无法正常的校验，这时就需要我们手动将这些值加入到`uni-forms`的校验。

`setValue` 方法接受两个参数：
- name: 表单域对应的name
- value: 表单域对应的值

```html

<template>
	<view>
		<uni-forms  ref="form" :modelValue="formData">
			<uni-forms-item name="age" label="年龄">
				<input v-model="formData.age" @input="setValue('age',formData.age)">
			</uni-forms-item>
			<button class="button" @click="submit">校验表单</button>
		</uni-forms>
	</view>
</template>

```

```javascript
export default {
	data() {
		return {
			formData:{
				age:''
			},
			rules: {
				// ...
			}
		}
	},
	methods: {
		setValue(name,value){
			// 设置表单某项对应得值来触发表单校验
			// 接受两个参数，第一个参数为表单域的 name ，第二个参数为表单域的值
			this.$refs.form.setValue(name,value)
		},
		submit() {
			this.$refs.form.validate(['id'],(err,formData)=>{
				if(!err){
					console.log('success',formData)
				}
			})
		}
	}
}

```

### 其他方法说明

```javascript

// 部分表单进行校验，接受一个参数，类型为 String 或 Array ，只校验传入 name 表单域的值
this.$refs.form.validateField(['name', 'email']).then((res)=>{
	// 成功返回，res 为对应表单数据
	// 其他逻辑处理 
	// ...
}).catch((err)=>{
	// 表单校验验失败，err 为具体错误信息
	// 其他逻辑处理
	// ...
})

// 移除表单校验，接受一个参数，类型为 String 或 Array ，只移除传入 name 表单域的值，如果不传入参数，则移除所有
this.$refs.form.clearValidate(['name', 'email'])

```


### FormsItem Props

|属性名|类型|默认值|可选值	|说明|
|:-:|:-:|:-:|:-:|:-:|
|name|String|-|-|表单域的属性名，在使用校验规则时必填|
|required|Boolean|false|-|label 右边显示红色"*"号，样式显示不会对校验规则产生效果|
|validate-trigger|String|submit|bind/submit|表单校验时机|
|left-icon|String|-|-| label左边的图标，限uni-ui的图标名称|
|icon-color|String|#606266|-| 左边通过icon配置的图标的颜色|
|label|String|-|-| 输入框左边的文字提示|
|label-width|Number|70|-| label的宽度，单位px|
|label-align|String|left|left/center/right|label的文字对齐方式|
|label-position|String|left|top/left|label的文字的位置|
|error-message|String|-|-|显示的错误提示内容，如果为空字符串或者false，则不显示错误信息|


### FormsItem Slots
|插槽名|说明|
|:-:| :-:|
|default|默认插槽|
|left(已经失效，请使用label代替)|label插槽，自定义label显示内容|
|label|label插槽，自定义label显示内容|

## 组件示例

点击查看：[https://hellouniapp.dcloud.net.cn/pages/extUI/forms/forms](https://hellouniapp.dcloud.net.cn/pages/extUI/forms/forms)