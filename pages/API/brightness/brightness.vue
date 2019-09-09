<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<!-- #ifndef MP-TOUTIAO -->
			<view class="text-box">亮度 : {{ screen }}</view>
			<view class="uni-slider"><slider :value="screen" @changing="sliderChange" step="1" /></view>
			<!-- #endif -->
			<button type="primary" @click="keep">
				{{ keepScreenOn ? '保持常亮状态' : '关闭常亮状态' }}
			</button>
			<view class="tips">
				保持常亮时，屏幕不会熄灭。仅在当前应用生效，离开应用后设置失效。
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
				console.log(res);
				this.screen = (res.value * 100).toFixed();
				console.log('屏幕亮度值：' + this.screen);
			},
			fail(e) {
				console.log(e);
			}
		});
	},
	methods: {
		sliderChange(e) {
			let screen = e.detail.value;
			// 判断是否重复
			if (this.screen !== screen) {
				console.log('当前数值：' + e.detail.value);
				uni.setScreenBrightness({
					value: screen / 100,
					success: function() {
						console.log('success');
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
	margin-bottom: 40upx;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 300upx;
	background-color: #ffffff;
	font-size: 32upx;
	color: #353535;
}

.uni-slider {
	margin: 100upx 0;
}

.tips {
	font-size: 26upx;
	text-align: center;
	margin-top: 20upx;
	color: #999;
}
</style>
