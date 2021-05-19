<template>
	<!--   -->
	<view class="uni-forms" :class="{'uni-forms--top':!border}">
		<form @submit.stop="submitForm" @reset="resetForm">
			<slot></slot>
		</form>
	</view>
</template>

<script>
	import Vue from 'vue'
	import Validator from './validate.js'
	Vue.prototype.binddata = function(name, value, formName) {
		if (formName) {
			this.$refs[formName].setValue(name, value)
		} else {
			let formVm
			for (let i in this.$refs) {
				const vm = this.$refs[i]
				if (vm && vm.$options && vm.$options.name === 'uniForms') {
					formVm = vm
					break
				}
			}
			if (!formVm) return console.error('当前 uni-froms 组件缺少 ref 属性')
			formVm.setValue(name, value)
		}
	}

	/**
	 * Forms 表单
	 * @description 由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=2773
	 * @property {Object} rules	表单校验规则
	 * @property {String} validateTrigger = [bind|submit]	校验触发器方式 默认 submit 可选
	 * @value bind 		发生变化时触发
	 * @value submit 	提交时触发
	 * @property {String} labelPosition = [top|left]	label 位置 默认 left 可选
	 * @value top		顶部显示 label
	 * @value left	左侧显示 label
	 * @property {String} labelWidth	label 宽度，默认 65px
	 * @property {String} labelAlign = [left|center|right]	label 居中方式  默认 left 可选
	 * @value left		label 左侧显示
	 * @value center	label 居中
	 * @value right		label 右侧对齐
	 * @property {String} errShowType = [undertext|toast|modal]	校验错误信息提示方式
	 * @value undertext	错误信息在底部显示
	 * @value toast	错误信息toast显示
	 * @value modal	错误信息modal显示
	 * @event {Function} submit 提交时触发
	 */

	export default {
		name: 'uniForms',
		props: {
			value: {
				type: Object,
				default () {
					return {}
				}
			},
			// 表单校验规则
			rules: {
				type: Object,
				default () {
					return {}
				}
			},
			// 校验触发器方式，默认 关闭
			validateTrigger: {
				type: String,
				default: ''
			},
			// label 位置，可选值 top/left
			labelPosition: {
				type: String,
				default: 'left'
			},
			// label 宽度，单位 px
			labelWidth: {
				type: [String, Number],
				default: 65
			},
			// label 居中方式，可选值 left/center/right
			labelAlign: {
				type: String,
				default: 'left'
			},
			errShowType: {
				type: String,
				default: 'undertext'
			},
			border: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				formData: {}
			};
		},
		watch: {
			rules(newVal) {
				this.init(newVal)
			},
			trigger(trigger) {
				this.formTrigger = trigger
			},
		},
		created() {
			let _this = this
			this.childrens = []
			this.inputChildrens = []
			this.checkboxChildrens = []
			this.formRules = []
			// this.init(this.rules)
		},
		mounted() {
			this.init(this.rules)
		},
		methods: {
			init(formRules) {
				// 判断是否有规则
				if (Object.keys(formRules).length > 0) {
					this.formTrigger = this.trigger
					this.formRules = formRules
					// if (!this.validator) {
					this.validator = new Validator(formRules)
					// }
				} else {
					return
				}
				// 判断表单存在那些实例
				for (let i in this.value) {
					const itemData = this.childrens.find(v => v.name === i)
					if (itemData) {
						this.formData[i] = this.value[i]
						itemData.init()
					}
				}

				// watch 每个属性 ，需要知道具体那个属性发变化
				Object.keys(this.value).forEach((key) => {
					this.$watch('value.' + key, (newVal) => {
						const itemData = this.childrens.find(v => v.name === key)
						if (itemData) {
							this.formData[key] = this._getValue(key, newVal)
							itemData.init()
						} else {
							this.formData[key] = this.value[key] || null
						}
					})
				})
			},
			/**
			 * 设置校验规则
			 * @param {Object} formRules
			 */
			setRules(formRules) {
				this.init(formRules)
			},
			/**
			 * 公开给用户使用
			 * 设置自定义表单组件 value 值
			 *  @param {String} name 字段名称
			 *  @param {String} value 字段值
			 */
			setValue(name, value, callback) {
				let example = this.childrens.find(child => child.name === name)
				if (!example) return null
				value = this._getValue(example.name, value)
				this.formData[name] = value
				example.val = value
				this.$emit('input', Object.assign({}, this.value, this.formData))
				return example.triggerCheck(value, callback)
			},

			/**
			 * TODO 表单提交， 小程序暂不支持这种用法
			 * @param {Object} event
			 */
			submitForm(event) {
				const value = event.detail.value
				return this.validateAll(value || this.formData, 'submit')
			},

			/**
			 * 表单重置
			 * @param {Object} event
			 */
			resetForm(event) {
				this.childrens.forEach(item => {
					item.errMsg = ''
					const inputComp = this.inputChildrens.find(child => child.rename === item.name)
					if (inputComp) {
						inputComp.errMsg = ''
						inputComp.$emit('input', inputComp.multiple ? [] : '')
					}
				})

				this.childrens.forEach((item) => {
					if (item.name) {
						this.formData[item.name] = this._getValue(item.name, '')
					}
				})

				this.$emit('input', this.formData)
				this.$emit('reset', event)
			},

			/**
			 * 触发表单校验，通过 @validate 获取
			 * @param {Object} validate
			 */
			validateCheck(validate) {
				if (validate === null) validate = null
				this.$emit('validate', validate)
			},
			/**
			 * 校验所有或者部分表单
			 */
			async validateAll(invalidFields, type, callback) {
				this.childrens.forEach(item => {
					item.errMsg = ''
				})

				let promise;
				if (!callback && typeof callback !== 'function' && Promise) {
					promise = new Promise((resolve, reject) => {
						callback = function(valid, invalidFields) {
							!valid ? resolve(invalidFields) : reject(valid);
						};
					});
				}

				let fieldsValue = {}
				let tempInvalidFields = Object.assign({}, invalidFields)

				Object.keys(this.formRules).forEach(item => {
					const values = this.formRules[item]
					const rules = (values && values.rules) || []
					let isNoField = false
					for (let i = 0; i < rules.length; i++) {
						const rule = rules[i]
						if (rule.required) {
							isNoField = true
							break
						}
					}
					// 如果存在 required 才会将内容插入校验对象
					if (!isNoField &&
						((tempInvalidFields[item] === undefined ||
								tempInvalidFields[item] === '') &&
							tempInvalidFields[item] !== false
						)) {
						delete tempInvalidFields[item]
					}
				})

				// 循环字段是否存在于校验规则中
				for (let i in this.formRules) {
					for (let j in tempInvalidFields) {
						const index = this.childrens.findIndex(v => v.name === j)
						if (i === j && index !== -1) {
							fieldsValue[i] = tempInvalidFields[i]
						}
					}
				}
				let result = []
				let example = null

				let newFormData = {}
				this.childrens.forEach(v => {
					newFormData[v.name] = this._getValue(v.name, invalidFields[v.name])
				})
				if (this.validator) {
					for (let i in fieldsValue) {
						// 循环校验，目的是异步校验
						const resultData = await this.validator.validateUpdate({
							[i]: fieldsValue[i]
						}, this.formData)

						// 未通过
						if (resultData) {
							// 获取当前未通过子组件实例
							example = this.childrens.find(child => child.name === resultData.key)
							// 获取easyInput 组件实例
							const inputComp = this.inputChildrens.find(child => child.rename === (example && example
								.name))
							if (inputComp) {
								inputComp.errMsg = resultData.errorMessage
							}
							result.push(resultData)
							// 区分触发类型
							if (this.errShowType === 'undertext') {
								if (example) example.errMsg = resultData.errorMessage
							} else {
								if (this.errShowType === 'toast') {
									uni.showToast({
										title: resultData.errorMessage || '校验错误',
										icon: 'none'
									})
									break
								} else if (this.errShowType === 'modal') {
									uni.showModal({
										title: '提示',
										content: resultData.errorMessage || '校验错误'
									})
									break
								} else {
									if (example) example.errMsg = resultData.errorMessage
								}
							}
						}
					}
				}

				if (Array.isArray(result)) {
					if (result.length === 0) result = null
				}

				if (type === 'submit') {
					this.$emit('submit', {
						detail: {
							value: newFormData,
							errors: result
						}
					})
				} else {
					this.$emit('validate', result)
				}

				callback && typeof callback === 'function' && callback(result, newFormData)

				if (promise && callback) {
					return promise
				} else {
					return null
				}
			},

			/**
			 * 外部调用方法
			 * 手动提交校验表单
			 * 对整个表单进行校验的方法，参数为一个回调函数。
			 */
			submit(callback) {
				// Object.assign(this.formData,formData)
				for (let i in this.value) {
					const itemData = this.childrens.find(v => v.name === i)
					if (itemData) {
						if (this.formData[i] === undefined) {
							this.formData[i] = this._getValue(i, this.value[i])
						}
					}
				}
				return this.validateAll(this.formData, 'submit', callback)
			},

			/**
			 * 外部调用方法
			 * 校验表单
			 * 对整个表单进行校验的方法，参数为一个回调函数。
			 */
			validate(callback) {
				return this.validateAll(this.formData, '', callback)
			},

			/**
			 * 部分表单校验
			 * @param {Object} props
			 * @param {Object} cb
			 */
			validateField(props, callback) {
				props = [].concat(props);
				let invalidFields = {}
				this.childrens.forEach(item => {
					if (props.indexOf(item.name) !== -1) {
						invalidFields = Object.assign({}, invalidFields, {
							[item.name]: this.formData[item.name]
						})
					}
				})
				return this.validateAll(invalidFields, '', callback)
			},

			/**
			 * 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果
			 */
			resetFields() {
				this.resetForm()
			},

			/**
			 * 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果
			 */
			clearValidate(props) {
				props = [].concat(props);
				this.childrens.forEach(item => {
					const inputComp = this.inputChildrens.find(child => child.rename === item.name)
					if (props.length === 0) {
						item.errMsg = ''
						if (inputComp) {
							inputComp.errMsg = ''
						}
					} else {
						if (props.indexOf(item.name) !== -1) {
							item.errMsg = ''
							if (inputComp) {
								inputComp.errMsg = ''
							}
						}
					}
				})
			},
			/**
			 * 把 value 转换成指定的类型
			 * @param {Object} key
			 * @param {Object} value
			 */
			_getValue(key, value) {
				const rules = (this.formRules[key] && this.formRules[key].rules) || []
				const isRuleNum = rules.find(val => val.format && this.type_filter(val.format))
				const isRuleBool = rules.find(val => val.format && val.format === 'boolean' || val.format === 'bool')
				// 输入值为 number
				if (isRuleNum) {
					value = isNaN(value) ? value : (value === '' || value === null ? null : Number(value))
				}
				// 简单判断真假值
				if (isRuleBool) {
					value = !value ? false : true
				}
				return value
			},
			/**
			 * 过滤数字类型
			 * @param {Object} format
			 */
			type_filter(format) {
				return format === 'int' || format === 'double' || format === 'number' || format === 'timestamp'
			}
		}
	}
</script>

<style scoped></style>