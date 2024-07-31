<template>
	<view>
		<web-view :src="url" :update-title="updateTitle" @message="getMessage"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url: 'https://uniapp.dcloud.io/static/web-view.html',
				updateTitle: true
			}
		},
		onLoad(options) {
			if (options) {
				if (options.url) {
					this.url = decodeURIComponent(options.url);
				}
				if (options.title) {
					this.updateTitle = false;
					uni.setNavigationBarTitle({
						title: options.title
					});
				}
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
