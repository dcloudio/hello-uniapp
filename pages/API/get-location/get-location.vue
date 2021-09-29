<template>
    <view>
        <page-head :title="title"></page-head>
        <view class="uni-padding-wrap">
            <view style="background:#FFFFFF; padding:40rpx;">
                <view class="uni-hello-text uni-center">当前位置经纬度</view>
                <block v-if="hasLocation === false">
                    <view class="uni-h2 uni-center uni-common-mt">未获取</view>
                </block>
                <block v-if="hasLocation === true">
                    <view class="uni-h2 uni-center uni-common-mt">
                        <text>E: {{location.longitude[0]}}°{{location.longitude[1]}}′</text>
                        <text>\nN: {{location.latitude[0]}}°{{location.latitude[1]}}′</text>
                    </view>
                </block>
            </view>
            <view class="uni-btn-v">
                <button type="primary" @tap="getLocation">获取位置</button>
                <button @tap="clear">清空</button>
            </view>
        </view>
        <uni-popup :show="type === 'showpopup'" mode="fixed" @hidePopup="togglePopup('')">
            <view class="popup-view">
                <text class="popup-title">需要用户授权位置权限</text>
                <view class="uni-flex popup-buttons">
                    <button class="uni-flex-item" type="primary" open-type="openSetting" @tap="openSetting">设置</button>
                    <button class="uni-flex-item" @tap="togglePopup('')">取消</button>
                </view>
            </view>
        </uni-popup>
    </view>
</template>
<script>
    import * as util from '../../../common/util.js'
    var formatLocation = util.formatLocation;
    // #ifdef APP-PLUS
    import permision from "@/common/permission.js"
    // #endif

    export default {
        data() {
            return {
                title: 'getLocation',
                hasLocation: false,
                location: {},
                type: ''
            }
        },
        methods: {
            togglePopup(type) {
                this.type = type;
            },
            showConfirm() {
                this.type = 'showpopup';
            },
            hideConfirm() {
                this.type = '';
            },
            async getLocation() {
                // #ifdef APP-PLUS
                let status = await this.checkPermission();
                if (status !== 1) {
                    return;
                }
                // #endif
                // #ifdef MP-WEIXIN || MP-TOUTIAO || MP-QQ
                let status = await this.getSetting();
                if (status === 2) {
                    this.showConfirm();
                    return;
                }
                // #endif

                this.doGetLocation();
            },
            doGetLocation() {
                uni.getLocation({
                    success: (res) => {
                        this.hasLocation = true;
                        this.location = formatLocation(res.longitude, res.latitude);
                    },
                    fail: (err) => {
                        // #ifdef MP-BAIDU
                        if (err.errCode === 202 || err.errCode === 10003) { // 202模拟器 10003真机 user deny
                            this.showConfirm();
                        }
                        // #endif
                        // #ifndef MP-BAIDU
                        if (err.errMsg.indexOf("auth deny") >= 0) {
                            uni.showToast({
                                title: "访问位置被拒绝"
                            })
                        } else {
                            uni.showToast({
                                title: err.errMsg
                            })
                        }
                        // #endif
                    }
                })
            },
            getSetting: function() {
                return new Promise((resolve, reject) => {
                    uni.getSetting({
                        success: (res) => {
                            if (res.authSetting['scope.userLocation'] === undefined) {
                                resolve(0);
                                return;
                            }
                            if (res.authSetting['scope.userLocation']) {
                                resolve(1);
                            } else {
                                resolve(2);
                            }
                        }
                    });
                });
            },
            openSetting: function() {
                this.hideConfirm();
                uni.openSetting({
                    success: (res) => {
                        if (res.authSetting && res.authSetting['scope.userLocation']) {
                            this.doGetLocation();
                        }
                    },
                    fail: (err) => {}
                })
            },
            async checkPermission() {
                let status = permision.isIOS ? await permision.requestIOS('location') :
                    await permision.requestAndroid('android.permission.ACCESS_FINE_LOCATION');

                if (status === null || status === 1) {
                    status = 1;
                } else if (status === 2) {
                    uni.showModal({
                        content: "系统定位已关闭",
                        confirmText: "确定",
                        showCancel: false,
                        success: function(res) {
                        }
                    })
                } else if (status.code) {
                    uni.showModal({
                        content: status.message
                    })
                } else {
                    uni.showModal({
                        content: "需要定位权限",
                        confirmText: "设置",
                        success: function(res) {
                            if (res.confirm) {
                                permision.gotoAppSetting();
                            }
                        }
                    })
                }

                return status;
            },
            clear: function() {
                this.hasLocation = false
            }
        }
    }
</script>

<style>
    .popup-view {
        width: 500rpx;
    }

    .popup-title {
        display: block;
        font-size: 16px;
        line-height: 3;
        margin-bottom: 10px;
        text-align: center;
    }

    .popup-buttons button {
        margin-left: 4px;
        margin-right: 4px;
    }
</style>
