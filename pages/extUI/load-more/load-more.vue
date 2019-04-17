<template>
	<view>
		<view>
			<view class="example-title">基本用法</view>
			<uni-load-more :status="status" />
		</view>
		<view>
			<view class="example-title">修改默认颜色及文字</view>
			<uni-load-more :status="status" :content-text="contentText" color="#007aff" />
		</view>

		<view class="example-title">改变组件状态</view>
		<radio-group class="uni-list" @change="onChange">
			<label v-for="(item, index) in statusTypes" :key="index" class="uni-list-item">
				<view class="uni-list-item__container">
					<view class="uni-list-item__content">
						<view class="uni-list-item__content-title">{{ item.text }}</view>
					</view>
					<view class="uni-list-item__extra">
						<radio :value="item.value" :checked="item.checked" />
					</view>
				</view>
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
				statusTypes: [{
					value: 'more',
					text: '加载前',
					checked: true
				}, {
					value: 'loading',
					text: '加载中',
					checked: false
				}, {
					value: 'noMore',
					text: '没有更多',
					checked: false
				}],
				contentText: {
					contentdown: '查看更多',
					contentrefresh: '加载中',
					contentnomore: '没有更多'
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

	uni-radio-group uni-label {
		padding: 0;
	}

	.uni-list-item__container {
		padding: 24upx 30upx;
		width: 100%;
		box-sizing: border-box;
		flex: 1;
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.uni-list-item__container:after {
		position: absolute;
		z-index: 3;
		right: 0;
		bottom: 0;
		left: 30upx;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}
</style>