<template>
	<view>
		<view class="example-title">基本用法</view>
		<view class="example-body">
			<uni-search-bar @confirm="search" @input="input" @cancel="cancel" />
			<view class="" style="margin-bottom: 20px;text-align: center;">
				当前输入为：{{ searchVal }}
			</view>
		</view>
		<view class="example-title">自定义样式</view>
		<view class="example-body">
			<uni-search-bar placeholder="自定义placeholder" @confirm="search" />
			<uni-search-bar radius="100" placeholder="自定义圆角" @confirm="search" />
		</view>
		<view class="example-title">控制清除按钮</view>
		<view class="example-body">
			<uni-search-bar radius="100" clearButton="always" @confirm="search" />
			<uni-search-bar radius="100" clearButton="auto" @confirm="search" />
			<uni-search-bar radius="100" clearButton="no" @confirm="search" />
		</view>
	</view>
</template>

<script>
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	export default {
		components: {
			uniSearchBar
		},
		data() {
			return {
				searchVal: ''
			}
		},
		methods: {
			search(res) {
				uni.showModal({
					content: '搜索：' + res.value,
					showCancel: false
				})
			},
			input(res) {
				this.searchVal = res.value
			},
			cancel(res) {
				uni.showModal({
					content: '点击取消，输入值为：' + res.value,
					showCancel: false
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
		padding: 30upx 30upx 30upx 50upx;
		margin-top: 20upx;
		position: relative;
		background-color: #fdfdfd;
		border-bottom: 1px #f5f5f5 solid
	}

	.example-title__after {
		position: relative;
		color: #031e3c
	}

	.example-title:after {
		content: '';
		position: absolute;
		left: 30upx;
		margin: auto;
		top: 0;
		bottom: 0;
		width: 6upx;
		height: 32upx;
		background-color: #ccc
	}

	.example .example-title {
		margin: 40upx 0
	}

	.example-body {
		padding: 30upx;
		background: #fff
	}

	.example-info {
		padding: 30upx;
		color: #3b4144;
		background: #fff
	}

	.search-result {
		margin-top: 10px;
	}
</style>