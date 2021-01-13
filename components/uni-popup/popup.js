import message from './message.js';
// 定义 type 类型:弹出类型：top/bottom/center
const config = {
	// 顶部弹出
	top: 'top',
	// 底部弹出
	bottom: 'bottom',
	// 居中弹出
	center: 'center',
	// 消息提示
	message: 'top',
	// 对话框
	dialog: 'center',
	// 分享
	share: 'bottom',
}

export default {
	data() {
		return {
			config: config,
			popupWidth: 0,
			popupHeight: 0
		}
	},
	mixins: [message],
	computed: {
		isDesktop() {
			return this.popupWidth >= 500 && this.popupHeight >= 500
		}
	},
	mounted() {
		const fixSize = () => {
			const {
				windowWidth,
				windowHeight,
				windowTop
			} = uni.getSystemInfoSync()
			this.popupWidth = windowWidth
			this.popupHeight = windowHeight + windowTop
		}
		fixSize()
		// #ifdef H5
		window.addEventListener('resize', fixSize)
		this.$once('hook:beforeDestroy', () => {
			window.removeEventListener('resize', fixSize)
		})
		// #endif
	},
}
