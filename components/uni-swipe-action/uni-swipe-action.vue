<template>
	<view class="uni-swipe_content">
		<!-- #ifdef APP-PLUS|| MP-WEIXIN||H5 -->
		<view :data-disabled="disabled" :data-position="pos" :change:prop="swipe.change" :prop="pos" class="uni-swipe_move-box selector-query-hock move-hock" @touchstart="swipe.touchstart" @touchmove="swipe.touchmove" @touchend="swipe.touchend" @change="change">
			<!-- #endif -->
			<!-- #ifndef APP-PLUS|| MP-WEIXIN||H5 -->
			<view :class="{'ani':uniShow}" :style="{transform:moveLeft}" class="uni-swipe_move-box  selector-query-hock" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
				<!-- #endif -->
				<view class="uni-swipe_box">
					<slot />
				</view>
				<!-- #ifndef APP-PLUS|| MP-WEIXIN||H5 -->
			</view>
			<!-- #endif -->
			<view class="uni-swipe_button-group selector-query-hock move-hock">
				<view v-for="(item,index) in options" :data-button="btn" :key="index" :style="{
            backgroundColor: item.style && item.style.backgroundColor ? item.style.backgroundColor : '#C7C6CD',
            color: item.style && item.style.color ? item.style.color : '#FFFFFF',
            fontSize: item.style && item.style.fontSize ? item.style.fontSize : '16px'
          }" class="uni-swipe_button button-hock" @click.stop="onClick(index,item)">{{ item.text }}</view>
			</view>
			<!-- #ifdef APP-PLUS|| MP-WEIXIN||H5 -->
		</view>
		<!-- #endif -->
	</view>
</template>
<wxs src="./index.wxs" module="swipe"></wxs>
<script>
	import mixins from './mpother'
	import mp from './mp'
	export default {
		// #ifdef APP-PLUS|| MP-WEIXIN||H5
		mixins: [mp],
		// #endif
		// #ifndef APP-PLUS|| MP-WEIXIN||H5
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
<style>
	.uni-swipe_content {
		position: relative;
		width: 100%;
		box-sizing: border-box;
		overflow: hidden;
	}

	.uni-swipe_move-box {
		position: relative;
		z-index: 1;
		display: flex;
		width: 100%;
	}

	.uni-swipe_box {
		flex-shrink: 0;
		width: 100%;
		font-size: 14px;
		color: #333333;
		box-sizing: border-box;
		background: #fff;
		z-index: 1;
	}

	.uni-swipe_button-group {
		/* #ifndef APP-PLUS|| MP-WEIXIN||H5 */
		position: absolute;
		top: 0;
		right: 0;
		z-index: 0;
		height: 100%;
		/* #endif */
		display: flex;
		flex-shrink: 0;
		box-sizing: border-box;
	}

	.uni-swipe_button {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 20px;
		font-size: 14px;
		box-sizing: border-box;
	}

	.ani {
		transition: transform 350ms cubic-bezier(0.165, 0.84, 0.44, 1);
	}
</style>