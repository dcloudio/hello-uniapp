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
		/* border-bottom-color: $uni-border-color;
 */
		/* border-bottom-style: solid;
 */
		/* border-bottom-width: 1px;
 */
	}

	/* #ifndef APP-NVUE */
	.uni-list:before {
		height: 0;
	}

	.uni-list:after {
		height: 0;
	}

	/* #endif */
</style>