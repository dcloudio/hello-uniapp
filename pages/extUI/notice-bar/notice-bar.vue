<template>
	<view class="container">
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">通告栏组件多用于系统通知，广告通知等场景，可自定义图标，颜色，展现方式等。</text>
		</uni-card>

		<uni-section title="多行显示" type="line">
			<uni-notice-bar text="uni-app 版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。" />
		</uni-section>
		<uni-section title="单行显示" subTitle="使用 single 属性单行显示通知" type="line">
			<uni-notice-bar single text="uni-app 版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。" />
		</uni-section>
		<uni-section title="显示图标" subTitle="使用 show-icon 属性显示左侧小喇叭图标" type="line">
			<uni-notice-bar show-icon text="uni-app发布，开发一次、7端覆盖！" />
		</uni-section>
		<uni-section title="文字滚动" subTitle="使用 scrollable 属性使通告滚动,此时 single 属性将失效,始终单行显示" type="line">
			<uni-notice-bar show-icon scrollable
				text="uni-app 版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。" />
		</uni-section>
		<uni-section title="查看更多" subTitle="使用 show-get-more 显示更多,此时 single 属性将失效,始终单行显示,如不配置 more-text 属性 ,将显示箭头图标"
			type="line">
			<uni-notice-bar show-get-more show-icon text="年末大礼：uni-app1.4 新增百度、支付宝小程序。插件市场重磅上线！" @getmore="getMore" />
			<uni-notice-bar show-get-more show-icon more-text="查看更多" text="年末大礼：uni-app1.4 新增百度、支付宝小程序。插件市场重磅上线！"
				@getmore="getMore" />
		</uni-section>
		<uni-section title="修改颜色" type="line">
			<uni-notice-bar single color="#2979FF" background-color="#EAF2FF"
				text="uni-app 1.6版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。" />
		</uni-section>
		<uni-section title="关闭按钮" subTitle="使用 show-close 属性,可关闭通知" type="line">
			<uni-notice-bar show-close single text="HBuilderX 1.0正式发布！uni-app实现里程碑突破实现里程碑突破！" />
		</uni-section>
	</view>
</template>

<script>
	export default {
		components: {},
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

<style lang="scss">
	.container {
		/* #ifndef APP-NVUE */
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		/* #endif */
	}
</style>
