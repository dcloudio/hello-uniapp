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
				// console.log(e);
				let children = this.children
				// #ifdef APP-VUE || H5 || MP-WEIXIN
				children.forEach((item, index) => {
					if (vm === item) return
					let position = item.position[0]
					let show = position.show
					if (show) {
						position.show = false
						// this.$set(this.children[index].position, 0, position)
					}
				})
				// #endif
				// #ifdef APP-NVUE
				children.forEach((item, index) => {
					if (vm === item) return
					let position = item.position[0]
					if (item.show) {
						item.close()
					}
				})
				// #endif
			}
		}
	}
</script>

<style scoped>

</style>