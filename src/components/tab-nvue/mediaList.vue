<template>
	<view class="view">
		<view class="list-cell view" hover-class="uni-list-cell-hover" @click="bindClick">
			<view class="media-list view" v-if="options.title">
				<view class="view" :class="{'media-image-right': options.article_type === 2, 'media-image-left': options.article_type === 1}">
					<text class="media-title" :class="{'media-title2': options.article_type === 1 || options.article_type === 2}">{{options.title}}</text>
					<view v-if="options.image_list || options.image_url" class="image-section view" :class="{'image-section-right': options.article_type === 2, 'image-section-left': options.article_type === 1}">
						<image class="image-list1" :class="{'image-list2': options.article_type === 1 || options.article_type === 2}"
						 v-if="options.image_url" :src="options.image_url"></image>
						<image class="image-list3" v-if="options.image_list" :src="source.url" v-for="(source, i) in options.image_list"
						 :key="i" />
					</view>
				</view>
				<view class="media-foot view">
					<view class="media-info view">
						<text class="info-text">{{options.source}}</text>
						<text class="info-text">{{options.comment_count}}条评论</text>
						<text class="info-text">{{options.datetime}}</text>
					</view>
					<view class="max-close-view view" @click.stop="close">
						<view class="close-view view"><text class="close">×</text></view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			options: {
				type: Object,
				default: function(e) {
					return {}
				}
			}
		},
		methods: {
			close(e) {
				this.$emit('close');
			},
			bindClick() {
				this.$emit('click');
			}
		}
	}
</script>

<style>
	.view {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
	}

	.list-cell {
		width: 750rpx;
		padding: 0 30rpx;
	}

	.uni-list-cell-hover {
		background-color: #eeeeee;
	}

	.media-list {
		flex: 1;
		flex-direction: column;
		border-bottom-width: 1rpx;
		border-bottom-style: solid;
		border-bottom-color: #c8c7cc;
		padding: 20rpx 0;
	}

	.media-image-right {
		flex-direction: row;
	}

	.media-image-left {
		flex-direction: row-reverse;
	}

	.media-title {
		flex: 1;
	}

	.media-title {
		lines: 3;
		text-overflow: ellipsis;
		font-size: 32rpx;
		color: #555555;
	}

	.media-title2 {
		flex: 1;
		margin-top: 6rpx;
		line-height: 40rpx;
	}

	.image-section {
		margin-top: 20rpx;
		flex-direction: row;
		justify-content: space-between;
	}

	.image-section-right {
		margin-top: 0rpx;
		margin-left: 10rpx;
		width: 225rpx;
		height: 146rpx;
	}

	.image-section-left {
		margin-top: 0rpx;
		margin-right: 10rpx;
		width: 225rpx;
		height: 146rpx;
	}

	.image-list1 {
		width: 690rpx;
		height: 481rpx;
	}

	.image-list2 {
		width: 225rpx;
		height: 146rpx;
	}

	.image-list3 {
		width: 225rpx;
		height: 146rpx;
	}

	.media-info {
		flex-direction: row;
	}

	.info-text {
		margin-right: 20rpx;
		color: #999999;
		font-size: 24rpx;
	}

	.media-foot {
		margin-top: 20rpx;
		flex-direction: row;
		justify-content: space-between;
	}

	.max-close-view {
		align-items: center;
		justify-content: flex-end;
		flex-direction: row;
		height: 40rpx;
		width: 80rpx;
	}

	.close-view {
		border-style: solid;
		border-width: 1px;
		border-color: #999999;
		border-radius: 10rpx;
		justify-content: center;
		height: 30rpx;
		width: 40rpx;
		line-height: 30rpx;
	}

	.close {
		text-align: center;
		color: #999999;
		font-size: 28rpx;
	}
</style>
