<template>
	<view class="page">
		<view class="feedback-title">
			<text>问题和意见</text>
			<text class="feedback-quick" @tap="chooseMsg">快速键入</text>
		</view>
		<view class="feedback-body"><textarea placeholder="请详细描述你的问题和意见..." v-model="sendDate.content" class="feedback-textare"></textarea></view>
		<view class="feedback-title"><text>图片(选填,提供问题截图,总大小10M以下)</text></view>
		<view class="feedback-body feedback-uploader">
			<view class="uni-uploader">
				<view class="uni-uploader-head">
					<view class="uni-uploader-title">点击预览图片</view>
					<view class="uni-uploader-info">{{ imageList.length }}/5</view>
				</view>
				<view class="uni-uploader-body">
					<view class="uni-uploader__files">
						<block v-for="(image, index) in imageList" :key="index">
							<view class="uni-uploader__file" style="position: relative;">
								<image class="uni-uploader__img" :src="image" @tap="previewImage(index)"></image>
								<view class="close-view" @click="close(index)">x</view>
							</view>
						</block>
						<view class="uni-uploader__input-box" v-show="imageList.length < 5"><view class="uni-uploader__input" @tap="chooseImg"></view></view>
					</view>
				</view>
			</view>
		</view>
		<view class="feedback-title"><text>QQ/邮箱</text></view>
		<view class="feedback-body"><input class="feedback-input" v-model="sendDate.contact" placeholder="(选填,方便我们联系你 )" /></view>
		<view class="feedback-title feedback-star-view">
			<text>应用评分</text>
			<view class="feedback-star-view"><uni-rate v-model="sendDate.score" color="#bbb"></uni-rate></view>
		</view>
		<button type="default" class="feedback-submit" @tap="send">提交</button>
		<view class="feedback-title"><text>用户反馈的结果可在app打包后于DCloud开发者中心查看</text></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			msgContents: ['界面显示错乱', '启动缓慢，卡出翔了', 'UI无法直视，丑哭了', '偶发性崩溃'],
			stars: [1, 2, 3, 4, 5],
			imageList: [],
			sendDate: {
				score: 0,
				content: '',
				contact: ''
			}
		};
	},
	onLoad() {
		this.deviceInfo = {
			// appid: plus.runtime.appid,
			appid: '__UNI__5D0B0CA',
			imei: plus.device.imei, //设备标识
			p: plus.os.name === 'Android' ? 'a' : 'i', //平台类型，i表示iOS平台，a表示Android平台。
			md: plus.device.model, //设备型号
			app_version: plus.runtime.version,
			plus_version: plus.runtime.innerVersion, //基座版本号
			os: plus.os.version,
			net: '' + plus.networkinfo.getCurrentType()
		};
		this.sendDate = Object.assign(this.deviceInfo, this.sendDate);
	},
	methods: {
		/**
		 * 关闭图片
		 * @param {Object} e
		 */
		close(e) {
			this.imageList.splice(e, 1);
		},

		/**
		 * 快速输入
		 */
		chooseMsg() {
			uni.showActionSheet({
				itemList: this.msgContents,
				success: res => {
					this.sendDate.content = this.msgContents[res.tapIndex];
				}
			});
		},

		/**
		 * 选择图片
		 */
		chooseImg() {
			//选择图片
			uni.chooseImage({
				sourceType: ['camera', 'album'],
				sizeType: 'compressed',
				count: 5 - this.imageList.length,
				success: res => {
					this.imageList = this.imageList.concat(res.tempFilePaths);
				}
			});
		},

		/**
		 * 评分
		 * @param {Object} e
		 */
		chooseStar(e) {
			//点击评星
			this.sendDate.score = e;
		},
		/**
		 * 预览图片
		 * @param {Object} index
		 */
		previewImage(index) {
			uni.previewImage({
				urls: this.imageList,
				current: this.imageList[index]
			});
		},

		/**
		 * 提交
		 */
		send() {
			//发送反馈
			if (this.sendDate.content.length === 0) {
				uni.showModal({
					content: '请输入问题和意见',
					showCancel: false
				});
				return;
			}
			uni.showLoading({
				title: '上传中...'
			});
			let imgs = this.imageList.map((value, index) => {
				return {
					name: 'images' + index,
					uri: value
				};
			});
			// TODO 服务端限制上传文件一次最大不超过 2M, 图片一次最多不超过5张
			this.request(this.sendDate, imgs)
				.then(res => {
					if (typeof res.data === 'string') {
						res.data = JSON.parse(res.data);
					}
					if (res.statusCode === 200 && res.data && res.data.ret === 0) {
						uni.showModal({
							content: '反馈成功',
							showCancel: false
						});
						this.imageList = [];
						this.sendDate = Object.assign(this.deviceInfo, {
							score: 0,
							content: '',
							contact: ''
						});
					} else if (res.statusCode !== 200) {
						uni.showModal({
							content: '反馈失败，错误码为：' + res.statusCode,
							showCancel: false
						});
					} else {
						uni.showModal({
							content: '反馈失败',
							showCancel: false
						});
					}
				})
				.catch(err => {
					console.log(err);
				});
		},

		/**
		 * 发送请求到后台
		 */
		request(sendDate, imgs) {
			return new Promise((resolve, reject) => {
				let fromData = {
					url: 'https://service.dcloud.net.cn/feedback',
					success: res => {
						resolve(res);
					},
					fail: res => {
						reject(res);
					},
					complete() {
						uni.hideLoading();
					}
				};

				if (imgs.length > 0) {
					fromData.files = imgs;
					fromData.formData = sendDate;
					uni.uploadFile(fromData);
				} else {
					fromData.data = sendDate;
					fromData.method = 'POST';
					uni.request(fromData);
				}
			});
		}
	}
};
</script>

<style>
page {
	background-color: #efeff4;
}

.input-view {
	font-size: 28rpx;
}

.close-view {
	text-align: center;
	line-height: 14px;
	height: 16px;
	width: 16px;
	border-radius: 50%;
	background: #ff5053;
	color: #ffffff;
	position: absolute;
	top: -6px;
	right: -4px;
	font-size: 12px;
}
</style>
