<template>
	<view class="uni-date">
		<view class="uni-date-editor--x" :class="{'uni-date-editor--x__disabled': disabled,
		'uni-date-x--border': border}">
			<view v-if="!isRange" class="uni-date-x uni-date-single" @click="show">
				<view class="uni-date__icon-logo">
					<image class="uni-date-editor--logo" src="./icon/cale-50.png" mode=""></image>
				</view>
				<input class="uni-date__input" type="text" :value="displayValue" :placeholder="placeholder" :disabled="true" />
			</view>
			<view v-else class="uni-date-x uni-date-range" @click="show">
				<view class="uni-date__icon-logo">
					<image class="uni-date-editor--logo" src="./icon/cale-50.png" mode=""></image>
				</view>
				<input class="uni-date__input uni-date-range__input" type="text" :value="range.startVal" :placeholder="startPlaceholder" :disabled="true" />
				<slot>
					<view class="">{{rangeSeparator}}</view>
				</slot>
				<input class="uni-date__input uni-date-range__input" type="text" :value="range.endVal" :placeholder="endPlaceholder" :disabled="true" />
			</view>
			<view v-show="!disabled && (displayValue || (range.startVal && range.endVal))" class="uni-date__icon-clear" @click="clear">
				<uni-icons type="clear" color="#e1e1e1" size="14"></uni-icons>
			</view>
		</view>
		<view v-show="popup" class="uni-date-mask" @click="close"></view>
		<view ref="datePicker" v-show="popup" class="uni-date-picker__container">
			<view v-if="!isRange" class="uni-date-single--x" :style="popover">
				<uni-calendar ref="pcSingle" :showMonth="false" :date="defaultSingleValue" @change="change" />
			</view>

			<view v-else class="uni-date-range--x" :style="popover">
				<uni-calendar ref="left" :showMonth="false" :range="true" @change="leftChange" :pleStatus="endMultipleStatus" @firstEnterCale="updateRightCale" @monthSwitch="leftMonthSwitch" style="padding-right: 16px;" />
				<uni-calendar ref="right" :showMonth="false" :range="true" @change="rightChange" :pleStatus="startMultipleStatus" @firstEnterCale="updateLeftCale" @monthSwitch="rightMonthSwitch" style="padding-left: 16px;border-left: 1px solid #F1F1F1;" />
			</view>
		</view>
		<uni-calendar ref="mobile" :clearDate="false" :date="defaultSingleValue" :pleStatus="endMultipleStatus" :showMonth="false" :range="isRange" @change="" :insert="false" @confirm="mobileChange" />
	</view>
</template>
<script>
	import uniCalendar from './basic/uni-calendar.vue'

	/**
	 * uni-date-picker
	 * @description 同时支持 PC 和移动端使用日历选择日期和日期范围
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=4700
	 * @property {String} type 选择器类型
	 * @property {String|Array} value 绑定值
	 * @property {String} placeholder 单选择时的占位内容
	 * @property {String} start-placeholder 范围选择时开始日期的占位内容
	 * @property {String} end-placeholder 范围选择时结束日期的占位内容
	 * @property {String} range-separator 选择范围时的分隔符
	 * @property {Boolean} border = [true|false] 是否有边框
	 * @property {Boolean} disabled = [true|false] 是否禁用
	 * @event {Function} change 确定日期时触发的事件
	 **/

	export default {
		components: {
			uniCalendar
		},
		data() {
			return {
				isRange: false,
				mobileRange: false,
				range: {
					startVal: '',
					endVal: ''
				},
				startMultipleStatus: {
					before: '',
					after: '',
					data: [],
					fulldate: ''
				},
				endMultipleStatus: {
					before: '',
					after: '',
					data: [],
					fulldate: ''
				},
				visible: false,
				popup: false,
				popover: null,
				displayValue: '',
				defaultSingleValue: ''
			}
		},
		props: {
			type: {
				type: String,
				default: 'date'
			},
			value: {
				type: [String, Number, Array],
				default: ''
			},
			placeholder: {
				type: String,
				default: '选择日期'
			},
			startPlaceholder: {
				type: String,
				default: '起始日期'
			},
			endPlaceholder: {
				type: String,
				default: '结束日期'
			},
			rangeSeparator: {
				type: String,
				default: '-'
			},
			border: {
				type: [Boolean],
				default: true
			},
			disabled: {
				type: [Boolean],
				default: false
			}
		},
		watch: {
			type: {
				immediate: true,
				handler(newVal, oldVal) {
					if (newVal === 'date') {
						this.isRange = false
					} else if (newVal === 'daterange') {
						this.isRange = true
					}
				}
			},
			value: {
				immediate: true,
				handler(newVal, oldVal) {
					if (newVal) {
						if (!Array.isArray(newVal) && this.isRange === false) {
							this.displayValue = newVal
							this.defaultSingleValue = newVal
						} else {
							if (oldVal) return // 只初始默认值
							const [before, after] = newVal
							if (!before && !after) return
							this.range.startVal = before
							this.range.endVal = after
							const defaultRange = {
								before: before,
								after: after
							}
							this.startMultipleStatus = Object.assign({}, this.startMultipleStatus, defaultRange, {
								which: 'right'
							})
							this.endMultipleStatus = Object.assign({}, this.endMultipleStatus, defaultRange, {
								which: 'left'
							})
						}
					}
				}
			}
		},
		computed: {

		},
		mounted() {
			if (this.isRange) {
				if (!Array.isArray(this.value)) return
				const [before, after] = this.value
				if (before && after) return
				setTimeout(() => {
					this.$refs.right.next()
					this.$refs.right.cale.lastHover = false
				}, 20)
			}
		},
		methods: {
			updateLeftCale(e) {
				// console.log('----updateStartCale:', e);
				const left = this.$refs.left
				// 设置范围选
				left.cale.setHoverMultiple(e.after)
				left.setDate(this.$refs.left.nowDate.fullDate)
			},
			updateRightCale(e) {
				// console.log('----updateStartCale:', e);
				const right = this.$refs.right
				// 设置范围选
				right.cale.setHoverMultiple(e.after)
				right.setDate(this.$refs.right.nowDate.fullDate)
			},
			getRef() {
				this.$refs.left.pre()
			},
			show(event) {
				if (this.disabled) {
					return
				}
				const systemInfo = uni.getSystemInfoSync()
				if (systemInfo.windowWidth <= 500) {
					this.$refs.mobile.open()
					return
				}
				let left
				const leftWindowInfo = uni.getLeftWindowStyle()
				const dateEditor = uni.createSelectorQuery().in(this).select(".uni-date-editor--x")
				dateEditor.boundingClientRect(rect => {
					console.log(22222222, rect);
					if (leftWindowInfo.errMsg) {
						left = rect.left + 'px'
					} else {
						left = '15px'
					}
					this.popover = {
						top: rect.top + rect.height + 15 + 'px',
						left: left,
					}
				}).exec()
				setTimeout(() => {
					this.popup = !this.popup
					// this.visible = true
				}, 20)
			},

			close() {
				setTimeout(() => {
					this.popup = false
					// this.visible = true
				}, 20)
			},

			change(e) {
				// console.log('change 返回:', e)
				this.displayValue = e.fulldate
				this.$emit('change', this.displayValue)
				this.$emit('input', this.displayValue)
				this.popup = false
			},

			leftChange(e) {
				const {
					before,
					after
				} = e.range
				this.handleStartAndEnd(before, after)
				const obj = {
					before: e.range.before,
					after: e.range.after,
					data: e.range.data,
					fulldate: e.fulldate
				}
				this.startMultipleStatus = Object.assign({}, this.startMultipleStatus, obj)
				// console.log('startMultipleStatus 返回:', this.startMultipleStatus)
			},

			rightChange(e) {
				const {
					before,
					after
				} = e.range
				this.handleStartAndEnd(before, after)
				const obj = {
					before: e.range.before,
					after: e.range.after,
					data: e.range.data,
					fulldate: e.fulldate
				}
				this.endMultipleStatus = Object.assign({}, this.endMultipleStatus, obj)
				// console.log('endMultipleStatus 返回:', this.endMultipleStatus)
			},

			mobileChange(e) {
				if (this.isRange) {
					const {
						before,
						after
					} = e.range
					this.handleStartAndEnd(before, after)
				} else {
					this.displayValue = e.fulldate
					this.$emit('change', this.displayValue)
					this.$emit('input', this.displayValue)
				}
				this.$refs.mobile.close()
			},
			handleStartAndEnd(before, after) {
				if (before && after) {
					if (this.dateCompare(before, after)) {
						this.range.startVal = before
						this.range.endVal = after
					} else {
						this.range.startVal = after
						this.range.endVal = before
					}
					const displayRange = [this.range.startVal, this.range.endVal]
					this.$emit('change', displayRange)
					this.$emit('input', displayRange)
					this.popup = false
				}
			},

			/**
			 * 比较时间大小
			 */
			dateCompare(startDate, endDate) {
				// 计算截止时间
				startDate = new Date(startDate.replace('-', '/').replace('-', '/'))
				// 计算详细项的截止时间
				endDate = new Date(endDate.replace('-', '/').replace('-', '/'))
				if (startDate <= endDate) {
					return true
				} else {
					return false
				}
			},

			clear() {
				if (!this.isRange) {
					this.displayValue = ''
					this.$refs.pcSingle.calendar.fullDate = ''
					this.$refs.pcSingle.setDate()
					this.$emit('change', '')
					this.$emit('input', '')
				} else {
					this.range.startVal = ''
					this.range.endVal = ''
					this.$refs.left.cale.multipleStatus.before = ''
					this.$refs.left.cale.multipleStatus.after = ''
					this.$refs.left.cale.multipleStatus.data = []
					this.$refs.left.cale.lastHover = false
					this.$refs.left.setDate()
					this.$refs.right.cale.multipleStatus.before = ''
					this.$refs.right.cale.multipleStatus.after = ''
					this.$refs.right.cale.multipleStatus.data = []
					this.$refs.right.cale.lastHover = false
					this.$refs.right.setDate()
					this.$refs.right.next()
					this.$emit('change', ['', ''])
					this.$emit('input', ['', ''])
				}
			},



			leftMonthSwitch(e) {
				// console.log('leftMonthSwitch 返回:', e)
			},
			rightMonthSwitch(e) {
				// console.log('rightMonthSwitch 返回:', e)
			}
		}
	}
</script>

<style scoped>
	.uni-date-x {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 10px;
		border-radius: 4px;
		background-color: #fff;
		color: #666;
		font-size: 14px;
	}

	.uni-date-x--border {
		box-sizing: border-box;
		border-radius: 4px;
		border: 1px solid #dcdfe6;
	}

	.uni-date-editor--x {
		position: relative;
	}

	.uni-date-editor--x:hover .uni-date__icon-clear {
		position: absolute;
		top: 0;
		right: 0;
		display: inline-block;
		box-sizing: border-box;
		border: 6px solid transparent;
		margin-right: 6px;
		/* #ifdef H5 */
		cursor: pointer;
		/* #endif */
	}

	.uni-date__icon-clear {
		display: none;
	}

	.uni-date__input {
		height: 40px;
		width: 100%;
		padding: 0 8px;
		line-height: 40px;
		font-size: 14px;
	}

	.uni-date-range__input {
		text-align: center;
	}

	/* .uni-date-picker__container {
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	box-sizing: border-box;
	z-index: 996;
	font-size: 14px;
} */
	.uni-date-mask {
		position: fixed;
		bottom: 0px;
		top: 0px;
		left: 0px;
		right: 0px;
		background-color: rgba(0, 0, 0, 0);
		transition-duration: 0.3s;
		z-index: 996;
	}

	.uni-date-single--x {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 999;
		width: 375px;
		border: 1px solid #F1F1F1;
	}

	.uni-date-range--x {
		background-color: #fff;
		display: flex;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 999;
		width: 733px;
		border: 1px solid #F1F1F1;
		border-radius: 4px;
	}

	.uni-date-editor--x__disabled {
		opacity: 0.4;
		cursor: default;
	}

	.uni-date-editor--logo {
		width: 16px;
		height: 16px;
		vertical-align: middle;
	}
</style>