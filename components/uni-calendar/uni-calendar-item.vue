<template>
	<view>
		<block v-for="(weeks, week) in canlender.weeks" :key="week">
			<view class="uni-calender__body-date-week">
				<view v-for="(day, index) in weeks" :key="index" class="uni-calender__date" :class="{
              'uni-calender__disable': canlender.month !== day.month || day.disable,
              'uni-calender__date-current':
                ((day.date == canlender.date && !day.checked) || day.multipleBegin || day.multipleEnd) && canlender.month == day.month && !day.disable,
              'uni-calender__date-lunar': lunar,
              'uni-calender__active': !day.isDay,
            }" @tap="selectDays(week, index, canlender.month === day.month, day.disable, canlender.lunar)">
					<view :class="{ 'uni-calender_check': day.checked, 'calender_check-begin': day.multipleBegin, 'calender_check-end': day.multipleEnd }" class="uni-calender_check-bg" :key="index"></view>
					<view class="uni-calender__circle-box" :class="{
              'uni-calender__circle-box-current':
                ((day.date == canlender.date && !day.checked) || day.multipleBegin || day.multipleEnd) && canlender.month == day.month && !day.disable,
                'uni-calender__multiple': day.multipleBegin || day.multipleEnd,
            }">
						<text class="uni-calender__circle-box-text" :class="{
              'uni-calender__disable': canlender.month !== day.month || day.disable,
              'uni-calender__is-day': day.isDay,
              'uni-calender__date-current':
                ((day.date == canlender.date && !day.checked) || day.multipleBegin || day.multipleEnd) && canlender.month == day.month && !day.disable,
                'uni-calender__multiple-box': day.checked
            }">{{ day.date }}</text>
						<text v-if="lunar" class="uni-calender__lunar" :class="{
              'uni-calender__lunar-disable': canlender.month !== day.month || day.disable,
              'uni-calender__lunar-is-day': day.isDay,
              'uni-calender__lunar-date-current':
                ((day.date == canlender.date && !day.checked) || day.multipleBegin || day.multipleEnd) && canlender.month == day.month && !day.disable,
                'uni-calender__lunar-multiple-box': day.checked
            }">{{ day.lunar }}</text>
						<text v-if="day.have" class="uni-calender__data-circle" />
						<text v-if="day.have && !lunar" class="uni-calender__lunar" :class="{
              'uni-calender__lunar-disable': canlender.month !== day.month || day.disable,
              'uni-calender__lunar-is-day': day.isDay,
              'uni-calender__lunar-date-current':
                ((day.date == canlender.date && !day.checked) || day.multipleBegin || day.multipleEnd) && canlender.month == day.month && !day.disable,
                'uni-calender__lunar-multiple-box': day.checked
            }">{{ day.clockinfo.info }}</text>
					</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		name: 'UniCalendarItem',
		props: {
			/**
			 * 当前日期
			 */
			canlender: {
				type: null,
				default: () => {
					return {}
				}
			},
			lunar: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {}
		},
		created() {},
		methods: {
			selectDays(week, index, ischeck, isDay, lunar) {
				this.$emit('selectDays', {
					week,
					index,
					ischeck,
					isDay,
					lunar
				})
			}
		}
	}
</script>

<style scoped>
	.uni-calender__body-date-week {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex: 1;
		flex-direction: row;
		border-bottom-color: #F5F5F5;
		border-bottom-style: solid;
		border-bottom-width: 1px;
		justify-content: space-around;
	}

	/* 日期的样式
 */
	.uni-calender__date {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex: 1;
		flex-direction: column;
		position: relative;
		text-align: center;
		justify-content: center;
		align-items: center;
		color: #000;
		background-color: #fff;
		padding: 10rpx 0;
	}

	.uni-calender__lunar {
		font-size: 20rpx;
		color: #000;
	}

	.uni-calender__circle-box {
		/* #ifndef APP-NVUE */
		display: flex;
		z-index: 1;
		/* #endif */
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 80rpx;
		height: 80rpx;
		border-radius: 10rpx;
	}

	.uni-calender__circle-box-text {
		font-size: 30rpx;
	}

	/* // 本月禁止的样式
 */
	.uni-calender__disable {
		color: #f1f1f1;
	}

	.uni-calender__lunar-disable {
		color: #f1f1f1;
	}

	.uni-calender__is-day {
		color: #fd2e32;
	}

	.uni-calender__lunar-is-day {
		color: #fd2e32;
	}

	/* // 当前选中
 */
	.uni-calender__date-current {
		color: #fff;
	}

	.uni-calender__lunar-date-current {
		color: #fff;
	}

	.uni-calender__circle-box-current {
		background-color: #fd2e32;
	}

	.uni-calender__multiple {
		/* #ifndef APP-NVUE */
		z-index: 1;
		/* #endif */
		border-radius: 50px;
		background-color: #fd2e32;
	}

	.uni-calender__multiple-box {
		color: #fff;
	}

	.uni-calender__lunar-multiple-box {
		color: #fff;
	}

	.uni-calender__data-circle {
		position: absolute;
		top: 5rpx;
		right: 5rpx;
		width: 10rpx;
		height: 10rpx;
		border-radius: 50%;
		background-color: #ff5a5f;
		border-color: #fff;
		border-style: solid;
		border-width: 1px;
		z-index: 2;
	}

	.uni-calender_check-bg {
		position: absolute;
		top: 10rpx;
		bottom: 10rpx;
		left: 0;
		right: 0;
	}

	.uni-calender_check {
		background-color: #ffd3d3;
		border-color: #ffd3d3;
		border-style: solid;
		border-width: 1px;
	}

	.calender_check-begin {
		left: 20rpx;
		border-top-left-radius: 100rpx;
		border-bottom-left-radius: 100rpx;
	}

	.calender_check-end {
		right: 20rpx;
		border-top-right-radius: 100rpx;
		border-bottom-right-radius: 100rpx;
	}
</style>