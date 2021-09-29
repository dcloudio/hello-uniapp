<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title">
				<uni-icons size="16" type="info"></uni-icons>说明 : </view>
			<view class="uni-helllo-text">
				<view>在App端可在pages.json里通过 style -> titleImage 配置，支付宝小程序只支持https地址的图片，暂不支持动态改变；常用于App首页顶部导航显示产品Logo。</view>
                <view>在支付宝小程序里请使用真机调试查看效果。</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'nav-image'
			}
		}
	}
</script>

<style>

</style>
