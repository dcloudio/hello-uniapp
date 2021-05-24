<template>
    <view>
        <page-head :title="title"></page-head>
        <view class="uni-padding-wrap uni-common-mt">
            <view class="uni-textarea">
                <textarea :value="value" placeholder="语音识别内容展示区域" disabled />
                </view>
			<view class="uni-common-mt uni-btn-v">
				<button type="primary" @tap="startRecognize">开始语音识别</button>
				<button type="primary" @tap="startRecognizeEnglish">开始语音识别（英语）</button>
			</view>
		</view>
	</view>
</template>
<script>
    import permision from "@/common/permission.js"
	export default {
		data() {
			return {
				title: 'speech',
				value: ''
			}
		},
		onUnload(){
			this.value = ""
		},
		methods: {
			async startRecognize () {
                // #ifdef APP-PLUS
                let status = await this.checkPermission();
                if (status !== 1) {
                    return;
                }
                // #endif

                // TODO ios 在没有请求过权限之前无法得知是否有相关权限，这种状态下需要直接调用语音，会弹出正在识别的toast
				var options = {};
				var that = this;
				options.engine = 'baidu';
				that.value = "";
				plus.speech.startRecognize(options, function (s) {
					console.log(s);
					that.value += s;
				}, function (e) {
					console.log("语音识别失败：" + e.message);
				});
			},
			async startRecognizeEnglish () {
                // #ifdef APP-PLUS
                let status = await this.checkPermission();
                if (status !== 1) {
                    return;
                }
                // #endif

                // TODO ios 在没有请求过权限之前无法得知是否有相关权限，这种状态下需要直接调用语音，会弹出正在识别的toast
				var options = {};
				var that = this;
				options.engine = 'baidu';
				options.lang = 'en-us';
				that.value = "";
				plus.speech.startRecognize(options, function (s) {
					console.log(s);
					that.value += s;
				}, function (e) {
					console.log("语音识别失败：" + e.message);
				});
			}
            // #ifdef APP-PLUS
            ,
            async checkPermission() {
                let status = permision.isIOS ? await permision.requestIOS('record') :
                    await permision.requestAndroid('android.permission.RECORD_AUDIO');

                if (status === null || status === 1) {
                    status = 1;
                } else if (status === 2) {
                    uni.showModal({
                        content: "系统麦克风已关闭",
                        confirmText: "确定",
                        showCancel: false,
                        success: function(res) {
                        }
                    })
                } else {
                    uni.showModal({
                        content: "需要麦克风权限",
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

</style>
