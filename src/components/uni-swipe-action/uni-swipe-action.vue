<template>
	<view>
		<slot></slot>
	</view>
</template>

<script>
	/**
	 * SwipeAction 滑动操作
	 * @description 通过滑动触发选项的容器
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=181
	 */
	export default {
		data() {
			return {};
		},
		provide() {
			return {
				swipeaction: this
			};
		},
		created() {
			this.children = [];
		},
		methods: {
			closeOther(vm) {
				if (this.openItem && this.openItem !== vm) {
					// #ifdef APP-VUE || H5 || MP-WEIXIN
					this.openItem.button.show = 'none'
					// #endif

					// #ifndef APP-VUE || H5 || MP-WEIXIN
					this.openItem.close()
					// #endif
				}
				this.openItem = vm
			}
		}
	};
</script>

<style scoped></style>