<template>
    <view>
        <page-head :title="title"></page-head>
        <view class="ad-view">
			<!-- #ifdef MP-WEIXIN -->
			<ad :unit-id="unitId" type="feed" @load="adload" @error="aderror"/>
			<!-- #endif -->
			<!-- #ifdef APP-PLUS -->
            <ad adpid="1111111111" @load="adload" @error="aderror"/>
			<!-- #endif -->
            <!-- #ifdef APP-PLUS -->
            <view class="ad-tips" v-if="!isLoad">
                <text>{{adMessage}}</text>
            </view>
            <!-- #endif -->
            <!-- #ifndef APP-PLUS -->
            <view class="ad-tips">
                <text>小程序端的广告ID由小程序平台提供</text>
            </view>
            <!-- #endif -->
        </view>
        <view class="tips">
            <text class="tips-text">本示例页面仅演示ad组件。另点此可体验</text><text class="tips-hl" @click="gotoapi">激励视频API</text><text class="tips-text">。</text>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                title: 'AD组件',
                unitId: '',
                isLoad: false,
                adMessage: "广告加载中..."
            }
        },
        onLoad() {
            // #ifdef MP-WEIXIN
            this.unitId = '';
            // #endif
            // #ifdef MP-TOUTIAO
            this.unitId = ''
            // #endif
            // #ifdef MP-QQ
            this.unitId = ''
            // #endif
        },
        methods: {
            adload() {
                this.isLoad = true;
            },
            aderror(e) {
                this.adMessage = e.detail.errMsg;
            },
            gotoapi() {
                uni.navigateTo({
                    url: "/pages/API/rewarded-video-ad/rewarded-video-ad"
                })
            }
        }
    }
</script>

<style>
    .content {
        background-color: #DBDBDB;
        padding: 10px;
    }

    .ad-view {
        background-color: #FFFFFF;
        margin-bottom: 10px;
    }

    .ad-tips {
        color: #999;
        padding: 30px 0;
        text-align: center;
    }

    .tips {
        margin-top: 30px;
        text-align: center;
        line-height: 42px;
    }

    .tips-text {
        color: #444;
    }

    .tips-hl {
        color: #007AFF;
        margin-left: 1px;
    }
</style>
