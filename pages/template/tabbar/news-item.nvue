<template>
	<!-- remove list-cell layer fix android 4.x overflow limit error: 28 layers! -->
	<!-- <view class="list-cell view" @click="click"></view> -->
	<view class="media-item view" hover-class="media-item-hover" v-if="options.title" @click="click">
		<!-- <view class="view" :style="options.article_type === 2 ? 'flex-direction: row';" :class="{'media-image-right': options.article_type === 2, 'media-image-left': options.article_type === 1}"> -->
		<!-- TODO 在支付宝小程序下 需要用 style 覆盖标签的默认样式 -->
		<view class="view" :style="{flexDirection: (options.article_type === 1 || options.article_type === 2)?(options.article_type === 2 ?'row':'row-reverse'):'column' }">
			<text class="media-title" :class="{'media-title2': options.article_type === 1 || options.article_type === 2}">{{options.title}}</text>
			<view v-if="options.image_list || options.image_url" class="image-section flex-row" :class="{'image-section-right': options.article_type === 2, 'image-section-left': options.article_type === 1}"
			 :style="{flexDirection: 'row' }">
				<image class="image-list1" :class="{'image-list2': options.article_type === 1 || options.article_type === 2}" v-if="options.image_url"
				 :src="options.image_url"></image>
				<image class="image-list3" v-if="options.image_list" :src="source.url" v-for="(source, i) in options.image_list"
				 :key="i" />
			</view>
		</view>
		<view class="media-foot flex-row" style="flex-direction: row;">
			<view class="media-info flex-row" style="flex-direction: row;">
				<text class="info-text">{{options.source}}</text>
				<text class="info-text">{{options.comment_count}}条评论</text>
				<text class="info-text">{{options.datetime}}</text>
			</view>
			<view class="max-close-view" @click.stop="close">
				<view class="close-l close-h"></view>
				<view class="close-l close-v"></view>
			</view>
		</view>
		<view class="media-item-line" style="position: absolute;"></view>
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
			click() {
				this.$emit('click');
			},
			close(e) {
				this.$emit('close');
			}
		}
	}
</script>

<style>
	.view {
		flex-direction: column;
	}

	.flex-row {
		flex-direction: row;
	}

	.flex-col {
		flex-direction: column;
	}

	.list-cell {
		width: 750upx;
		padding: 0 30upx;
	}

	.uni-list-cell-hover {
		background-color: #eeeeee;
	}

	.media-item {
		position: relative;
		flex: 1;
		flex-direction: column;
		/* border-bottom-width: 1upx;
		border-bottom-style: solid;
		border-bottom-color: #ebebeb; */
		padding: 20upx 30upx 21upx 30upx;
	}

    .media-item-hover{
        background-color: #eee;
    }

	.media-item-line {
		position: absolute;
		left: 30upx;
		right: 30upx;
		bottom: 0;
		height: 1upx;
		background-color: #ebebeb;
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
		font-size: 30upx;
		color: #555555;
	}

	.media-title2 {
		flex: 1;
		margin-top: 6upx;
		line-height: 40upx;
	}

	.image-section {
		margin-top: 20upx;
		flex-direction: row;
		justify-content: space-between;
	}

	.image-section-right {
		margin-top: 0upx;
		margin-left: 10upx;
		width: 225upx;
		height: 146upx;
	}

	.image-section-left {
		margin-top: 0upx;
		margin-right: 10upx;
		width: 225upx;
		height: 146upx;
	}

	.image-list1 {
		width: 690upx;
		height: 481upx;
	}

	.image-list2 {
		width: 225upx;
		height: 146upx;
	}

	.image-list3 {
		width: 225upx;
		height: 146upx;
	}

	.media-info {
		flex-direction: row;
		align-items: center;
	}

	.info-text {
		margin-right: 20upx;
		color: #999999;
		font-size: 24upx;
	}

	.media-foot {
		margin-top: 25upx;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.max-close-view {
		position: relative;
		align-items: center;
		flex-direction: row;
		width: 40upx;
		height: 30upx;
		line-height: 30upx;
		border-width: 1upx;
		border-style: solid;
		border-color: #aaaaaa;
		border-radius: 4px;
		justify-content: center;
		text-align: center;
	}

	.close-l {
		position: absolute;
		width: 18upx;
		height: 1upx;
		background-color: #aaaaaa;
	}

	.close-h {
		transform: rotate(45deg);
	}

	.close-v {
		transform: rotate(-45deg);
	}
</style>
