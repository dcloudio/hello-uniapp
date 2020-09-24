<template>
	<view class="uni-form">
		<form @submit.stop="submitForm" @reset="resetForm">
			<slot></slot>
		</form>
	</view>
</template>

<script>
	/**
	 * Forms 自动校验的表单
	 * @description 由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=2773
	 * @property {Object} formRules  表单校验规则
	 * @property {String} trigger  校验触发器方式 默认 blur 可选 [blur|change|submit]
	 * @property {String} labelPosition	 label 位置 默认 left 可选 [top|left]
	 * @property {String|Number} labelWidth  label 宽度，默认 65px
	 * @property {String} labelAlign  label 居中方式  默认 left 可选 [left|center|right]
	 * @property {String} errorMessageType  错误提示类型 默认 bottom 可选 [none|top|bottom|toast|alert]
	 */

	import Validator from './schema-validator.js'
	export default {
		name: 'uniForms',
		props: {
			// 表单校验规则
			formRules: {
				type: Object,
				default () {
					return {}
				}
			},
			// 校验触发器方式，默认 关闭
			trigger: {
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
			// 错误提示类型 可选值 none/ top / bottom /toast / alert
			errorMessageType: {
				type: String,
				default: 'bottom'
			}
		},
		provide() {
			return {
				form: this
			}
		},
		data() {
			return {
				rules: {}
			};
		},
		watch: {
			formRules(newVal) {
				this.init(newVal)
			},
			trigger(trigger) {
				this.formTrigger = trigger
			}
		},
		created() {
			this.childrens = []
			this.init(this.formRules)
		},
		methods: {
			init(formRules) {
				if (Object.keys(formRules).length > 0) {
					this.formTrigger = this.trigger
					this.validator = new Validator(formRules)
				}
			},
			// 表单提交
			submitForm(event) {
				const {
					value
				} = event.detail

				let example = null
				// 未开启校验规则
				if (!this.validator) {
					this.$emit('submit', {
						value
					})
					return
				}
				this.childrens.forEach(item => {
					item.errorMessage = ''
				})
				for (let i in value) {
					example = this.childrens.find(child => child.name === i)
					// 校验 number 的类型
					if (example.type === 'number') {
						value[i] = value[i] === '' ? value[i] : Number(value[i])
					}
				}
				const result = this.validator.validateAll(value)

				result.forEach(item => {
					example = this.childrens.find(child => child.name === item.key)
					example.errorMessage = item.errorMessage
				})
				event.detail.errors = result.length === 0 ? null : result
				this.$emit('submit', event)
			},
			/**
			 * 表单重置
			 * @param {Object} event
			 */
			resetForm(event) {
				this.childrens.forEach(item => {
					item.errorMessage = ''
					item.val = ''
					item.$emit('input', '')
				})
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
			validateAll(invalidFields, type) {
				if (!this.validator) return
				this.childrens.forEach(item => {
					item.errorMessage = ''
				})
				const result = this.validator.validateAll(invalidFields)
				let example = null
				result.forEach(item => {
					example = this.childrens.find(child => child.name === item.key)
					example.errorMessage = item.errorMessage
				})

				typeof callback === 'function' && callback(!result, invalidFields)
				if (type === 'submit') {
					this.$emit('submit', {
						value: invalidFields,
						validate: result.length === 0 ? null : result
					})
				} else {
					this.$emit('validate', result.length === 0 ? null : result)
				}
			},


			/**
			 * 校验表单
			 * 对整个表单进行校验的方法，参数为一个回调函数。
			 */
			validate(callback) {
				let invalidFields = {}
				this.childrens.forEach(item => {
					item.parentVal((val) => {
						invalidFields = Object.assign({}, invalidFields, val)
					})
				})
				this.validateAll(invalidFields, 'submit')
			},

			/**
			 * 部分表单校验
			 * @param {Object} props
			 * @param {Object} cb
			 */
			validateField(props) {
				props = [].concat(props);
				let invalidFields = {}
				this.childrens.forEach(item => {
					item.parentVal((val, name) => {
						if (props.indexOf(name) !== -1) {
							invalidFields = Object.assign({}, invalidFields, val)
						}
					})
				})
				this.validateAll(invalidFields)
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
					if (props.length === 0) {
						item.errorMessage = ''
					} else {
						if (props.indexOf(item.name) !== -1) {
							item.errorMessage = ''
						}
					}

				})
			}

		}
	}
</script>

<style scoped></style>