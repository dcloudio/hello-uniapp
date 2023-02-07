<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view v-if="imageSrc" class="image-container">
				<image class="img" :src="imageSrc" mode="center" />
			</view>
			<block v-else style="margin-top: 50px;">
				<view class="uni-hello-text">
					点击按钮下载服务端示例图片（下载网络文件到本地临时目录）
				</view>
				<view class="uni-btn-v">
					<button type="primary" @tap="downloadImage">下载</button>
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
					title:'下载中'
				})
				var self = this
				uni.downloadFile({
					url: "https://web-assets.dcloud.net.cn/unidoc/zh/uni-app.png",
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
