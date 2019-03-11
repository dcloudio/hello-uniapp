<template>
	<view class="page">
		<view class="example">
			<view class="example-title">有底色</view>
			<view style="background:#FFF; padding:20upx;">
				<uni-badge text="1"></uni-badge>
				<uni-badge text="2" type="primary"></uni-badge>
				<uni-badge text="34" type="success"></uni-badge>
				<uni-badge text="45" type="warning"></uni-badge>
				<uni-badge text="123" type="error"></uni-badge>
			</view>
			<view class="example-title">无底色</view>
			<view style="background:#FFF; padding:20upx;">
				<uni-badge text="1" :inverted="true"></uni-badge>
				<uni-badge text="2" type="primary" :inverted="true"></uni-badge>
				<uni-badge text="34" type="success" :inverted="true"></uni-badge>
				<uni-badge text="45" type="warning" :inverted="true"></uni-badge>
				<uni-badge text="123" type="error" :inverted="true"></uni-badge>
			</view>
			<view class="example-title">迷你</view>
			<view style="background:#FFF; padding:20upx;">
				<uni-badge text="1" size="small"></uni-badge>
				<uni-badge text="2" type="primary" size="small"></uni-badge>
				<uni-badge text="34" type="success" size="small"></uni-badge>
				<uni-badge text="45" type="warning" size="small"></uni-badge>
				<uni-badge text="123" type="error" size="small"></uni-badge>
			</view>
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

	.uni-badge {
		margin: 20upx;
	}
</style>