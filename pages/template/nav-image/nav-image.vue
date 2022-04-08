<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title">
				<uni-icons size="16" type="info"></uni-icons>Description : </view>
			<view class="uni-helllo-text">
				<view>In the App side can be configured in pages.json by style -> titleImage, Alipay applet only supports https address image, does not support dynamic change; commonly used in the App home page top navigation display product Logo.</view>
                <view>Please use the real machine debugging to see the effect in the Alipay applet.</view>
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
