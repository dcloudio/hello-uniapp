<template>
	<view>
		<view class="example-info">
			<text class="example-info-text">分组组件可用于将组件分组，添加间隔，以产生明显的区块</text>
		</view>
		<uni-section title="基础分组" type="line"></uni-section>
		<uni-group>
			<view> 分组内容 </view>
			<view> 分组内容 </view>
			<view> 分组内容 </view>
			<view> 分组内容 </view>
		</uni-group>

		<uni-group title="基本模式" margin-top="20">
			<view> 分组内容 </view>
			<view> 分组内容 </view>
			<view> 分组内容 </view>
			<view> 分组内容 </view>
		</uni-group>

		<uni-section title="卡片分组" type="line"></uni-section>
		<uni-group mode="card">
			<view> 分组内容 </view>
			<view> 分组内容 </view>
			<view> 分组内容 </view>
			<view> 分组内容 </view>
		</uni-group>

		<uni-group title="card 模式" mode="card">
			<view> 分组内容 </view>
			<view> 分组内容 </view>
			<view> 分组内容 </view>
			<view> 分组内容 </view>
		</uni-group>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				appear: false,
				name: '',
				mobile: '139 9999 9999',
				weixin: 'sskd',
				message: '',
				errorMessage: ''
			}
		},
		onReady() {

		},
		methods: {

		}
	}
</script>

<style>
	@charset "UTF-8";

	/* 头条小程序组件内不能引入字体 */
	/* #ifdef MP-TOUTIAO */
	@font-face {
		font-family: uniicons;
		font-weight: normal;
		font-style: normal;
		src: url("~@/static/uni.ttf") format("truetype");
	}

	/* #endif */
	/* #ifndef APP-NVUE */
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #efeff4;
		min-height: 100%;
		height: auto;
	}

	view {
		font-size: 14px;
		line-height: inherit;
	}

	.example {
		padding: 0 15px 15px;
	}

	.example-info {
		padding: 15px;
		color: #3b4144;
		background: #ffffff;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0;
		font-size: 14px;
		background-color: #ffffff;
	}

	/* #endif */
	.example {
		padding: 0 15px;
	}

	.example-info {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		padding: 15px;
		color: #3b4144;
		background-color: #ffffff;
		font-size: 14px;
		line-height: 20px;
	}

	.example-info-text {
		font-size: 14px;
		line-height: 20px;
		color: #3b4144;
	}

	.example-body {
		flex-direction: column;
		padding: 15px;
		background-color: #ffffff;
	}

	.word-btn-white {
		font-size: 18px;
		color: #FFFFFF;
	}

	.word-btn {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
		border-radius: 6px;
		height: 48px;
		margin: 15px;
		background-color: #007AFF;
	}

	.word-btn--hover {
		background-color: #4ca2ff;
	}

	.uni-wrap {
		flex-direction: column;
		/* #ifdef H5 */
		height: calc(100vh - 44px);
		/* #endif */
		/* #ifndef H5 */
		height: 100vh;
		/* #endif */
		flex: 1;
	}

	.scroll {
		flex-direction: column;
		flex: 1;
	}

	.example-body {
		padding: 0;
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
	}
</style>