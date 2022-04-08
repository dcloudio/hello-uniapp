<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title">
				<uni-icons size="16" type="info"></uni-icons>Description : </view>
			<view class="uni-helllo-text">
				<view>In the App side, you can configure the buttons in pages.json, do not support dynamically changing the style of the buttons, use onNavigationBarButtonTap to listen to the click event of the buttons.</view>
				<view>In the applet side, configuration of buttons is not supported, so the button is missing.</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'nav-button'
			}
		},
		onNavigationBarButtonTap(e) {
			uni.showToast({
				title: e.index === 0 ? "You clicked the share button" : "You clicked the favorite button",
				icon: "none"
			})
		}
	}
</script>

<style>

</style>
