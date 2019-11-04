<template>
	<view class="uni-section">
		<view v-if="type" class="uni-section__head">
			<view :class="type" class="uni-section__head-tag" />
		</view>
		<view class="uni-section__content">
			<text :class="{'distraction':!subTitle}" class="uni-section__content-title">{{ title }}</text>
			<text v-if="subTitle" class="uni-section__content-sub">{{ subTitle }}</text>
		</view>
		<slot />
	</view>
</template>

<script>
	export default {
		name: 'UniTitle',
		props: {
			type: {
				type: String,
				default: ''
			},
			title: {
				type: String,
				default: ''
			},
			subTitle: {
				type: String,
				default: ''
			}
		},
		data() {
			return {}
		},
		watch: {
			title(newVal) {
				if (uni.report && newVal !== '') {
					uni.report('title', newVal)
				}
			}
		},
		methods: {
			onClick() {
				this.$emit('click')
			}
		}
	}
</script>
<style scoped>
	.uni-section {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		margin-top: 10px;
		flex-direction: row;
		align-items: center;
		padding: 0 10px;
		height: 50px;
		background-color: #f8f8f8;
		border-bottom-color: #e5e5e5;
		border-bottom-style: solid;
		border-bottom-width: 1px;
		font-weight: normal;
	}

	.uni-section__head {
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-right: 10px;
	}

	.line {
		height: 15px;
		background-color: #c0c0c0;
		border-radius: 5px;
		width: 3px;
	}

	.circle {
		width: 8px;
		height: 8px;
		border-top-right-radius: 50px;
		border-top-left-radius: 50px;
		border-bottom-left-radius: 50px;
		border-bottom-right-radius: 50px;
		background-color: #c0c0c0;
	}

	.uni-section__content {
		flex: 1;
		color: #333;
	}

	.uni-section__content-title {
		font-size: 28rpx;
		color: #333;
	}

	.distraction {
		flex-direction: row;
		align-items: center;
	}

	.uni-section__content-sub {
		font-size: 24rpx;
		color: #999;
	}
</style>