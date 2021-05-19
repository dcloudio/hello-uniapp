<template>
	<view class="uni-calendar-item__weeks-box" :class="{
		'uni-calendar-item--disable':weeks.disable,
		'uni-calendar-item--before-checked-x':weeks.beforeMultiple,
		'uni-calendar-item--multiple': weeks.multiple,
		'uni-calendar-item--after-checked-x':weeks.afterMultiple,
		}" @click="choiceDate(weeks)" @mouseenter="handleMousemove(weeks)">
		<view class="uni-calendar-item__weeks-box-item" :class="{
				'uni-calendar-item--isDay-text': weeks.isDay,
				'uni-calendar-item--checked':calendar.fullDate === weeks.fullDate && !weeks.isDay,
				'uni-calendar-item--checked-range-text': checkHover,
				'uni-calendar-item--before-checked':weeks.beforeMultiple,
				'uni-calendar-item--multiple': weeks.multiple,
				'uni-calendar-item--after-checked':weeks.afterMultiple,
				'uni-calendar-item--disable':weeks.disable,
				}">
			<text v-if="selected&&weeks.extraInfo" class="uni-calendar-item__weeks-box-circle"></text>
			<text class="uni-calendar-item__weeks-box-text">{{weeks.date}}</text>
		<!-- 	<text v-if="!lunar&&!weeks.extraInfo && weeks.isDay" class="uni-calendar-item__weeks-lunar-text">今天</text>
			<text v-if="lunar&&!weeks.extraInfo" class="uni-calendar-item__weeks-lunar-text" >{{weeks.isDay?'今天': (weeks.lunar.IDayCn === '初一'?weeks.lunar.IMonthCn:weeks.lunar.IDayCn)}}</text> -->
			<!-- <text v-if="weeks.extraInfo&&weeks.extraInfo.info" class="uni-calendar-item__weeks-lunar-text">{{weeks.extraInfo.info}}</text> -->
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			weeks: {
				type: Object,
				default () {
					return {}
				}
			},
			calendar: {
				type: Object,
				default: () => {
					return {}
				}
			},
			selected: {
				type: Array,
				default: () => {
					return []
				}
			},
			lunar: {
				type: Boolean,
				default: false
			},
			checkHover: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			choiceDate(weeks) {
				this.$emit('change', weeks)
			},
			handleMousemove(weeks) {
				this.$emit('handleMouse', weeks)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.uni-calendar-item__weeks-box {
		flex: 1;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 3px 0;
	}

	.uni-calendar-item__weeks-box-text {
		font-size: $uni-font-size-base;
		// color: $uni-text-color;
	}

	.uni-calendar-item__weeks-lunar-text {
		font-size: $uni-font-size-sm;
		color: $uni-text-color;
	}

	.uni-calendar-item__weeks-box-item {
		position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100rpx;
		height: 100rpx;
		/* #ifdef H5 */
		cursor: pointer;
		/* #endif */
	}
	

	.uni-calendar-item__weeks-box-circle {
		position: absolute;
		top: 5px;
		right: 5px;
		width: 8px;
		height: 8px;
		border-radius: 8px;
		background-color: $uni-color-error;

	}

	.uni-calendar-item__weeks-box .uni-calendar-item--disable {
		// background-color: rgba(249, 249, 249, $uni-opacity-disabled);
		color: $uni-text-color-disable;
		cursor: default;
	}

	.uni-calendar-item--isDay-text {
		color: $uni-color-primary !important;
	}

	.uni-calendar-item--isDay {
		background-color: $uni-color-primary;
		opacity: 0.8;
		color: #fff;
	}

	.uni-calendar-item--extra {
		color: $uni-color-error;
		opacity: 0.8;
	}

	.uni-calendar-item--checked {
		background-color: $uni-color-primary;
		// border-radius: 50%;
		box-sizing: border-box;
		border: 6px solid #f2f6fc;
		color: #fff;
		opacity: 0.8;
	}
	
	.uni-calendar-item--multiple .uni-calendar-item--checked-range-text {
		color: #333;
	}

	.uni-calendar-item--multiple {
		background-color:  #f2f6fc;
		// color: #fff;
		opacity: 0.8;
	}

	.uni-calendar-item--multiple .uni-calendar-item--before-checked {
		background-color: #409eff;
		color: #fff;
		// border-radius: 50%;
		box-sizing: border-box;
		border: 6px solid #f2f6fc;
	}

	.uni-calendar-item--multiple .uni-calendar-item--after-checked {
		background-color: #409eff;;
		color: #fff;
		// border-radius: 50%;
		box-sizing: border-box;
		border: 6px solid #f2f6fc;
	}
	
	.uni-calendar-item--before-checked-x {
		// border-top-left-radius: 25px;
		// border-bottom-left-radius: 25px;
		background-color: #f2f6fc;
	}
	
	.uni-calendar-item--after-checked-x {
		// border-top-right-radius: 25px;
		// border-bottom-right-radius: 25px;
		background-color: #f2f6fc;
	}
</style>
