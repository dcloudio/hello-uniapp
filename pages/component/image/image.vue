<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title">
				示例1 <text>\n本地图片</text>
			</view>
			<view class="uni-center" style="background:#FFFFFF; font-size:0;">
				<!-- #ifdef MP-ALIPAY -->
				<image class="image" mode="widthFix" src="../../../static/uni.png" />
				<!-- #endif -->
				<!-- #ifndef MP-ALIPAY -->
				<image class="image" mode="widthFix" src="../../../static/uni.png" />
				<!-- #endif -->
			</view>
			<view class="uni-title uni-common-mt">
				示例2 <text>\n网络图片</text>
			</view>
			<view class="uni-center" style="background:#FFFFFF; font-size:0;">
				<image class="image" mode="widthFix" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/ceb770c0-5164-11eb-8a36-ebb87efcf8c0.png" />
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'image'
			}
		}
	}
</script>
<style>
	.image {
		margin:40rpx 0;
		width: 200rpx;
	}
</style>
