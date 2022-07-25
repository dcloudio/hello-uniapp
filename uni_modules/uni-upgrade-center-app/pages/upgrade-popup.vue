<template>
	<view class="mask flex-center">
		<view class="content botton-radius">
			<view class="content-top">
				<text class="content-top-text">{{title}}</text>
				<image class="content-top" style="top: 0;" width="100%" height="100%" src="../images/bg_top.png">
				</image>
			</view>
			<view class="content-header"></view>
			<view class="content-body">
				<view class="title">
					<text>{{subTitle}}</text>
					<!-- <text style="padding-left:20rpx;font-size: 0.5em;color: #666;">v.{{version}}</text> -->
				</view>
				<view class="body">
					<scroll-view class="box-des-scroll" scroll-y="true">
						<text class="box-des">
							{{contents}}
						</text>
					</scroll-view>
				</view>
				<view class="footer flex-center">
					<template v-if="isAppStore">
						<button class="content-button" style="border: none;color: #fff;" plain @click="jumpToAppStore">
							{{downLoadBtnTextiOS}}
						</button>
					</template>
					<template v-else>
						<template v-if="!downloadSuccess">
							<view class="progress-box flex-column" v-if="downloading">
								<progress class="progress" border-radius="35" :percent="downLoadPercent"
									activeColor="#3DA7FF" show-info stroke-width="10" />
								<view style="width:100%;font-size: 28rpx;display: flex;justify-content: space-around;">
									<text>{{downLoadingText}}</text>
									<text>({{downloadedSize}}/{{packageFileSize}}M)</text>
								</view>
							</view>

							<button v-else class="content-button" style="border: none;color: #fff;" plain
								@click="updateApp">
								{{downLoadBtnText}}
							</button>
						</template>
						<button v-else-if="downloadSuccess && !installed" class="content-button"
							style="border: none;color: #fff;" plain :loading="installing" :disabled="installing"
							@click="installPackage">
							{{installing ? '正在安装……' : '下载完成，立即安装'}}
						</button>

						<button v-if="installed && isWGT" class="content-button" style="border: none;color: #fff;" plain
							@click="restart">
							安装完毕，点击重启
						</button>
					</template>
				</view>
			</view>

			<image v-if="!is_mandatory" class="close-img" src="../images/app_update_close.png"
				@click.stop="closeUpdate"></image>
		</view>
	</view>
</template>

<script>
	const localFilePathKey = 'UNI_ADMIN_UPGRADE_CENTER_LOCAL_FILE_PATH'
	const platform_iOS = 'iOS';
	let downloadTask = null;
	let openSchemePromise

	/**
	 * 对比版本号，如需要，请自行修改判断规则
	 * 支持比对	("3.0.0.0.0.1.0.1", "3.0.0.0.0.1")	("3.0.0.1", "3.0")	("3.1.1", "3.1.1.1") 之类的
	 * @param {Object} v1
	 * @param {Object} v2
	 * v1 > v2 return 1
	 * v1 < v2 return -1
	 * v1 == v2 return 0
	 */
	function compare(v1 = '0', v2 = '0') {
		v1 = String(v1).split('.')
		v2 = String(v2).split('.')
		const minVersionLens = Math.min(v1.length, v2.length);

		let result = 0;
		for (let i = 0; i < minVersionLens; i++) {
			const curV1 = Number(v1[i])
			const curV2 = Number(v2[i])

			if (curV1 > curV2) {
				result = 1
				break;
			} else if (curV1 < curV2) {
				result = -1
				break;
			}
		}

		if (result === 0 && (v1.length !== v2.length)) {
			const v1BiggerThenv2 = v1.length > v2.length;
			const maxLensVersion = v1BiggerThenv2 ? v1 : v2;
			for (let i = minVersionLens; i < maxLensVersion.length; i++) {
				const curVersion = Number(maxLensVersion[i])
				if (curVersion > 0) {
					v1BiggerThenv2 ? result = 1 : result = -1
					break;
				}
			}
		}

		return result;
	}

	export default {
		data() {
			return {
				// 从之前下载安装
				installForBeforeFilePath: '',

				// 安装
				installed: false,
				installing: false,

				// 下载
				downloadSuccess: false,
				downloading: false,

				downLoadPercent: 0,
				downloadedSize: 0,
				packageFileSize: 0,

				tempFilePath: '', // 要安装的本地包地址

				// 默认安装包信息
				title: '更新日志',
				contents: '',
				is_mandatory: false,

				// 可自定义属性
				subTitle: '发现新版本',
				downLoadBtnTextiOS: '立即跳转更新',
				downLoadBtnText: '立即下载更新',
				downLoadingText: '安装包下载中，请稍后'
			}
		},
		onLoad({
			local_storage_key
		}) {
			if (!local_storage_key) {
				console.error('local_storage_key为空，请检查后重试')
				uni.navigateBack()
				return;
			};

			const localPackageInfo = uni.getStorageSync(local_storage_key);
			if (!localPackageInfo) {
				console.error('安装包信息为空，请检查后重试')
				uni.navigateBack()
				return;
			};

			const requiredKey = ['version', 'url', 'type']
			for (let key in localPackageInfo) {
				if (requiredKey.indexOf(key) !== -1 && !localPackageInfo[key]) {
					console.error(`参数 ${key} 必填，请检查后重试`)
					uni.navigateBack()
					return;
				}
			}

			Object.assign(this, localPackageInfo)
			this.checkLocalStoragePackage()
		},
		onBackPress() {
			// 强制更新不允许返回
			if (this.is_mandatory) {
				return true
			}

			downloadTask && downloadTask.abort()
		},
		onHide() {
			openSchemePromise = null
		},
		computed: {
			isWGT() {
				return this.type === 'wgt'
			},
			isiOS() {
				return !this.isWGT ? this.platform.includes(platform_iOS) : false;
			},
			isAppStore() {
				return this.isiOS || (!this.isiOS && !this.isWGT && this.url.indexOf('.apk') === -1)
			}
		},
		methods: {
			checkLocalStoragePackage() {
				// 如果已经有下载好的包，则直接提示安装
				const localFilePathRecord = uni.getStorageSync(localFilePathKey)
				if (localFilePathRecord) {
					const {
						version,
						savedFilePath,
						installed
					} = localFilePathRecord

					// 比对版本
					if (!installed && compare(version, this.version) === 0) {
						this.downloadSuccess = true;
						this.installForBeforeFilePath = savedFilePath;
						this.tempFilePath = savedFilePath
					} else {
						// 如果保存的包版本小 或 已安装过，则直接删除
						this.deleteSavedFile(savedFilePath)
					}
				}
			},
			async closeUpdate() {
				if (this.downloading) {
					if (this.is_mandatory) {
						return uni.showToast({
							title: '下载中，请稍后……',
							icon: 'none',
							duration: 500
						})
					}
					uni.showModal({
						title: '是否取消下载？',
						cancelText: '否',
						confirmText: '是',
						success: res => {
							if (res.confirm) {
								downloadTask && downloadTask.abort()
								uni.navigateBack()
							}
						}
					});
					return;
				}

				if (this.downloadSuccess && this.tempFilePath) {
					// 包已经下载完毕，稍后安装，将包保存在本地
					await this.saveFile(this.tempFilePath, this.version)
					uni.navigateBack()
					return;
				}

				uni.navigateBack()
			},
			updateApp() {
				this.checkStoreScheme().catch(() => {
					this.downloadPackage()
				})
			},
			// 跳转应用商店
			checkStoreScheme() {
				if (this.store_list && this.store_list.length) {
					this.store_list
						.filter(item => item.enable)
						.sort((cur, next) => next.priority - cur.priority)
						.map(item => item.scheme)
						.reduce((promise, cur, curIndex) => {
							openSchemePromise = (promise || (promise = Promise.reject())).catch(() => {
								return new Promise((resolve, reject) => {
									plus.runtime.openURL(cur, (err) => {
										reject(err)
									})
								})
							})
							return openSchemePromise
						}, openSchemePromise)
					return openSchemePromise
				}
				
				return Promise.reject()
			},
			downloadPackage() {
				this.downloading = true;

				//下载包
				downloadTask = uni.downloadFile({
					url: this.url,
					success: res => {
						if (res.statusCode == 200) {
							this.downloadSuccess = true;
							this.tempFilePath = res.tempFilePath

							// 强制更新，直接安装
							if (this.is_mandatory) {
								this.installPackage();
							}
						}
					},
					complete: () => {
						this.downloading = false;

						this.downLoadPercent = 0
						this.downloadedSize = 0
						this.packageFileSize = 0

						downloadTask = null;
					}
				});

				downloadTask.onProgressUpdate(res => {
					this.downLoadPercent = res.progress;
					this.downloadedSize = (res.totalBytesWritten / Math.pow(1024, 2)).toFixed(2);
					this.packageFileSize = (res.totalBytesExpectedToWrite / Math.pow(1024, 2)).toFixed(2);
				});
			},
			installPackage() {
				// #ifdef APP-PLUS
				// wgt资源包安装
				if (this.isWGT) {
					this.installing = true;
				}
				plus.runtime.install(this.tempFilePath, {
					force: false
				}, async res => {
					this.installing = false;
					this.installed = true;

					// wgt包，安装后会提示 安装成功，是否重启
					if (this.isWGT) {
						// 强制更新安装完成重启
						if (this.is_mandatory) {
							uni.showLoading({
								icon: 'none',
								title: '安装成功，正在重启……'
							})

							setTimeout(() => {
								uni.hideLoading()
								this.restart();
							}, 1000)
						}
					} else {
						const localFilePathRecord = uni.getStorageSync(localFilePathKey)
						uni.setStorageSync(localFilePathKey, {
							...localFilePathRecord,
							installed: true
						})
					}
				}, async err => {
					// 如果是安装之前的包，安装失败后删除之前的包
					if (this.installForBeforeFilePath) {
						await this.deleteSavedFile(this.installForBeforeFilePath)
						this.installForBeforeFilePath = '';
					}

					// 安装失败需要重新下载安装包
					this.installing = false;
					this.installed = false;

					uni.showModal({
						title: '更新失败，请重新下载',
						content: err.message,
						showCancel: false
					});
				});

				// 非wgt包，安装跳出覆盖安装，此处直接返回上一页
				if (!this.isWGT && !this.is_mandatory) {
					uni.navigateBack()
				}
				// #endif
			},
			restart() {
				this.installed = false;
				// #ifdef APP-PLUS
				//更新完重启app
				plus.runtime.restart();
				// #endif
			},
			saveFile(tempFilePath, version) {
				return new Promise((resolve, reject) => {
					uni.saveFile({
						tempFilePath,
						success({
							savedFilePath
						}) {
							uni.setStorageSync(localFilePathKey, {
								version,
								savedFilePath
							})
						},
						complete() {
							resolve()
						}
					})
				})
			},
			deleteSavedFile(filePath) {
				uni.removeStorageSync(localFilePathKey)
				return uni.removeSavedFile({
					filePath
				})
			},
			jumpToAppStore() {
				plus.runtime.openURL(this.url);
			}
		}
	}
</script>

<style>
	page {
		background: transparent;
	}

	.flex-center {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		justify-content: center;
		align-items: center;
	}

	.mask {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, .65);
	}

	.botton-radius {
		border-bottom-left-radius: 30rpx;
		border-bottom-right-radius: 30rpx;
	}

	.content {
		position: relative;
		top: 0;
		width: 600rpx;
		background-color: #fff;
		box-sizing: border-box;
		padding: 0 50rpx;
		font-family: Source Han Sans CN;
	}

	.text {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		line-height: 200px;
		text-align: center;
		color: #FFFFFF;
	}

	.content-top {
		position: absolute;
		top: -195rpx;
		left: 0;
		width: 600rpx;
		height: 270rpx;
	}

	.content-top-text {
		font-size: 45rpx;
		font-weight: bold;
		color: #F8F8FA;
		position: absolute;
		top: 120rpx;
		left: 50rpx;
		z-index: 1;
	}

	.content-header {
		height: 70rpx;
	}

	.title {
		font-size: 33rpx;
		font-weight: bold;
		color: #3DA7FF;
		line-height: 38px;
	}

	.footer {
		height: 150rpx;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.box-des-scroll {
		box-sizing: border-box;
		padding: 0 40rpx;
		height: 200rpx;
		text-align: left;
	}

	.box-des {
		font-size: 26rpx;
		color: #000000;
		line-height: 50rpx;
	}

	.progress-box {
		width: 100%;
	}

	.progress {
		width: 90%;
		height: 40rpx;
		border-radius: 35px;
	}

	.close-img {
		width: 70rpx;
		height: 70rpx;
		z-index: 1000;
		position: absolute;
		bottom: -120rpx;
		left: calc(50% - 70rpx / 2);
	}

	.content-button {
		text-align: center;
		flex: 1;
		font-size: 30rpx;
		font-weight: 400;
		color: #FFFFFF;
		border-radius: 40rpx;
		margin: 0 18rpx;

		height: 80rpx;
		line-height: 80rpx;

		background: linear-gradient(to right, #1785ff, #3DA7FF);
	}

	.flex-column {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
