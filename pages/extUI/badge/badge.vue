<template>
	<view class="page">
		<view class="example-info">数字角标通用来标记重点信息使用，如接受到新消息、有未读消息等</view>
		<view class="example-title">有底色</view>
		<view class="example-body">
			<uni-badge text="1" />
			<uni-badge text="2" type="primary" />
			<uni-badge text="34" type="success" />
			<uni-badge text="45" type="warning" />
			<uni-badge text="123" type="error" />
		</view>
		<view class="example-title">无底色</view>
		<view class="example-body">
			<uni-badge :inverted="true" text="1" />
			<uni-badge :inverted="true" text="2" type="primary" />
			<uni-badge :inverted="true" text="34" type="success" />
			<uni-badge :inverted="true" text="45" type="warning" />
			<uni-badge :inverted="true" text="123" type="error" />
		</view>
		<view class="example-title">迷你</view>
		<view class="example-body">
			<uni-badge text="1" size="small" />
			<uni-badge text="2" type="primary" size="small" />
			<uni-badge text="34" type="success" size="small" />
			<uni-badge text="45" type="warning" size="small" />
			<uni-badge text="123" type="error" size="small" />
		</view>
	</view>
</template>

<script>
	import uniBadge from '@/components/uni-badge/uni-badge.vue'

	export default {
		components: {
			uniBadge
		},
		data() {
			return {}
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

	.uni-badge {
		margin: 20upx;
	}
</style>