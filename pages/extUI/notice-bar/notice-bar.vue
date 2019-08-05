<template>
	<view>
		<view class="example-info">通告栏组件多用于系统通知，广告通知等场景，可自定义图标，颜色，展现方式等。</view>
		<view class="example-title">基本用法</view>
		<view class="example-body">
			<uni-notice-bar :single="true" text="[单行] uni-app 1.6发布，开发一次、7端覆盖！" />
			<uni-notice-bar text="[多行] uni-app 1.6版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。" />
		</view>
		<view class="example-title">加图标</view>
		<view class="example-body">
			<uni-notice-bar :single="true" :show-icon="true" text="uni-app行业峰会频频亮相，开发者反响热烈!" />
			<uni-notice-bar :show-icon="true" text="8月12日DCloud受邀参加iWEB峰会后，9月19日DCloud CEO 王安在千人小程序峰会——见实大会，做了主题为《App和小程序，鱼与熊掌如何兼得？》的分享。" />
		</view>
		<!-- #ifndef H5 -->
		<view class="example-title">文字滚动</view>
		<view class="example-body">
			<uni-notice-bar :scrollable="true" :single="true" text="uni-app行业峰会频频亮相，开发者反响热烈!" />
			<uni-notice-bar :show-icon="true" :scrollable="true" :single="true" text="uni-app 1.6版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。" />
			<uni-notice-bar :scrollable="true" text="8月12日DCloud受邀参加iWEB峰会后，9月19日DCloud CEO 王安在千人小程序峰会——见实大会，做了主题为《App和小程序，鱼与熊掌如何兼得？》的分享。" />
		</view>
		<!-- #endif -->
		<view class="example-title">查看更多</view>
		<view class="example-body">
			<uni-notice-bar :show-get-more="true" :single="true" text="年末大礼：uni-app1.4 新增百度、支付宝小程序。插件市场重磅上线！" @getmore="getMore" />
			<uni-notice-bar :show-get-more="true" :show-icon="true" :single="true" more-text="查看更多" text="年末大礼：uni-app1.4 新增百度、支付宝小程序。插件市场重磅上线！" @getmore="getMore" />
		</view>
		<view class="example-title">修改颜色</view>
		<view class="example-body">
			<uni-notice-bar :single="true" more-text="查看更多" color="red" background-color="#eee" text="uni-app 1.6版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。" />
			<uni-notice-bar :show-icon="true" color="blue" text="uni-app 1.6版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。" />
		</view>
		<view class="example-title">关闭按钮</view>
		<view class="example-body">
			<uni-notice-bar :show-close="true" :single="true" text="HBuilderX 1.0正式发布！uni-app实现里程碑突破！" />
			<uni-notice-bar :show-close="true" :show-icon="true" more-text="查看更多" text="HBuilderX 1.0正式发布！uni-app实现里程碑突破！" />
			<uni-notice-bar :show-close="true" :show-icon="true" text="uni-app 1.6发布，开发一次、7端覆盖！" />
			<uni-notice-bar :show-close="true" :show-icon="true" :single="true" text="uni-app 1.6版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。" />
		</view>
	</view>
</template>

<script>
	import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue'

	export default {
		components: {
			uniNoticeBar
		},
		data() {
			return {}
		},
		created() {},
		methods: {
			getMore() {
				uni.showToast({
					title: '点击查看更多',
					icon: 'none'
				})
			}
		}
	}
</script>

<style>
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #efeff4
	}

	view {
		font-size: 28upx;
		line-height: inherit
	}

	.example {
		padding: 0 30upx 30upx
	}

	.example-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 32upx;
		color: #464e52;
		padding: 30upx;
		margin-top: 20upx;
		position: relative;
		background-color: #fdfdfd
	}

	.example-title__after {
		position: relative;
		color: #031e3c
	}

	.example-title:after {
		content: '';
		position: absolute;
		left: 0;
		margin: auto;
		top: 0;
		bottom: 0;
		width: 10upx;
		height: 40upx;
		border-top-right-radius: 10upx;
		border-bottom-right-radius: 10upx;
		background-color: #031e3c
	}

	.example .example-title {
		margin: 40upx 0
	}

	.example-body {
		border-top: 1px #f5f5f5 solid;
		padding: 30upx;
		background: #fff
	}

	.example-info {
		padding: 30upx;
		color: #3b4144;
		background: #fff
	}

	.example-body {
		padding: 5upx 0;
		padding-top: 20upx;
	}
</style>