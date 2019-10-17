<template>
	<view class="uni-load-more" @click="onClick">
		<!-- #ifdef APP-NVUE -->
		<loading-indicator v-if="status === 'loading' && showIcon" :style="{color: color}" :animating="true" class="uni-load-more__img uni-load-more__img--nvue"></loading-indicator>
		<!-- #endif -->
		<!-- #ifdef H5 -->
		<svg width="24" height="24" viewBox="25 25 50 50" v-if="(iconType==='circle' || iconType==='auto' && platform === 'android') && status === 'loading' && showIcon" class="uni-load-more__img uni-load-more__img--android-H5">
			<circle cx="50" cy="50" r="20" fill="none" :style="{color:color}" stroke-width="3"></circle>
		</svg>
		<view v-else-if="status === 'loading' && showIcon" class="uni-load-more__img uni-load-more__img--ios-H5">
			<view :style="{backgroundColor:color}"></view>
			<view :style="{backgroundColor:color}"></view>
			<view :style="{backgroundColor:color}"></view>
			<view :style="{backgroundColor:color}"></view>
			<view :style="{backgroundColor:color}"></view>
			<view :style="{backgroundColor:color}"></view>
			<view :style="{backgroundColor:color}"></view>
			<view :style="{backgroundColor:color}"></view>
			<view :style="{backgroundColor:color}"></view>
			<view :style="{backgroundColor:color}"></view>
			<view :style="{backgroundColor:color}"></view>
			<view :style="{backgroundColor:color}"></view>
		</view>
		<!-- #endif -->
		<!-- #ifndef APP-NVUE || H5 -->
		<view v-if="(iconType==='circle' || iconType==='auto' && platform === 'android') && status === 'loading' && showIcon" class="uni-load-more__img">
			<image class="uni-load-more__img--android" src="data:image/png;base64,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" mode="widthFix"></image>
		</view>
		<view v-else-if="status === 'loading' && showIcon" class="uni-load-more__img">
			<image class="uni-load-more__img--ios" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzlBMzU3OTlEOUM0MTFFOUI0NTZDNERBQURBQzI4RkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzlBMzU3OUFEOUM0MTFFOUI0NTZDNERBQURBQzI4RkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDOUEzNTc5N0Q5QzQxMUU5QjQ1NkM0REFBREFDMjhGRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDOUEzNTc5OEQ5QzQxMUU5QjQ1NkM0REFBREFDMjhGRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pt+ALSwAAA6CSURBVHja1FsLkFZV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" mode="widthFix"></image>
		</view>
		<!-- #endif -->
		<!-- #ifdef APP-NVUE || H5 -->
		<text class="uni-load-more__text" :style="{color: color}">{{ status === 'more' ? contentText.contentdown : status === 'loading' ? contentText.contentrefresh : contentText.contentnomore }}</text>
		<!-- #endif -->
		<!-- #ifndef APP-NVUE || H5 -->
		<text class="uni-load-more__text">{{ status === 'more' ? contentText.contentdown : status === 'loading' ? contentText.contentrefresh : contentText.contentnomore }}</text>
		<!-- #endif -->
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
		},
		methods: {
			onClick() {
				this.$emit('clickLoadMore', {
					detail: {
						status: this.status,
					}
				})
			}
		}
	}
</script>

<style scoped>
	.uni-load-more {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		height: 40px;
		align-items: center;
		justify-content: center;
	}

	.uni-load-more__text {
		font-size: 15px;
	}

	.uni-load-more__img {
		width: 24px;
		height: 24px;
		margin-right: 8px;
	}

	.uni-load-more__img--nvue {
		color: #666666;
	}

	.uni-load-more__img--android,
	.uni-load-more__img--ios {
		width: 24px;
		height: 24px;
		transform: rotate(0deg);
	}

	/* #ifndef APP-NVUE */
	.uni-load-more__img--android {
		animation: loading-ios 1s 0s linear infinite;
	}

	.uni-load-more__img--ios {
		animation: loading-ios 1s 0s step-end infinite;
	}

	@keyframes loading-android {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes loading-ios {
		0% {
			transform: rotate(0deg);
		}

		8% {
			transform: rotate(30deg);
		}

		16% {
			transform: rotate(60deg);
		}

		24% {
			transform: rotate(90deg);
		}

		32% {
			transform: rotate(120deg);
		}

		40% {
			transform: rotate(150deg);
		}

		48% {
			transform: rotate(180deg);
		}

		56% {
			transform: rotate(210deg);
		}

		64% {
			transform: rotate(240deg);
		}

		73% {
			transform: rotate(270deg);
		}

		82% {
			transform: rotate(300deg);
		}

		91% {
			transform: rotate(330deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}

	/* #endif */

	/* #ifdef H5 */
	.uni-load-more__img--android-H5 {
		animation: loading-android-H5-rotate 2s linear infinite;
		transform-origin: center center;
	}

	.uni-load-more__img--android-H5>circle {
		display: inline-block;
		animation: loading-android-H5-dash 1.5s ease-in-out infinite;
		stroke: currentColor;
		stroke-linecap: round;
	}

	@keyframes loading-android-H5-rotate {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes loading-android-H5-dash {
		0% {
			stroke-dasharray: 1, 200;
			stroke-dashoffset: 0;
		}

		50% {
			stroke-dasharray: 90, 150;
			stroke-dashoffset: -40;
		}

		100% {
			stroke-dasharray: 90, 150;
			stroke-dashoffset: -120;
		}
	}

	.uni-load-more__img--ios-H5 {
		position: relative;
		animation: loading-ios-H5 1s 0s step-end infinite;
	}

	.uni-load-more__img--ios-H5>view {
		position: absolute;
		height: 6px;
		width: 2px;
		left: 11px;
		top: 0;
		transform-origin: 1px 12px;
	}

	/* @for $i from 1 through 12 {
 */
	/* 	.uni-load-more__img--ios-H5>view:nth-child(#{$i}) {
 */
	/* 		transform: rotate(360deg - ($i - 1) * 30deg);
 */
	/* 		opacity: 1 - $i * 0.08;
 */
	/* 	}
 */
	/* }
 */

	.uni-load-more__img--ios-H5>view:nth-child(1) {
		transform: rotate(360deg);
		opacity: 0.92;
	}

	.uni-load-more__img--ios-H5>view:nth-child(2) {
		transform: rotate(330deg);
		opacity: 0.84;
	}

	.uni-load-more__img--ios-H5>view:nth-child(3) {
		transform: rotate(300deg);
		opacity: 0.76;
	}

	.uni-load-more__img--ios-H5>view:nth-child(4) {
		transform: rotate(270deg);
		opacity: 0.68;
	}

	.uni-load-more__img--ios-H5>view:nth-child(5) {
		transform: rotate(240deg);
		opacity: 0.6;
	}

	.uni-load-more__img--ios-H5>view:nth-child(6) {
		transform: rotate(210deg);
		opacity: 0.52;
	}

	.uni-load-more__img--ios-H5>view:nth-child(7) {
		transform: rotate(180deg);
		opacity: 0.44;
	}

	.uni-load-more__img--ios-H5>view:nth-child(8) {
		transform: rotate(150deg);
		opacity: 0.36;
	}

	.uni-load-more__img--ios-H5>view:nth-child(9) {
		transform: rotate(120deg);
		opacity: 0.28;
	}

	.uni-load-more__img--ios-H5>view:nth-child(10) {
		transform: rotate(90deg);
		opacity: 0.2;
	}

	.uni-load-more__img--ios-H5>view:nth-child(11) {
		transform: rotate(60deg);
		opacity: 0.12;
	}

	.uni-load-more__img--ios-H5>view:nth-child(12) {
		transform: rotate(30deg);
		opacity: 0.04;
	}

	@keyframes loading-ios-H5 {
		0% {
			transform: rotate(0deg);
		}

		8% {
			transform: rotate(30deg);
		}

		16% {
			transform: rotate(60deg);
		}

		24% {
			transform: rotate(90deg);
		}

		32% {
			transform: rotate(120deg);
		}

		40% {
			transform: rotate(150deg);
		}

		48% {
			transform: rotate(180deg);
		}

		56% {
			transform: rotate(210deg);
		}

		64% {
			transform: rotate(240deg);
		}

		73% {
			transform: rotate(270deg);
		}

		82% {
			transform: rotate(300deg);
		}

		91% {
			transform: rotate(330deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}

	/* #endif */
</style>