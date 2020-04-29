export default {
	created() {
		if (this.type === 'message') {
			// 获取自组件对象
			this.maskShow = false
			this.children = null
		}
	},
	created() {
		if (this.type === 'message') {
			// 不显示遮罩
			this.maskShow = false 
			// 获取子组件对象
			this.childrenMsg = null
		}
	},
	methods: {
		customOpen() {
			if (this.childrenMsg) {
				this.childrenMsg.open()
			}
		},
		customClose() {
			if (this.childrenMsg) {
				this.childrenMsg.close()
			}
		}
	}
}
