<template>
	<view class="uni-datetime-picker">
		<view @click="tiggerTimePicker">
			<slot>
				<view class="uni-datetime-picker-timebox uni-datetime-picker-flex">
					{{time}}
					<view v-if="!time" class="uni-datetime-picker-time">选择日期时间</view>
					<view class="uni-datetime-picker-down-arrow"></view>
				</view>
			</slot>
		</view>
		<view v-if="visible" class="uni-datetime-picker-mask" @click="initTimePicker"></view>
		<view v-if="visible" class="uni-datetime-picker-popup">
			<view class="uni-title">
				设置日期和时间
			</view>
			<picker-view class="uni-datetime-picker-view" :indicator-style="indicatorStyle" :value="ymd" @change="bindDateChange">
				<picker-view-column class="uni-datetime-picker-hyphen">
					<view class="uni-datetime-picker-item" v-for="(item,index) in years" :key="index">{{item}}</view>
				</picker-view-column>
				<picker-view-column class="uni-datetime-picker-hyphen">
					<view class="uni-datetime-picker-item" v-for="(item,index) in months" :key="index">{{item < 10 ? '0' + item : item}}</view>
				</picker-view-column>
				<picker-view-column>
					<view class="uni-datetime-picker-item" v-for="(item,index) in days" :key="index">{{item < 10 ? '0' + item : item}}</view>
				</picker-view-column>
			</picker-view>
			<picker-view class="uni-datetime-picker-view" :indicator-style="indicatorStyle" :value="hms" @change="bindTimeChange">
				<picker-view-column class="uni-datetime-picker-colon">
					<view class="uni-datetime-picker-item" v-for="(item,index) in hours" :key="index">{{item < 10 ? '0' + item : item}}</view>
				</picker-view-column>
				<picker-view-column class="uni-datetime-picker-colon">
					<view class="uni-datetime-picker-item" v-for="(item,index) in minutes" :key="index">{{item < 10 ? '0' + item : item}}</view>
				</picker-view-column>
				<picker-view-column>
					<view class="uni-datetime-picker-item" v-for="(item,index) in seconds" :key="index">{{item < 10 ? '0' + item : item}}</view>
				</picker-view-column>
			</picker-view>
			<view class="uni-datetime-picker-btn">
				<view class="" @click="clearTime">重置</view>
				<view class="uni-datetime-picker-btn-group">
					<view class="uni-datetime-picker-cancel" @click="tiggerTimePicker">取消</view>
					<view class="" @click="setTime">确定</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				visible: false,
				time: '',
				years: [],
				months: [],
				days: [],
				hours: [],
				minutes: [],
				seconds: [],
				year: 1900,
				month: 0,
				day: 0,
				hour: 0,
				minute: 0,
				second: 0,
				indicatorStyle: `height: 50px;`,
			}
		},
		props: {
			type: {
				type: String,
				default: 'datetime-local'
			},
			timestamp: {
				type: Boolean,
				default: false
			},
			value: {
				type: [String, Number],
				default: ''
			},
			maxYear: {
				type: [Number, String],
				default: 2100
			},
			minYear: {
				type: [Number, String],
				default: 1900
			}
		},
		computed: {
			ymd() {
				return [this.year - this.minYear, this.month - 1, this.day - 1]
			},
			hms() {
				return [this.hour, this.minute, this.second]
			}
		},
		watch: {
			value(newValue) {
				this.parseValue(this.value)
				this.initTime()
			}
		},
		created() {
			this.form = this.getForm('uniForms')
			this.formItem = this.getForm('uniFormsItem')

			if (this.formItem) {
				if (this.formItem.name) {
					this.rename = this.formItem.name
					this.form.inputChildrens.push(this)
				}
			}
		},
		mounted() {
			const date = new Date()
			for (let i = this.minYear; i <= this.maxYear; i++) {
				this.years.push(i)
			}

			for (let i = 1; i <= 12; i++) {
				this.months.push(i)
			}

			for (let i = 1; i <= 31; i++) {
				this.days.push(i)
			}

			for (let i = 0; i <= 23; i++) {
				this.hours.push(i)
			}

			for (let i = 0; i <= 59; i++) {
				this.minutes.push(i)
			}

			for (let i = 0; i <= 59; i++) {
				this.seconds.push(i)
			}
			this.parseValue(this.value)
			if (this.value) {
				this.initTime()
			}

		},
		methods: {
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
			parseDateTime(datetime) {
				let defaultDate = null
				if (!datetime) {
					defaultDate = new Date()
				} else {
					defaultDate = new Date(datetime)
				}
				this.year = defaultDate.getFullYear()
				if (this.year < this.minYear || this.year > this.maxYear) {
					const now = Date.now()
					this.parseDateTime(now)
					return
				}
				this.month = defaultDate.getMonth() + 1
				this.day = defaultDate.getDate()
				this.hour = defaultDate.getHours()
				this.minute = defaultDate.getMinutes()
				this.second = defaultDate.getSeconds()
			},
			parseValue(defaultTime) {
				if (Number(defaultTime)) {
					defaultTime = parseInt(defaultTime)
				}
				this.parseDateTime(defaultTime)
			},
			bindDateChange(e) {
				const val = e.detail.value
				this.year = this.years[val[0]]
				this.month = this.months[val[1]]
				this.day = this.days[val[2]]
			},
			bindTimeChange(e) {
				const val = e.detail.value
				this.hour = this.hours[val[0]]
				this.minute = this.minutes[val[1]]
				this.second = this.seconds[val[2]]
			},
			initTimePicker() {
				// if (!this.time) {
				// 	this.parseValue()
				// }
				this.parseValue(this.value)
				this.visible = !this.visible
			},
			tiggerTimePicker() {
				this.visible = !this.visible
			},
			clearTime() {
				this.time = ''
				this.tiggerTimePicker()
			},
			initTime() {
				this.time = this.createDomSting()
				if (!this.timestamp) {
					this.formItem && this.formItem.setValue(this.time)
					this.$emit('change', this.time)
				} else {
					this.formItem && this.formItem.setValue(this.createTimeStamp(this.time))
					this.$emit('change', this.createTimeStamp(this.time))
				}
			},
			setTime() {
				this.initTime()
				this.tiggerTimePicker()
			},
			createTimeStamp(time) {
				return Date.parse(new Date(time))
			},
			createDomSting() {
				const yymmdd = this.year +
					'-' +
					(this.month < 10 ? '0' + this.month : this.month) +
					'-' +
					(this.day < 10 ? '0' + this.day : this.day) +
					' ' +
					(this.hour < 10 ? '0' + this.hour : this.hour) +
					':' +
					(this.minute < 10 ? '0' + this.minute : this.minute) +
					':' +
					(this.second < 10 ? '0' + this.second : this.second)

				return yymmdd
			}
		}
	}
</script>

<style scoped>
	.uni-datetime-picker-view {
		width: 100%;
		height: 130px;
		margin-top: 30px;
	}

	.uni-datetime-picker-item {
		line-height: 50px;
		text-align: center;
	}

	.uni-datetime-picker-btn {
		margin-top: 60px;
		display: flex;
		justify-content: space-between;
		color: blue;
		cursor: pointer;
	}

	.uni-datetime-picker-btn-group {
		display: flex;
	}

	.uni-datetime-picker-cancel {
		margin-right: 30px;
	}

	.uni-datetime-picker-mask {
		position: fixed;
		bottom: 0px;
		top: 0px;
		left: 0px;
		right: 0px;
		background-color: rgba(0, 0, 0, 0.4);
		transition-duration: 0.3s;
		z-index: 998;
	}

	.uni-datetime-picker-popup {
		border-radius: 8px;
		padding: 30px;
		width: 270px;
		background-color: #fff;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		transition-duration: 0.3s;
		z-index: 999;
	}

	.uni-datetime-picker-time {
		color: grey;
	}

	.uni-datetime-picker-colon::after {
		content: ':';
		position: absolute;
		top: 53px;
		right: 0;
	}

	.uni-datetime-picker-hyphen::after {
		content: '-';
		position: absolute;
		top: 53px;
		right: -2px;
	}

	.uni-datetime-picker-timebox {
		border: 1px solid #E5E5E5;
		border-radius: 5px;
		padding: 7px 10px;
		box-sizing: border-box;
		cursor: pointer;
	}

	.uni-datetime-picker-down-arrow {
		display: inline-block;
		position: relative;
		width: 20px;
		height: 15px;
	}

	.uni-datetime-picker-down-arrow::after {
		display: inline-block;
		content: " ";
		height: 9px;
		width: 9px;
		border-width: 0 1px 1px 0;
		border-color: #E5E5E5;
		border-style: solid;
		transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
		transform-origin: center;
		transition: transform .3s;
		position: absolute;
		top: 50%;
		right: 5px;
		margin-top: -5px;
	}

	.uni-datetime-picker-flex {
		display: flex;
		justify-content: space-between;
	}
</style>