<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap">
			<button class="uni-button" type="primary" @click="longshock">Long vibration</button>
			<button class="uni-button" @click="shortshock">Short vibration</button>

			<view class="uni-tips">
				<view>Tips</view>
				<view class="uni-tips-text">Only long vibrations on iOS, no short vibrations</view>
				<view class="uni-tips-text">On iOS, you need to set the phone to "vibrate when open ring" or "vibrate when silent", otherwise it can't vibrate.</view>
			</view>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			title: 'vibrateLong/vibrateShort'
		};
	},
	onLoad() {},
	methods: {
		longshock() {
			uni.vibrateLong({
				success: function() {
					console.log('success');
				}
			});
		},
		shortshock() {
			uni.vibrateShort({
				success: function() {
					console.log('success');
				}
			});
		}
	}
};
</script>

<style>
.uni-padding-wrap {
	margin-top: 50rpx 0;
}
.uni-button {
	margin: 30rpx 0;
}
.uni-tips {
	color: #666;
	font-size: 30rpx;
}
.uni-tips-text {
	margin-top: 15rpx;
	line-height: 1.2;
	font-size: 24rpx;
}
</style>
