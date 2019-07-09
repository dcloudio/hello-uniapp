<template>
	<view>
		<view class="example-info">倒计时组件主要用于促销商品剩余时间，发送短信验证等待时间等场景</view>
		<view class="example-title">一般用法</view>
		<view class="example-body">
			<uni-count-down :day="1" :hour="1" :minute="12" :second="40" />
		</view>
		<view class="example-title">不显示天数</view>
		<view class="example-body">
			<uni-count-down :show-day="false" :hour="12" :minute="12" :second="12" />
		</view>
		<view class="example-title">文字分隔符</view>
		<view class="example-body">
			<uni-count-down :minute="30" :second="0" :show-colon="false" />
		</view>
		<view class="example-title">修改颜色</view>
		<view class="example-body">
			<uni-count-down :day="1" :hour="2" :minute="30" :second="0" color="#FFFFFF" background-color="#00B26A" border-color="#00B26A" />
		</view>
		<view class="example-title">倒计时回调事件</view>
		<view class="example-body">
			<uni-count-down :show-day="false" :second="10" @timeup="timeup" />
		</view>
	</view>
</template>
<script>
	import uniCountDown from '@/components/uni-count-down/uni-count-down.vue'

	export default {
		components: {
			uniCountDown
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
		background-color: #efeff4
	}

	view {
		font-size: 28upx;
		line-height: inherit
	}

	.example {
		padding: 0 30upx 30upx
	}

	.example-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 32upx;
		color: #464e52;
		padding: 30upx;
		margin-top: 20upx;
		position: relative;
		background-color: #fdfdfd
	}

	.example-title__after {
		position: relative;
		color: #031e3c
	}

	.example-title:after {
		content: '';
		position: absolute;
		left: 0;
		margin: auto;
		top: 0;
		bottom: 0;
		width: 10upx;
		height: 40upx;
		border-top-right-radius: 10upx;
		border-bottom-right-radius: 10upx;
		background-color: #031e3c
	}

	.example .example-title {
		margin: 40upx 0
	}

	.example-body {
		border-top: 1px #f5f5f5 solid;
		padding: 30upx;
		background: #fff
	}

	.example-info {
		padding: 30upx;
		color: #3b4144;
		background: #fff
	}

	.title {
		margin: 80upx 0 20upx 0;
	}
</style>