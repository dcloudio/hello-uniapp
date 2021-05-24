<template>
	<view>
		<view class="banner">
			<image class="banner-img" :src="banner.cover"></image>
			<view class="banner-title">{{banner.title}}</view>
		</view>
		<view class="article-meta">
			<text class="article-author">{{banner.author_name}}</text>
			<text class="article-text">发表于</text>
			<text class="article-time">{{banner.published_at}}</text>
		</view>
		<view class="article-content">
			<rich-text :nodes="htmlNodes"></rich-text>
		</view>
		<!-- #ifdef MP-WEIXIN || MP-QQ -->
		<ad v-if="htmlNodes.length > 0" unit-id="adunit-01b7a010bf53d74e"></ad>
		<!-- #endif -->
	</view>
</template>

<script>
	const DETAIL_PAGE_PATH = '/pages/template/list2detail-detail/list2detail-detail';

	import htmlParser from '@/common/html-parser'

	function _handleShareChannels(provider) {
		let channels = [];
		for (let i = 0, len = provider.length; i < len; i++) {
			switch (provider[i]) {
				case 'weixin':
					channels.push({
						text: '分享到微信好友',
						id: 'weixin',
						sort: 0
					});
					channels.push({
						text: '分享到微信朋友圈',
						id: 'weixin',
						sort: 1
					});
					break;
				default:
					break;
			}
		}
		channels.sort(function(x, y) {
			return x.sort - y.sort;
		});
		return channels;
	}

	export default {
		data() {
			return {
				title: '',
				banner: {},
				htmlNodes: []
			}
		},
		onLoad(event) {
			// TODO 后面把参数名替换成 payload
			const payload = event.detailDate || event.payload;
			// 目前在某些平台参数会被主动 decode，暂时这样处理。
			try {
				this.banner = JSON.parse(decodeURIComponent(payload));
			} catch (error) {
				this.banner = JSON.parse(payload);
			}
			uni.setNavigationBarTitle({
				title: this.banner.title
			});
			this.getDetail();
		},
		onShareAppMessage() {
			return {
				title: this.banner.title,
				path: DETAIL_PAGE_PATH + '?detailDate=' + JSON.stringify(this.banner)
			}
		},
		onNavigationBarButtonTap(event) {
			const buttonIndex = event.index;
			if (buttonIndex === 0) {
				// 分享 H5 的页面
				const shareProviders = [];
				uni.getProvider({
					service: 'share',
					success: (result) => {
						// 目前仅考虑分享到微信
						if (result.provider && result.provider.length && ~result.provider.indexOf('weixin')) {
							const channels = _handleShareChannels(result.provider);
							uni.showActionSheet({
								itemList: channels.map(channel => {
									return channel.text;
								}),
								success: (result) => {
									const tapIndex = result.tapIndex;
									uni.share({
										provider: 'weixin',
										type: 0,
										title: this.banner.title,
										scene: tapIndex === 0 ? 'WXSceneSession' : 'WXSenceTimeline',
										href: 'https://uniapp.dcloud.io/h5' + DETAIL_PAGE_PATH + '?detailDate=' + JSON.stringify(this.banner),
										imageUrl: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b6304f00-5168-11eb-bd01-97bc1429a9ff.png'
									});
								}
							});
						} else {
							uni.showToast({
								title: '未检测到可用的微信分享服务'
							});
						}
					},
					fail: (error) => {
						uni.showToast({
							title: '获取分享服务失败'
						});
					}
				});
			}
		},
		methods: {
			getDetail() {
				uni.request({
					url: 'https://unidemo.dcloud.net.cn/api/news/36kr/' + this.banner.post_id,
					success: (data) => {
						if (data.statusCode == 200) {
							var htmlString = data.data.content.replace(/\\/g, "").replace(/<img/g, "<img style=\"display:none;\"");
							this.htmlNodes = htmlParser(htmlString);
						}
					},
					fail: () => {
						console.log('fail');
					}
				});
			}
		}
	}
</script>

<style>
	.banner {
		height: 360rpx;
		overflow: hidden;
		position: relative;
		background-color: #ccc;
	}

	.banner-img {
		width: 100%;
	}

	.banner-title {
		max-height: 84rpx;
		overflow: hidden;
		position: absolute;
		left: 30rpx;
		bottom: 30rpx;
		width: 90%;
		font-size: 32rpx;
		font-weight: 400;
		line-height: 42rpx;
		color: white;
		z-index: 11;
	}

	.article-meta {
		padding: 20rpx 40rpx;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		color: gray;
	}

	.article-text {
		font-size: 26rpx;
		line-height: 50rpx;
		margin: 0 20rpx;
	}

	.article-author,
	.article-time {
		font-size: 30rpx;
	}

	.article-content {
		padding: 0 30rpx;
		overflow: hidden;
		font-size: 30rpx;
		margin-bottom: 30rpx;
	}
</style>
