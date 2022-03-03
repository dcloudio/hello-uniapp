<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<!-- #ifdef APP-PLUS -->
			<view class="uni-btn-v">
				<button class="shake" @tap="shake">Shake</button>
			</view>
			<!-- #endif -->
			<view class="uni-btn-v">
				<button type="primary" @tap="watchAcce">Listening to the acceleration changes of the device</button>
				<button type="primary" @tap="stopAcce">Stop listening to the acceleration change of the device</button>
			</view>
			<view class="uni-textarea uni-common-mt">
				<textarea class="acc-show" :value="value" />
			</view>
		</view>
	</view>
</template>
<script>

	export default {
		data() {
			return {
				title: 'onAccelerometerChange',
				value: ''
			}
		},
		onUnload() {
			uni.stopAccelerometer();
		},
		methods: {
			//#ifdef APP-PLUS
			shake() {
				uni.navigateTo({
					url: '/platforms/app-plus/shake/shake'
				})
			},
			//#endif
			watchAcce() {
				uni.onAccelerometerChange((res) => {
					this.value = "Listening to the acceleration changes of the device:\n" + "X Axis：" + res.x.toFixed(2) + "\nY Axis：" + res.y.toFixed(2) +
						"\nZ Axis：" + res.z.toFixed(2);
				})
			},
			stopAcce() {
				uni.stopAccelerometer()
			}
		}
	}
</script>

<style>
	.shake {
		background-color: #FFCC33;
		color: #ffffff;
		margin-bottom: 50rpx;
	}
	.uni-textarea .acc-show{
		height: 240rpx;
	}
</style>
