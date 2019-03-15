<template>
	<view class="uni-status-bar" :style="{ height: statusBarHeight }">
		<slot></slot>
	</view>
</template>

<script>
	var statusBarHeight = uni.getSystemInfoSync().statusBarHeight + 'px';
	export default {
		name: 'uni-status-bar',
		data() {
			return {
				statusBarHeight: statusBarHeight
			};
		}
	};
</script>

<style>
	.uni-status-bar {
		display: block;
		width: 100%;
		height: 20px;
		height: var(--status-bar-height);
	}
</style>