<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap">
			<view v-if="imagePath !== ''" class="media-box image">
				<image class="image" mode="widthFix" :src="imagePath" />
			</view>
			<button type="primary"  class="uni-button" @click="saveImage">拍摄图片并保存到本地</button>
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
			<button type="primary" class="uni-button" @click="saveVideo">录制视频并保存到本地</button>
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
				content: '视频加载失败',
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
									title: '授权失败',
									content: 'Hello uni-app需要从您的相机获取图片，请在设置界面打开相关权限',
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
									content: 'Hello uni-app需要从您的相机获取视频，请在设置界面打开相关权限',
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
			// 如果已经下载本地路径，那么直接储存
			let obj = {
				filePath: url,
				success: () => {
					console.log('save success');
					uni.showModal({
						content: '保存成功',
						showCancel: false
					});
					uni.hideLoading();
				},
				fail: e => {
					uni.hideLoading();
					uni.showModal({
						content: '保存失败',
						showCancel: false
					});
				}
			};
			uni.showLoading({
				title: '保存中...'
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
