<template>
	<view class="uni-collapse">
		<slot />
	</view>
</template>
<script>
	/**
	 * Collapse 折叠面板
	 * @description 展示可以折叠 / 展开的内容区域
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=23
	 * @property {Boolean} accordion = [true|false] 是否开启手风琴效果是否开启手风琴效果
	 * @event {Function} change 切换面板时触发，activeNames（Array）：展开状态的uniCollapseItem的 name 值
	 */
	export default {
		name: 'UniCollapse',
		props: {
			accordion: {
				// 是否开启手风琴效果
				type: [Boolean, String],
				default: false
			}
		},
		data() {
			return {}
		},
		provide() {
			return {
				collapse: this
			}
		},
		created() {
			this.childrens = []
		},
		methods: {
			onChange() {
				let activeItem = []
				this.childrens.forEach((vm, index) => {
					if (vm.isOpen) {
						activeItem.push(vm.nameSync)
					}
				})
				this.$emit('change', activeItem)
			}
		}
	}
</script>
<style scoped>
	.uni-collapse {
		/* #ifndef APP-NVUE */
		width: 100%;
		display: flex;
		/* #endif */
		/* #ifdef APP-NVUE */
		flex: 1;
		/* #endif */
		flex-direction: column;
		background-color: #ffffff;
	}
</style>