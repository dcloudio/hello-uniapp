export default {
	created() {
		if (this.type === 'share') {
			// 关闭点击
			this.mkclick = false
		}
	},
	methods: {
		customOpen() {
			console.log('share 打开了');
		},
		customClose() {
			console.log('share 关闭了');
		}
	}
}
