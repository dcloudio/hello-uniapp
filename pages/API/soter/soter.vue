<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-btn-v">
                <button type="primary" @click="checkIsSupportSoterAuthentication">检查支持的认证方式</button>
                <button type="primary" @click="checkIsSoterEnrolledInDeviceFingerPrint">检查是否录入指纹</button>
                <button type="primary" @click="checkIsSoterEnrolledInDeviceFaceID">检查是否录入FaceID</button>
                <button type="primary" @click="startSoterAuthenticationFingerPrint">开始指纹认证</button>
                <button type="primary" @click="startSoterAuthenticationFaceID">开始FaceID认证</button>
            </view>
			<view style="width: 100%;text-align: center;">{{ result }}</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: '生物认证',
			result: ''
		};
	},
	onLoad() {

	},
	methods: {
		checkIsSupportSoterAuthentication() {
			uni.checkIsSupportSoterAuthentication({
				success(res) {
                    uni.showModal({
                        content: '支持的认证方式：' + res.supportMode,
                        showCancel: false
                    })
					console.log(res);
				},
				fail(err) {
					console.log(err);
				}
			})
		},
		checkIsSoterEnrolledInDeviceFingerPrint() {
			uni.checkIsSoterEnrolledInDevice({
				checkAuthMode: 'fingerPrint',
				success(res) {
                    if(res.isEnrolled) {
                        uni.showToast({
                            icon: 'none',
                            title: '已录入指纹'
                        })
                    }else {
                        uni.showModal({
                            content: '未录入指纹',
                            showCancel: false
                        })
                    }
					console.log(res);
				},
				fail(err) {
                    uni.showModal({
                        content: '未录入指纹',
                        showCancel: false
                    })
					console.log(err);
				}
			})
		},
		checkIsSoterEnrolledInDeviceFaceID() {
			uni.checkIsSoterEnrolledInDevice({
				checkAuthMode: 'facial',
				success(res) {
                    if(res.isEnrolled) {
                        uni.showToast({
                            icon: 'none',
                            title: '已录入FaceID'
                        })
                    }else {
                        uni.showModal({
                            content: '未录入FaceID',
                            showCancel: false
                        })
                    }
					console.log(res);
				},
				fail(err) {
                    uni.showModal({
                        content: '未录入FaceID',
                        showCancel: false
                    })
					console.log(err);
				}
			})
		},
		startSoterAuthenticationFingerPrint() {
			uni.startSoterAuthentication({
				requestAuthModes: ['fingerPrint'],
				challenge: '123456',
				authContent: '请用指纹解锁',
				success(res) {
                    uni.showToast({
                        icon: 'none',
                        title: '指纹验证成功'
                    })
					console.log(res);
				},
				fail(err) {
                    uni.showModal({
                        content: '指纹验证失败，errCode：' + err.errCode,
                        showCancel: false
                    })
					console.log(err);
				}
			})
		},
		startSoterAuthenticationFaceID() {
			uni.startSoterAuthentication({
				requestAuthModes: ['facial'],
				challenge: '123456',
				authContent: '请用FaceID解锁',
				success(res) {
                    uni.showToast({
                        icon: 'none',
                        title: 'FaceID验证成功'
                    })
					console.log(res);
				},
				fail(err) {
                    uni.showModal({
                        content: 'FaceID验证失败，errCode：' + err.errCode,
                        showCancel: false
                    })
					console.log(err);
				}
			})
		}
	}
};
</script>

<style></style>
