<template>
	<view class="page">
		<view class="example">
			<view class="example-title">默认样式</view>
			<uni-grid :data="data1" @click="onClick"></uni-grid>
			<view class="example-title">无外边框</view>
			<uni-grid :data="data3" show-out-border="false"></uni-grid>
			<view class="example-title">无所有框</view>
			<uni-grid :data="data3" show-border="false"></uni-grid>
			<view class="example-title">一行四个</view>
			<uni-grid :data="data2" show-out-border="false" column-num="4"></uni-grid>
			<view class="example-title">矩形案例</view>
			<uni-grid :data="data3" type="oblong"></uni-grid>
		</view>
	</view>
</template>

<script>
	import uniGrid from '@/components/uni-grid/uni-grid.vue'

	export default {
		components: {
			uniGrid
		},
		data() {
			return {
				data1: [{
						image: '/static/c1.png',
						text: 'Grid'
					},
					{
						image: '/static/c2.png',
						text: 'Grid'
					},
					{
						image: '/static/c3.png',
						text: 'Grid'
					},
					{
						image: '/static/c4.png',
						text: 'Grid'
					},
					{
						image: '/static/c5.png',
						text: 'Grid'
					},
					{
						image: '/static/c6.png',
						text: 'Grid'
					},
					{
						image: '/static/c7.png',
						text: 'Grid'
					},
					{
						image: '/static/c8.png',
						text: 'Grid'
					},
					{
						image: '/static/c9.png',
						text: 'Grid'
					}
				],
				data2: [{
						image: '/static/c1.png',
						text: 'Grid'
					},
					{
						image: '/static/c2.png',
						text: 'Grid'
					},
					{
						image: '/static/c3.png',
						text: 'Grid'
					},
					{
						image: '/static/c4.png',
						text: 'Grid'
					},
					{
						image: '/static/c5.png',
						text: 'Grid'
					},
					{
						image: '/static/c6.png',
						text: 'Grid'
					},
					{
						image: '/static/c7.png',
						text: 'Grid'
					},
					{
						image: '/static/c8.png',
						text: 'Grid'
					}
				],
				data3: [{
						image: '/static/c1.png',
						text: 'Grid'
					},
					{
						image: '/static/c2.png',
						text: 'Grid'
					},
					{
						image: '/static/c3.png',
						text: 'Grid'
					},
					{
						image: '/static/c4.png',
						text: 'Grid'
					},
					{
						image: '/static/c5.png',
						text: 'Grid'
					},
					{
						image: '/static/c6.png',
						text: 'Grid'
					}
				]
			}
		},
		methods: {
			onClick(e) {
				console.log('点击grid:' + JSON.stringify(e));
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