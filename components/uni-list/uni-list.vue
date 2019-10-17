<template>
	<view class="uni-list">
		<slot />
	</view>
</template>
<script>
	export default {
		name: 'UniList',
		provide() {
			return {
				list: this
			}
		},
		created() {
			this.firstChildAppend = false
		}
	}
</script>
<style scoped>
	.uni-list {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		background-color: #ffffff;
		position: relative;
		flex-direction: column;
		border-bottom-color: #e5e5e5;
		border-bottom-style: solid;
		border-bottom-width: 1px;
	}
</style>