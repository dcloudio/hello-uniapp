<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-btn-v">
                <button type="primary" @click="checkIsSupportSoterAuthentication">Check the supported authentication methods</button>
                <button type="primary" @click="checkIsSoterEnrolledInDeviceFingerPrint">Check if fingerprints are recorded</button>
                <button type="primary" @click="checkIsSoterEnrolledInDeviceFaceID">Check if FaceID is entered</button>
                <button type="primary" @click="startSoterAuthenticationFingerPrint">Start fingerprint authentication</button>
                <button type="primary" @click="startSoterAuthenticationFaceID">Start FaceID authentication</button>
            </view>
			<view style="width: 100%;text-align: center;">{{ result }}</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'Biological Certification',
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
                        content: 'Supported authentication methods：' + res.supportMode,
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
                            title: 'Fingerprinted'
                        })
                    }else {
                        uni.showModal({
                            content: 'No fingerprinting',
                            showCancel: false
                        })
                    }
					console.log(res);
				},
				fail(err) {
                    uni.showModal({
                        content: 'No fingerprinting',
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
                            title: 'FaceID has been recorded'
                        })
                    }else {
                        uni.showModal({
                            content: 'Unrecorded FaceID',
                            showCancel: false
                        })
                    }
					console.log(res);
				},
				fail(err) {
                    uni.showModal({
                        content: 'Unrecorded FaceID',
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
				authContent: 'Please use your fingerprint to unlock',
				success(res) {
                    uni.showToast({
                        icon: 'none',
                        title: 'Successful fingerprint verification'
                    })
					console.log(res);
				},
				fail(err) {
                    uni.showModal({
                        content: 'Fingerprint verification failure，errCode：' + err.errCode,
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
				authContent: 'Please use FaceID to unlock',
				success(res) {
                    uni.showToast({
                        icon: 'none',
                        title: 'FaceID verification successful'
                    })
					console.log(res);
				},
				fail(err) {
                    uni.showModal({
                        content: 'FaceID authentication failed，errCode：' + err.errCode,
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
