<template>
	<view>
		<page-head title="cover-view用于覆盖map、video等原生组件"></page-head>
		<view class="cover-content" v-if="showMap">
			<!-- TODO暂时条件编译解决支付宝小程序不能正常显示 cover-x -->
			<!-- #ifdef APP-PLUS -->
			<map>
				<cover-view class="cover-view">简单的cover-view</cover-view>
				<cover-image class="cover-image" src="/static/uni.png"></cover-image>
			</map>
			<!-- #endif -->

			<!-- #ifndef APP-PLUS -->
			<!-- #ifndef MP-QQ -->
			<map></map>
			<!-- #endif -->

			<!-- TODO QQ暂不支持地图组件 -->
			<!-- #ifdef MP-QQ -->
			<video class="video" src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4"></video>
			<!-- #endif -->

			<cover-view class="cover-view">简单的cover-view</cover-view>
			<!-- #ifndef MP-QQ -->
			<cover-image class="cover-image" src="/static/uni.png"></cover-image>
			<!-- #endif -->
			<!-- #endif -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showMap: false
			};
		},
		onLoad() {
      // #ifdef APP-PLUS || MP-BAIDU
			setTimeout(()=>{
				this.showMap = true
			},350)
      // #endif
      // #ifndef APP-PLUS || MP-BAIDU
			this.showMap = true
      // #endif
		}
	}
</script>

<style>
	map {
		width: 750upx;
		height: 750upx;
	}

	.video {
		width: 100%;
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
