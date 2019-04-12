<template>
	<view>
		<page-head title="微信小程序自定义组件示例"></page-head>
		<view class="uni-common-mt" style="text-align: center;width: 750upx;">
			<text style="padding-left: 10px;padding-right: 10px;">
				uni-app支持在微信和App端引入微信小程序自定义组件，不支持其他端。以下以vant weapp组件为例演示
			</text>
		</view>
		<view class="uni-common-mt" style="text-align: center;">
			<van-button type="primary" @click="onClick">vant weapp的van-button按钮组件</van-button>
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
