<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-btn-v"><button type="primary" @tap="fingerprint()" :disabled="disabled">按下开始识别指纹</button></view>
			<view style="width: 100%;text-align: center;">{{ result }}</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: '指纹',
			result: '',
			disabled: true
		};
	},
	onLoad() {
		// #ifdef APP-PLUS
		if (!plus.fingerprint.isSupport()) {
			this.result = '此设备不支持指纹识别';
			this.disabled = true;
		} else if (!plus.fingerprint.isKeyguardSecure()) {
			this.result = '此设备未设置密码锁屏，无法使用指纹识别';
			this.disabled = true;
		} else if (!plus.fingerprint.isEnrolledFingerprints()) {
			this.result = '此设备未录入指纹，请到设置中开启';
			this.disabled = true;
		} else {
			this.result = '此设备支持指纹识别';
			this.disabled = false;
		}
		// #endif
		// #ifdef MP-WEIXIN || MP-QQ
		this.disabled = false;
		this.result = '请在微信真机中使用，模拟器不支持';
		// #endif
		// #ifndef APP-PLUS || MP-WEIXIN ||  MP-QQ
		this.result = '此平台不支持指纹识别';
		// #endif
	},
	methods: {
		fingerprint: function() {
			// #ifdef APP-PLUS
			plus.fingerprint.authenticate(
				function() {
					plus.nativeUI.closeWaiting(); //兼容Android平台关闭等待框
					plus.nativeUI.alert('指纹识别成功');
				},
				function(e) {
					switch (e.code) {
						case e.AUTHENTICATE_MISMATCH:
							plus.nativeUI.toast('指纹匹配失败，请重新输入');
							break;
						case e.AUTHENTICATE_OVERLIMIT:
							plus.nativeUI.closeWaiting(); //兼容Android平台关闭等待框
							plus.nativeUI.alert('指纹识别失败次数超出限制，请使用其它方式进行认证');
							break;
						case e.CANCEL:
							plus.nativeUI.toast('已取消识别');
							break;
						default:
							plus.nativeUI.closeWaiting(); //兼容Android平台关闭等待框
							plus.nativeUI.alert('指纹识别失败，请重试');
							break;
					}
				}
			);
			// Android平台手动弹出等待提示框
			if ('Android' == plus.os.name) {
				plus.nativeUI.showWaiting('指纹识别中...').onclose = function() {
					plus.fingerprint.cancel();
				};
			}
			// #endif

			// #ifdef MP-WEIXIN || MP-QQ
			wx.startSoterAuthentication({
				requestAuthModes: ['fingerPrint'],
				challenge: '123456',
				authContent: '请用指纹解锁',
				success(res) {
					uni.showToast({
						title: '识别成功',
						mask: false,
						duration: 1500
					});
				}
			});
			// #endif
		}
	}
};
</script>

<style></style>
