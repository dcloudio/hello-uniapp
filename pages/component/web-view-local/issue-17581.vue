<template>
	<view>
		<web-view style="margin-top: 200px;" src="/hybrid/html/issue-17581.html" @message="onWebViewMessage"></web-view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				clickClientX: 0,
				clickClientY: 0
			}
		},
		onLoad() {},
		methods: {
			onWebViewMessage(message) {
				const data = message.detail.data
				const dataItem = data && data[0]
				if(dataItem.action === 'click') {
					this.clickClientX = dataItem.clientX
					this.clickClientY = dataItem.clientY
				}
			}
		}
	}
</script>
<style>
</style>
