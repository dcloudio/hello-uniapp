<template>
	<view class="uni-swipe">
		<!-- #ifndef APP-PLUS || MP-WEIXIN || H5 -->
		<view class="uni-swipe_content">
			<view ref="selector-button-hock" class="uni-swipe_button-group selector-query-hock move-hock">
				<view v-for="(item,index) in options" :data-button="btn" :key="index" :style="{
		    backgroundColor: item.style && item.style.backgroundColor ? item.style.backgroundColor : '#C7C6CD',
		    fontSize: item.style && item.style.fontSize ? item.style.fontSize : '16px'
		  }" class="uni-swipe_button button-hock" @click.stop="onClick(index,item)"><text class="uni-swipe_button-text" :style="{color: item.style && item.style.color ? item.style.color : '#FFFFFF',}">{{ item.text }}</text></view>
			</view>
			<view ref='selector-content-hock' class="selector-query-hock" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
				<view class="uni-swipe_move-box" :class="{'ani':uniShow}" :style="{transform:moveLeft}">
					<view class="uni-swipe_box">
						<slot />
					</view>
				</view>
			</view>
		</view>
		<!-- #endif -->
		<!-- #ifdef APP-VUE|| MP-WEIXIN||H5 -->
		<view class="uni-swipe_content">
			<view :data-disabled="disabled" :data-position="pos" :change:prop="swipe.sizeReady" :prop="pos" class="uni-swipe_move-box selector-query-hock move-hock" @touchstart="swipe.touchstart" @touchmove="swipe.touchmove" @touchend="swipe.touchend" @change="change">
				<view class="uni-swipe_box">
					<slot />
				</view>
				<view ref="selector-button-hock" class="uni-swipe_button-group selector-query-hock move-hock">
					<view v-for="(item,index) in options" :data-button="btn" :key="index" :style="{
		          backgroundColor: item.style && item.style.backgroundColor ? item.style.backgroundColor : '#C7C6CD',
		          fontSize: item.style && item.style.fontSize ? item.style.fontSize : '16px'
		        }" class="uni-swipe_button button-hock" @click.stop="onClick(index,item)"><text class="uni-swipe_button-text" :style="{color: item.style && item.style.color ? item.style.color : '#FFFFFF',}">{{ item.text }}</text></view>
				</view>
			</view>
		</view>
		<!-- #endif -->
		<!-- #ifdef APP-NVUE -->
		<view ref="selector-box-hock" class="uni-swipe_content" @horizontalpan="touchstart" @touchend="touchend">
			<view ref="selector-button-hock" class="uni-swipe_button-group selector-query-hock move-hock" :style="{width:right+'px'}">
				<view ref="button-hock" v-for="(item,index) in options" :key="index" :style="{
		  backgroundColor: item.style && item.style.backgroundColor ? item.style.backgroundColor : '#C7C6CD',
		  fontSize: item.style && item.style.fontSize ? item.style.fontSize : '16px',left: right+'px'
		}" class="uni-swipe_button " @click.stop="onClick(index,item)"><text class="uni-swipe_button-text" :style="{color: item.style && item.style.color ? item.style.color : '#FFFFFF',}">{{ item.text }}</text></view>
			</view>
			<view ref='selector-content-hock' class="uni-swipe_move-box selector-query-hock">
				<view class="uni-swipe_box">
					<slot />
				</view>
			</view>

		</view>
		<!-- #endif -->

	</view>
</template>
<script src="./index.wxs" module="swipe" lang="wxs"></script>
<script>
	// #ifndef APP-PLUS|| MP-WEIXIN || H5
	import mixins from './mpother'
	// #endif
	// #ifdef APP-VUE|| MP-WEIXIN||H5
	import mp from './mp'
	// #endif
	// #ifdef APP-NVUE
	import bindingx from './bindingx.js'
	// #endif
	export default {
		// #ifdef APP-VUE|| MP-WEIXIN||H5
		mixins: [mp],
		// #endif
		// #ifdef APP-NVUE
		mixins: [bindingx],
		// #endif
		// #ifndef APP-PLUS|| MP-WEIXIN || H5
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
		},
		inject: ['swipeaction']


	}
</script>
<style scoped>
	.uni-swipe {
		overflow: hidden;
	}

	.uni-swipe_content {
		flex: 1;
		position: relative;
	}

	.uni-swipe_move-box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		position: relative;
		flex-direction: row;
	}

	.uni-swipe_box {
		/* #ifndef APP-NVUE */
		display: flex;
		flex-direction: row;
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
		/* #ifndef APP-NVUE */
		display: flex;
		flex-shrink: 0;
		/* #endif */
		flex-direction: row;
	}

	.uni-swipe_button {
		/* #ifdef APP-NVUE */
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
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
</style>