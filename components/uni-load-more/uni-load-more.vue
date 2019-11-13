<template>
	<view class="uni-load-more" @click="onClick">
		<!-- #ifdef APP-NVUE -->
		<loading-indicator v-if="status === 'loading' && showIcon" :style="{color: color,width:iconSize+'px',height:iconSize+'px'}" :animating="true" class="uni-load-more__img uni-load-more__img--nvue"></loading-indicator>
		<!-- #endif -->
		<!-- #ifdef H5 -->
		<svg width="24" height="24" viewBox="25 25 50 50" v-if="(iconType==='circle' || iconType==='auto' && platform === 'android') && status === 'loading' && showIcon" :style="{width:iconSize+'px',height:iconSize+'px'}" class="uni-load-more__img uni-load-more__img--android-H5">
			<circle cx="50" cy="50" r="20" fill="none" :style="{color:color}" stroke-width="3"></circle>
		</svg>
		<!-- #endif -->
		<!-- #ifndef APP-NVUE || H5 -->
		<view v-if="(iconType==='circle' || iconType==='auto' && platform === 'android') && status === 'loading' && showIcon" :style="{width:iconSize+'px',height:iconSize+'px'}" class="uni-load-more__img uni-load-more__img--android-MP">
			<view :style="{borderTopColor:color}"></view>
			<view :style="{borderTopColor:color}"></view>
			<view :style="{borderTopColor:color}"></view>
		</view>
		<!-- #endif -->
		<!-- #ifndef APP-NVUE -->
		<view v-else-if="status === 'loading' && showIcon" :style="{width:iconSize+'px',height:iconSize+'px'}" class="uni-load-more__img uni-load-more__img--ios-H5">
			<view v-for="i in 12" :key="i" :style="{backgroundColor:color,height:iconSize/4+'px',transformOrigin:'1px '+iconSize/2+'px','-webkit-TransformOrigin':'1px '+iconSize/2+'px'}"></view>
		</view>
		<!-- #endif -->
		<text class="uni-load-more__text" :style="{color: color}">{{ status === 'more' ? contentText.contentdown : status === 'loading' ? contentText.contentrefresh : contentText.contentnomore }}</text>
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
			iconSize: {
				type: Number,
				default: 24
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

	@keyframes loading-android {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
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
		left: 50%;
		top: 0;
		margin-left: -1px;
		transform-origin: 1px 12px;
	}

	/* @for $i from 1 through 12 { */
	/* 	.uni-load-more__img--ios-H5>view:nth-child(#{$i}) { */
	/* 		transform: rotate(360deg - ($i - 1) * 30deg); */
	/* 		opacity: 1 - $i * 0.08; */
	/* 	} */
	/* } */

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

	/* #endif */

	/* #ifndef APP-NVUE || H5 */
	.uni-load-more__img--android-MP {
		position: relative;
		width: 24px;
		height: 24px;
		transform: rotate(0deg);
		animation: loading-ios 1s 0s ease infinite;
	}

	.uni-load-more__img--android-MP>view {
		position: absolute;
		box-sizing: border-box;
		width: 24px;
		height: 24px;
		border-radius: 24px;
		border: solid 2px transparent;
		border-top: solid 2px #777777;
		transform-origin: center;
	}

	.uni-load-more__img--android-MP>view:nth-child(1) {
		animation: loading-android-MP-1 1s 0s linear infinite;
	}

	.uni-load-more__img--android-MP>view:nth-child(2) {
		animation: loading-android-MP-2 1s 0s linear infinite;
	}

	.uni-load-more__img--android-MP>view:nth-child(3) {
		animation: loading-android-MP-3 1s 0s linear infinite;
	}

	@keyframes loading-android {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes loading-android-MP-1 {
		0% {
			transform: rotate(0deg);
		}

		50% {
			transform: rotate(90deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes loading-android-MP-2 {
		0% {
			transform: rotate(0deg);
		}

		50% {
			transform: rotate(180deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes loading-android-MP-3 {
		0% {
			transform: rotate(0deg);
		}

		50% {
			transform: rotate(270deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}

	/* #endif */
</style>