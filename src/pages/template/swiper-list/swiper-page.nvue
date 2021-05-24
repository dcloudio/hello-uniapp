<template>
	<view class="uni-swiper-page">
		<text>Tab View {{ pid}}</text>
	</view>
</template>

<script>
	export default {
		props: {
			pid: {
				type: [Number, String],
				default: ''
			}
		},
		data() {
			return {
				dataList: []
			}
		},
		created() {},
		methods: {
			loadData() {
				// 首次激活时被调用
			},
			clear() {
				// 释放数据时被调用，参考 swiper-list 缓存配置
				this.dataList.length = 0;
			}
		}
	}
</script>

<style scoped>
	.uni-swiper-page {
		flex: 1;
		flex-direction: column;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		align-items: center;
		justify-content: center;
	}
</style>
