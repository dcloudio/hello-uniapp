<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap">
			<button class="uni-button" type="primary" @click="longshock">长震动</button>
			<button class="uni-button" @click="shortshock">短震动</button>

			<view class="uni-tips">
				<view>Tips</view>
				<view class="uni-tips-text">iOS上只有长震动，没有短震动</view>
				<view class="uni-tips-text">iOS上需要手机设置“打开响铃时震动”或“静音时震动”，否则无法震动</view>
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
	margin-top: 50upx 0;
}
.uni-button {
	margin: 30upx 0;
}
.uni-tips {
	color: #666;
	font-size: 30upx;
}
.uni-tips-text {
	margin-top: 15upx;
	line-height: 1.2;
	font-size: 24upx;
}
</style>
