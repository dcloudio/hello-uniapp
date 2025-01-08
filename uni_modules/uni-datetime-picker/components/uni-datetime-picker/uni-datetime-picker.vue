<template>
	<view class="uni-date">
		<view class="uni-date-editor" @click="show">
			<slot>
				<view class="uni-date-editor--x"
					:class="{'uni-date-editor--x__disabled': disabled,'uni-date-x--border': border}">
					<view v-if="!isRange" class="uni-date-x uni-date-single">
						<uni-icons class="icon-calendar" type="calendar" color="#c0c4cc" size="22"></uni-icons>
						<view class="uni-date__x-input">{{ displayValue || singlePlaceholderText }}</view>
					</view>

					<view v-else class="uni-date-x uni-date-range">
						<uni-icons class="icon-calendar" type="calendar" color="#c0c4cc" size="22"></uni-icons>
						<view class="uni-date__x-input text-center">{{ displayRangeValue.startDate || startPlaceholderText }}</view>

						<view class="range-separator">{{rangeSeparator}}</view>

						<view class="uni-date__x-input text-center">{{ displayRangeValue.endDate || endPlaceholderText }}</view>
					</view>

					<view v-if="showClearIcon" class="uni-date__icon-clear" @click.stop="clear">
						<uni-icons type="clear" color="#c0c4cc" size="22"></uni-icons>
					</view>
				</view>
			</slot>
		</view>

		<view v-show="pickerVisible" class="uni-date-mask--pc" @click="close"></view>

		<view v-if="!isPhone" v-show="pickerVisible" ref="datePicker" class="uni-date-picker__container">
			<view v-if="!isRange" class="uni-date-single--x" :style="pickerPositionStyle">
				<view class="uni-popper__arrow"></view>

				<view v-if="hasTime" class="uni-date-changed popup-x-header">
					<input class="uni-date__input text-center" type="text" v-model="inputDate" :placeholder="selectDateText" />

					<time-picker type="time" v-model="pickerTime" :border="false" :disabled="!inputDate"
						:start="timepickerStartTime" :end="timepickerEndTime" :hideSecond="hideSecond" style="width: 100%;">
						<input class="uni-date__input text-center" type="text" v-model="pickerTime" :placeholder="selectTimeText"
							:disabled="!inputDate" />
					</time-picker>
				</view>

				<Calendar ref="pcSingle" :showMonth="false" :start-date="calendarRange.startDate"
					:end-date="calendarRange.endDate" :date="calendarDate" @change="singleChange" :default-value="defaultValue"
					style="padding: 0 8px;" />

				<view v-if="hasTime" class="popup-x-footer">
					<text class="confirm-text" @click="confirmSingleChange">{{okText}}</text>
				</view>
			</view>

			<view v-else class="uni-date-range--x" :style="pickerPositionStyle">
				<view class="uni-popper__arrow"></view>
				<view v-if="hasTime" class="popup-x-header uni-date-changed">
					<view class="popup-x-header--datetime">
						<input class="uni-date__input uni-date-range__input" type="text" v-model="tempRange.startDate"
							:placeholder="startDateText" />

						<time-picker type="time" v-model="tempRange.startTime" :start="timepickerStartTime" :border="false"
							:disabled="!tempRange.startDate" :hideSecond="hideSecond">
							<input class="uni-date__input uni-date-range__input" type="text" v-model="tempRange.startTime"
								:placeholder="startTimeText" :disabled="!tempRange.startDate" />
						</time-picker>
					</view>

					<uni-icons type="arrowthinright" color="#999" style="line-height: 40px;"></uni-icons>

					<view class="popup-x-header--datetime">
						<input class="uni-date__input uni-date-range__input" type="text" v-model="tempRange.endDate"
							:placeholder="endDateText" />

						<time-picker type="time" v-model="tempRange.endTime" :end="timepickerEndTime" :border="false"
							:disabled="!tempRange.endDate" :hideSecond="hideSecond">
							<input class="uni-date__input uni-date-range__input" type="text" v-model="tempRange.endTime"
								:placeholder="endTimeText" :disabled="!tempRange.endDate" />
						</time-picker>
					</view>
				</view>

				<view class="popup-x-body">
					<Calendar ref="left" :showMonth="false" :start-date="calendarRange.startDate"
						:end-date="calendarRange.endDate" :range="true" :pleStatus="endMultipleStatus" @change="leftChange"
						@firstEnterCale="updateRightCale" style="padding: 0 8px;"/>
					<Calendar ref="right" :showMonth="false" :start-date="calendarRange.startDate"
						:end-date="calendarRange.endDate" :range="true" @change="rightChange" :pleStatus="startMultipleStatus"
						@firstEnterCale="updateLeftCale" style="padding: 0 8px;border-left: 1px solid #F1F1F1;" />
				</view>

				<view v-if="hasTime" class="popup-x-footer">
					<text @click="clear">{{clearText}}</text>
					<text class="confirm-text" @click="confirmRangeChange">{{okText}}</text>
				</view>
			</view>
		</view>

		<Calendar v-if="isPhone" ref="mobile" :clearDate="false" :date="calendarDate" :defTime="mobileCalendarTime"
			:start-date="calendarRange.startDate" :end-date="calendarRange.endDate" :selectableTimes="mobSelectableTime"
			:startPlaceholder="startPlaceholder" :endPlaceholder="endPlaceholder" :default-value="defaultValue"
			:pleStatus="endMultipleStatus" :showMonth="false" :range="isRange" :hasTime="hasTime" :insert="false"
			:hideSecond="hideSecond" @confirm="mobileChange" @maskClose="close" @change="calendarClick"/>
	</view>
</template>
<script>
	/**
	 * DatetimePicker 时间选择器
	 * @description 同时支持 PC 和移动端使用日历选择日期和日期范围
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=3962
	 * @property {String} type 选择器类型
	 * @property {String|Number|Array|Date} value 绑定值
	 * @property {String} placeholder 单选择时的占位内容
	 * @property {String} start 起始时间
	 * @property {String} end 终止时间
	 * @property {String} start-placeholder 范围选择时开始日期的占位内容
	 * @property {String} end-placeholder 范围选择时结束日期的占位内容
	 * @property {String} range-separator 选择范围时的分隔符
	 * @property {Boolean} border = [true|false] 是否有边框
	 * @property {Boolean} disabled = [true|false] 是否禁用
	 * @property {Boolean} clearIcon = [true|false] 是否显示清除按钮（仅PC端适用）
	 * @property {[String} defaultValue 选择器打开时默认显示的时间
	 * @event {Function} change 确定日期时触发的事件
	 * @event {Function} maskClick 点击遮罩层触发的事件
	 * @event {Function} show 打开弹出层
	 * @event {Function} close 关闭弹出层
	 * @event {Function} clear 清除上次选中的状态和值
	 **/
	import Calendar from './calendar.vue'
	import TimePicker from './time-picker.vue'
	import {
		initVueI18n
	} from '@dcloudio/uni-i18n'
	import i18nMessages from './i18n/index.js'
	import {
		getDateTime,
		getDate,
		getTime,
		getDefaultSecond,
		dateCompare,
		checkDate,
		fixIosDateFormat
	} from './util'

	export default {
		name: 'UniDatetimePicker',

		options: {
			// #ifdef MP-TOUTIAO
			virtualHost: false,
			// #endif
			// #ifndef MP-TOUTIAO
			virtualHost: true
			// #endif
		},
		components: {
			Calendar,
			TimePicker
		},
		data() {
			return {
				isRange: false,
				hasTime: false,
				displayValue: '',
				inputDate: '',
				calendarDate: '',
				pickerTime: '',
				calendarRange: {
					startDate: '',
					startTime: '',
					endDate: '',
					endTime: ''
				},
				displayRangeValue: {
					startDate: '',
					endDate: '',
				},
				tempRange: {
					startDate: '',
					startTime: '',
					endDate: '',
					endTime: ''
				},
				// 左右日历同步数据
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
				pickerVisible: false,
				pickerPositionStyle: null,
				isEmitValue: false,
				isPhone: false,
				isFirstShow: true,
				i18nT: () => {}
			}
		},
		props: {
			type: {
				type: String,
				default: 'datetime'
			},
			value: {
				type: [String, Number, Array, Date],
				default: ''
			},
			modelValue: {
				type: [String, Number, Array, Date],
				default: ''
			},
			start: {
				type: [Number, String],
				default: ''
			},
			end: {
				type: [Number, String],
				default: ''
			},
			returnType: {
				type: String,
				default: 'string'
			},
			placeholder: {
				type: String,
				default: ''
			},
			startPlaceholder: {
				type: String,
				default: ''
			},
			endPlaceholder: {
				type: String,
				default: ''
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
			},
			clearIcon: {
				type: [Boolean],
				default: true
			},
			hideSecond: {
				type: [Boolean],
				default: false
			},
			defaultValue: {
				type: [String, Object, Array],
				default: ''
			}
		},
		watch: {
			type: {
				immediate: true,
				handler(newVal) {
					this.hasTime = newVal.indexOf('time') !== -1
					this.isRange = newVal.indexOf('range') !== -1
				}
			},
			// #ifndef VUE3
			value: {
				immediate: true,
				handler(newVal) {
					if (this.isEmitValue) {
						this.isEmitValue = false
						return
					}
					this.initPicker(newVal)
				}
			},
			// #endif
			// #ifdef VUE3
			modelValue: {
				immediate: true,
				handler(newVal) {
					if (this.isEmitValue) {
						this.isEmitValue = false
						return
					}
					this.initPicker(newVal)
				}
			},
			// #endif
			start: {
				immediate: true,
				handler(newVal) {
					if (!newVal) return
					this.calendarRange.startDate = getDate(newVal)
					if (this.hasTime) {
						this.calendarRange.startTime = getTime(newVal)
					}
				}
			},
			end: {
				immediate: true,
				handler(newVal) {
					if (!newVal) return
					this.calendarRange.endDate = getDate(newVal)
					if (this.hasTime) {
						this.calendarRange.endTime = getTime(newVal, this.hideSecond)
					}
				}
			},
		},
		computed: {
			timepickerStartTime() {
				const activeDate = this.isRange ? this.tempRange.startDate : this.inputDate
				return activeDate === this.calendarRange.startDate ? this.calendarRange.startTime : ''
			},
			timepickerEndTime() {
				const activeDate = this.isRange ? this.tempRange.endDate : this.inputDate
				return activeDate === this.calendarRange.endDate ? this.calendarRange.endTime : ''
			},
			mobileCalendarTime() {
				const timeRange = {
					start: this.tempRange.startTime,
					end: this.tempRange.endTime
				}
				return this.isRange ? timeRange : this.pickerTime
			},
			mobSelectableTime() {
				return {
					start: this.calendarRange.startTime,
					end: this.calendarRange.endTime
				}
			},
			datePopupWidth() {
				// todo
				return this.isRange ? 653 : 301
			},

			/**
			 * for i18n
			 */
			singlePlaceholderText() {
				return this.placeholder || (this.type === 'date' ? this.selectDateText : this.selectDateTimeText)
			},
			startPlaceholderText() {
				return this.startPlaceholder || this.startDateText
			},
			endPlaceholderText() {
				return this.endPlaceholder || this.endDateText
			},
			selectDateText() {
				return this.i18nT("uni-datetime-picker.selectDate")
			},
			selectDateTimeText() {
				return this.i18nT("uni-datetime-picker.selectDateTime")
			},
			selectTimeText() {
				return this.i18nT("uni-datetime-picker.selectTime")
			},
			startDateText() {
				return this.startPlaceholder || this.i18nT("uni-datetime-picker.startDate")
			},
			startTimeText() {
				return this.i18nT("uni-datetime-picker.startTime")
			},
			endDateText() {
				return this.endPlaceholder || this.i18nT("uni-datetime-picker.endDate")
			},
			endTimeText() {
				return this.i18nT("uni-datetime-picker.endTime")
			},
			okText() {
				return this.i18nT("uni-datetime-picker.ok")
			},
			clearText() {
				return this.i18nT("uni-datetime-picker.clear")
			},
			showClearIcon() {
				return this.clearIcon && !this.disabled && (this.displayValue || (this.displayRangeValue.startDate && this
					.displayRangeValue.endDate))
			}
		},
		created() {
			this.initI18nT()
			this.platform()
		},
		methods: {
			initI18nT() {
				const vueI18n = initVueI18n(i18nMessages)
				this.i18nT = vueI18n.t
			},
			initPicker(newVal) {
				if ((!newVal && !this.defaultValue) || Array.isArray(newVal) && !newVal.length) {
					this.$nextTick(() => {
						this.clear(false)
					})
					return
				}

				if (!Array.isArray(newVal) && !this.isRange) {
					if (newVal) {
						this.displayValue = this.inputDate = this.calendarDate = getDate(newVal)
						if (this.hasTime) {
							this.pickerTime = getTime(newVal, this.hideSecond)
							this.displayValue = `${this.displayValue} ${this.pickerTime}`
						}
					} else if (this.defaultValue) {
						this.inputDate = this.calendarDate = getDate(this.defaultValue)
						if (this.hasTime) {
							this.pickerTime = getTime(this.defaultValue, this.hideSecond)
						}
					}
				} else {
					const [before, after] = newVal
					if (!before && !after) return
					const beforeDate = getDate(before)
					const beforeTime = getTime(before, this.hideSecond)

					const afterDate = getDate(after)
					const afterTime = getTime(after, this.hideSecond)
					const startDate = beforeDate
					const endDate = afterDate
					this.displayRangeValue.startDate = this.tempRange.startDate = startDate
					this.displayRangeValue.endDate = this.tempRange.endDate = endDate

					if (this.hasTime) {
						this.displayRangeValue.startDate = `${beforeDate} ${beforeTime}`
						this.displayRangeValue.endDate = `${afterDate} ${afterTime}`
						this.tempRange.startTime = beforeTime
						this.tempRange.endTime = afterTime
					}
					const defaultRange = {
						before: beforeDate,
						after: afterDate
					}
					this.startMultipleStatus = Object.assign({}, this.startMultipleStatus, defaultRange, {
						which: 'right'
					})
					this.endMultipleStatus = Object.assign({}, this.endMultipleStatus, defaultRange, {
						which: 'left'
					})
				}
			},
			updateLeftCale(e) {
				const left = this.$refs.left
				// 设置范围选
				left.cale.setHoverMultiple(e.after)
				left.setDate(this.$refs.left.nowDate.fullDate)
			},
			updateRightCale(e) {
				const right = this.$refs.right
				// 设置范围选
				right.cale.setHoverMultiple(e.after)
				right.setDate(this.$refs.right.nowDate.fullDate)
			},
			platform() {
				if (typeof navigator !== "undefined") {
					this.isPhone = navigator.userAgent.toLowerCase().indexOf('mobile') !== -1
					return
				}
				// #ifdef MP-WEIXIN
				const {
					windowWidth
				} = uni.getWindowInfo()
				// #endif
				// #ifndef MP-WEIXIN
				const {
					windowWidth
				} = uni.getSystemInfoSync()
				// #endif
				this.isPhone = windowWidth <= 500
				this.windowWidth = windowWidth
			},
			show() {
				this.$emit("show")
				if (this.disabled) {
					return
				}
				this.platform()
				if (this.isPhone) {
					setTimeout(() => {
						this.$refs.mobile.open()
					}, 0);
					return
				}
				this.pickerPositionStyle = {
					top: '10px'
				}
				const dateEditor = uni.createSelectorQuery().in(this).select(".uni-date-editor")
				dateEditor.boundingClientRect(rect => {
					if (this.windowWidth - rect.left < this.datePopupWidth) {
						this.pickerPositionStyle.right = 0
					}
				}).exec()
				setTimeout(() => {
					this.pickerVisible = !this.pickerVisible
					if (!this.isPhone && this.isRange && this.isFirstShow) {
						this.isFirstShow = false
						const {
							startDate,
							endDate
						} = this.calendarRange
						if (startDate && endDate) {
							if (this.diffDate(startDate, endDate) < 30) {
								this.$refs.right.changeMonth('pre')
							}
						} else {
							// this.$refs.right.changeMonth('next')
							if (this.isPhone) {
								this.$refs.right.cale.lastHover = false;
							}
						}
					}

				}, 50)
			},
			close() {
				setTimeout(() => {
					this.pickerVisible = false
					this.$emit('maskClick', this.value)
					this.$refs.mobile && this.$refs.mobile.close()
				}, 20)
			},
			setEmit(value) {
				if (this.returnType === "timestamp" || this.returnType === "date") {
					if (!Array.isArray(value)) {
						if (!this.hasTime) {
							value = value + ' ' + '00:00:00'
						}
						value = this.createTimestamp(value)
						if (this.returnType === "date") {
							value = new Date(value)
						}
					} else {
						if (!this.hasTime) {
							value[0] = value[0] + ' ' + '00:00:00'
							value[1] = value[1] + ' ' + '00:00:00'
						}
						value[0] = this.createTimestamp(value[0])
						value[1] = this.createTimestamp(value[1])
						if (this.returnType === "date") {
							value[0] = new Date(value[0])
							value[1] = new Date(value[1])
						}
					}
				}

				this.$emit('update:modelValue', value)
				this.$emit('input', value)
				this.$emit('change', value)
				this.isEmitValue = true
			},
			createTimestamp(date) {
				date = fixIosDateFormat(date)
				return Date.parse(new Date(date))
			},
			singleChange(e) {
				this.calendarDate = this.inputDate = e.fulldate
				if (this.hasTime) return
				this.confirmSingleChange()
			},
			confirmSingleChange() {
				if (!checkDate(this.inputDate)) {
					const now = new Date()
					this.calendarDate = this.inputDate = getDate(now)
					this.pickerTime = getTime(now, this.hideSecond)
				}

				let startLaterInputDate = false
				let startDate, startTime
				if (this.start) {
					let startString = this.start
					if (typeof this.start === 'number') {
						startString = getDateTime(this.start, this.hideSecond)
					}
					[startDate, startTime] = startString.split(' ')
					if (this.start && !dateCompare(startDate, this.inputDate)) {
						startLaterInputDate = true
						this.inputDate = startDate
					}
				}

				let endEarlierInputDate = false
				let endDate, endTime
				if (this.end) {
					let endString = this.end
					if (typeof this.end === 'number') {
						endString = getDateTime(this.end, this.hideSecond)
					}
					[endDate, endTime] = endString.split(' ')
					if (this.end && !dateCompare(this.inputDate, endDate)) {
						endEarlierInputDate = true
						this.inputDate = endDate
					}
				}
				if (this.hasTime) {
					if (startLaterInputDate) {
						this.pickerTime = startTime || getDefaultSecond(this.hideSecond)
					}
					if (endEarlierInputDate) {
						this.pickerTime = endTime || getDefaultSecond(this.hideSecond)
					}
					if (!this.pickerTime) {
						this.pickerTime = getTime(Date.now(), this.hideSecond)
					}
					this.displayValue = `${this.inputDate} ${this.pickerTime}`
				} else {
					this.displayValue = this.inputDate
				}
				this.setEmit(this.displayValue)
				this.pickerVisible = false
			},
			leftChange(e) {
				const {
					before,
					after
				} = e.range
				this.rangeChange(before, after)
				const obj = {
					before: e.range.before,
					after: e.range.after,
					data: e.range.data,
					fulldate: e.fulldate
				}
				this.startMultipleStatus = Object.assign({}, this.startMultipleStatus, obj)
				this.$emit('calendarClick', e)
			},
			rightChange(e) {
				const {
					before,
					after
				} = e.range
				this.rangeChange(before, after)
				const obj = {
					before: e.range.before,
					after: e.range.after,
					data: e.range.data,
					fulldate: e.fulldate
				}
				this.endMultipleStatus = Object.assign({}, this.endMultipleStatus, obj)
				this.$emit('calendarClick', e)
			},
			mobileChange(e) {
				if (this.isRange) {
					const {
						before,
						after
					} = e.range
					if (!before) {
						return;
					}

					this.handleStartAndEnd(before, after, true)
					if (this.hasTime) {
						const {
							startTime,
							endTime
						} = e.timeRange
						this.tempRange.startTime = startTime
						this.tempRange.endTime = endTime
					}
					this.confirmRangeChange()
				} else {
					if (this.hasTime) {
						this.displayValue = e.fulldate + ' ' + e.time
					} else {
						this.displayValue = e.fulldate
					}
					this.setEmit(this.displayValue)
				}
				this.$refs.mobile.close()
			},
			rangeChange(before, after) {
				if (!(before && after)) return
				this.handleStartAndEnd(before, after, true)
				if (this.hasTime) return
				this.confirmRangeChange()
			},
			confirmRangeChange() {
				if (!this.tempRange.startDate || !this.tempRange.endDate) {
					this.pickerVisible = false
					return
				}
				if (!checkDate(this.tempRange.startDate)) {
					this.tempRange.startDate = getDate(Date.now())
				}
				if (!checkDate(this.tempRange.endDate)) {
					this.tempRange.endDate = getDate(Date.now())
				}

				let start, end

				let startDateLaterRangeStartDate = false
				let startDateLaterRangeEndDate = false
				let startDate, startTime
				if (this.start) {
					let startString = this.start
					if (typeof this.start === 'number') {
						startString = getDateTime(this.start, this.hideSecond)
					}
					[startDate, startTime] = startString.split(' ')
					if (this.start && !dateCompare(this.start, `${this.tempRange.startDate} ${this.tempRange.startTime}`)) {
						startDateLaterRangeStartDate = true
						this.tempRange.startDate = startDate
					}
					if (this.start && !dateCompare(this.start, `${this.tempRange.endDate} ${this.tempRange.endTime}`)) {
						startDateLaterRangeEndDate = true
						this.tempRange.endDate = startDate
					}
				}
				let endDateEarlierRangeStartDate = false
				let endDateEarlierRangeEndDate = false
				let endDate, endTime
				if (this.end) {
					let endString = this.end
					if (typeof this.end === 'number') {
						endString = getDateTime(this.end, this.hideSecond)
					}
					[endDate, endTime] = endString.split(' ')

					if (this.end && !dateCompare(`${this.tempRange.startDate} ${this.tempRange.startTime}`, this.end)) {
						endDateEarlierRangeStartDate = true
						this.tempRange.startDate = endDate
					}
					if (this.end && !dateCompare(`${this.tempRange.endDate} ${this.tempRange.endTime}`, this.end)) {
						endDateEarlierRangeEndDate = true
						this.tempRange.endDate = endDate
					}
				}
				if (!this.hasTime) {
					start = this.displayRangeValue.startDate = this.tempRange.startDate
					end = this.displayRangeValue.endDate = this.tempRange.endDate
				} else {
					if (startDateLaterRangeStartDate) {
						this.tempRange.startTime = startTime || getDefaultSecond(this.hideSecond)
					} else if (endDateEarlierRangeStartDate) {
						this.tempRange.startTime = endTime || getDefaultSecond(this.hideSecond)
					}
					if (!this.tempRange.startTime) {
						this.tempRange.startTime = getTime(Date.now(), this.hideSecond)
					}

					if (startDateLaterRangeEndDate) {
						this.tempRange.endTime = startTime || getDefaultSecond(this.hideSecond)
					} else if (endDateEarlierRangeEndDate) {
						this.tempRange.endTime = endTime || getDefaultSecond(this.hideSecond)
					}
					if (!this.tempRange.endTime) {
						this.tempRange.endTime = getTime(Date.now(), this.hideSecond)
					}
					start = this.displayRangeValue.startDate = `${this.tempRange.startDate} ${this.tempRange.startTime}`
					end = this.displayRangeValue.endDate = `${this.tempRange.endDate} ${this.tempRange.endTime}`
				}
				if (!dateCompare(start, end)) {
					[start, end] = [end, start]
				}
				this.displayRangeValue.startDate = start
				this.displayRangeValue.endDate = end
				const displayRange = [start, end]
				this.setEmit(displayRange)
				this.pickerVisible = false
			},
			handleStartAndEnd(before, after, temp = false) {
				if (!before) return
				if (!after) after = before;
				const type = temp ? 'tempRange' : 'range'
				const isStartEarlierEnd = dateCompare(before, after)
				this[type].startDate = isStartEarlierEnd ? before : after
				this[type].endDate = isStartEarlierEnd ? after : before
			},
			/**
			 * 比较时间大小
			 */
			dateCompare(startDate, endDate) {
				// 计算截止时间
				startDate = new Date(startDate.replace('-', '/').replace('-', '/'))
				// 计算详细项的截止时间
				endDate = new Date(endDate.replace('-', '/').replace('-', '/'))
				return startDate <= endDate
			},

			/**
			 * 比较时间差
			 */
			diffDate(startDate, endDate) {
				// 计算截止时间
				startDate = new Date(startDate.replace('-', '/').replace('-', '/'))
				// 计算详细项的截止时间
				endDate = new Date(endDate.replace('-', '/').replace('-', '/'))
				const diff = (endDate - startDate) / (24 * 60 * 60 * 1000)
				return Math.abs(diff)
			},

			clear(needEmit = true) {
				if (!this.isRange) {
					this.displayValue = ''
					this.inputDate = ''
					this.pickerTime = ''
					if (this.isPhone) {
						this.$refs.mobile && this.$refs.mobile.clearCalender()
					} else {
						this.$refs.pcSingle && this.$refs.pcSingle.clearCalender()
					}
					if (needEmit) {
						this.$emit('change', '')
						this.$emit('input', '')
						this.$emit('update:modelValue', '')
					}
				} else {
					this.displayRangeValue.startDate = ''
					this.displayRangeValue.endDate = ''
					this.tempRange.startDate = ''
					this.tempRange.startTime = ''
					this.tempRange.endDate = ''
					this.tempRange.endTime = ''
					if (this.isPhone) {
						this.$refs.mobile && this.$refs.mobile.clearCalender()
					} else {
						this.$refs.left && this.$refs.left.clearCalender()
						this.$refs.right && this.$refs.right.clearCalender()
						this.$refs.right && this.$refs.right.changeMonth('next')
					}
					if (needEmit) {
						this.$emit('change', [])
						this.$emit('input', [])
						this.$emit('update:modelValue', [])
					}
				}
			},

			calendarClick(e) {
				this.$emit('calendarClick', e)
			}
		}
	}
</script>

<style lang="scss">
	$uni-primary: #007aff !default;

	.uni-date {
		width: 100%;
		flex: 1;
	}

	.uni-date-x {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		border-radius: 4px;
		background-color: #fff;
		color: #666;
		font-size: 14px;
		flex: 1;

		.icon-calendar {
			padding-left: 3px;
		}

		.range-separator {
			height: 35px;
			/* #ifndef MP */
			padding: 0 2px;
			/* #endif */
			line-height: 35px;
		}
	}

	.uni-date-x--border {
		box-sizing: border-box;
		border-radius: 4px;
		border: 1px solid #e5e5e5;
	}

	.uni-date-editor--x {
		display: flex;
		align-items: center;
		position: relative;
	}

	.uni-date-editor--x .uni-date__icon-clear {
		padding-right: 3px;
		display: flex;
		align-items: center;
		/* #ifdef H5 */
		cursor: pointer;
		/* #endif */
	}

	.uni-date__x-input {
		width: auto;
		height: 35px;
		/* #ifndef MP */
		padding-left: 5px;
		/* #endif */
		position: relative;
		flex: 1;
		line-height: 35px;
		font-size: 14px;
		overflow: hidden;
	}

	.text-center {
		text-align: center;
	}

	.uni-date__input {
		height: 40px;
		width: 100%;
		line-height: 40px;
		font-size: 14px;
	}

	.uni-date-range__input {
		text-align: center;
		max-width: 142px;
	}

	.uni-date-picker__container {
		position: relative;
	}

	.uni-date-mask--pc {
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
		background-color: #fff;
		position: absolute;
		top: 0;
		z-index: 999;
		border: 1px solid #EBEEF5;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
		border-radius: 4px;
	}

	.uni-date-range--x {
		background-color: #fff;
		position: absolute;
		top: 0;
		z-index: 999;
		border: 1px solid #EBEEF5;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
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

	/* 添加时间 */
	.popup-x-header {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
	}

	.popup-x-header--datetime {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		flex: 1;
	}

	.popup-x-body {
		display: flex;
	}

	.popup-x-footer {
		padding: 0 15px;
		border-top-color: #F1F1F1;
		border-top-style: solid;
		border-top-width: 1px;
		line-height: 40px;
		text-align: right;
		color: #666;
	}

	.popup-x-footer text:hover {
		color: $uni-primary;
		cursor: pointer;
		opacity: 0.8;
	}

	.popup-x-footer .confirm-text {
		margin-left: 20px;
		color: $uni-primary;
	}

	.uni-date-changed {
		text-align: center;
		color: #333;
		border-bottom-color: #F1F1F1;
		border-bottom-style: solid;
		border-bottom-width: 1px;
	}

	.uni-date-changed--time text {
		height: 50px;
		line-height: 50px;
	}

	.uni-date-changed .uni-date-changed--time {
		flex: 1;
	}

	.uni-date-changed--time-date {
		color: #333;
		opacity: 0.6;
	}

	.mr-50 {
		margin-right: 50px;
	}

	/* picker 弹出层通用的指示小三角, todo：扩展至上下左右方向定位 */
	.uni-popper__arrow,
	.uni-popper__arrow::after {
		position: absolute;
		display: block;
		width: 0;
		height: 0;
		border: 6px solid transparent;
		border-top-width: 0;
	}

	.uni-popper__arrow {
		filter: drop-shadow(0 2px 12px rgba(0, 0, 0, 0.03));
		top: -6px;
		left: 10%;
		margin-right: 3px;
		border-bottom-color: #EBEEF5;
	}

	.uni-popper__arrow::after {
		content: " ";
		top: 1px;
		margin-left: -6px;
		border-bottom-color: #fff;
	}
</style>
