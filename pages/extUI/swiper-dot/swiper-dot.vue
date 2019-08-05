<template>
	<view class="content">
		<uni-swiper-dot :info="info" :current="current" :mode="mode" :dots-styles="dotsStyles" field="content">
			<swiper class="swiper-box" @change="change">
				<swiper-item v-for="(item, index) in info" :key="index">
					<view :class="item.colorClass" class="swiper-item">
						<image :src="item.url" mode="aspectFill" />
					</view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
		<view class="example-title">模式选择</view>
		<view class="example-body">
			<view :class="{ active: modeIndex === 0 }" class="example-body-item" @click="selectMode('default', 0)">default</view>
			<view :class="{ active: modeIndex === 1 }" class="example-body-item" @click="selectMode('long', 1)">long</view>
			<view :class="{ active: modeIndex === 2 }" class="example-body-item" @click="selectMode('nav', 2)">nav</view>
			<view :class="{ active: modeIndex === 3 }" class="example-body-item" @click="selectMode('indexes', 3)">indexes</view>
		</view>
		<view class="example-title">颜色样式选择</view>
		<view class="example-body">
			<template v-if="mode !== 'nav'">
				<view v-for="(item, index) in dotStyle" :class="{ active: styleIndex === index }" :key="index" class="example-body-item" @click="selectStyle(index)">
					<view :style="{ 'background-color': item.selectedBackgroundColor, border: item.selectedBorder }" class="example-body-dots" />
					<view :style="{ 'background-color': item.backgroundColor, border: item.border }" class="example-body-dots" />
					<view :style="{ 'background-color': item.backgroundColor, border: item.border }" class="example-body-dots" />
				</view>
			</template>
			<template v-if="mode === 'nav'">
				<view v-for="(item, index) in dotStyle" :class="{ active: styleIndex === index }" :key="index" :style="{ 'background-color': item.selectedBackgroundColor }" class="example-body-item" @click="selectStyle(index)">
					<text :style="{ color: item.color }">内容</text>
				</view>
			</template>
		</view>
	</view>
</template>

<script>
	import uniSwiperDot from '@/components/uni-swiper-dot/uni-swiper-dot.vue'

	export default {
		components: {
			uniSwiperDot
		},
		data() {
			return {
				info: [{
						colorClass: 'uni-bg-red',
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
						content: '内容 A'
					},
					{
						colorClass: 'uni-bg-green',
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg',
						content: '内容 B'
					},
					{
						colorClass: 'uni-bg-blue',
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg',
						content: '内容 C'
					}
				],
				dotStyle: [{
						backgroundColor: 'rgba(0, 0, 0, .3)',
						border: '1px rgba(0, 0, 0, .3) solid',
						color: '#fff',
						selectedBackgroundColor: 'rgba(0, 0, 0, .9)',
						selectedBorder: '1px rgba(0, 0, 0, .9) solid'
					},
					{
						backgroundColor: 'rgba(255, 90, 95,0.3)',
						border: '1px rgba(255, 90, 95,0.3) solid',
						color: '#fff',
						selectedBackgroundColor: 'rgba(255, 90, 95,0.9)',
						selectedBorder: '1px rgba(255, 90, 95,0.9) solid'
					},
					{
						backgroundColor: 'rgba(83, 200, 249,0.3)',
						border: '1px rgba(83, 200, 249,0.3) solid',
						color: '#fff',
						selectedBackgroundColor: 'rgba(83, 200, 249,0.9)',
						selectedBorder: '1px rgba(83, 200, 249,0.9) solid'
					}
				],
				modeIndex: -1,
				styleIndex: -1,
				current: 0,
				mode: 'default',
				dotsStyles: {}
			}
		},
		onLoad() {},
		methods: {
			change(e) {
				this.current = e.detail.current
			},
			selectStyle(index) {
				this.dotsStyles = this.dotStyle[index]
				this.styleIndex = index
			},
			selectMode(mode, index) {
				this.mode = mode
				this.modeIndex = index
				this.styleIndex = -1
				this.dotsStyles = this.dotStyle[0]
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

	.swiper-box {
		height: 400upx;
	}

	.swiper-item {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		background: #eee;
		color: #fff;
	}

	.swiper-item image {
		width: 100%;
		height: 100%;
	}

	.uni-bg-red {
		background: #ff5a5f;
	}

	.uni-bg-green {
		background: #09bb07;
	}

	.uni-bg-blue {
		background: #007aff;
	}

	.example-body {
		display: flex;
		padding: 20upx;
	}

	.example-body-item {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 15upx;
		height: 60upx;
		width: 100%;
		font-size: 28upx;
		color: #333;
		border: 1px #eee solid;
		border-radius: 10upx;
	}

	.example-body-dots {
		width: 16upx;
		height: 16upx;
		border-radius: 50%;
		background: #333333;
		margin-left: 10upx;
		box-sizing: border-box;
	}

	.example-body-dots:first-child {
		margin: 0;
	}

	.active {
		border: 1px #000 solid;
	}
</style>