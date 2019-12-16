<template>
	<view :class="{ 'uni-card--full': isFull === true || isFull === 'true', 'uni-card--shadow': isShadow === true || isShadow === 'true' }" class="uni-card" @click="onClick">
		<view v-if="mode === 'style'" class="uni-card__thumbnailimage">
			<view class="uni-card__thumbnailimage-box">
				<image class="uni-card__thumbnailimage-image" :src="thumbnail" mode="aspectFill" />
			</view>
			<view v-if="title" class="uni-card__thumbnailimage-title"><text class="uni-card__thumbnailimage-title-text">{{ title }}</text></view>
		</view>
		<view v-if="mode === 'title'" class="uni-card__title">
			<view class="uni-card__title-header">
				<image class="uni-card__title-header-image" :src="thumbnail" mode="scaleToFill" />
			</view>
			<view class="uni-card__title-content">
				<text class="uni-card__title-content-title">{{ title }}</text>
				<text class="uni-card__title-content-extra">{{ extra }}</text>
			</view>
		</view>
		<!-- 标题 -->
		<view v-if="mode === 'basic' && title" class="uni-card__header">
			<view v-if="thumbnail" class="uni-card__header-extra-img-view">
				<image :src="thumbnail" class="uni-card__header-extra-img" />
			</view>
			<text class="uni-card__header-title-text">{{ title }}</text>
			<text v-if="extra" class="uni-card__header-extra-text">{{ extra }}</text>
		</view>
		<!-- 内容 -->
		<view class="uni-card__content uni-card__content--pd">
			<view v-if="mode === 'style' && extra" class=""><text class="uni-card__content-extra">{{ extra }}</text></view>
			<slot />
		</view>
		<!-- 底部 -->
		<view v-if="note" class="uni-card__footer">
			<slot name="footer">
				<text class="uni-card__footer-text">{{ note }}</text>
			</slot>
		</view>
	</view>
</template>

<script>
	/**
	 * Card 卡片
	 * @description 卡片视图组件
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=22
	 * @property {String} title 标题文字
	 * @property {String} extra 标题额外信息
	 * @property {String} note 标题左侧缩略图
	 * @property {String} thumbnail 底部信息
	 * @property {String} mode = [basic|style|title] 卡片模式
	 * 	@value basic 基础卡片
	 * 	@value style 图文卡片
	 * 	@value title 标题卡片
	 * @property {Boolean} isFull = [true | false] 卡片内容是否通栏，true 时将去除padding值
	 * @property {Boolean} isShadow = [true | false] 卡片内容是否开启阴影
	 * @event {Function} click 点击 Card 触发事件
	 * @example <uni-card title="标题文字" thumbnail="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" extra="额外信息" note="Tips">内容主体，可自定义内容及样式</uni-card>
	 */
	export default {
		name: 'UniCard',
		props: {
			title: {
				type: String,
				default: ''
			}, // 标题
			extra: {
				type: String,
				default: ''
			}, // 扩展信息
			note: {
				type: String,
				default: ''
			}, // Tips
			thumbnail: {
				type: String,
				default: ''
			}, // 缩略图
			// 卡片模式 ， 可选值 basic：基础卡片 ；style ：图文卡片 ； title ：标题卡片
			mode: {
				type: String,
				default: 'basic'
			},
			isFull: {
				// 内容区域是否通栏
				type: Boolean,
				default: false
			},
			isShadow: {
				// 是否开启阴影
				type: Boolean,
				default: false
			}
		},
		methods: {
			onClick() {
				this.$emit('click')
			}
		}
	}
</script>

<style scoped>
	.uni-card {
		/* #ifndef APP-NVUE */
		display: flex;
		flex: 1;
		box-shadow: 0 0 0 rgba(0, 0, 0, 0);
		/* #endif */
		margin: 12px;
		background-color: #ffffff;
		position: relative;
		flex-direction: column;
		border-color: #e5e5e5;
		border-style: solid;
		border-width: 1px;
		border-radius: 3px;
		overflow: hidden;

	}

	.uni-card__thumbnailimage {
		position: relative;
		flex-direction: column;
		justify-content: center;
		height: 150px;
		overflow: hidden;
	}

	.uni-card__thumbnailimage-box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex: 1;
		flex-direction: row;
		overflow: hidden;
	}

	.uni-card__thumbnailimage-image {
		flex: 1;
	}

	.uni-card__thumbnailimage-title {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		flex-direction: row;
		padding: 16rpx 24rpx;
		background-color: rgba(0, 0, 0, 0.4);
	}

	.uni-card__thumbnailimage-title-text {
		flex: 1;
		font-size: 28rpx;
		color: #fff;
	}

	.uni-card__title {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		padding: 10px;
		border-bottom-color: #F5F5F5;
		border-bottom-style: solid;
		border-bottom-width: 1px;
	}

	.uni-card__title-header {
		width: 40px;
		height: 40px;
		overflow: hidden;
		border-radius: 5px;
	}

	.uni-card__title-header-image {
		width: 40px;
		height: 40px;
	}

	.uni-card__title-content {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: center;
		padding-left: 10px;
		height: 40px;
		overflow: hidden;


	}

	.uni-card__title-content-title {
		font-size: 28rpx;
		line-height: 22px;
		lines: 1;
	}

	.uni-card__title-content-extra {
		font-size: 26rpx;
		line-height: 35rpx;
		color: #999;
	}

	.uni-card__header {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		position: relative;
		flex-direction: row;
		padding: 24rpx;
		align-items: center;
		border-bottom-color: #e5e5e5;
		border-bottom-style: solid;
		border-bottom-width: 1px;
	}

	.uni-card__header-title {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		margin-right: 16rpx;
		justify-content: flex-start;
		align-items: center;
	}

	.uni-card__header-title-text {
		font-size: 32rpx;
		flex: 1;
		/* #ifndef APP-NVUE */
		white-space: nowrap;
		/* #endif */
		/* #ifdef APP-NVUE */
		lines: 1;
		/* #endif */
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.uni-card__header-extra-img {
		height: 40rpx;
		width: 40rpx;
		margin-right: 16rpx;
	}

	.uni-card__header-extra-text {
		flex: 1;
		margin-left: 16rpx;
		font-size: 28rpx;
		text-align: right;
		color: #999;
	}

	.uni-card__content {
		color: #333;
	}

	.uni-card__content--pd {
		padding: 24rpx;
	}

	.uni-card__content-extra {
		font-size: 28rpx;
		padding-bottom: 10px;
		color: #999;
	}

	.uni-card__footer {
		justify-content: space-between;
		padding: 10px;
		border-top-color: #e5e5e5;
		border-top-style: solid;
		border-top-width: 1px;
	}

	.uni-card__footer-text {
		color: #999;
		font-size: 28rpx;
	}

	.uni-card--shadow {
		border-color: #e5e5e5;
		border-style: solid;
		border-width: 1px;
		/* #ifndef APP-NVUE */
		box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
		/* #endif */
	}

	.uni-card--full {
		margin: 0;
		border-radius: 0;
	}
</style>