<template>
	<view class="page">
		<view class="example">
			<view class="example-title">基本用法</view>
			<uni-number-box />
			<view class="example-title">设置最小值和最大值</view>
			<uni-number-box :min="2" :max="9" :value="5" />
			<view class="example-title">设置步长（步长0.1）</view>
			<uni-number-box :step="0.1" />
			<view class="example-title">禁用状态</view>
			<uni-number-box :disabled="true" />
			<view class="example-title">获取输入的值 : {{ numberValue }}</view>
			<uni-number-box :value="numberValue" @change="change" />
			<view style="height: 30upx;" />
		</view>
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
</style>