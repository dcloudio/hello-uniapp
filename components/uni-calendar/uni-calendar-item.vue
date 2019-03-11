<template>
	<view>
		<block v-for="(weeks, week) in canlender.weeks" :key="week">
			<view class="calender-body-date-week">
				<block v-for="(day, index) in weeks" :key="index">
					<view class="date" :class="{
							disable: canlender.month !== day.month || day.disable,
							'date-current':
								(day.date == canlender.date || day.checked) &&
								canlender.month == day.month &&
								!day.disable,
							lunar: lunar,
							active: day.isDay,
							'is-day': day.isDay
						}" @tap="
							selectDays(
								week,
								index,
								canlender.month === day.month,
								day.disable,
								canlender.lunar
							)
						">
						<view class="circle-box">
							{{ day.date }}
							<view v-if="lunar" class="lunar">{{ day.lunar }}</view>
							<view v-if="day.have" class="data-circle"></view>
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
		created() {

		},
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

	.calender-body-date-week {
		display: flex;
		width: 100%;
		border-bottom: 1px #f5f5f5 solid
	}

	.calender-body-date-week:last-child {
		border: none
	}

	.calender-body-date-week .date {
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

	.calender-body-date-week .date .lunar {
		font-size: 20upx;
		color: #000
	}

	.calender-body-date-week .date .circle-box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 80upx;
		height: 80upx;
		flex-shrink: 0;
		border-radius: 50%;
		transition: all .2s
	}

	.calender-body-date-week .date.disable {
		color: #d4d4d4
	}

	.calender-body-date-week .date.disable .lunar {
		color: #d4d4d4
	}

	.calender-body-date-week .date.is-day {
		color: #fd2e32
	}

	.calender-body-date-week .date.is-day .lunar {
		color: #fd2e32
	}

	.calender-body-date-week .date.date-current {
		color: #fff;
		box-sizing: border-box
	}

	.calender-body-date-week .date.date-current .circle-box {
		background: #fd2e32
	}

	.calender-body-date-week .date.date-current .lunar {
		color: #fff
	}

	.calender-body-date-week .date .data-circle {
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