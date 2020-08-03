<template>
	<view class="page">
		<text class="example-info">组合框一般用于可以选择也可以输入的表单项</text>
		<uni-section title="基本用法" type="line"></uni-section>
		<view class="example-body">
			<uni-combox label="所在城市" :candidates="candidates" placeholder="请选择所在城市" v-model="city"></uni-combox>
			<view class="result-box">
				<text>所选城市为：{{city}}</text>
			</view>
		</view>
		<uni-section title="设置label宽度" type="line"></uni-section>
		<view class="example-body">
			<uni-combox label="所在城市" labelWidth="150px" :candidates="candidates" placeholder="请选择所在城市"></uni-combox>
		</view>
		<uni-section title="设置无匹配项时的提示语" type="line"></uni-section>
		<view class="example-body">
			<uni-combox label="所在城市" emptyTips="这里啥都没有" placeholder="请选择所在城市"></uni-combox>
		</view>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				candidates: ['北京', '南京', '东京', '武汉', '天津', '上海', '海口'],
				city: ''
			}
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

	.example-body {
		padding: 0px 12px;
		background-color: #FFFFFF;
	}

	.result-box {
		text-align: center;
		padding: 20px 0px;
		font-size: 16px;
	}
</style>