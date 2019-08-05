<template>
	<view class="page">
		<view class="example-info">数字输入框组件多用于购物车加减商品等场景</view>
		<view class="example-title">基本用法</view>
		<view class="example-body">
			<uni-number-box />
		</view>
		<view class="example-title">设置最小值和最大值</view>
		<view class="example-body">
			<uni-number-box :min="2" :max="9" :value="5" />
		</view>
		<view class="example-title">设置步长（步长0.1）</view>
		<view class="example-body">
			<uni-number-box :step="0.1" />
		</view>
		<view class="example-title">禁用状态</view>
		<view class="example-body">
			<uni-number-box :disabled="true" />
		</view>
		<view class="example-title">获取输入的值 : {{ numberValue }}</view>
		<view class="example-body">
			<uni-number-box :value="numberValue" @change="change" />
		</view>

		<!-- <view style="height: 30upx;"></view> -->
	</view>
</template>
<script>
	import uniNumberBox from '@/components/uni-number-box/uni-number-box.vue'

	export default {
		components: {
			uniNumberBox
		},
		data() {
			return {
				numberValue: 0
			}
		},
		methods: {
			change(value) {
				this.numberValue = value
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
</style>