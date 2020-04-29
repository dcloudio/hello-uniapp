<template>
	<view class="uni-navbar">
		<view :class="{ 'uni-navbar--fixed': fixed, 'uni-navbar--shadow': shadow, 'uni-navbar--border': border }" :style="{ 'background-color': backgroundColor }" class="uni-navbar__content">
			<uni-status-bar v-if="statusBar" />
			<view :style="{ color: color,backgroundColor: backgroundColor }" class="uni-navbar__header uni-navbar__content_view">
				<view @tap="onClickLeft" class="uni-navbar__header-btns uni-navbar__header-btns-left uni-navbar__content_view">
					<view class="uni-navbar__content_view" v-if="leftIcon.length">
						<uni-icons :color="color" :type="leftIcon" size="24" />
					</view>
					<view :class="{ 'uni-navbar-btn-icon-left': !leftIcon.length }" class="uni-navbar-btn-text uni-navbar__content_view" v-if="leftText.length">
						<text :style="{ color: color, fontSize: '14px' }">{{ leftText }}</text>
					</view>
					<slot name="left" />
				</view>
				<view class="uni-navbar__header-container uni-navbar__content_view">
					<view class="uni-navbar__header-container-inner uni-navbar__content_view" v-if="title.length">
						<text class="uni-nav-bar-text" :style="{color: color }">{{ title }}</text>
					</view>
					<!-- 标题插槽 -->
					<slot />
				</view>
				<view :class="title.length ? 'uni-navbar__header-btns-right' : ''" @tap="onClickRight" class="uni-navbar__header-btns uni-navbar__content_view">
					<view class="uni-navbar__content_view" v-if="rightIcon.length">
						<uni-icons :color="color" :type="rightIcon" size="24" />
					</view>
					<!-- 优先显示图标 -->
					<view class="uni-navbar-btn-text uni-navbar__content_view" v-if="rightText.length && !rightIcon.length">
						<text class="uni-nav-bar-right-text">{{ rightText }}</text>
					</view>
					<slot name="right" />
				</view>
			</view>
		</view>
		<view class="uni-navbar__placeholder" v-if="fixed">
			<uni-status-bar v-if="statusBar" />
			<view class="uni-navbar__placeholder-view" />
		</view>
	</view>
</template>

<script>
	import uniStatusBar from "../uni-status-bar/uni-status-bar.vue";
	import uniIcons from "../uni-icons/uni-icons.vue";

	/**
	 * NavBar 自定义导航栏
	 * @description 导航栏组件，主要用于头部导航
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=52
	 * @property {String} title 标题文字
	 * @property {String} leftText 左侧按钮文本
	 * @property {String} rightText 右侧按钮文本
	 * @property {String} leftIcon 左侧按钮图标（图标类型参考 [Icon 图标](http://ext.dcloud.net.cn/plugin?id=28) type 属性）
	 * @property {String} rightIcon 右侧按钮图标（图标类型参考 [Icon 图标](http://ext.dcloud.net.cn/plugin?id=28) type 属性）
	 * @property {String} color 图标和文字颜色
	 * @property {String} backgroundColor 导航栏背景颜色
	 * @property {Boolean} fixed = [true|false] 是否固定顶部
	 * @property {Boolean} statusBar = [true|false] 是否包含状态栏
	 * @property {Boolean} shadow = [true|false] 导航栏下是否有阴影
	 * @event {Function} clickLeft 左侧按钮点击时触发
	 * @event {Function} clickRight 右侧按钮点击时触发
	 */
	export default {
		name: "UniNavBar",
		components: {
			uniStatusBar,
			uniIcons
		},
		props: {
			title: {
				type: String,
				default: ""
			},
			leftText: {
				type: String,
				default: ""
			},
			rightText: {
				type: String,
				default: ""
			},
			leftIcon: {
				type: String,
				default: ""
			},
			rightIcon: {
				type: String,
				default: ""
			},
			fixed: {
				type: [Boolean, String],
				default: false
			},
			color: {
				type: String,
				default: "#000000"
			},
			backgroundColor: {
				type: String,
				default: "#FFFFFF"
			},
			statusBar: {
				type: [Boolean, String],
				default: false
			},
			shadow: {
				type: [Boolean, String],
				default: false
			},
			border: {
				type: [Boolean, String],
				default: true
			}
		},
		mounted() {
			if (uni.report && this.title !== '') {
				uni.report('title', this.title)
			}
		},
		methods: {
			onClickLeft() {
				this.$emit("clickLeft");
			},
			onClickRight() {
				this.$emit("clickRight");
			}
		}
	};
</script>

<style scoped>
	.uni-nav-bar-text {
		/* #ifdef APP-PLUS */
		font-size: 34rpx;
		/* #endif */
		/* #ifndef APP-PLUS */
		font-size: 16;
		/* #endif */
	}

	.uni-nav-bar-right-text {
		font-size: 14px;
	}

	.uni-navbar__content {
		position: relative;
		background-color: #ffffff;
		overflow: hidden;
	}

	.uni-navbar__content_view {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		align-items: center;
		flex-direction: row;
		/* background-color: #FFFFFF;
 */
	}

	.uni-navbar__header {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		height: 44px;
		line-height: 44px;
		font-size: 16px;
		/* background-color: #ffffff;
 */
	}

	.uni-navbar__header-btns {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-wrap: nowrap;
		width: 120rpx;
		padding: 0 6px;
		justify-content: center;
		align-items: center;
	}

	.uni-navbar__header-btns-left {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		width: 150rpx;
		justify-content: flex-start;
	}

	.uni-navbar__header-btns-right {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		width: 150rpx;
		padding-right: 30rpx;
		justify-content: flex-end;
	}

	.uni-navbar__header-container {
		flex: 1;
	}

	.uni-navbar__header-container-inner {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex: 1;
		align-items: center;
		justify-content: center;
		font-size: 14px;
	}


	.uni-navbar__placeholder-view {
		height: 44px;
	}

	.uni-navbar--fixed {
		position: fixed;
		z-index: 998;
	}

	.uni-navbar--shadow {
		/* #ifndef APP-NVUE */
		box-shadow: 0 1px 6px #ccc;
		/* #endif */
	}

	.uni-navbar--border {
		border-bottom-width: 1rpx;
		border-bottom-style: solid;
		border-bottom-color: #e5e5e5;
	}
</style>