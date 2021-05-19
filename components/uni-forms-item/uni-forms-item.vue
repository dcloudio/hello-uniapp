<template>
	<view class="uni-forms-item" :class="{'uni-forms-item--border':border,'is-first-border':border&&isFirstBorder,'uni-forms-item-error':msg}">
		<view class="uni-forms-item__box">
			<view class="uni-forms-item__inner" :class="['is-direction-'+labelPos,]">
				<view v-if="label" class="uni-forms-item__label" :style="{width:labelWid+'px',justifyContent: justifyContent}">
					<slot name="left">
						<uni-icons v-if="leftIcon" class="label-icon" size="16" :type="leftIcon" :color="iconColor" />
						<text class="label-text">{{label}}</text>
						<text v-if="required" class="is-required">*</text>
					</slot>
				</view>
				<view class="uni-forms-item__content" :class="{'is-input-error-border': msg}">
					<slot></slot>
				</view>
			</view>
			<view v-if="msg" class="uni-error-message" :class="{'uni-error-msg--boeder':border}" :style="{
				paddingLeft: (labelPos === 'left'? Number(labelWid)+5:5) + 'px'
			}"><text class="uni-error-message-text">{{ showMsg === 'undertext' ? msg:'' }}</text></view>
		</view>
	</view>
</template>

<script>
	/**
	 * FormsItem 表单子组件
	 * @description 此组件可以实现表单的输入与校验，包括 "text" 和 "textarea" 类型。
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=2773
	 * @property {String}	name	表单域的属性名，在使用校验规则时必填
	 * @property {Boolean} required	左边显示红色"*"号，样式显示不会对校验规则产生效果（默认 false）
	 * @property {String} validate-trigger = [bind|submit]	表单校验时机（默认 submit）
	 * @value	bind		数据发生变化时触发
	 * @value submit 	提交表单是触发
	 * @property {String} left-icon	label左边的图标，限uni-ui的图标名称
	 * @property {String} icon-color	左边通过icon配置的图标的颜色	（默认 #606266）
	 * @property {String} label	输入框左边的文字提示
	 * @property {Number} label-width	label的宽度，单位px
	 * @property {String} label-align = [left|center|right]	label的文字对齐方式（默认 left）
	 * @value left 		左对齐
	 * @value center	居中对齐
	 * @value right  	右对齐
	 * @property {String} label-position = [top|left]	label的文字的位置（默认 left）
	 * @value top 	顶部显示 label
	 * @value left 	左侧显示 label
	 * @property {String} error-message	显示的错误提示内容，如果为空字符串或者false，则不显示错误信息
	 */
	export default {
		name: "uniFormsItem",
		props: {
			// 自定义内容
			custom: {
				type: Boolean,
				default: false
			},
			// 是否显示报错信息
			showMessage: {
				type: Boolean,
				default: true
			},
			name: String,
			required: Boolean,
			validateTrigger: {
				type: String,
				default: ''
			},
			leftIcon: String,
			iconColor: {
				type: String,
				default: '#606266'
			},
			label: String,
			// 左边标题的宽度单位px
			labelWidth: {
				type: [Number, String],
				default: ''
			},
			// 对齐方式，left|center|right
			labelAlign: {
				type: String,
				default: ''
			},
			// lable的位置，可选为 left-左边，top-上边
			labelPosition: {
				type: String,
				default: ''
			},
			errorMessage: {
				type: [String, Boolean],
				default: ''
			}
		},
		data() {
			return {
				errorTop: false,
				errorBottom: false,
				labelMarginBottom: '',
				errorWidth: '',
				errMsg: '',
				val: '',
				labelPos: '',
				labelWid: '',
				labelAli: '',
				showMsg: 'undertext',
				border: false,
				isFirstBorder: false
			};
		},
		computed: {
			msg() {
				return this.errorMessage || this.errMsg;
			},
			fieldStyle() {
				let style = {}
				if (this.labelPos == 'top') {
					style.padding = '0 0'
					this.labelMarginBottom = '6px'
				}
				if (this.labelPos == 'left' && this.msg !== false && this.msg != '') {
					style.paddingBottom = '0px'
					this.errorBottom = true
					this.errorTop = false
				} else if (this.labelPos == 'top' && this.msg !== false && this.msg != '') {
					this.errorBottom = false
					this.errorTop = true
				} else {
					// style.paddingBottom = ''
					this.errorTop = false
					this.errorBottom = false
				}
				return style
			},

			// uni不支持在computed中写style.justifyContent = 'center'的形式，故用此方法
			justifyContent() {
				if (this.labelAli === 'left') return 'flex-start';
				if (this.labelAli === 'center') return 'center';
				if (this.labelAli === 'right') return 'flex-end';
			}
		},
		watch: {
			validateTrigger(trigger) {
				this.formTrigger = trigger
			}
		},
		created() {
			this.form = this.getForm()
			this.group = this.getForm('uniGroup')
			this.formRules = []
			this.formTrigger = this.validateTrigger
			if (this.form) {
				this.form.childrens.push(this)
			}
			this.init()
		},
		destroyed() {
			if (this.form) {
				this.form.childrens.forEach((item, index) => {
					if (item === this) {
						this.form.childrens.splice(index, 1)
						delete this.form.formData[item.name]
					}
				})
			}
		},
		methods: {
			init() {
				if (this.form) {
					let {
						formRules,
						validator,
						formData,
						value,
						labelPosition,
						labelWidth,
						labelAlign,
						errShowType
					} = this.form

					this.labelPos = this.labelPosition ? this.labelPosition : labelPosition
					this.labelWid = this.label ? (this.labelWidth ? this.labelWidth : labelWidth) : 0
					this.labelAli = this.labelAlign ? this.labelAlign : labelAlign

					// 判断第一个 item
					if (!this.form.isFirstBorder) {
						this.form.isFirstBorder = true
						this.isFirstBorder = true
					}

					// 判断 group 里的第一个 item
					if (this.group) {
						if (!this.group.isFirstBorder) {
							this.group.isFirstBorder = true
							this.isFirstBorder = true
						}
					}

					this.border = this.form.border
					this.showMsg = errShowType

					if (formRules) {
						this.formRules = formRules[this.name] || {}
					}

					this.validator = validator
				} else {
					this.labelPos = this.labelPosition || 'left'
					this.labelWid = this.labelWidth || 65
					this.labelAli = this.labelAlign || 'left'
				}
			},
			/**
			 * 获取父元素实例
			 */
			getForm(name = 'uniForms') {
				let parent = this.$parent;
				let parentName = parent.$options.name;
				while (parentName !== name) {
					parent = parent.$parent;
					if (!parent) return false
					parentName = parent.$options.name;
				}
				return parent;
			},

			/**
			 * 移除该表单项的校验结果
			 */
			clearValidate() {
				this.errMsg = ''
			},

			setValue(value) {
				if (this.name) {
					if (this.errMsg) this.errMsg = ''
					this.form.formData[this.name] = this.form._getValue(this.name, value)
					if (!this.formRules || (typeof(this.formRules) && JSON.stringify(this.formRules) === '{}')) return
					this.triggerCheck(this.form._getValue(this.name, value))
				}
			},

			/**
			 * 校验规则
			 * @param {Object} value
			 */
			async triggerCheck(value, callback) {
				let promise = null;
				this.errMsg = ''
				// if no callback, return promise
				// if (callback && typeof callback !== 'function' && Promise) {
				// 	promise = new Promise((resolve, reject) => {
				// 		callback = function(valid) {
				// 			!valid ? resolve(valid) : reject(valid)
				// 		};
				// 	});
				// }
				// if (!this.validator) {
				// 	typeof callback === 'function' && callback(null);
				// 	if (promise) return promise
				// }
				if (!this.validator) return
				const isNoField = this.isRequired(this.formRules.rules || [])
				let isTrigger = this.isTrigger(this.formRules.validateTrigger, this.validateTrigger, this.form.validateTrigger)
				let result = null
				if (!(!isTrigger)) {
					result = await this.validator.validateUpdate({
						[this.name]: value
					}, this.form.formData)
				}
				// 判断是否必填,非必填，不填不校验，填写才校验
				if (!isNoField && (value === undefined || value === '')) {
					result = null
				}
				if (isTrigger && result && result.errorMessage) {
					const inputComp = this.form.inputChildrens.find(child => child.rename === this.name)
					if (inputComp) {
						inputComp.errMsg = result.errorMessage
					}
					if (this.form.errShowType === 'toast') {
						uni.showToast({
							title: result.errorMessage || '校验错误',
							icon: 'none'
						})
					}
					if (this.form.errShowType === 'modal') {
						uni.showModal({
							title: '提示',
							content: result.errorMessage || '校验错误'
						})
					}
				}

				this.errMsg = !result ? '' : result.errorMessage
				// 触发validate事件
				this.form.validateCheck(result ? result : null)
				// typeof callback === 'function' && callback(result ? result : null);
				// if (promise) return promise

			},
			/**
			 * 触发时机
			 * @param {Object} event
			 */
			isTrigger(rule, itemRlue, parentRule) {
				let rl = true;
				//  bind  submit
				if (rule === 'submit' || !rule) {
					if (rule === undefined) {
						if (itemRlue !== 'bind') {
							if (!itemRlue) {
								return parentRule === 'bind' ? true : false
							}
							return false
						}
						return true
					}
					return false
				}
				return true;
			},
			// 是否有必填字段
			isRequired(rules) {
				let isNoField = false
				for (let i = 0; i < rules.length; i++) {
					const ruleData = rules[i]
					if (ruleData.required) {
						isNoField = true
						break
					}
				}
				return isNoField
			}
		}
	};
</script>

<style scoped>
	.uni-forms-item {
		position: relative;
		padding: 0px;
		text-align: left;
		color: #333;
		font-size: 14px;
	}

	.uni-forms-item__box {
		position: relative;
	}

	.uni-forms-item__inner {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		padding-bottom: 22px;
	}

	.is-direction-left {
		flex-direction: row;
	}

	.is-direction-top {
		flex-direction: column;
	}

	.uni-forms-item__label {
		/* #ifndef APP-NVUE */
		display: flex;
		flex-shrink: 0;
		box-sizing: border-box;
		/* #endif */
		flex-direction: row;
		align-items: center;
		width: 65px;
		padding: 5px 0;
		height: 36px;
		margin-right: 5px;
	}

	.uni-forms-item__label .label-text {
		font-size: 14px;
		color: #333;
	}

	.uni-forms-item__content {
		/* #ifndef APP-NVUE */
		width: 100%;
		box-sizing: border-box;
		min-height: 36px;
		/* #endif */
		flex: 1;
	}

	.label-icon {
		margin-right: 5px;
		margin-top: -1px;
	}

	.is-required {
		color: #dd524d;
	}

	.uni-error-message {
		position: absolute;
		bottom: 0px;
		left: 0;
		text-align: left;
	}

	.uni-error-message-text {
		line-height: 22px;
		color: #dd524d;
		font-size: 12px;
	}

	.uni-error-msg--boeder {
		position: relative;
		bottom: 0;
		line-height: 22px;
	}

	.is-input-error-border {
		border-color: #dd524d;
	}

	.uni-forms-item--border {
		margin-bottom: 0;
		padding: 10px 0;
		border-top: 1px #eee solid;
	}

	.uni-forms-item--border .uni-forms-item__inner {
		padding: 0;
	}

	.uni-forms-item-error {
		padding-bottom: 0;
	}

	.is-first-border {
		/* #ifndef APP-NVUE */
		border: none;
		/* #endif */
		/* #ifdef APP-NVUE */
		border-width: 0;
		/* #endif */
	}
</style>