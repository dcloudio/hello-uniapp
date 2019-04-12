<template>
	<view style="text-decoration:underline" :href="href" @click="openURL()" :inWhiteList="inWhiteList"> {{text}} </view>
</template>

<script>
	export default {
		name: 'u-link',
		props: ['href', 'text', 'inWhiteList'],
		onLoad() {

		},
		methods: {
			openURL() {
				// #ifdef APP-PLUS
				plus.runtime.openURL(this.href) //这里默认使用外部浏览器打开而不是内部web-view组件打开
				// #endif
				// #ifdef H5
				window.open(this.href)
				// #endif
				// #ifdef MP
				if (typeof(this.inWhiteList) != "undefined" && this.inWhiteList == true) { //如果在小程序的网址白名单中，会走内置webview打开，否则会复制网址提示在外部浏览器打开
					uni.navigateTo({
						url: '/pages/component/web-view/web-view?url=' + this.href,
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
				} else {
					uni.setClipboardData({
						data: this.href
					})
					uni.showModal({
						content: '本网址无法直接在小程序内打开。已自动复制网址，请在手机浏览器里粘贴该网址',
						showCancel: false
					})
				}
				// #endif
			}
		},

	}
</script>

<style>

</style>
