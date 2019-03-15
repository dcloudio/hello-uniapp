<template>
	<view>
		<block v-for="(weeks, week) in canlender.weeks" :key="week">
			<view class="uni-calender__body-date-week">
				<block v-for="(day, index) in weeks" :key="index">
					<view class="uni-calender__date" :class="{
							'uni-calender__disable': canlender.month !== day.month || day.disable,
							'uni-calender__date-current':
								(day.date == canlender.date || day.checked) &&
								canlender.month == day.month &&
								!day.disable,
							'uni-calender__lunar': lunar,
							'uni-calender__active': day.isDay,
							'uni-calender__is-day': day.isDay
						}" @tap="
							selectDays(
								week,
								index,
								canlender.month === day.month,
								day.disable,
								canlender.lunar
							)
						">
						<view class="uni-calender__circle-box">
							{{ day.date }}
							<view v-if="lunar" class="uni-calender__lunar">{{ day.lunar }}</view>
							<view v-if="day.have" class="uni-calender__data-circle"></view>
						</view>
					</view>
				</block>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		name: 'uni-calendar-item',
		props: {
			/**
			 * 当前日期
			 */
			canlender: {
				type: null,
				default: () => {
					return {};
				}
			},
			lunar: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {};
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
				});
			}
		}
	};
</script>

<style>
	@charset "UTF-8";

	.uni-calender__body-date-week {
		display: flex;
		width: 100%;
		border-bottom: 1px #f5f5f5 solid
	}

	.uni-calender__body-date-week:last-child {
		border: none
	}

	.uni-calender__body-date-week .uni-calender__date {
		position: relative;
		width: 100%;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #000;
		background: #fff;
		box-sizing: border-box;
		padding: 20upx 0;
		line-height: 1.5
	}

	.uni-calender__body-date-week .uni-calender__date .uni-calender__lunar {
		font-size: 20upx;
		color: #000;
		line-height: 1.2
	}

	.uni-calender__body-date-week .uni-calender__date .uni-calender__circle-box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 80upx;
		height: 80upx;
		flex-shrink: 0;
		border-radius: 50%;
		transition: all .2s;
		line-height: 1.2
	}

	.uni-calender__body-date-week .uni-calender__date.uni-calender__disable {
		color: #d4d4d4
	}

	.uni-calender__body-date-week .uni-calender__date.uni-calender__disable .uni-calender__lunar {
		color: #d4d4d4
	}

	.uni-calender__body-date-week .uni-calender__date.uni-calender__is-day {
		color: #fd2e32
	}

	.uni-calender__body-date-week .uni-calender__date.uni-calender__is-day .uni-calender__lunar {
		color: #fd2e32
	}

	.uni-calender__body-date-week .uni-calender__date.uni-calender__date-current {
		color: #fff;
		box-sizing: border-box
	}

	.uni-calender__body-date-week .uni-calender__date.uni-calender__date-current .uni-calender__circle-box {
		background: #fd2e32
	}

	.uni-calender__body-date-week .uni-calender__date.uni-calender__date-current .uni-calender__lunar {
		color: #fff
	}

	.uni-calender__body-date-week .uni-calender__date .uni-calender__data-circle {
		position: absolute;
		top: 10upx;
		right: 10upx;
		width: 10rpx;
		height: 10rpx;
		border-radius: 50%;
		background: #ff5a5f;
		z-index: 2
	}
</style>