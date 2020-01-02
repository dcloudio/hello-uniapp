<template>
	<text class="uni-link" :class="{'uni-link--withline':showUnderLine===true||showUnderLine==='true'}" :style="{color,fontSize:fontSize+'px'}" @click="openURL">{{text}}</text>
</template>

<script>
	/**
	 * Link 外部网页超链接组件
	 * @description uni-link是一个外部网页超链接组件，在小程序内复制url，在app内打开外部浏览器，在h5端打开新网页
	 * @property {String} href 点击后打开的外部网页url
	 * @property {String} text 显示的文字
	 * @property {Boolean} showUnderLine 是否显示下划线
	 * @property {String} copyTips 在小程序端复制链接时显示的提示语
	 * @property {String} color 链接文字颜色
	 * @property {String} fontSize 链接文字大小
	 * @example * <uni-link href="https://ext.dcloud.net.cn" text="https://ext.dcloud.net.cn"></uni-link>
	 */
	export default {
		name: 'uniLink',
		props: {
			href: {
				type: String,
				default: ''
			},
			text: {
				type: String,
				default: ''
			},
			showUnderLine: {
				type: [Boolean, String],
				default: true
			},
			copyTips: {
				type: String,
				default: '已自动复制网址，请在手机浏览器里粘贴该网址'
			},
			color: {
				type: String,
				default: '#999999'
			},
			fontSize: {
				type: [Number, String],
				default: 14
			}
		},
		methods: {
			openURL() {
				// #ifdef APP-PLUS
				plus.runtime.openURL(this.href)
				// #endif
				// #ifdef H5
				window.open(this.href)
				// #endif
				// #ifdef MP
				uni.setClipboardData({
					data: this.href
				});
				uni.showModal({
					content: this.copyTips,
					showCancel: false
				});
				// #endif
			}
		}
	}
</script>

<style scoped>
	.uni-link--withline {
		text-decoration: underline;
	}
</style>