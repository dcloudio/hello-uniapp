<template>
    <view>
        <page-head :title="title"></page-head>
        <view class="uni-padding-wrap">
            <view style="background:#FFFFFF; padding:40rpx;">
                <view class="uni-hello-text uni-center">Current location latitude and longitude</view>
                <block v-if="hasLocation === false">
                    <view class="uni-h2 uni-center uni-common-mt">Not acquired</view>
                </block>
                <block v-if="hasLocation === true">
                    <view class="uni-h2 uni-center uni-common-mt">
                        <text>E: {{location.longitude[0]}}°{{location.longitude[1]}}′</text>
                        <text>\nN: {{location.latitude[0]}}°{{location.latitude[1]}}′</text>
                    </view>
                </block>
            </view>
            <view class="uni-btn-v">
                <button type="primary" @tap="getLocation">Get Location</button>
                <button @tap="clear">Empty</button>
            </view>
        </view>
        <uni-popup :show="type === 'showpopup'" mode="fixed" @hidePopup="togglePopup('')">
            <view class="popup-view">
                <text class="popup-title">Requires user authorization for location permissions</text>
                <view class="uni-flex popup-buttons">
                    <button class="uni-flex-item" type="primary" open-type="openSetting" @tap="openSetting">Settings</button>
                    <button class="uni-flex-item" @tap="togglePopup('')">Cancel</button>
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
                        if (err.errCode === 202 || err.errCode === 10003) { // 202 emulator 10003 real user deny
                            this.showConfirm();
                        }
                        // #endif
                        // #ifndef MP-BAIDU
                        if (err.errMsg.indexOf("auth deny") >= 0) {
                            uni.showToast({
                                title: "Access to the location is denied"
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
                        content: "System positioning is closed",
                        confirmText: "Determine",
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
                        content: "Positioning permission required",
                        confirmText: "Settings",
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
