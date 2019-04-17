<template>
	<view :class="isFull ? 'uni-card--full' : ''" class="uni-card" @click="onClick">
		<view v-if="title" class="uni-card__header">
			<view v-if="thumbnail" class="uni-card__header-extra-img-view">
				<image :src="thumbnail" class="uni-card__header-extra-img" />
			</view>
			<view class="uni-card__header-title-text">{{ title }}</view>
			<view v-if="extra" class="uni-card__header-extra-text">{{ extra }}</view>
		</view>
		<view class="uni-card__content uni-card__content--pd">
			<slot />
		</view>
		<view v-if="note" class="uni-card__footer">{{ note }}</view>
	</view>
</template>

<script>
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
			isFull: { // 内容区域是否通栏
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

<style>
	@charset "UTF-8";

	.uni-card {
		margin-left: 24upx;
		margin-right: 24upx;
		background: #fff;
		box-shadow: none;
		position: relative;
		display: flex;
		flex-direction: column
	}

	.uni-card:after {
		content: '';
		position: absolute;
		transform-origin: center;
		box-sizing: border-box;
		pointer-events: none;
		top: -50%;
		left: -50%;
		right: -50%;
		bottom: -50%;
		border: 1px solid #c8c7cc;
		border-radius: 12upx;
		transform: scale(.5)
	}

	.uni-card__footer,
	.uni-card__header {
		position: relative;
		display: flex;
		flex-direction: row;
		padding: 16upx;
		align-items: center
	}

	.uni-card__header:after {
		position: absolute;
		bottom: 0;
		right: 0;
		left: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc
	}

	.uni-card__header-title {
		flex: 1;
		margin-right: 16upx;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center
	}

	.uni-card__header-title-text {
		font-size: 32upx;
		flex: 1;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden
	}

	.uni-card__header-extra-img-view {
		display: flex
	}

	.uni-card__header-extra-img {
		height: 40upx;
		width: 40upx;
		margin-right: 16upx
	}

	.uni-card__header-extra-text {
		flex: 0 0 auto;
		width: 30%;
		margin-left: 16upx;
		font-size: 28upx;
		text-align: right;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden
	}

	.uni-card__content--pd {
		padding: 16upx
	}

	.uni-card__footer {
		justify-content: space-between;
		color: #999;
		font-size: 24upx;
		padding-top: 0
	}

	.uni-card--full {
		margin: 0
	}
</style>