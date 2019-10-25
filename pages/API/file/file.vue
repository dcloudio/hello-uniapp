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
				<view class="uni-hello-addfile" @click="chooseImage">+ 请选择文件</view>
			</block>
			<view class="uni-btn-v">
				<button class="btn-savefile" @click="saveFile">保存文件</button>
				<button @click="clear">删除文件</button>
			</view>
			<!-- #ifndef MP-ALIPAY || MP-TOUTIAO -->
			<view class="btn-area">
				<button @click="openDocument">打开pdf文件</button>
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
										title: '授权失败',
										content: 'Hello uni-app需要从您的相机或相册获取图片，请在设置界面打开相关权限',
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
								title: '保存成功',
								content: '下次进入页面时，此文件仍可用',
								showCancel: false
							});
						},
						fail: (res) => {
							uni.showModal({
								title: '保存失败',
								content: '失败原因: ' + JSON.stringify(res),
								showCancel: false
							});
						}
					})
				} else {
					uni.showModal({
						content: '请选择文件',
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
					url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/helloworld.pdf',
					success: (res) => {
						uni.openDocument({
							filePath: res.tempFilePath,
							success: () => {
								console.log('打开文档成功');
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
		height: 360upx;
	}

	.btn-savefile {
		background-color: #007aff;
		color: #ffffff;
	}
</style>
