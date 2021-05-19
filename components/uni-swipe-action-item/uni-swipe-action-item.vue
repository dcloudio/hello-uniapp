<template>
	<!-- 在微信小程序 app vue端 h5 使用wxs 实现-->
	<!-- #ifdef APP-VUE || MP-WEIXIN || H5 -->
	<view class="uni-swipe">
		<view class="uni-swipe_box" :data-threshold="threshold" :data-disabled="disabled" :change:prop="swipe.sizeReady" :prop="btn" @touchstart="swipe.touchstart" @touchmove="swipe.touchmove" @touchend="swipe.touchend" @mousedown="swipe.mousedown" @mousemove="swipe.mousemove" @mouseup="swipe.mouseup" @mouseleave="swipe.mouseleave">
			<!-- 在微信小程序 app vue端 h5 使用wxs 实现-->
			<view class="uni-swipe_button-group button-group--left">
				<slot name="left">
					<view v-for="(item,index) in leftOptions" :data-button="btn" :key="index" :style="{
					  backgroundColor: item.style && item.style.backgroundColor ? item.style.backgroundColor : '#C7C6CD',
					  fontSize: item.style && item.style.fontSize ? item.style.fontSize : '16px'
					}" class="uni-swipe_button button-hock" @touchstart="appTouchStart" @touchend="appTouchEnd($event,index,item,'left')" @click.stop="onClickForPC(index,item,'left')"><text class="uni-swipe_button-text" :style="{color: item.style && item.style.color ? item.style.color : '#FFFFFF',}">{{ item.text }}</text></view>
				</slot>
			</view>
			<view class="uni-swipe_text--center">
				<slot></slot>
			</view>
			<view class="uni-swipe_button-group button-group--right">
				<slot name="right">
					<view v-for="(item,index) in rightOptions" :data-button="btn" :key="index" :style="{
					  backgroundColor: item.style && item.style.backgroundColor ? item.style.backgroundColor : '#C7C6CD',
					  fontSize: item.style && item.style.fontSize ? item.style.fontSize : '16px'
					}" class="uni-swipe_button button-hock" @touchstart="appTouchStart" @touchend="appTouchEnd($event,index,item,'right')" @click.stop="onClickForPC(index,item,'right')"><text class="uni-swipe_button-text" :style="{color: item.style && item.style.color ? item.style.color : '#FFFFFF',}">{{ item.text }}</text></view>
				</slot>
			</view>
		</view>
	</view>
	<!-- #endif -->
	<!-- app nvue端 使用 bindingx -->
	<!-- #ifdef APP-NVUE -->
	<view ref="selector-box--hock" class="uni-swipe" @horizontalpan="touchstart" @touchend="touchend">
		<view ref='selector-left-button--hock' class="uni-swipe_button-group button-group--left">
			<slot name="left">
				<view v-for="(item,index) in leftOptions" :data-button="btn" :key="index" :style="{
				  backgroundColor: item.style && item.style.backgroundColor ? item.style.backgroundColor : '#C7C6CD',
				  fontSize: item.style && item.style.fontSize ? item.style.fontSize : '16px'
				}" class="uni-swipe_button button-hock" @click.stop="onClick(index,item,'left')"><text class="uni-swipe_button-text" :style="{color: item.style && item.style.color ? item.style.color : '#FFFFFF',}">{{ item.text }}</text></view>
			</slot>
		</view>
		<view ref='selector-right-button--hock' class="uni-swipe_button-group button-group--right">
			<slot name="right">
				<view v-for="(item,index) in rightOptions" :data-button="btn" :key="index" :style="{
				  backgroundColor: item.style && item.style.backgroundColor ? item.style.backgroundColor : '#C7C6CD',
				  fontSize: item.style && item.style.fontSize ? item.style.fontSize : '16px'
				}" class="uni-swipe_button button-hock" @click.stop="onClick(index,item,'right')"><text class="uni-swipe_button-text" :style="{color: item.style && item.style.color ? item.style.color : '#FFFFFF',}">{{ item.text }}</text></view>
			</slot>
		</view>
		<view ref='selector-content--hock' class="uni-swipe_box">
			<slot></slot>
		</view>
	</view>
	<!-- #endif -->
	<!-- 其他平台使用 js ，长列表性能可能会有影响-->
	<!-- #ifdef MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ -->
	<view class="uni-swipe">
		<view class="uni-swipe_box" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend" :style="{transform:moveLeft}" :class="{ani:ani}">
			<view class="uni-swipe_button-group button-group--left">
				<slot name="left">
					<view v-for="(item,index) in leftOptions" :data-button="btn" :key="index" :style="{
					  backgroundColor: item.style && item.style.backgroundColor ? item.style.backgroundColor : '#C7C6CD',
					  fontSize: item.style && item.style.fontSize ? item.style.fontSize : '16px'
					}" class="uni-swipe_button button-hock" @touchstart="appTouchStart" @touchend="appTouchEnd($event,index,item,'left')"><text class="uni-swipe_button-text" :style="{color: item.style && item.style.color ? item.style.color : '#FFFFFF',}">{{ item.text }}</text></view>
				</slot>
			</view>
			<slot></slot>
			<view class="uni-swipe_button-group button-group--right">
				<slot name="right">
					<view v-for="(item,index) in rightOptions" :data-button="btn" :key="index" :style="{
					  backgroundColor: item.style && item.style.backgroundColor ? item.style.backgroundColor : '#C7C6CD',
					  fontSize: item.style && item.style.fontSize ? item.style.fontSize : '16px'
					}" @touchstart="appTouchStart" @touchend="appTouchEnd($event,index,item,'right')" class="uni-swipe_button button-hock"><text class="uni-swipe_button-text" :style="{color: item.style && item.style.color ? item.style.color : '#FFFFFF',}">{{ item.text }}</text></view>
				</slot>
			</view>
		</view>
	</view>
	<!-- #endif -->

</template>
<script src="./index.wxs" module="swipe" lang="wxs"></script>
<script>
	// #ifdef APP-VUE|| MP-WEIXIN || H5
	import mpwxs from './mpwxs'
	// #endif

	// #ifdef APP-NVUE
	import bindingx from './bindingx.js'
	// #endif

	// #ifndef APP-PLUS|| MP-WEIXIN  ||  H5
	import mixins from './mpother'
	// #endif

	/**
	 * SwipeActionItem 滑动操作子组件
	 * @description 通过滑动触发选项的容器
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=181
	 * @property {Boolean} show = [left|right｜none] 	开启关闭组件，auto-close = false 时生效
	 * @property {Boolean} disabled = [true|false] 		是否禁止滑动
	 * @property {Boolean} autoClose = [true|false] 	滑动打开当前组件，是否关闭其他组件
	 * @property {Number}  threshold 					滑动缺省值
	 * @property {Array} leftOptions 					左侧选项内容及样式
	 * @property {Array} rgihtOptions 					右侧选项内容及样式
	 * @event {Function} click 							点击选项按钮时触发事件，e = {content,index} ，content（点击内容）、index（下标)
	 * @event {Function} change 						组件打开或关闭时触发，left\right\none
	 */

	export default {
		// #ifdef APP-VUE|| MP-WEIXIN||H5
		mixins: [mpwxs],
		// #endif

		// #ifdef APP-NVUE
		mixins: [bindingx],
		// #endif

		// #ifndef APP-PLUS|| MP-WEIXIN ||  H5
		mixins: [mixins],
		// #endif

		props: {
			// 控制开关
			show: {
				type: String,
				default: 'none'
			},

			// 禁用
			disabled: {
				type: Boolean,
				default: false
			},

			// 是否自动关闭
			autoClose: {
				type: Boolean,
				default: true
			},

			// 滑动缺省距离
			threshold: {
				type: Number,
				default: 20
			},

			// 左侧按钮内容
			leftOptions: {
				type: Array,
				default () {
					return []
				}
			},

			// 右侧按钮内容
			rightOptions: {
				type: Array,
				default () {
					return []
				}
			}

		},
		inject: ['swipeaction']
	}
</script>
<style scoped>
	.uni-swipe {
		position: relative;
		/* #ifndef APP-NVUE */
		overflow: hidden;
		/* #endif */
	}

	.uni-swipe_box {
		/* #ifndef APP-NVUE */
		display: flex;
		flex-shrink: 0;
		/* #endif */
		position: relative;
	}

	.uni-swipe_text--center {
		width: 100%;
		/* #ifndef APP-NVUE */
		cursor: grab;
		/* #endif */
	}

	.uni-swipe_button-group {
		/* #ifndef APP-NVUE */
		box-sizing: border-box;
		display: flex;
		/* #endif */
		flex-direction: row;
		position: absolute;
		top: 0;
		bottom: 0;
		/* #ifdef H5 */
		cursor: pointer;
		/* #endif */
	}

	.button-group--left {
		left: 0;
		transform: translateX(-100%);
	}

	.button-group--right {
		right: 0;
		transform: translateX(100%);
	}

	.uni-swipe_button {
		/* #ifdef APP-NVUE */
		flex: 1;
		/* #endif */
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 0 20px;
	}

	.uni-swipe_button-text {
		/* #ifndef APP-NVUE */
		flex-shrink: 0;
		/* #endif */
		font-size: 14px;
	}

	.ani {
		transition-property: transform;
		transition-duration: 0.3s;
		transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
	}

	/* #ifdef MP-ALIPAY */
	.movable-area {
		/* width: 100%; */
		height: 45px;
	}

	.movable-view {
		display: flex;
		/* justify-content: center; */
		position: relative;
		flex: 1;
		height: 45px;
		z-index: 2;
	}

	.movable-view-button {
		display: flex;
		flex-shrink: 0;
		flex-direction: row;
		height: 100%;
		background: #C0C0C0;
	}

	/* .transition {
	transition: all 0.3s;
} */
	.movable-view-box {
		flex-shrink: 0;
		height: 100%;
		background-color: #fff;
	}

	/* #endif */
</style>