<template>
	<view class="uni-countdown">
		<text v-if="showDay" :style="{ borderColor: borderColor, color: color, backgroundColor: backgroundColor }" class="uni-countdown__number">{{ d }}</text>
		<text v-if="showDay" :style="{ color: splitorColor }" class="uni-countdown__splitor">天</text>
		<text :style="{ borderColor: borderColor, color: color, backgroundColor: backgroundColor }" class="uni-countdown__number">{{ h }}</text>
		<text :style="{ color: splitorColor }" class="uni-countdown__splitor">{{ showColon ? ':' : '时' }}</text>
		<text :style="{ borderColor: borderColor, color: color, backgroundColor: backgroundColor }" class="uni-countdown__number">{{ i }}</text>
		<text :style="{ color: splitorColor }" class="uni-countdown__splitor">{{ showColon ? ':' : '分' }}</text>
		<text :style="{ borderColor: borderColor, color: color, backgroundColor: backgroundColor }" class="uni-countdown__number">{{ s }}</text>
		<text v-if="!showColon" :style="{ color: splitorColor }" class="uni-countdown__splitor">秒</text>
	</view>
</template>
<script>
	/**
	 * Countdown 倒计时
	 * @description 倒计时组件
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=25
	 * @property {String} backgroundColor 背景色
	 * @property {String} color 文字颜色
	 * @property {Number} day 天数
	 * @property {Number} hour 小时
	 * @property {Number} minute 分钟
	 * @property {Number} second 秒
	 * @property {Boolean} showDay = [true|false] 是否显示天数
	 * @property {Boolean} showColon = [true|false] 是否以冒号为分隔符
	 * @property {String} splitorColor 分割符号颜色
	 * @event {Function} timeup 倒计时时间到触发事件
	 * @example <uni-countdown :day="1" :hour="1" :minute="12" :second="40"></uni-countdown>
	 */
	export default {
		name: 'UniCountdown',
		props: {
			showDay: {
				type: Boolean,
				default: true
			},
			showColon: {
				type: Boolean,
				default: true
			},
			backgroundColor: {
				type: String,
				default: '#FFFFFF'
			},
			borderColor: {
				type: String,
				default: '#000000'
			},
			color: {
				type: String,
				default: '#000000'
			},
			splitorColor: {
				type: String,
				default: '#000000'
			},
			day: {
				type: Number,
				default: 0
			},
			hour: {
				type: Number,
				default: 0
			},
			minute: {
				type: Number,
				default: 0
			},
			second: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				timer: null,
				syncFlag: false,
				d: '00',
				h: '00',
				i: '00',
				s: '00',
				leftTime: 0,
				seconds: 0
			}
		},
		watch: {
			day(val) {
				this.changeFlag()
			},
			hour(val) {
				this.changeFlag()
			},
			minute(val) {
				this.changeFlag()
			},
			second(val) {
				this.changeFlag()
			}
		},
		created: function(e) {
			this.startData();
		},
		beforeDestroy() {
			clearInterval(this.timer)
		},
		methods: {
			toSeconds(day, hours, minutes, seconds) {
				return day * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60 + seconds
			},
			timeUp() {
				clearInterval(this.timer)
				this.$emit('timeup')
			},
			countDown() {
				let seconds = this.seconds
				let [day, hour, minute, second] = [0, 0, 0, 0]
				if (seconds > 0) {
					day = Math.floor(seconds / (60 * 60 * 24))
					hour = Math.floor(seconds / (60 * 60)) - (day * 24)
					minute = Math.floor(seconds / 60) - (day * 24 * 60) - (hour * 60)
					second = Math.floor(seconds) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60)
				} else {
					this.timeUp()
				}
				if (day < 10) {
					day = '0' + day
				}
				if (hour < 10) {
					hour = '0' + hour
				}
				if (minute < 10) {
					minute = '0' + minute
				}
				if (second < 10) {
					second = '0' + second
				}
				this.d = day
				this.h = hour
				this.i = minute
				this.s = second
			},
			startData() {
				this.seconds = this.toSeconds(this.day, this.hour, this.minute, this.second)
				if (this.seconds <= 0) {
					return
				}
				this.countDown()
				this.timer = setInterval(() => {
					this.seconds--
					if (this.seconds < 0) {
						this.timeUp()
						return
					}
					this.countDown()
				}, 1000)
			},
			changeFlag() {
				if (!this.syncFlag) {
					this.seconds = this.toSeconds(this.day, this.hour, this.minute, this.second)
					this.startData();
					this.syncFlag = true;
				}
			}
		}
	}
</script>
<style scoped>
	.uni-countdown {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: flex-start;
		padding: 2rpx 0;
	}

	.uni-countdown__splitor {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		justify-content: center;
		line-height: 48rpx;
		padding: 5rpx;
		font-size: 12px;
	}

	.uni-countdown__number {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		justify-content: center;
		align-items: center;
		width: 52rpx;
		height: 48rpx;
		line-height: 48rpx;
		margin: 5rpx;
		text-align: center;
		font-size: 12px;
	}
</style>