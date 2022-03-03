<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap">
			<view class="uni-btn-v">
				<button type="default" @tap="toast1Tap">Click to bring up the default toast</button>
				<button type="default" @tap="toast2Tap">Click on the toast to set the duration of the pop-up</button>
				<button type="default" @tap="toast3Tap">Click on the toast that shows the loading pop-up</button>
				<!-- #ifndef MP-ALIPAY -->
				<button type="default" @tap="toast4Tap">Click on the toast that pops up to display a custom image</button>
				<!-- #endif -->
				<!-- #ifdef APP-PLUS -->
				<button type="default" @tap="toast5Tap">Click to display the bottom toast without icon</button>
				<!-- #endif -->
				<button type="default" @tap="hideToast">Click to hide toast</button>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'toast'
			}
		},
		// #ifdef MP-ALIPAY
		onUnload() {
			this._showTimer && clearTimeout(this._showTimer);
		},
		// #endif
		methods: {
			toast1Tap: function () {
				uni.showToast({
					title: "Default"
				})
			},
			toast2Tap: function () {
				uni.showToast({
					title: "duration 3000",
					duration: 3000
				})
			},
			toast3Tap: function () {
				uni.showToast({
					title: "loading",
					icon: "loading",
					duration: 5000
				})
				// #ifdef MP-ALIPAY
				this._showTimer = setTimeout(() => {
					// When the icon is loading, showToast actually performs showLoading
					my.hideLoading()
					// Clear the timer after executing all the code
					clearTimeout(this._showTimer);
				}, 3000)
				// #endif

			},
			toast4Tap: function () {
				uni.showToast({
					title: "logo",
					image: "../../../static/uni.png"
				})
			},
			// #ifdef APP-PLUS
			toast5Tap: function () {
				uni.showToast({
					title: "Display a light prompt",
					position:'bottom'
				})
			},
			// #endif
			hideToast: function () {
				uni.hideToast()
			}
		}
	}
</script>
