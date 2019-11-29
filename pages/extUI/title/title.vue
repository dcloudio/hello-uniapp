<template>
	<view class="uni-content">
		<view class="example-info">
			<text class="example-info-text"> uni-title 组件主要用于文章、列表详情的标题展示 </text>
		</view>
		<uni-section title="基础用法" type="line"></uni-section>
		<view class="example-body">
			<uni-title type="h1" title="h1 一级标题 "></uni-title>
			<uni-title type="h2" title="h2 二级标题"></uni-title>
			<uni-title type="h3" title="h3 三级标题"></uni-title>
			<uni-title type="h4" title="h4 四级标题"></uni-title>
			<uni-title type="h5" title="h5 五级标题"></uni-title>
		</view>
		<uni-section title="改变颜色" type="line"></uni-section>
		<view class="example-body">
			<uni-title type="h1" title="h1 一级标题" color="#027fff"></uni-title>
			<uni-title type="h2" title="h2 二级标题" color="#2490ff"></uni-title>
			<uni-title type="h3" title="h3 三级标题" color="#439ffc"></uni-title>
			<uni-title type="h4" title="h4 四级标题" color="#60adfb"></uni-title>
			<uni-title type="h5" title="h5 五级标题" color="#7db9f7"></uni-title>
		</view>
		<uni-section title="对齐方式" type="line"></uni-section>
		<view class="example-body">
			<uni-title type="h1" title="h1 左对齐" align="left"></uni-title>
			<uni-title type="h2" title="h2 居中" align="center"></uni-title>
			<uni-title type="h3" title="h3 右对齐" align="right"></uni-title>
			<uni-title type="h4" title="h4 居中" align="center"></uni-title>
			<uni-title type="h5" title="h5 左对齐" align="left"></uni-title>
		</view>
		<uni-section title="组合示例" type="line"></uni-section>
		<view class="example-body">
			<view class="uni-box-head">
				<uni-title type="h1" align="center" title="uni-app介绍"></uni-title>
			</view>
			<view class="uni-box">
				<uni-title class="h3" type="h3" title="1 框架介绍"></uni-title>
			</view>
			<view class="uni-box">
				<uni-title class="h4" type="h4" title="1.1 什么是uni-app"></uni-title>
			</view>
			<view>
				<text class="uni-text">uni-app 是一个使用 Vue.js
					开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、H5、以及各种小程序（微信/支付宝/百度/头条/QQ/钉钉）等多个平台。即使不跨端，uni-app同时也是更好的小程序开发框架。DCloud公司拥有370万开发者用户，旗下uni-app有5万+案例、900款插件、50+微信/qq群，并且被阿里小程序工具内置，开发者可以放心选择。</text>
			</view>
			<view class="uni-box">
				<uni-title class="h4" type="h4" title="1.2 开发规范"></uni-title>
			</view>
			<view class="">
				<uni-title class="h5" type="h5" color="#666">- 页面文件遵循 Vue 单文件组件 (SFC) 规范</uni-title>
				<uni-title class="h5" type="h5" color="#666">- 组件标签靠近小程序规范，详见uni-app 组件规范</uni-title>
				<uni-title class="h5" type="h5" color="#666">- 接口能力（JS API）靠近微信小程序规范，但需将前缀 wx 替换为 uni，详见uni-app接口规范</uni-title>
				<uni-title class="h5" type="h5" color="#666">- 数据绑定及事件处理同 Vue.js 规范，同时补充了App及页面的生命周期</uni-title>
				<uni-title class="h5" type="h5" color="#666">- 为兼容多端运行，建议使用flex布局进行开发</uni-title>
			</view>
		</view>
	</view>
</template>

<script>
	import uniSection from '@/components/uni-section/uni-section.vue'
	import uniTitle from '@/components/uni-title/uni-title.vue'
	export default {
		components: {
			uniTitle,
			uniSection
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	/* 头条小程序组件内不能引入字体 */
	/* #ifdef MP-TOUTIAO */
	@font-face {
		font-family: uniicons;
		font-weight: normal;
		font-style: normal;
		src: url('~@/static/uni.ttf') format('truetype');
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


	.uni-box-head {
		/* margin: 5px 0;
 */
	}

	.uni-box {
		/* margin: 10px 0;
 */
	}

	.uni-text {
		font-size: 14px;
		color: #333;
	}
</style>