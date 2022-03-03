<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<block v-if="tempFilePath">
				<image :src="tempFilePath" class="image" mode="aspectFit"></image>
			</block>
			<block v-if="!tempFilePath && savedFilePath">
				<image :src="savedFilePath" class="image" mode="aspectFit"></image>
			</block>
			<block v-if="!tempFilePath && !savedFilePath">
				<view class="uni-hello-addfile" @click="chooseImage">+ Please select the file</view>
			</block>
			<view class="uni-btn-v">
				<button class="btn-savefile" @click="saveFile">Save file</button>
				<button @click="clear">Delete files</button>
			</view>
			<!-- #ifndef MP-ALIPAY || MP-TOUTIAO -->
			<view class="btn-area">
				<button @click="openDocument">Open pdf file</button>
			</view>
			<!-- #endif -->
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'saveFile',
				tempFilePath: '',
				savedFilePath: ''
			}
		},
		onLoad() {
			this.savedFilePath = uni.getStorageSync('savedFilePath');
		},
		methods: {
			chooseImage() {
				uni.chooseImage({
					count: 1,
					success: (res) => {
						this.tempFilePath = res.tempFilePaths[0];
					},
					fail: (err) => {
						// #ifdef MP
						uni.getSetting({
							success: (res) => {
								let authStatus = res.authSetting['scope.album'] && res.authSetting['scope.camera'];
								if (!authStatus) {
									uni.showModal({
										title: 'Authorization failure',
										content: 'Hello uni-app needs to get pictures from your camera or album, please open the relevant permission in the settings screen',
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
			saveFile() {
				if (this.tempFilePath.length > 0) {
					uni.saveFile({
						tempFilePath: this.tempFilePath,
						success: (res) => {
							this.savedFilePath = res.savedFilePath;
							uni.setStorageSync('savedFilePath', res.savedFilePath);
							uni.showModal({
								title: 'Save successfully',
								content: 'This file will still be available the next time you go to the page',
								showCancel: false
							});
						},
						fail: (res) => {
							uni.showModal({
								title: 'Failed to save',
								content: 'Reasons for Failure: ' + JSON.stringify(res),
								showCancel: false
							});
						}
					})
				} else {
					uni.showModal({
						content: 'Please select the file',
						showCancel: false
					});
				}
			},
			clear() {
				uni.setStorageSync('savedFilePath', '');
				this.tempFilePath = '';
				this.savedFilePath = '';
			},
			// #ifndef MP-ALIPAY || MP-TOUTIAO
			openDocument() {
				uni.downloadFile({
					url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b3f1d0b0-5168-11eb-bd01-97bc1429a9ff.pdf',
					success: (res) => {
						uni.openDocument({
							filePath: res.tempFilePath,
							success: () => {
								console.log('Open document successfully');
							}
						});
					}
				});
			},
			// #endif
		}
	}
</script>

<style>
	.image {
		width: 100%;
		height: 360rpx;
	}

	.btn-savefile {
		background-color: #007aff;
		color: #ffffff;
	}
</style>
