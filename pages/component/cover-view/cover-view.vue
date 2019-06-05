<template>
	<view>
		<page-head title="cover-view用于覆盖map、video等原生组件"></page-head>
		<view class="cover-content">
			<!-- TODO暂时条件编译解决支付宝小程序不能正常显示 cover-x -->
			<!-- #ifdef APP-PLUS -->
			<map>
				<cover-view class="cover-view">简单的cover-view</cover-view>
				<cover-image class="cover-image" src="/static/uni.png"></cover-image>
			</map>
			<!-- #endif -->
			<!-- #ifndef APP-PLUS -->
			<map></map>
			<cover-view class="cover-view">简单的cover-view</cover-view>
			<cover-image class="cover-image" src="/static/uni.png"></cover-image>
			<!-- #endif -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		}
	}
</script>

<style>
	map {
		width: 750upx;
		height: 750upx;
	}

	.cover-content {
		position: relative;
	}

	.cover-view {
		position: absolute;
		left: 5px;
		top: 5px;
		width: 375upx;
		text-align: center;
		background-color: #DDDDDD;
	}

	.cover-image {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		width: 96px;
		height: 96px;
	}
</style>
