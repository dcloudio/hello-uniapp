<template>
	<view>
		<view class="example-title">基本用法</view>
		<uni-swipe-action :options="options2" @click="bindClick">
			<view class="cont">SwipeAction 基础使用场景</view>
		</uni-swipe-action>
		<view class="example-title">禁止滑动</view>
		<uni-swipe-action :disabled="true">
			<view class="cont">SwipeAction 禁止滑动展示</view>
		</uni-swipe-action>
		<view class="example-title">使用变量控制开关</view>
		<view class="example-body">
			<view class="button" @click="setOpened">当前状态：{{ isOpened ? '开' : '关' }}</view>
		</view>
		<uni-swipe-action :options="options2" :is-opened="isOpened" :auto-close="true" @opened="bindOpened" @closed="bindClosed">
			<view class="cont">使用变量控制SwipeAction的开启状态</view>
		</uni-swipe-action>
		<view class="example-title">与 List 组件一起使用</view>
		<!-- #ifndef MP-BAIDU || MP-ALIPAY || MP-TOUTIAO -->
		<uni-list>
			<uni-swipe-action :options="options1">
				<uni-list-item :show-arrow="false" title="item1" />
			</uni-swipe-action>
			<uni-swipe-action :options="options2">
				<uni-list-item :show-arrow="false" title="item2" />
			</uni-swipe-action>
			<uni-swipe-action :options="options3">
				<uni-list-item :show-arrow="false" title="item3" />
			</uni-swipe-action>
		</uni-list>
		<!-- #endif -->
		<!-- #ifdef MP-BAIDU || MP-ALIPAY || MP-TOUTIAO -->
		<view class="uni-list">
			<uni-swipe-action :options="options1">
				<uni-list-item :show-arrow="false" title="item1" />
			</uni-swipe-action>
			<uni-swipe-action :options="options2">
				<uni-list-item :show-arrow="false" title="item2" />
			</uni-swipe-action>
			<uni-swipe-action :options="options3">
				<uni-list-item :show-arrow="false" title="item3" />
			</uni-swipe-action>
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
	import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action.vue'
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'

	export default {
		components: {
			uniSwipeAction,
			uniList,
			uniListItem
		},
		data() {
			return {
				isOpened: false,
				options1: [{
					text: '取消置顶'
				}],
				options2: [{
					text: '取消',
					style: {
						backgroundColor: '#007aff'
					}
				}, {
					text: '确认',
					style: {
						backgroundColor: '#dd524d'
					}
				}],
				options3: [{
					text: '置顶'
				}, {
					text: '标记为已读',
					style: {
						backgroundColor: 'rgb(254,156,1)'
					}
				}, {
					text: '删除',
					style: {
						backgroundColor: 'rgb(255,58,49)'
					}
				}]
			}
		},
		methods: {
			bindClick(value) {
				uni.showToast({
					title: `点击了${value.text}按钮`,
					icon: 'none'
				})
			},
			setOpened() {
				this.isOpened = !this.isOpened
			},
			bindOpened() {
				this.isOpened = true
			},
			bindClosed() {
				this.isOpened = false
			}
		}
	}
</script>

<style>
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #efeff4
	}

	view {
		font-size: 28upx;
		line-height: inherit
	}

	.example {
		padding: 0 30upx 30upx
	}

	.example-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 32upx;
		color: #464e52;
		padding: 30upx;
		margin-top: 20upx;
		position: relative;
		background-color: #fdfdfd
	}

	.example-title__after {
		position: relative;
		color: #031e3c
	}

	.example-title:after {
		content: '';
		position: absolute;
		left: 0;
		margin: auto;
		top: 0;
		bottom: 0;
		width: 10upx;
		height: 40upx;
		border-top-right-radius: 10upx;
		border-bottom-right-radius: 10upx;
		background-color: #031e3c
	}

	.example .example-title {
		margin: 40upx 0
	}

	.example-body {
		border-top: 1px #f5f5f5 solid;
		padding: 30upx;
		background: #fff
	}

	.example-info {
		padding: 30upx;
		color: #3b4144;
		background: #fff
	}

	.cont {
		height: 90upx;
		line-height: 90upx;
		padding: 0 30upx;
		position: relative;
	}

	.cont::before {
		position: absolute;
		z-index: 3;
		left: 0;
		right: 0;
		top: 0;
		height: 1px;
		content: '';
		transform: scaleY(0.5);
		background-color: $uni-border-color;
	}

	.cont::after {
		position: absolute;
		z-index: 3;
		left: 0;
		right: 0;
		bottom: 0;
		height: 1px;
		content: '';
		transform: scaleY(0.5);
		background-color: $uni-border-color;
	}

	.example-body {
		display: flex;
		flex-direction: row;
		justify-content: center;
		padding: 20upx 0;
	}

	/* .button-view {
		display: flex;
		flex-direction: row;
		justify-content: center;
		padding: 20upx 0;
		background: #fff;
	} */

	.button {
		border: 1px solid #E7E7E7;
		padding: 8upx 16upx;
		border-radius: 8upx;
	}
</style>