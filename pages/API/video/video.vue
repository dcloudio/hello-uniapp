<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-common-mt">
			<view class="uni-list">
				<view class="uni-list-cell">
					<view class="uni-list-cell-left">
						<view class="uni-label">Video Source</view>
					</view>
					<view class="uni-list-cell-right">
						<picker :range="sourceType" @change="sourceTypeChange" :value="sourceTypeIndex">
							<view class="uni-input">{{sourceType[sourceTypeIndex]}}</view>
						</picker>
					</view>
				</view>
			</view>
		</view>
		<!-- #ifdef APP-PLUS || MP-WEIXIN -->
		<view class="uni-title uni-common-mt uni-common-pl">Camera Location</view>
		<view class="uni-hello-text camera-tips">Note: Some Android phones can not be effective due to the system ROM does not support, after opening the shooting interface can be operated to switch</view>
		<view class="uni-list">
			<radio-group @change="radioChange">
				<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in cameraList" :key="item.value">
					<radio :value="item.value" :checked="index === cameraIndex">{{item.name}}</radio>
				</label>
			</radio-group>
		</view>
		<!-- #endif -->
		<template v-if="!src">
			<view class="uni-hello-addfile" @tap="chooseVideo">+ Add video</view>
		</template>
		<template v-else>
			<video :src="src" class="video"></video>
		</template>
	</view>
</template>
<script>
	var sourceType = [
		['camera'],
		['album'],
		['camera', 'album']
	]
	export default {
		data() {
			return {
				title: 'chooseVideo',
				sourceTypeIndex: 2,
				sourceType: ['Shot', 'Album', 'Shot or Album'],
				src: '',
				cameraList: [{
						value: 'back',
						name: 'Rear camera',
						checked: 'true'
					},
					{
						value: 'front',
						name: 'Front camera'
					},
				],
				cameraIndex: 0
			}
		},
		onUnload() {
			this.src = '',
				this.sourceTypeIndex = 2,
				this.sourceType = ['Shot', 'Album', 'Shot or Album'];
		},
		methods: {
			radioChange(evt) {
				for (let i = 0; i < this.cameraList.length; i++) {
					if (this.cameraList[i].value === evt.detail.value) {
						this.cameraIndex = i;
						break;
					}
				}
			},
			sourceTypeChange: function(e) {
				this.sourceTypeIndex = parseInt(e.detail.value)
			},
			chooseVideo: function() {
				uni.chooseVideo({
					camera: this.cameraList[this.cameraIndex].value,
					sourceType: sourceType[this.sourceTypeIndex],
					success: (res) => {
						this.src = res.tempFilePath
					},
					fail: (err) => {
						// #ifdef MP
						uni.getSetting({
							success: (res) => {
								let authStatus = false;
								switch (this.sourceTypeIndex) {
									case 0:
										authStatus = res.authSetting['scope.camera'];
										break;
									case 1:
										authStatus = res.authSetting['scope.album'];
										break;
									case 2:
										authStatus = res.authSetting['scope.album'] && res.authSetting['scope.camera'];
										break;
									default:
										break;
								}
								if (!authStatus) {
									uni.showModal({
										title: 'Authorization failure',
										content: 'Hello uni-app needs to get video from your camera or album, please turn on the relevant permission in the settings screen',
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
				})
			}
		}
	}
</script>

<style>
	.video {
		width: 100%;
	}

	.camera-tips {
		padding: 10rpx 30rpx;
	}
</style>
