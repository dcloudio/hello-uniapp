<template>
	<view class="page">
		<view class="example">
			<view class="example-title">默认样式</view>
			<uni-grid :options="data1" @click="onClick" />
			<view class="example-title">可滑动宫格组件</view>
			<swiper :indicator-dots="true" :style="{height:swiperGridHeight,width:swiperGridWidth}">
				<swiper-item>
					<view class="grid-view">
						<uni-grid :options="data1" @click="onClick" />
					</view>
				</swiper-item>
				<swiper-item>
					<view class="grid-view">
						<uni-grid :options="data1" @click="onClick" />
					</view>
				</swiper-item>
			</swiper>
			<view class="example-title">无外边框</view>
			<uni-grid :options="data3" :show-out-border="false" />
			<view class="example-title">无所有框</view>
			<uni-grid :options="data3" :show-border="false" />
			<view class="example-title">一行四个</view>
			<uni-grid :options="data2" :show-out-border="false" :column-num="4" />
			<view class="example-title">矩形案例</view>
			<uni-grid :options="data3" type="oblong" />
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
				swiperGridHeight: '0px',
				swiperGridWidth: '100%',
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
		onReady() {
			uni.createSelectorQuery().select('.grid-view').boundingClientRect().exec((ret) => {
				this.swiperGridHeight = ret[0].height + 1 + 'px'
				// #ifndef H5
				this.swiperGridWidth = ret[0].width + 1 + 'px'
				// #endif
			})
		},
		methods: {
			onClick(e) {
				console.log('点击grid:' + JSON.stringify(e))
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

	.grid-view {
		/* #ifdef H5 */
		padding: 0 0.5px;
		/* #endif */
		box-sizing: border-box;
	}
</style>