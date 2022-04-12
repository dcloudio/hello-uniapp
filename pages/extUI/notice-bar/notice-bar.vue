<template>
	<view class="container">
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">uni-notice-bar components are mostly used for system notifications, advertising notifications and other scenarios, with customizable icons, colors, display methods, etc.</text>
		</uni-card>

		<uni-section title="Multi-line display" type="line">
			<uni-notice-bar text="The uni-app version was officially released, developed once and released simultaneously for 7 platforms, including iOS, Android, H5, WeChat applet, Alipay applet, Baidu applet and Headline applet." />
		</uni-section>
		<uni-section title="Single line display" subTitle="Use the single attribute to display notifications on a single line" type="line">
			<uni-notice-bar single text="The uni-app version was officially released, developed once and released simultaneously for 7 platforms, including iOS, Android, H5, WeChat applet, Alipay applet, Baidu applet and Headline applet." />
		</uni-section>
		<uni-section title="Show icon" subTitle="Use the show-icon property to display the left trumpet icon" type="line">
			<uni-notice-bar show-icon text="uni-app released, developed once and covered by 7 ends！" />
		</uni-section>
		<uni-section title="Text scrolling" subTitle="Use the scrollable attribute to make the notice scroll, where the single attribute will be disabled and a single line will always be displayed" type="line">
			<uni-notice-bar show-icon scrollable
				text="The uni-app version was officially released, developed once and released simultaneously for 7 platforms, including iOS, Android, H5, WeChat applet, Alipay applet, Baidu applet and Headline applet." />
		</uni-section>
		<uni-section title="view more" subTitle="Use show-get-more to show more, then the single attribute will be disabled and always displayed in a single line, if the more-text attribute is not configured, the arrow icon will be displayed"
			type="line">
			<uni-notice-bar show-get-more show-icon text="End-of-year gift: uni-app1.4 adds Baidu and Alipay applets. Plug-in market relaunched!" @getmore="getMore" />
			<uni-notice-bar show-get-more show-icon more-text="view more" text="End-of-year gift: uni-app1.4 adds Baidu and Alipay applets. Plug-in market relaunched!"
				@getmore="getMore" />
		</uni-section>
		<uni-section title="Modify color" type="line">
			<uni-notice-bar single color="#2979FF" background-color="#EAF2FF"
				text="The uni-app version was officially released, developed once and released simultaneously for 7 platforms, including iOS, Android, H5, WeChat applet, Alipay applet, Baidu applet and Headline applet." />
		</uni-section>
		<uni-section title="Close button" subTitle="Use the show-close property to close the notification" type="line">
			<uni-notice-bar show-close single text="HBuilderX 1.0 is officially released! uni-app achieves milestone breakthrough achieve milestone breakthrough!" />
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
					title: '点击view more',
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
