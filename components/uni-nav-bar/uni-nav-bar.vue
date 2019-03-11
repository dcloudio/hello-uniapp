<template>
	<view class="uni-navbar">
		<view class="uni-navbar__content" :class="{'uni-navbar--fixed':isFixed,'uni-navbar--shadow':hasShadow,'uni-navbar--border':hasBorder}" :style="{'background-color':backgroundColor}">
			<uni-status-bar v-if="insertStatusBar"></uni-status-bar>
			<view class="uni-navbar__header" :style="{color:color}">
				<view class="uni-navbar__header-btns" @tap="onClickLeft">
					<view v-if="leftIcon.length">
						<uni-icon :type="leftIcon" :color="color" size="24"></uni-icon>
					</view>
					<view v-if="leftText.length" class="uni-navbar-btn-text" :class="{'uni-navbar-btn-icon-left':!leftIcon.length}">{{leftText}}</view>
					<slot name="left"></slot>
				</view>
				<view class="uni-navbar__header-container">
					<view v-if="title.length" class="uni-navbar__header-container-inner">{{title}}</view>
					<!-- 标题插槽 -->
					<slot></slot>
				</view>
				<view class="uni-navbar__header-btns" @tap="onClickRight">
					<view v-if="rightIcon.length">
						<uni-icon :type="rightIcon" :color="color" size="24"></uni-icon>
					</view>
					<!-- 优先显示图标 -->
					<view v-if="rightText.length&&!rightIcon.length" class="uni-navbar-btn-text">{{rightText}}</view>
					<slot name="right"></slot>
				</view>
			</view>
		</view>
		<view class="uni-navbar__placeholder" v-if="isFixed">
			<uni-status-bar v-if="insertStatusBar"></uni-status-bar>
			<view class="uni-navbar__placeholder-view"></view>
		</view>
	</view>
</template>

<script>
	import uniStatusBar from '../uni-status-bar/uni-status-bar.vue'
	import uniIcon from '../uni-icon/uni-icon.vue'

	export default {
		name: 'uni-nav-bar',
		components: {
			uniStatusBar,
			uniIcon
		},
		props: {
			title: {
				type: String,
				default: ''
			},
			leftText: {
				type: String,
				default: ''
			},
			rightText: {
				type: String,
				default: ''
			},
			leftIcon: {
				type: String,
				default: ''
			},
			rightIcon: {
				type: String,
				default: ''
			},
			fixed: {
				type: [Boolean, String],
				default: false
			},
			color: {
				type: String,
				default: '#000000'
			},
			backgroundColor: {
				type: String,
				default: '#FFFFFF'
			},
			statusBar: {
				type: [Boolean, String],
				default: false
			},
			shadow: {
				type: [String, Boolean],
				default: true
			},
			border: {
				type: [String, Boolean],
				default: true
			}
		},
		computed: {
			isFixed() {
				return String(this.fixed) === 'true'
			},
			insertStatusBar() {
				return String(this.statusBar) === 'true'
			},
			hasShadow() {
				return String(this.border) === 'true'
			},
			hasBorder() {
				return String(this.border) === 'true'
			}
		},
		methods: {
			onClickLeft() {
				this.$emit('click-left')
			},
			onClickRight() {
				this.$emit('click-right')
			}
		}
	}
</script>

<style>
	@charset "UTF-8";

	.uni-navbar__content {
		display: block;
		position: relative;
		width: 100%;
		background-color: #fff;
		overflow: hidden
	}

	.uni-navbar__content view {
		line-height: 44px
	}

	.uni-navbar__header {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 44px;
		line-height: 44px;
		font-size: 16px
	}

	.uni-navbar__header-btns {
		display: inline-flex;
		flex-wrap: nowrap;
		flex-shrink: 0;
		width: 120upx;
		padding: 0 12upx
	}

	.uni-navbar__header-btns:first-child {
		padding-left: 0
	}

	.uni-navbar__header-btns:last-child {
		width: 60upx
	}

	.uni-navbar__header-container {
		width: 100%;
		margin: 0 10upx
	}

	.uni-navbar__header-container-inner {
		font-size: 30upx;
		text-align: center;
		padding-right: 60upx
	}

	.uni-navbar__placeholder-view {
		height: 44px
	}

	.uni-navbar--fixed {
		position: fixed;
		z-index: 998
	}

	.uni-navbar--shadow {
		box-shadow: 0 1px 6px #ccc
	}

	.uni-navbar--border:after {
		position: absolute;
		z-index: 3;
		bottom: 0;
		left: 0;
		right: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc
	}
</style>