<template>
	<view class="uni-field" :class="{ 'uni-border-top': borderTop, 'uni-border-bottom': borderBottom }" :style="[fieldStyle]">
		<view class="uni-field-inner" :class="[type == 'textarea' ? 'uni-textarea-inner' : '', 'uni-label-postion-' + labelPos]">
			<view :class="errorTop ? 'uni-error-in-label' : ''">
				<view class="uni-field-label" :class="[required ? 'uni-required' : '']" :style="{
						justifyContent: justifyContent,
						width: labelWid + 'px',
						marginBottom: labelMarginBottom
					}">
					<view class="uni-icon-wrap" v-if="leftIcon">
						<uni-icons size="16" :type="leftIcon" :color="iconColor" />
					</view>
					<slot name="leftIcon"></slot>
					<text class="uni-label-text" :class="[leftIcon ? 'uni-label-left-gap' : '']">{{ label }}</text>
				</view>
				<view v-if="errorTop" class="uni-error-message" :style="{ paddingLeft: '4px' }">{{ msg }}</view>
			</view>
			<view class="fild-body" :class="[inputBorder ? 'uni-input-border' : '']" :style="[borderEixstTextareaStyle]">
				<view class="uni-flex-1 uni-flex" :style="[inputWrapStyle]">
					<textarea v-if="type == 'textarea'" class="uni-flex-1 uni-textarea-class" :name="name" :value="value" :placeholder="placeholder" :placeholderStyle="placeholderStyle" :disabled="disabled" :maxlength="inputMaxlength" :focus="focus" :autoHeight="autoHeight" @input="onInput" @blur="onBlur" @focus="onFocus" @confirm="onConfirm" @tap="fieldClick" />
					<input
						v-else
						:type="type"
						class="uni-flex-1 uni-field__input-wrap"
						:name="name"
						:value="value"
						:password="password || this.type === 'password'"
						:placeholder="placeholder"
						:placeholderStyle="placeholderStyle"
						:disabled="disabled"
						:maxlength="inputMaxlength"
						:focus="focus"
						:confirmType="confirmType"
						@focus="onFocus"
						@blur="onBlur"
						@input="onInput"
						@confirm="onConfirm"
						@tap="fieldClick"
					/>
					<uni-icons :size="clearSize" v-if="clearable && value != ''" type="clear" color="#c0c4cc" @click="onClear" class="uni-clear-icon" />
				</view>
				<view class="uni-button-wrap"><slot name="right" /></view>
				<uni-icons v-if="rightIcon" size="16" @click="rightIconClick" :type="rightIcon" color="#c0c4cc" :style="[rightIconStyle]" />
			</view>
		</view>
		<view
			v-if="errorBottom"
			class="uni-error-message"
			:style="{
				paddingLeft: Number(labelWid) + 4 + 'px'
			}"
		>
			{{ msg }}
		</view>
	</view>
</template>

<script>
/**
 * Field 输入框
 * @description 此组件可以实现表单的输入与校验，包括 "text" 和 "textarea" 类型。
 * @tutorial https://ext.dcloud.net.cn/plugin?id=21001
 * @property {String } 	type 				输入框的类型（默认text）
 * @property {Boolean} 	required 			是否必填，左边您显示红色"*"号（默认false）
 * @property {String } 	leftIcon 			label左边的图标，限uni-ui的图标名称
 * @property {String } 	iconColor 			左边通过icon配置的图标的颜色（默认#606266）
 * @property {Boolean} 	rightIcon 			输入框右边的图标名称，限uni-ui的图标名称（默认false）
 * @property {String } 	label 				输入框左边的文字提示
 * @property {Number } 	labelWidth 			label的宽度，单位px（默认65）
 * @property {String } 	labelAlign 			label的文字对齐方式（默认left）
 * @property {String } 	labelPosition 		label的文字的位置（默认left）
 * @property {Boolean} 	clearable 			是否显示右侧清空内容的图标控件(输入框有内容，且获得焦点时才显示)，点击可清空输入框内容（默认true）
 * @property {String } 	placeholder 		输入框的提示文字
 * @property {String } 	placeholderStyle 	placeholder的样式(内联样式，字符串)，如"color: #ddd"
 * @property {Boolean} 	password 			是否密码输入方式(用点替换文字)，type为text时有效（默认false）
 * @property {Boolean} 	focus 				是否自动获得焦点（默认false）
 * @property {Boolean} 	disabled 			是否不可输入（默认false）
 * @property {Number } 	maxlength 			最大输入长度，设置为 -1 的时候不限制最大长度（默认140）
 * @property {String } 	confirmType 		设置键盘右下角按钮的文字，仅在type="text"时生效（默认done）
 * @property {String } 	errorMessage 		显示的错误提示内容，如果为空字符串或者false，则不显示错误信息
 * @property {Number } 	clearSize 			清除图标的大小，单位px（默认15）
 * @property {Boolean} 	trim 				是否自动去除两端的空格
 * @property {String } 	name 				表单域的属性名，在使用校验规则时必填
 * @property {Array  }  rules 				单行表单验证规则，接受一个数组
 * @property {Boolean} 	inputBorder 		是否显示input输入框的边框（默认false）
 * @property {Boolean} 	border-bottom 		是否显示field的下边框（默认true）
 * @property {Boolean} 	border-top 			是否显示field的上边框（默认false）
 * @property {Boolean} 	auto-height 		是否自动增高输入区域，type为textarea时有效（默认true）
 * @event {Function} 	input 				输入框内容发生变化时触发
 * @event {Function} 	focus 				输入框获得焦点时触发
 * @event {Function} 	blur 				输入框失去焦点时触发
 * @event {Function} 	confirm 			点击完成按钮时触发
 * @event {Function} 	right-icon-click 	通过right-icon生成的图标被点击时触发
 * @event {Function} 	click 				输入框被点击或者通过right-icon生成的图标被点击时触发，这样设计是考虑到传递右边的图标，一般都为需要弹出"picker"等操作时的场景，点击倒三角图标，理应发出此事件，见上方说明
 * @example <uni-field v-model="mobile" label="手机号" required :error-message="errorMessage"></uni-field>
 */
export default {
	name: 'uni-field',
	props: {
		// rules:{
		// 	type:Array,
		// 	default(){
		// 		return []
		// 	}
		// },
		trigger: {
			type: String,
			default: ''
		},
		leftIcon: String,
		rightIcon: String,
		required: Boolean,
		label: String,
		password: Boolean,
		clearable: {
			type: Boolean,
			default: true
		},
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
		iconColor: {
			type: String,
			default: '#606266'
		},
		autoHeight: {
			type: Boolean,
			default: true
		},
		errorMessage: {
			type: [String, Boolean],
			default: ''
		},
		placeholder: String,
		placeholderStyle: String,
		focus: Boolean,
		name: String,
		value: [Number, String],
		type: {
			type: String,
			default: 'text'
		},
		disabled: {
			type: Boolean,
			default: false
		},
		maxlength: {
			type: [Number, String],
			default: 140
		},
		confirmType: {
			type: String,
			default: 'done'
		},
		// lable的位置，可选为 left-左边，top-上边
		labelPosition: {
			type: String,
			default: ''
		},
		// 清除按钮的大小
		clearSize: {
			type: [Number, String],
			default: 15
		},
		// 是否显示 input 边框
		inputBorder: {
			type: Boolean,
			default: false
		},
		// 是否显示上边框
		borderTop: {
			type: Boolean,
			default: false
		},
		// 是否显示下边框
		borderBottom: {
			type: Boolean,
			default: true
		},
		// 是否自动去除两端的空格
		trim: {
			type: Boolean,
			default: true
		}
	},
	data() {
		return {
			focused: false,
			itemIndex: 0,
			errorTop: false,
			errorBottom: false,
			labelMarginBottom: '',
			errorWidth: '',
			errMsg: '',
			errorBorderColor: false,
			val: '',
			labelPos: '',
			labelWid: '',
			labelAli: ''
		};
	},
	computed: {
		msg() {
			return this.errorMessage || this.errMsg;
		},
		fieldStyle() {
			let style = {};
			if (this.labelPos === 'top') {
				style.padding = '10px 14px';
				this.labelMarginBottom = '6px';
			}
			if (this.labelPos === 'left' && this.msg !== false && this.msg !== '') {
				style.paddingBottom = '0px';
				this.errorBottom = true;
				this.errorTop = false;
			} else if (this.labelPos === 'top' && this.msg !== false && this.msg !== '') {
				this.errorBottom = false;
				this.errorTop = true;
			} else {
				// style.paddingBottom = ''
				this.errorTop = false;
				this.errorBottom = false;
			}
			return style;
		},

		borderEixstTextareaStyle() {
			let style = {};
			if (this.inputBorder) {
				if (this.type === 'textarea') {
					style.minHeight = '60px';
				}
				if (this.msg !== false && this.msg != '') {
					style.borderColor = '#dd524d';
				}
			}
			return style;
		},

		inputWrapStyle() {
			let style = {};
			// 判断lable的位置，如果是left的话，让input左边两边有间隙
			if (this.labelPos == 'left') {
				style.margin = `0 4px`;
			} else {
				// 如果lable是top的，input的左边就没必要有间隙了
				style.marginRight = `4px`;
				// this.fieldStyle.style.padding = '10px 14px'
			}
			return style;
		},
		rightIconStyle() {
			let style = {};
			if (this.arrowDirection == 'top') style.transform = 'roate(-90deg)';
			if (this.arrowDirection == 'bottom') style.transform = 'roate(90deg)';
			else style.transform = 'roate(0deg)';
			return style;
		},
		labelStyle() {
			let style = {};
			if (this.labelAli == 'left') style.justifyContent = 'flext-start';
			if (this.labelAli == 'center') style.justifyContent = 'center';
			if (this.labelAli == 'right') style.justifyContent = 'flext-end';
			return style;
		},
		// uni不支持在computed中写style.justifyContent = 'center'的形式，故用此方法
		justifyContent() {
			if (this.labelAli == 'left') return 'flex-start';
			if (this.labelAli == 'center') return 'center';
			if (this.labelAli == 'right') return 'flex-end';
		},
		// 因为uniapp的input组件的maxlength组件必须要数值，这里转为数值，给用户可以传入字符串数值
		inputMaxlength() {
			return Number(this.maxlength);
		},
		// label的位置
		fieldInnerStyle() {
			let style = {};
			if (this.labelPos == 'left') {
				style.flexDirection = 'row';
			} else {
				style.flexDirection = 'column';
			}

			return style;
		}
	},
	watch: {
		trigger(trigger) {
			this.formTrigger = trigger;
		}
	},
	created() {
		this.form = this.getForm();
		this.formRules = [];
		this.formTrigger = this.trigger;
		this.init();
	},
	methods: {
		/**
		 * 初始化变量值
		 */
		init() {
			if (this.form) {
				this.form.childrens.push(this);
				this.labelPos = this.labelPosition ? this.labelPosition : this.form.labelPosition;
				this.labelWid = this.labelWidth ? this.labelWidth : this.form.labelWidth;
				this.labelAli = this.labelAlign ? this.labelAlign : this.form.labelAlign;

				if (this.form.formRules) {
					this.formRules = this.form.formRules[this.name];
				}
				this.validator = this.form.validator;
				if(this.name){
					this.form.formData[this.name] = this.value || '';
				}
			} else {
				this.labelPos = this.labelPosition || 'left';
				this.labelWid = this.labelWidth || 65;
				this.labelAli = this.labelAlign || 'left';
			}
		},
		/**
		 * 获取父元素实例
		 */
		getForm() {
			let parent = this.$parent;
			let parentName = parent.$options.name;
			while (parentName !== 'uniForms') {
				parent = parent.$parent;
				if (!parent) return false;
				parentName = parent.$options.name;
			}
			return parent;
		},

		/**
		 * 移除该表单项的校验结果
		 */
		clearValidate() {
			this.errMsg = '';
		},
		/**
		 * 父组件处理函数
		 * @param {Object} callback
		 */
		parentVal(callback) {
			if (this.type === 'number') {
				this.val = this.val === '' ? this.val : Number(this.val);
			}
			typeof callback === 'function' &&
				callback(
					{
						[this.name]: this.val
					},
					this.name
				);
		},
		/**
		 * 触发校验
		 * @param {Object} trigger
		 * @param {Object} value
		 */
		triggerValidator(trigger, value) {
			let isValid = false;
			// 如果 name 不存在，则不开启校验
			this.formRules &&
				this.formRules.rules &&
				this.formRules.rules.forEach(item => {
					item.trigger = this.isTrigger(this.form.formTrigger, this.formTrigger, item.trigger);
					if (item.trigger !== trigger || item.trigger === 'submit') return;
					isValid = true;
				});

			isValid && this.triggerCheck(value);
		},
		/**
		 * 校验规则
		 * @param {Object} value
		 */
		triggerCheck(value, item) {
			// 输入值为 number
			if (this.type === 'number') {
				value = value === '' ? value : Number(value);
			}
			const result = this.validator.validateUpdate({
				[this.name]: value
			});
			this.errMsg = !result ? '' : result.errorMessage;
			this.form.validateCheck(result);
		},
		/**
		 * 触发时机
		 * @param {Object} event
		 */
		isTrigger(parentRule, itemRlue, rule) {
			let rl = 'none';
			if (rule) {
				rl = rule;
			} else if (itemRlue) {
				rl = itemRlue;
			} else if (parentRule) {
				rl = parentRule;
			} else {
				rl = 'blur';
			}
			return rl;
		},

		onInput(event) {
			let value = event.detail.value;
			// 判断是否去除空格
			if (this.trim) value = this.trimStr(value);
			this.form.formData[this.name] = value || '';
			this.val = value;
			this.$emit('input', value);
			// 校验输入
			this.triggerValidator('change', value);
		},

		onFocus(event) {
			this.focused = true;
			this.$emit('focus', event);
		},
		onBlur(event) {
			let value = event.detail.value;
			// 最开始使用的是监听图标@touchstart事件，自从hx2.8.4后，此方法在微信小程序出错
			// 这里改为监听点击事件，手点击清除图标时，同时也发生了@blur事件，导致图标消失而无法点击，这里做一个延时
			setTimeout(() => {
				this.focused = false;
			}, 100);
			this.$emit('blur', event);

			// 校验输入
			this.triggerValidator('blur', value);
		},
		onConfirm(e) {
			this.$emit('confirm', e.detail.value);
		},
		onClear(event) {
			this.val = '';
			this.$emit('input', '');
			this.clearValidate();
		},
		rightIconClick() {
			this.$emit('right-icon-click');
			this.$emit('click');
		},
		fieldClick() {
			this.$emit('click');
		},
		trimStr(str, pos = 'both') {
			if (pos == 'both') {
				return str.replace(/^\s+|\s+$/g, '');
			} else if (pos == 'left') {
				return str.replace(/^\s*/, '');
			} else if (pos == 'right') {
				return str.replace(/(\s*$)/g, '');
			} else if (pos == 'all') {
				return str.replace(/\s+/g, '');
			} else {
				return str;
			}
		}
	}
};
</script>

<style scoped>@charset "UTF-8";
.uni-field {
  padding: 16px 14px;
  text-align: left;
  color: #333;
  font-size: 14px;
  background-color: #fff; }

.uni-field-inner {
  display: flex;
  align-items: center; }

.uni-textarea-inner {
  align-items: flex-start; }

.uni-textarea-class {
  min-height: 48px;
  width: auto;
  font-size: 14px; }

.fild-body {
  width: 100%;
  display: flex;
  flex: 1;
  align-items: center; }

.uni-arror-right {
  margin-left: 4px; }

.uni-label-text {
  display: inline-block; }

.uni-label-left-gap {
  margin-left: 3px; }

.uni-label-postion-top {
  flex-direction: column;
  align-items: flex-start;
  flex: 1; }

.uni-field-label {
  width: 65px;
  flex: 1 1 65px;
  text-align: left;
  position: relative;
  display: flex;
  align-items: center; }

.uni-required::before {
  content: '*';
  position: absolute;
  left: -8px;
  font-size: 14px;
  color: #dd524d;
  height: 9px;
  line-height: 1; }

.uni-field__input-wrap {
  position: relative;
  overflow: hidden;
  font-size: 14px;
  height: 24px;
  flex: 1;
  width: auto; }

.uni-clear-icon {
  display: flex;
  align-items: center; }

.uni-error-message {
  line-height: 12px;
  padding-top: 2px;
  padding-bottom: 2px;
  color: #dd524d;
  font-size: 12px;
  text-align: left; }

.uni-input-error-border {
  border-color: #dd524d; }

.placeholder-style {
  color: #969799; }

.uni-input-class {
  font-size: 14px; }

.uni-button-wrap {
  margin-left: 4px; }

/* start--Retina 屏幕下的 1px 边框--start */
.uni-border,
.uni-border-bottom,
.uni-border-left,
.uni-border-right,
.uni-border-top,
.uni-border-top-bottom {
  position: relative; }

.uni-border-bottom:after,
.uni-border-left:after,
.uni-border-right:after,
.uni-border-top-bottom:after,
.uni-border-top:after,
.uni-border:after {
  /* #ifndef APP-NVUE */
  content: ' ';
  /* #endif */
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
  box-sizing: border-box;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  width: 199.8%;
  height: 199.7%;
  transform: scale(0.5, 0.5);
  border: 0 solid #e5e5e5;
  z-index: 2; }

.uni-input-border {
  min-height: 34px;
  padding-left: 4px;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  box-sizing: border-box; }

.uni-border-top:after {
  border-top-width: 1px; }

.uni-border-left:after {
  border-left-width: 1px; }

.uni-border-right:after {
  border-right-width: 1px; }

.uni-border-bottom:after {
  border-bottom-width: 1px; }

.uni-border-top-bottom:after {
  border-width: 1px 0; }

.uni-border:after {
  border-width: 1px; }

/* end--Retina 屏幕下的 1px 边框--end */
.uni-icon-wrap {
  padding-left: 3px;
  padding-right: 3px;
  display: flex;
  align-items: center;
  justify-content: center; }

.uni-button-wrap {
  display: flex;
  align-items: right;
  justify-content: center; }

.uni-clear-icon {
  display: flex;
  align-items: center;
  margin-left: 4px; }

.uni-flex {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  align-items: center; }

.uni-flex-1 {
  flex: 1; }

.uni-error-in-label {
  display: flex;
  flex-direction: row; }
</style>