<template>
    <view>
        <page-head :title="title"></page-head>
        <view class="uni-padding-wrap uni-common-mt">
            <button :loading="loading" :disabled="loading" type="primary" class="btn" @click="show">显示广告</button>
        </view>
        <!-- #ifndef APP-PLUS -->
        <view class="ad-tips">
            <text>小程序端的广告ID由小程序平台提供</text>
        </view>
        <!-- #endif -->
    </view>
</template>

<script>
    export default {
        data() {
            return {
                title: '激励视频广告',
                loading: false
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
