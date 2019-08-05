<template>
	<view>
		<view class="example-title">基本用法</view>
		<view class="example-body">
			<uni-steps :options="list1" :active="active" />
		</view>
		<view class="example-title">纵向排列</view>
		<view class="example-body">
			<uni-steps :options="list2" :active="active" direction="column" />
		</view>
		<button type="primary" @click="change">改变状态</button>
	</view>
</template>

<script>
	import uniSteps from '@/components/uni-steps/uni-steps.vue'

	export default {
		components: {
			uniSteps
		},
		data() {
			return {
				active: 1,
				list1: [{
					title: '事件一'
				}, {
					title: '事件二'
				}, {
					title: '事件三'
				}, {
					title: '事件四'
				}],
				list2: [{
					title: '买家下单',
					desc: '2018-11-11'
				}, {
					title: '卖家发货',
					desc: '2018-11-12'
				}, {
					title: '买家签收',
					desc: '2018-11-13'
				}, {
					title: '交易完成',
					desc: '2018-11-14'
				}]
			}
		},
		methods: {
			change() {
				if (this.active < this.list1.length - 1) {
					this.active += 1
				} else {
					this.active = 0
				}
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

	button {
		margin: 30upx;
	}
</style>