<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title">扫码结果：</view>
			<view class="uni-list" v-if="result">
				<view class="uni-cell">
					<view class="scan-result">
						{{result}}
					</view>
				</view>
			</view>
			<view class="uni-btn-v">
				<button type="primary" @click="scan">扫一扫</button>
			</view>
		</view>
	</view>
</template>
<script>
	import permision from "@/common/permission.js"
	export default {
		data() {
			return {
				title: 'scanCode',
				result: ''
			}
		},
		methods: {
			async scan() {
				// #ifdef APP-PLUS
				let status = await this.checkPermission();
				if (status !== 1) {
				    return;
				}
				// #endif
				uni.scanCode({
					success: (res) => {
						this.result = res.result
					},
					fail: (err) => {
						// 需要注意的是小程序扫码不需要申请相机权限
					}
				});
			}
			// #ifdef APP-PLUS
			,
			async checkPermission(code) {
				let status = permision.isIOS ? await permision.requestIOS('camera') :
					await permision.requestAndroid('android.permission.CAMERA');

				if (status === null || status === 1) {
					status = 1;
				} else {
					uni.showModal({
						content: "需要相机权限",
						confirmText: "设置",
						success: function(res) {
							if (res.confirm) {
								permision.gotoAppSetting();
							}
						}
					})
				}
				return status;
			}
			// #endif
		}
	}
</script>

<style>
	.scan-result {
		min-height: 50rpx;
		line-height: 50rpx;
	}
</style>
