<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap">
			<view v-if="imagePath !== ''" class="media-box image">
				<image class="image" mode="widthFix" :src="imagePath" />
			</view>
			<button type="primary"  class="uni-button" @click="saveImage">Take pictures and save them locally</button>
			<view v-if="videoPath !== ''" class="media-box">
				<video
					id="myVideo"
					:src="videoPath"
					@error="videoErrorCallback"
					enable-danmu
					danmu-btn
					controls
				></video>
			</view>
			<button type="primary" class="uni-button" @click="saveVideo">Record video and save to local</button>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			title: 'saveImage/saveVideo',
			imagePath: '',
			videoPath: ''
		};
	},
	onLoad() {},
	methods: {
		videoErrorCallback: function() {
			uni.showModal({
				content: 'Video loading failure',
				showCancel: false
			});
		},
		saveImage() {
			uni.chooseImage({
				count: 1,
				sourceType: ['camera'],
				success: res => {
					this.imagePath = res.tempFilePaths[0];
					this.getTempFilePath(res.tempFilePaths[0], 'imageTempPath');
				},
				fail: (err) => {
					// #ifdef MP
					uni.getSetting({
						success: (res) => {
							let authStatus = res.authSetting['scope.camera'];
							if (!authStatus) {
								uni.showModal({
									title: 'Authorization failure',
									content: 'Hello uni-app to get pictures from your camera, please turn on the relevant permissions in the settings screen',
									success: (res) => {
										if (res.confirm) {
											uni.openSetting()
										}
									}
								})
							}
						}
					})
					// #endif
				}
			});
		},
		saveVideo() {
			let _this = this;
			uni.chooseVideo({
				count: 1,
				sourceType: ['camera'],
				success: res => {
					console.log(res.tempFilePath)
					this.videoPath = res.tempFilePath;
					this.getTempFilePath(res.tempFilePath, 'videoTempPath');
				},
				fail: (err) => {
					// #ifdef MP
					uni.getSetting({
						success: (res) => {
							let authStatus = res.authSetting['scope.camera'];
							if (!authStatus) {
								uni.showModal({
									title: '授权失败',
									content: 'Hello uni-app you need to get video from your camera, please turn on the relevant permissions in the settings screen',
									success: (res) => {
										if (res.confirm) {
											uni.openSetting()
										}
									}
								})
							}
						}
					})
					// #endif
				}
			});
		},

		getTempFilePath(url, types) {
			// If you have already downloaded the local path, then store it directly
			let obj = {
				filePath: url,
				success: () => {
					console.log('save success');
					uni.showModal({
						content: 'Save successfully',
						showCancel: false
					});
					uni.hideLoading();
				},
				fail: e => {
					uni.hideLoading();
					uni.showModal({
						content: 'Failed to save',
						showCancel: false
					});
				}
			};
			uni.showLoading({
				title: 'Saving...'
			});
			if (types === 'videoTempPath') {
				uni.saveVideoToPhotosAlbum(obj);
			} else {
				uni.saveImageToPhotosAlbum(obj);
			}
		}
	}
};
</script>

<style>
.media-box {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 30rpx 0;
	width: 100%;
}
.image {
	height: 400rpx;
	overflow: hidden;
}
.image image {
	width: 100%;
	height: 100%;
}
video {
	width: 100%;
}
.uni-button {
	margin: 30rpx 0;
}
</style>
