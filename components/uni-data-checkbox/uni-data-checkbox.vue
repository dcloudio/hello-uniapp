<template>
	<view class="uni-data-checklist">
		<template v-if="loading">
			<view class="uni-data-loading">
				<uni-load-more status="loading" iconType="snow" :iconSize="18" :content-text="contentText"></uni-load-more>
			</view>
		</template>
		<template v-else>
			<checkbox-group v-if="multiple" class="checklist-group" :class="{'is-list':mode==='list','is-wrap':wrap}" @change="chagne">
				<label class="checklist-box" :class="item.labelClass" :style="[item.styleBackgroud]" v-for="(item,index) in dataList" :key="index">
					<checkbox class="hidden" hidden :disabled="!!item.disabled" :value="item.value+''" :checked="item.selected" />
					<view v-if="(mode !=='tag' && mode !== 'list') || ( mode === 'list' && icon === 'left')" class="checkbox__inner" :class="item.checkboxBgClass" :style="[item.styleIcon]">
						<view class="checkbox__inner-icon" :class="item.checkboxClass"></view>
					</view>
					<view class="checklist-content" :class="{'list-content':mode === 'list' && icon ==='left'}">
						<text class="checklist-text" :class="item.textClass" :style="[item.styleIconText]">{{item.text}}</text>
						<view v-if="mode === 'list' && icon === 'right'" class="checkobx__list" :class="item.listClass" :style="[item.styleBackgroud]"></view>
					</view>
				</label>
			</checkbox-group>
			<radio-group v-else class="checklist-group" :class="{'is-list':mode==='list','is-wrap':wrap}" @change="chagne">
				<label class="checklist-box" :class="item.labelClass" :style="[item.styleBackgroud]" v-for="(item,index) in dataList" :key="index">
					<radio hidden :disabled="item.disabled" :value="item.value+''" :checked="item.selected" />
					<view v-if="(mode !=='tag' && mode !== 'list') || ( mode === 'list' && icon === 'left')" class="radio__inner" :class="item.checkboxBgClass" :style="[item.styleBackgroud]">
						<view class="radio__inner-icon" :class="item.checkboxClass" :style="[item.styleIcon]"></view>
					</view>
					<view class="checklist-content" :class="{'list-content':mode === 'list' && icon ==='left'}">
						<text class="checklist-text" :class="item.textClass" :style="[item.styleIconText]">{{item.text}}</text>
						<view v-if="mode === 'list' && icon === 'right'" class="checkobx__list" :class="item.listClass" :style="[item.styleRightIcon]"></view>
					</view>
				</label>
			</radio-group>
		</template>
	</view>
</template>

<script>
	/**
	 * DataChecklist 数据选择器
	 * @description 通过数据渲染 checkbox 和 radio
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=xxx
	 * @property {String} mode = [default| list | button | tag] 显示模式
	 * @value default  	默认横排模式
	 * @value list		列表模式
	 * @value button	按钮模式
	 * @value tag 		标签模式
	 * @property {Boolean} multiple = [true|false] 是否多选
	 * @property {Array|String|Number} value 默认值
	 * @property {Array} localdata 本地数据 ，格式 [{text:'',value:''}]
	 * @property {Number|String} min 最小选择个数 ，multiple为true时生效
	 * @property {Number|String} max 最大选择个数 ，multiple为true时生效
	 * @property {Boolean} wrap 是否换行显示
	 * @property {String} icon = [left|right]  list 列表模式下icon显示位置
	 * @property {Boolean} selectedColor 选中颜色
	 * @property {Boolean} selectedTextColor 选中文本颜色，如不填写则自动显示
	 * @value left 左侧显示
	 * @value right 右侧显示
	 * @event {Function} change  选中发生变化触发
	 */

	import clientdb from './clientdb.js'
	export default {
		name: 'uniDataChecklist',
		mixins: [clientdb],
		props: {
			mode: {
				type: String,
				default: 'default'
			},
			multiple: {
				type: Boolean,
				default: false
			},
			value: {
				type: [Array, String, Number],
				default () {
					return ''
				}
			},
			localdata: {
				type: Array,
				default () {
					return []
				}
			},
			min: {
				type: [Number, String],
				default: ''
			},
			max: {
				type: [Number, String],
				default: ''
			},
			wrap: {
				type: Boolean,
				default: false
			},
			icon: {
				type: String,
				default: 'left'
			},
			selectedColor: {
				type: String,
				default: ''
			},
			selectedTextColor: {
				type: String,
				default: ''
			},
			// clientDB 相关
			options: {
				type: [Object, Array],
				default () {
					return {}
				}
			},
			collection: {
				type: String,
				default: ''
			},
			action: {
				type: String,
				default: ''
			},
			field: {
				type: String,
				default: ''
			},
			pageData: {
				type: String,
				default: 'add'
			},
			pageCurrent: {
				type: Number,
				default: 1
			},
			pageSize: {
				type: Number,
				default: 20
			},
			getcount: {
				type: [Boolean, String],
				default: false
			},
			orderby: {
				type: String,
				default: ''
			},
			where: {
				type: [String, Object],
				default: ''
			},
			getone: {
				type: [Boolean, String],
				default: false
			},
			manual: {
				type: Boolean,
				default: false
			}
		},
		watch: {
			localdata: {
				handler(newVal) {
					this.range = newVal
					this.dataList = this.getDataList(this.getSelectedValue(newVal))
				},
				deep: true
			},

			listData(newVal) {
				this.range = newVal
				this.dataList = this.getDataList(this.getSelectedValue(newVal))
			},
			value(newVal) {
				this.dataList = this.getDataList(newVal)
				this.formItem && this.formItem.setValue(newVal)
			}
		},
		data() {
			return {
				dataList: [],
				range: [],
				contentText: {
					contentdown: '查看更多',
					contentrefresh: '加载中',
					contentnomore: '没有更多'
				},
				styles: {
					selectedColor: '#007aff',
					selectedTextColor: '#333',
				}
			};
		},
		created() {
			this.form = this.getForm('uniForms')
			this.formItem = this.getForm('uniFormsItem')
			this.formItem && this.formItem.setValue(this.value)
			this.styles = {
				selectedColor: this.selectedColor,
				selectedTextColor: this.selectedTextColor
			}

			if (this.formItem) {
				if (this.formItem.name) {
					this.rename = this.formItem.name
					this.form.inputChildrens.push(this)
				}
			}

			if (this.localdata && this.localdata.length !== 0) {
				this.range = this.localdata
				this.dataList = this.getDataList(this.getSelectedValue(this.range))
			} else {
				if (this.collection) {
					this.loadData()
				}
			}
		},
		methods: {
			init(range) {},
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
			chagne(e) {
				const values = e.detail.value

				let detail = {
					value: [],
					data: []
				}

				if (this.multiple) {
					this.range.forEach(item => {
						if (values.includes(item.value + '')) {
							detail.value.push(item.value)
							detail.data.push(item)
						}
					})
				} else {
					const range = this.range.find(item => (item.value + '') === values)
					if (range) {
						detail = {
							value: range.value,
							data: range
						}
					}
				}
				this.formItem && this.formItem.setValue(detail.value)
				this.$emit('input', detail.value)
				this.$emit('change', {
					detail
				})
				if (this.multiple) {
					// 如果 v-model 没有绑定 ，则走内部逻辑
					// if (this.value.length === 0) {
					this.dataList = this.getDataList(detail.value, true)
					// }
				} else {
					this.dataList = this.getDataList(detail.value)
				}
			},
			getLabelClass(item, index) {
				let classes = []
				switch (this.mode) {
					case 'default':
						item.disabled && classes.push('disabled-cursor')
						break
					case 'button':
						classes.push(...['is-button', ...this.getClasses(item, 'button')])
						break
					case 'list':
						if (this.multiple) {
							classes.push('is-list-multiple-box')
						} else {
							classes.push('is-list-box')
						}
						item.disabled && classes.push('is-list-disabled')
						index !== 0 && classes.push('is-list-border')
						break
					case 'tag':
						classes.push(...['is-tag', ...this.getClasses(item, 'tag')])
						break
				}
				classes = classes.join(' ')
				return classes
			},
			getCheckboxClass(item, type = '') {
				let classes = []
				if (this.multiple) {
					classes.push(...this.getClasses(item, 'default-multiple', type))
				} else {
					classes.push(...this.getClasses(item, 'default', type))
				}
				classes = classes.join(' ')
				return classes
			},
			getTextClass(item) {
				let classes = []
				switch (this.mode) {
					case 'default':
						classes.push(...this.getClasses(item, 'list'))
						break
					case 'button':
						classes.push(...this.getClasses(item, 'list'))
						break
					case 'list':
						classes.push(...this.getClasses(item, 'list'))
						break
					case 'tag':
						classes.push(...['is-tag-text', ...this.getClasses(item, 'tag-text')])
						break
				}
				classes = classes.join(' ')
				return classes
			},

			/**
			 * 获取渲染的新数组
			 * @param {Object} value 选中内容
			 */
			getDataList(value) {
				// 解除引用关系，破坏原引用关系，避免污染源数据
				let dataList = JSON.parse(JSON.stringify(this.range))
				let list = []
				if (this.multiple) {
					if (!Array.isArray(value)) {
						value = []
						// console.error('props 类型错误');
					}
				}
				dataList.forEach((item, index) => {
					item.disabled = item.disable || item.disabled || false
					if (this.multiple) {
						if (value.length > 0) {
							let have = value.find(val => val === item.value)
							item.selected = have !== undefined
						} else {
							item.selected = false
						}
					} else {
						item.selected = value === item.value
					}

					list.push(item)
				})
				return this.setRange(list)
			},
			/**
			 * 处理最大最小值
			 * @param {Object} list
			 */
			setRange(list) {
				let selectList = list.filter(item => item.selected)
				let min = Number(this.min) || 0
				let max = Number(this.max) || ''
				list.forEach((item, index) => {
					if (this.multiple) {
						if (selectList.length <= min) {
							let have = selectList.find(val => val.value === item.value)
							if (have !== undefined) {
								item.disabled = true
							}
						}

						if (selectList.length >= max && max !== '') {
							let have = selectList.find(val => val.value === item.value)
							if (have === undefined) {
								item.disabled = true
							}
						}
					}
					this.setClass(item, index)
					list[index] = item
				})
				return list
			},
			/**
			 * 设置 class
			 * @param {Object} item
			 * @param {Object} index
			 */
			setClass(item, index) {
				// 设置 label 的 class
				item.labelClass = this.getLabelClass(item, index)
				// 设置 checkbox外层样式
				item.checkboxBgClass = this.getCheckboxClass(item, '-bg')
				// 设置 checkbox 内层样式
				item.checkboxClass = this.getCheckboxClass(item)
				// 设置文本样式
				item.textClass = this.getTextClass(item)
				// 设置 list 对勾右侧样式
				item.listClass = this.getCheckboxClass(item, '-list')

				//  设置自定义样式
				item.styleBackgroud = this.setStyleBackgroud(item)
				item.styleIcon = this.setStyleIcon(item)
				item.styleIconText = this.setStyleIconText(item)
				item.styleRightIcon = this.setStyleRightIcon(item)
			},
			/**
			 * 获取 class
			 */
			getClasses(item, name, type = '') {
				let classes = []
				item.disabled && classes.push('is-' + name + '-disabled' + type)
				item.selected && classes.push('is-' + name + '-checked' + type)

				if (this.mode !== 'button' || name === 'button') {
					item.selected && item.disabled && classes.push('is-' + name + '-disabled-checked' + type)
				}

				return classes
			},
			/**
			 * 获取选中值
			 * @param {Object} range
			 */
			getSelectedValue(range) {
				if (!this.multiple) return this.value
				let selectedArr = []
				range.forEach((item) => {
					if (item.selected) {
						selectedArr.push(item.value)
					}
				})
				return this.value.length > 0 ? this.value : selectedArr
			},

			/**
			 * 设置背景样式
			 */
			setStyleBackgroud(item) {
				let styles = {}

				if (item.selected) {
					if (this.mode !== 'list') {
						styles.borderColor = this.styles.selectedColor
					}
					if (this.mode === 'tag') {
						styles.backgroundColor = this.styles.selectedColor
					}
				}
				return styles
			},
			setStyleIcon(item) {
				let styles = {}

				if (item.selected) {
					styles.backgroundColor = this.styles.selectedColor
					styles.borderColor = this.styles.selectedColor
				}
				return styles
			},
			setStyleIconText(item) {
				let styles = {}
				if (item.selected) {
					if (this.styles.selectedTextColor) {
						styles.color = this.styles.selectedTextColor
					} else {
						if (this.mode === 'tag') {
							styles.color = '#fff'
						} else {
							styles.color = this.styles.selectedColor
						}
					}
				}
				return styles
			},
			setStyleRightIcon(item) {
				let styles = {}
				if (item.selected) {
					if (this.mode === 'list') {
						styles.borderColor = this.styles.selectedColor
					}
				}

				return styles
			}
		}
	}
</script>

<style scoped>
	@charset "UTF-8";

	.uni-data-checklist {
		position: relative;
		z-index: 0;
		/* min-height: 36px; */
	}

	.uni-data-loading {
		display: flex;
		align-items: center;
		/* justify-content: center; */
		height: 36px;
		padding-left: 10px;
	}

	.checklist-group {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		flex-wrap: wrap;
	}

	.checklist-box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		margin: 5px 0;
		margin-right: 25px;
	}

	.checklist-text {
		font-size: 14px;
		color: #333;
		margin-left: 5px;
		transition: color 0.2s;
	}

	.is-button {
		margin-right: 10px;
		padding: 3px 15px;
		border: 1px #DCDFE6 solid;
		border-radius: 3px;
		transition: border-color 0.2s;
	}

	.is-list {
		flex-direction: column;
	}

	.is-list-box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		padding: 10px 15px;
		padding-left: 0;
		margin: 0;
	}

	.checklist-content {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex: 1;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.list-content {
		margin-left: 5px;
	}

	.is-list-multiple-box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		padding: 10px 15px;
		padding-left: 0;
		margin: 0;
	}

	.is-list-border {
		border-top: 1px #eee solid;
	}

	.is-tag {
		margin-right: 10px;
		padding: 3px 10px;
		border: 1px #eee solid;
		border-radius: 3px;
		background-color: #f5f5f5;
		/* transition: border-color 0.1s; */
	}

	.is-tag-text {
		margin: 0;
		color: #666;
	}

	.checkbox__inner {
		flex-shrink: 0;
		position: relative;
		border: 1px solid #DCDFE6;
		border-radius: 2px;
		box-sizing: border-box;
		width: 16px;
		height: 16px;
		background-color: #fff;
		z-index: 1;
		transition: border-color 0.1s;
	}

	.checkbox__inner-icon {
		border: 1px solid #fff;
		border-left: 0;
		border-top: 0;
		height: 8px;
		left: 5px;
		position: absolute;
		top: 1px;
		width: 3px;
		opacity: 0;
		transition: transform .2s;
		transform-origin: center;
		transform: rotate(40deg) scaleY(0.4);
	}

	.radio__inner {
		flex-shrink: 0;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		justify-content: center;
		align-items: center;
		position: relative;
		border: 1px solid #DCDFE6;
		border-radius: 2px;
		box-sizing: border-box;
		width: 16px;
		height: 16px;
		border-radius: 16px;
		background-color: #fff;
		z-index: 1;
		transition: border-color .3s;
	}

	.radio__inner-icon {
		width: 8px;
		height: 8px;
		border-radius: 10px;
		opacity: 0;
		transition: transform .3s;
	}

	.checkobx__list {
		border: 1px solid #fff;
		border-left: 0;
		border-top: 0;
		height: 12px;
		width: 6px;
		transform-origin: center;
		opacity: 0;
		transition: all 0.3s;
		transform: rotate(45deg);
	}

	/* 禁用样式 */
	.is-default-disabled-bg {
		background-color: #F2F6FC;
		border-color: #DCDFE6;
		/* #ifdef H5 */
		cursor: not-allowed;
		/* #endif */
	}

	.is-default-multiple-disabled-bg {
		background-color: #F2F6FC;
		border-color: #DCDFE6;
		/* #ifdef H5 */
		cursor: not-allowed;
		/* #endif */
	}

	.is-default-disabled {
		border-color: #F2F6FC;
	}

	.is-default-multiple-disabled {
		border-color: #F2F6FC;
	}

	.is-list-disabled {
		/* #ifdef H5 */
		cursor: not-allowed;
		/* #endif */
		color: #999;
	}

	.is-list-disabled-checked {
		color: #a1dcc1;
	}

	.is-button-disabled {
		/* #ifdef H5 */
		cursor: not-allowed;
		/* #endif */
		border-color: #EBEEF5;
	}

	.is-button-text-disabled {
		color: #C0C4CC;
	}

	.is-button-disabled-checked {
		border-color: #a1dcc1;
	}

	.is-tag-disabled {
		/* #ifdef H5 */
		cursor: not-allowed;
		/* #endif */
		border-color: #e9e9eb;
		background-color: #f4f4f5;
	}

	.is-tag-text-disabled {
		color: #bcbec2;
	}

	/* 选中样式 */
	.is-default-checked-bg {
		border-color: #007aff;
	}

	.is-default-multiple-checked-bg {
		border-color: #007aff;
		background-color: #007aff;
	}

	.is-default-checked {
		opacity: 1;
		background-color: #007aff;
		transform: rotate(45deg) scaleY(1);
	}

	.is-default-multiple-checked {
		opacity: 1;
		transform: rotate(45deg) scaleY(1);
	}

	.is-default-disabled-checked-bg {
		opacity: 0.4;
	}

	.is-default-multiple-disabled-checked-bg {
		opacity: 0.4;
	}

	.is-default-checked-list {
		border-color: #007aff;
		opacity: 1;
		transform: rotate(45deg) scaleY(1);
	}

	.is-default-multiple-checked-list {
		border-color: #007aff;
		opacity: 1;
		transform: rotate(45deg) scaleY(1);
	}

	.is-list-disabled-checked {
		opacity: 0.4;
	}

	.is-default-disabled-checked-list {
		opacity: 0.4;
	}

	.is-default-multiple-disabled-checked-list {
		opacity: 0.4;
	}

	.is-button-checked {
		border-color: #007aff;
	}

	.is-button-disabled-checked {
		opacity: 0.4;
	}

	.is-list-checked {
		color: #007aff;
	}

	.is-tag-checked {
		border-color: #007aff;
		background-color: #007aff;
	}

	.is-tag-text-checked {
		color: #fff;
	}

	.is-tag-disabled-checked {
		opacity: 0.4;
	}

	.disabled-cursor {
		/* #ifdef H5 */
		cursor: not-allowed;
		/* #endif */
	}

	.is-wrap {
		flex-direction: column;
	}

	.hidden {
		/* #ifdef MP-ALIPAY */
		display: none;
		/* #endif */
	}
</style>