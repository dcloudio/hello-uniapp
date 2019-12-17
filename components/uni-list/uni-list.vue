<template>
	<!-- #ifndef APP-NVUE -->
	<view class="uni-list">
		<slot />
	</view>
	<!-- #endif -->
	<!-- #ifdef APP-NVUE -->
	<list class="uni-list" :enableBackToTop="enableBackToTop" loadmoreoffset="15" :scroll-y="scrollY" @loadmore="loadMore">
		<slot />
	</list>
	<!-- #endif -->
</template>

<script>
	/**
	 * List 列表
	 * @description 列表组件
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=24
	 */
	export default {
		name: 'UniList',
		'mp-weixin': {
			options: {
				multipleSlots: false
			}
		},
		props: {
			enableBackToTop: {
				type: [Boolean, String],
				default: false
			},
			scrollY: {
				type: [Boolean, String],
				default: false
			}
		},
		provide() {
			return {
				list: this
			}
		},
		created() {
			this.firstChildAppend = false
		},
		methods: {
			loadMore(e) {
				this.$emit("scrolltolower");
			}
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