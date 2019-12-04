<template>
	<view>
		<slot></slot>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		provide() {
			return {
				swipeaction: this
			}
		},
		created() {
			this.children = []
		},
		methods: {
			closeOther(vm) {
				let children = this.children
				children.forEach((item, index) => {
					if (vm === item) return
					// 支付宝执行以下操作
					// #ifdef MP-ALIPAY
					if (item.isopen) {
						item.close()
					}
					// #endif

					// app vue 端、h5 、微信、支付宝  执行以下操作
					// #ifdef APP-VUE || H5 || MP-WEIXIN
					let position = item.position[0]
					let show = position.show
					if (show) {
						position.show = false
					}
					// #endif

					// nvue 执行以下操作
					// #ifdef APP-NVUE || MP-BAIDU || MP-QQ || MP-TOUTIAO
					item.close()
					// #endif
				})
			}
		}
	}
</script>

<style scoped>

</style>