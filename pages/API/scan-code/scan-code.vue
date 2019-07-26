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
            scan: function() {
                // #ifdef APP-PLUS
                if (this.checkPermission() !== 1) {
                    return;
                }
                // #endif
                uni.scanCode({
                    success: (res) => {
                        this.result = res.result
                    }
                });
            }
            // #ifdef APP-PLUS
            ,
            checkPermission(code) {
                let status = permision.getSetting('camera');
                if (status === 0 || status === 1) {
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
        min-height: 50upx;
        line-height: 50upx;
    }
</style>
