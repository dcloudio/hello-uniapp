<template>
	<view class="page">
		<view class="example">
			<view class="example-title">基本用法</view>
			<uni-rate :value="2" @change="onChange" />
			<view class="example-title">设置尺寸大小</view>
			<uni-rate :size="18" :value="5" />
			<view class="example-title">设置评分数</view>
			<uni-rate :max="10" :value="5" />
			<view class="example-title">设置星星间隔</view>
			<uni-rate :value="4" :margin="5" />
			<view class="example-title">设置颜色</view>
			<uni-rate :value="3" color="#bbb" active-color="red" />
			<view class="example-title">不可点击状态</view>
			<uni-rate :disabled="true" :value="3.5" />
			<view class="example-title">未选中的星星为镂空状态</view>
			<uni-rate :value="3" :is-fill="false" />
		</view>
	</view>
</template>

<script>
	import uniRate from '@/components/uni-rate/uni-rate.vue'

	export default {
		components: {
			uniRate
		},
		data() {
			return {}
		},
		methods: {
			onChange(e) {
				console.log('rate发生改变:' + JSON.stringify(e))
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