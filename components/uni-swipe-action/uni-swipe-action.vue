<template>
	<view class="uni-swipe_content">
		<!-- #ifndef APP-VUE|| MP-WEIXIN||H5 -->
		<view ref="selector-button-hock" class="uni-swipe_button-group selector-query-hock move-hock">
			<view v-for="(item,index) in options" :data-button="btn" :key="index" :style="{
        backgroundColor: item.style && item.style.backgroundColor ? item.style.backgroundColor : '#C7C6CD',
        fontSize: item.style && item.style.fontSize ? item.style.fontSize : '16px'
      }" class="uni-swipe_button button-hock" @click.stop="onClick(index,item)"><text class="uni-swipe_button-text" :style="{color: item.style && item.style.color ? item.style.color : '#FFFFFF',}">{{ item.text }}</text></view>
		</view>
		<!-- #endif -->
		<!-- #ifdef APP-VUE|| MP-WEIXIN||H5 -->
		<view :data-disabled="disabled" :data-position="pos" :change:prop="swipe.sizeReady" :prop="pos" class="uni-swipe_move-box selector-query-hock move-hock" @touchstart="swipe.touchstart" @touchmove="swipe.touchmove" @touchend="swipe.touchend" @change="change">
			<!-- #endif -->
			<!-- #ifndef APP-VUE|| MP-WEIXIN||H5 -->
			<view ref='selector-content-hock' class="selector-query-hock" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
				<view class="uni-swipe_move-box" :class="{'ani':uniShow}" :style="{transform:moveLeft}">
					<!-- #endif -->
					<view class="uni-swipe_box">
						<slot />
					</view>
					<!-- #ifdef APP-VUE|| MP-WEIXIN||H5 -->
					<view ref="selector-button-hock" class="uni-swipe_button-group selector-query-hock move-hock">
						<view v-for="(item,index) in options" :data-button="btn" :key="index" :style="{
              backgroundColor: item.style && item.style.backgroundColor ? item.style.backgroundColor : '#C7C6CD',
              fontSize: item.style && item.style.fontSize ? item.style.fontSize : '16px'
            }" class="uni-swipe_button button-hock" @click.stop="onClick(index,item)"><text class="uni-swipe_button-text" :style="{color: item.style && item.style.color ? item.style.color : '#FFFFFF',}">{{ item.text }}</text></view>
					</view>
					<!-- #endif -->
					<!-- #ifndef APP-VUE|| MP-WEIXIN||H5 -->
				</view>
				<!-- #endif -->
			</view>
		</view>
</template>
<script src="./index.wxs" module="swipe" lang="wxs"></script>
<script>
	import mixins from './mpother'
	import mp from './mp'

	export default {
		// #ifdef APP-VUE|| MP-WEIXIN||H5
		mixins: [mp],
		// #endif
		// #ifndef APP-VUE|| MP-WEIXIN||H5
		mixins: [mixins],
		// #endif
		props: {
			/**
			 * 按钮内容
			 */
			options: {
				type: Array,
				default () {
					return []
				}
			},
			/**
			 * 禁用
			 */
			disabled: {
				type: Boolean,
				default: false
			},
			/**
			 * 变量控制开关
			 */
			show: {
				type: Boolean,
				default: false
			},
			/**
			 * 是否自动关闭
			 */
			autoClose: {
				type: Boolean,
				default: true
			}
		}
	}
</script>
<style scoped>
	.uni-swipe_content {
		flex: 1;
		position: relative;
		overflow: hidden;
	}

	.uni-swipe_move-box {
		/* #ifndef APP-NUVE */
		display: flex;
		/* #endif */
		position: relative;
		flex-direction: row;
	}

	.uni-swipe_box {
		/* #ifndef APP-NVUE */
		width: 100%;
		flex-shrink: 0;
		/* #endif */
		/* #ifdef APP-NVUE */
		flex: 1;
		/* #endif */
		font-size: 14px;
		background-color: #fff;
	}

	.uni-swipe_button-group {
		/* #ifndef APP-VUE|| MP-WEIXIN||H5 */
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 0;
		/* #endif */
		/* #ifndef APP-NUVE */
		display: flex;
		flex-shrink: 0;
		/* #endif */
		flex-direction: row;
	}

	.uni-swipe_button {
		/* #ifndef APP-NUVE */
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
</style>