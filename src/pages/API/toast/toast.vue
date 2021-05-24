<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap">
			<view class="uni-btn-v">
				<button type="default" @tap="toast1Tap">点击弹出默认toast</button>
				<button type="default" @tap="toast2Tap">点击弹出设置duration的toast</button>
				<button type="default" @tap="toast3Tap">点击弹出显示loading的toast</button>
				<!-- #ifndef MP-ALIPAY -->
				<button type="default" @tap="toast4Tap">点击弹出显示自定义图片的toast</button>
				<!-- #endif -->
				<!-- #ifdef APP-PLUS -->
				<button type="default" @tap="toast5Tap">点击显示无图标的居底toast</button>
				<!-- #endif -->
				<button type="default" @tap="hideToast">点击隐藏toast</button>
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
					title: "默认"
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
				this._showTimer && clearTimeout(this._showTimer);
				this._showTimer = setTimeout(() => {
					this.hideToast()
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
					title: "显示一段轻提示",
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
