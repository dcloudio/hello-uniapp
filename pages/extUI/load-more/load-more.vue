<template>
	<view>
		<view>
			<view class="example-title">基本用法</view>
			<uni-load-more :status="status"></uni-load-more>
		</view>
		<view>
			<view class="example-title">修改默认颜色及文字</view>
			<uni-load-more color="#007aff" :status="status" :contentText="contentText"></uni-load-more>
		</view>
		<radio-group @change="onChange">
			<label>
				<radio value="more" checked="true" />加载前
			</label>
			<label>
				<radio value="loading" />加载中
			</label>
			<label>
				<radio value="noMore" />没有更多了
			</label>
		</radio-group>
	</view>
</template>
<script>
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue'

	export default {
		components: {
			uniLoadMore
		},
		data() {
			return {
				status: 'more',
				contentText: {
					contentdown: "查看更多",
					contentrefresh: "加载中",
					contentnomore: "没有更多"
				}
			}
		},
		methods: {
			onChange(e) {
				this.status = e.detail.value
			}
		}
	}
</script>

<style>
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #fff
	}

	view {
		font-size: 28upx;
		line-height: inherit
	}

	.example {
		padding: 0 30upx 30upx
	}

	.example-title {
		font-size: 32upx;
		line-height: 32upx;
		color: #777;
		margin: 40upx 25upx;
		position: relative
	}

	.example .example-title {
		margin: 40upx 0
	}

	.example-body {
		padding: 0 40upx
	}

	radio-group {
		margin-top: 30upx;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
</style>