<template>
    <view>
        <page-head :title="title"></page-head>
        <view class="uni-padding-wrap uni-common-mt">
            <button v-if="!loadError" :loading="loading" :disabled="loading" type="primary" class="btn" @click="show">显示广告</button>
            <button v-if="loadError" :loading="loading" :disabled="loading" type="primary" class="btn" @click="reloadAd">重新加载广告</button>
        </view>
        <!-- #ifndef APP-PLUS -->
        <view class="ad-tips">
            <text>小程序端的广告ID由小程序平台提供</text>
        </view>
        <!-- #endif -->
    </view>
</template>

<script>
    const ERROR_CODE = [-5001, -5002, -5003, -5004, -5005, -5006];

    export default {
        data() {
            return {
                title: '激励视频广告',
                loading: false,
                loadError: false
            }
        },
        onReady() {
            // #ifdef APP-PLUS
            this.adOption = {
                adpid: '1507000689'
            };
            // #endif
            // #ifdef MP-WEIXIN
            this.adOption = {
                adUnitId: ''
            };
            // #endif
            this.createAd();
        },
        methods: {
            createAd() {
                var rewardedVideoAd = this.rewardedVideoAd = uni.createRewardedVideoAd(this.adOption);
                rewardedVideoAd.onLoad(() => {
                    this.loading = false;
                    this.loadError = false;
                    console.log('onLoad event')
                });
                rewardedVideoAd.onClose((res) => {
                    this.loading = true;
                    // 用户点击了【关闭广告】按钮
                    if (res && res.isEnded) {
                        // 正常播放结束
                        console.log("onClose " + res.isEnded);
                    } else {
                        // 播放中途退出
                        console.log("onClose " + res.isEnded);
                    }

                    setTimeout(() => {
                        uni.showToast({
                            title: "激励视频" + (res.isEnded ? "成功" : "未") + "播放完毕",
                            duration: 10000,
                            position: 'bottom'
                        })
                    }, 500)
                });
                rewardedVideoAd.onError((err) => {
                    this.loading = false;
                    if (err.code && ERROR_CODE.indexOf(err.code) !== -1) {
                        this.loadError = true;
                    }
                    console.log('onError event', err)
                });
                this.loading = true;
            },
            show() {
                const rewardedVideoAd = this.rewardedVideoAd;
                rewardedVideoAd.show().catch(() => {
                    rewardedVideoAd.load()
                        .then(() => rewardedVideoAd.show())
                        .catch(err => {
                            console.log('激励视频 广告显示失败', err)
                            uni.showToast({
                                title: err.errMsg || err.message,
                                duration: 5000,
                                position: 'bottom'
                            })
                        })
                })
            },
            reloadAd() {
                this.loading = true;
                this.rewardedVideoAd.load();
            }
        }
    }
</script>

<style>
    .btn {
        margin-bottom: 20px;
    }

    .ad-tips {
        color: #999;
        padding: 30px 0;
        text-align: center;
    }
</style>
