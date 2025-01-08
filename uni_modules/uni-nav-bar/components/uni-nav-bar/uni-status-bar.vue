<template>
	<view :style="{ height: statusBarHeight }" class="uni-status-bar">
		<slot />
	</view>
</template>

<script>
	export default {
		name: 'UniStatusBar',
		data() {
			return {
				// #ifdef MP-WEIXIN
				statusBarHeight: uni.getWindowInfo().statusBarHeight + 'px',
				// #endif
				// #ifndef MP-WEIXIN
				statusBarHeight: uni.getSystemInfoSync().statusBarHeight + 'px',
				// #endif

			}
		}
	}
</script>

<style lang="scss" >
	.uni-status-bar {
		// width: 750rpx;
		height: 20px;
		// height: var(--status-bar-height);
	}
</style>
