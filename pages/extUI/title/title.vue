<template>
	<view class="uni-content">
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6"> uni-title，This is usually used to record page titles, which are automatically counted using the current component if uni-app has statistics turned on.</text>
		</uni-card>
		<uni-section title="Different Types" type="line">
			<view class="example-body">
				<uni-title type="h1" title="h1 Level Title"></uni-title>
				<uni-title type="h2" title="h2 Level Title"></uni-title>
				<uni-title type="h3" title="h3 Level Title"></uni-title>
				<uni-title type="h4" title="h4 Level Title"></uni-title>
				<uni-title type="h5" title="h5 Level Title"></uni-title>
			</view>
		</uni-section>

		<uni-section title="Change color" type="line">

			<view class="example-body">
				<uni-title type="h1" title="h1 Level Title" color="#027fff"></uni-title>
				<uni-title type="h2" title="h2 Level Title" color="#2490ff"></uni-title>
				<uni-title type="h3" title="h3 Level Title" color="#439ffc"></uni-title>
				<uni-title type="h4" title="h4 Level Title" color="#60adfb"></uni-title>
				<uni-title type="h5" title="h5 Level Title" color="#7db9f7"></uni-title>
			</view>
		</uni-section>
		<uni-section title="Alignment method" type="line">

			<view class="example-body">
				<uni-title type="h1" title="h1 Left Alignment" align="left"></uni-title>
				<uni-title type="h2" title="h2 Centering" align="center"></uni-title>
				<uni-title type="h3" title="h3 Right Alignment" align="right"></uni-title>
				<uni-title type="h4" title="h4 Centering" align="center"></uni-title>
				<uni-title type="h5" title="h5 Left Alignment" align="left"></uni-title>
			</view>
		</uni-section>
		<uni-section title="Combination example" type="line">

			<view class="example-body">
				<view class="uni-box-head">
					<uni-title type="h1" align="center" title="uni-app Introduction"></uni-title>
				</view>
				<view class="uni-box">
					<uni-title class="h3" type="h3" title="1 Framework Introduction"></uni-title>
				</view>
				<view class="uni-box">
					<uni-title class="h4" type="h4" title="1.1 What is uni-app"></uni-title>
				</view>
				<view>
					<text
						class="uni-text">uni-app is a framework for developing all front-end applications using Vue.js. Developers write a set of code that can be published to multiple platforms such as iOS, Android, H5, and various applets (WeChat/Alipay/Baidu/Headlines/QQ/Nail). Even if not cross-end, uni-app is also a better framework for small program development. dCloud has 3.7 million developer users, its uni-app has 50,000+ cases, 900 plug-ins, 50+ WeChat/qq groups, and is built-in by Ali small program tools, developers can choose with confidence.</text>
				</view>
				<view class="uni-box">
					<uni-title class="h4" type="h4" title="1.2 Development specifications"></uni-title>
				</view>
				<view class="">
					<uni-title class="h5" type="h5" color="#666" title="- Page files follow the Vue Single File Component (SFC) specification"></uni-title>
					<uni-title class="h5" type="h5" color="#666" title="- Component tags are close to the applet specification, see uni-app component specification for details"></uni-title>
					<uni-title class="h5" type="h5" color="#666"
						title="- The interface capability (JS API) is close to the WeChat applet specification, but the prefix wx needs to be replaced with uni, see the uni-app interface specification for details"></uni-title>
					<uni-title class="h5" type="h5" color="#666" title="- Data binding and event handling are the same as the Vue.js specification, while supplementing the lifecycle of apps and pages">
					</uni-title>
					<uni-title class="h5" type="h5" color="#666" title="- It is recommended to use flex layout for development in order to be compatible with multi-side operation"></uni-title>
				</view>
			</view>
		</uni-section>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				title: 'Chapter titles are usually used to record page titles, such as product titles, news titles, etc. The current component will automatically report content statistics'
			}
		},
		onLoad() {},
		methods: {

		}
	}
</script>

<style lang="scss">
	.example-body {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		padding: 10px;
	}

	.uni-text {
		font-size: 14px;
		line-height: 22px;
		color: #333;
	}
</style>
