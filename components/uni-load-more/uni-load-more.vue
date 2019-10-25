<template>
	<view class="uni-load-more">
		<view v-if="iconType==='circle' || iconType==='auto' && platform === 'android'" v-show="status === 'loading' && showIcon" class="uni-load-more__img">
			<view :style="{borderColor : color}" class="loader-android" />
		</view>
		<view v-else v-show="status === 'loading' && showIcon" class="uni-load-more__img">
			<view class="load1 load">
				<view :style="{ background: color }" class="uni-load-view_wrapper" />
				<view :style="{ background: color }" class="uni-load-view_wrapper" />
				<view :style="{ background: color }" class="uni-load-view_wrapper" />
				<view :style="{ background: color }" class="uni-load-view_wrapper" />
			</view>
			<view class="load2 load">
				<view :style="{ background: color }" class="uni-load-view_wrapper" />
				<view :style="{ background: color }" class="uni-load-view_wrapper" />
				<view :style="{ background: color }" class="uni-load-view_wrapper" />
				<view :style="{ background: color }" class="uni-load-view_wrapper" />
			</view>
			<view class="load3 load">
				<view :style="{ background: color }" class="uni-load-view_wrapper" />
				<view :style="{ background: color }" class="uni-load-view_wrapper" />
				<view :style="{ background: color }" class="uni-load-view_wrapper" />
				<view :style="{ background: color }" class="uni-load-view_wrapper" />
			</view>
		</view>
		<text :style="{ color: color }" class="uni-load-more__text">
			{{ status === 'more' ? contentText.contentdown : status === 'loading' ? contentText.contentrefresh : contentText.contentnomore }}
		</text>
	</view>
</template>

<script>
	const platform = uni.getSystemInfoSync().platform
	export default {
		name: 'UniLoadMore',
		props: {
			status: {
				// 上拉的状态：more-loading前；loading-loading中；noMore-没有更多了
				type: String,
				default: 'more'
			},
			showIcon: {
				type: Boolean,
				default: true
			},
			iconType: {
				type: String,
				default: 'auto'
			},
			color: {
				type: String,
				default: '#777777'
			},
			contentText: {
				type: Object,
				default () {
					return {
						contentdown: '上拉显示更多',
						contentrefresh: '正在加载...',
						contentnomore: '没有更多数据了'
					}
				}
			}
		},
		data() {
			return {
				platform: platform
			}
		}
	}
</script>

<style>
	@charset "UTF-8";

	.uni-load-more {
		display: flex;
		flex-direction: row;
		height: 80upx;
		align-items: center;
		justify-content: center
	}

	.uni-load-more__text {
		font-size: 28upx;
		color: #999
	}

	.uni-load-more__img {
		position: relative;
		height: 24px;
		width: 24px;
		margin-right: 10px
	}

	.uni-load-more__img>.load {
		position: absolute
	}

	.uni-load-more__img>.load .uni-load-view_wrapper {
		width: 6px;
		height: 2px;
		border-top-left-radius: 1px;
		border-bottom-left-radius: 1px;
		background: #999;
		position: absolute;
		opacity: .2;
		transform-origin: 50%;
		animation: load .96s ease infinite
	}

	.uni-load-more__img>.load .uni-load-view_wrapper:nth-child(1) {
		transform: rotate(90deg);
		top: 2px;
		left: 9px
	}

	.uni-load-more__img>.load .uni-load-view_wrapper:nth-child(2) {
		transform: rotate(180deg);
		top: 11px;
		right: 0
	}

	.uni-load-more__img>.load .uni-load-view_wrapper:nth-child(3) {
		transform: rotate(270deg);
		bottom: 2px;
		left: 9px
	}

	.uni-load-more__img>.load .uni-load-view_wrapper:nth-child(4) {
		top: 11px;
		left: 0
	}

	.uni-load-more__img>.loader-android {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		box-sizing: border-box;
		border: solid 2px #777;
		border-radius: 50%;
		border-bottom-color: transparent !important;
		animation: loader-android 1s 0s linear infinite
	}

	.load1,
	.load2,
	.load3 {
		height: 24px;
		width: 24px
	}

	.load2 {
		transform: rotate(30deg)
	}

	.load3 {
		transform: rotate(60deg)
	}

	.load1 .uni-load-view_wrapper:nth-child(1) {
		animation-delay: 0s
	}

	.load2 .uni-load-view_wrapper:nth-child(1) {
		animation-delay: 80ms
	}

	.load3 .uni-load-view_wrapper:nth-child(1) {
		animation-delay: .16s
	}

	.load1 .uni-load-view_wrapper:nth-child(2) {
		animation-delay: .24s
	}

	.load2 .uni-load-view_wrapper:nth-child(2) {
		animation-delay: .32s
	}

	.load3 .uni-load-view_wrapper:nth-child(2) {
		animation-delay: .4s
	}

	.load1 .uni-load-view_wrapper:nth-child(3) {
		animation-delay: .48s
	}

	.load2 .uni-load-view_wrapper:nth-child(3) {
		animation-delay: .56s
	}

	.load3 .uni-load-view_wrapper:nth-child(3) {
		animation-delay: .64s
	}

	.load1 .uni-load-view_wrapper:nth-child(4) {
		animation-delay: .72s
	}

	.load2 .uni-load-view_wrapper:nth-child(4) {
		animation-delay: .8s
	}

	.load3 .uni-load-view_wrapper:nth-child(4) {
		animation-delay: .88s
	}

	@-webkit-keyframes load {
		0% {
			opacity: 1
		}

		100% {
			opacity: .2
		}
	}

	@-webkit-keyframes loader-android {
		0% {
			transform: rotate(0)
		}

		100% {
			transform: rotate(360deg)
		}
	}
</style>