<template>
	<view>
		<view class="example">
			<view class="example-title">一般用法</view>
			<uni-countdown :day="1" :hour="1" :minute="12" :second="40" />
			<view class="example-title">不显示天数</view>
			<uni-countdown :show-day="false" :hour="12" :minute="12" :second="12" />
			<view class="example-title">文字分隔符</view>
			<uni-countdown :minute="30" :second="0" :show-colon="false" />
			<view class="example-title">修改颜色</view>
			<uni-countdown :day="1" :hour="2" :minute="30" :second="0" color="#FFFFFF" background-color="#00B26A" border-color="#00B26A" />
			<view class="example-title">倒计时回调事件</view>
			<uni-countdown :show-day="false" :second="10" @timeup="timeup" />
		</view>
	</view>
</template>
<script>
	import uniCountdown from '@/components/uni-countdown/uni-countdown.vue'

	export default {
		components: {
			uniCountdown
		},
		data() {
			return {}
		},
		methods: {
			timeup() {
				uni.showToast({
					title: '时间到'
				})
			}
		}
	}
</script>

<style>
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #fff
	}

	view {
		font-size: 28upx;
		line-height: inherit
	}

	.example {
		padding: 0 30upx 30upx
	}

	.example-title {
		font-size: 32upx;
		line-height: 32upx;
		color: #777;
		margin: 40upx 25upx;
		position: relative
	}

	.example .example-title {
		margin: 40upx 0
	}

	.example-body {
		padding: 0 40upx
	}

	.title {
		margin: 80upx 0 20upx 0;
	}
</style>