<template>
	<view>
		<web-view :src="url" @message="getMessage"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url: 'https://hellouniapp.dcloud.net.cn/html/web-view.html?v=2'
			}
		},
		onLoad(options) {
			if (options && options.url) {
				this.url = options.url;
			}
		},
		methods: {
			getMessage(event) {
				uni.showModal({
					content: JSON.stringify(event.detail),
					showCancel: false
				});
			}
		}
	}
</script>

<style>

</style>
