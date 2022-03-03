<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<!-- #ifndef MP-TOUTIAO -->
			<view class="text-box">亮度 : {{ screen }}</view>
			<view class="uni-slider"><slider :value="screen" @changing="sliderChange" step="1" /></view>
			<!-- #endif -->
			<button type="primary" @click="keep">
				{{ keepScreenOn ? 'Maintain constant light status' : 'Turn off the constant light state' }}
			</button>
			<view class="tips">
				The screen will not go off when it remains always on. Only works in the current application, the setting expires after leaving the application.
			</view>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			title: 'brightness',
			screen: 0,
			keepScreenOn: true
		};
	},
	onLoad() {
		uni.getScreenBrightness({
			success: res => {
				this.screen = (res.value * 100).toFixed();
			},
			fail(e) {
				console.log(e);
			}
		});
	},
	methods: {
		sliderChange(e) {
			let screen = e.detail.value;
			// Determine if there is a duplicate
			if (this.screen !== screen) {
				console.log('Current value:' + e.detail.value);
				uni.setScreenBrightness({
					value: screen / 100,
					success: function() {
					},
					fail(e) {
						console.log(e);
					}
				});
				this.screen = screen;
			}
		},
		keep() {
			uni.setKeepScreenOn({
				keepScreenOn: this.keepScreenOn
			});
			this.keepScreenOn = !this.keepScreenOn;
		}
	}
};
</script>

<style>
.text-box {
	margin-bottom: 40rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 300rpx;
	background-color: #ffffff;
	font-size: 32rpx;
	color: #353535;
}

.uni-slider {
	margin: 100rpx 0;
}

.tips {
	font-size: 26rpx;
	text-align: center;
	margin-top: 20rpx;
	color: #999;
}
</style>
