<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view v-if="imageSrc" class="image-container">
				<image class="img" :src="imageSrc" mode="center" />
			</view>
			<block v-else style="margin-top: 50px;">
				<view class="uni-hello-text">
					Click the button to download the server-side example image (download the network file to a local temporary directory)
				</view>
				<view class="uni-btn-v">
					<button type="primary" @tap="downloadImage">Download</button>
				</view>
			</block>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'downloadFile',
				imageSrc: ''
			}
		},
		onUnload() {
			this.imageSrc = '';
		},
		methods: {
			downloadImage: function () {
				uni.showLoading({
					title:'Downloading'
				})
				var self = this
				uni.downloadFile({
					url: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
					success: (res) => {
						console.log('downloadFile success, res is', res)
						self.imageSrc = res.tempFilePath;
						uni.hideLoading();
					},
					fail: (err) => {
						console.log('downloadFile fail, err is:', err)
					}
				})
			}
		}
	}
</script>

<style>
.img {
	width: 500rpx;
	height: 500rpx;
	margin: 0 auto;
}
.image-container {
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
