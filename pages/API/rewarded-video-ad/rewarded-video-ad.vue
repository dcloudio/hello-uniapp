<template>
    <view>
        <page-head :title="title"></page-head>
        <view class="uni-padding-wrap uni-common-mt">
            <button v-if="!loadError" :loading="loading" :disabled="loading" type="primary" class="btn" @click="show">Show ads</button>
            <button v-if="loadError" :loading="loading" :disabled="loading" type="primary" class="btn" @click="reloadAd">Reload ads</button>
        </view>
        <!-- #ifndef APP-PLUS -->
        <view class="ad-tips">
            <text>Ad IDs on the applet side are provided by the applet platform</text>
        </view>
        <!-- #endif -->
    </view>
</template>

<script>
    const ERROR_CODE = [-5001, -5002, -5003, -5004, -5005, -5006];

    export default {
        data() {
            return {
                title: 'Motivational video ads',
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
                    // The user clicked the [Close Ads] button
                    if (res && res.isEnded) {
                        // End of normal playback
                        console.log("onClose " + res.isEnded);
                    } else {
                        // Quit in the middle of playback
                        console.log("onClose " + res.isEnded);
                    }

                    setTimeout(() => {
                        uni.showToast({
                            title: "Motivational video" + (res.isEnded ? "Success" : "Not") + "Playback complete",
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
                            console.log('Motivational video Ad display failure', err)
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
