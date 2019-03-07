<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap">
			<button class="uni-button" type="primary" @click="longshock">长震动</button>
			<button class="uni-button"  @click="shortshock">短震动</button>
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
</style>
