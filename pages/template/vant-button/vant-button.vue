<template>
	<view >
		<page-head title="微信小程序自定义组件示例"></page-head>
		<view class="uni-common-mt" style="text-align: center;width: 750rpx;width: 100%;">
			<text style="padding-left: 10px;padding-right: 10px;">
				uni-app supports introducing WeChat applet custom components in WeChat applet, QQ applet side, App side and H5 side. The following is an example of vant weapp component
			</text>
		</view>
		<view class="uni-common-mt" style="text-align: center;">
			<van-button type="primary" @click="onClick">van-button button component for vant weapp</van-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				checked: true
			};
		},
		methods: {
			onClick() {
				uni.showToast({
					title: "click van-button",
					mask: false,
					icon: "none",
					duration: 1500
				});

			}
		}
	}
</script>

<style>

</style>
