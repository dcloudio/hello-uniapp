<template>
    <view>
        <page-head :title="title"></page-head>
        <view class="uni-padding-wrap uni-common-mt">
            <button type="primary">页面主操作 Normal</button>
            <button type="primary" :loading="loading">页面主操作 Loading</button>
            <button type="primary" disabled="true">页面主操作 Disabled</button>

            <button type="default">页面次要操作 Normal</button>
            <button type="default" disabled="true">页面次要操作 Disabled</button>

            <button type="warn">警告类操作 Normal</button>
            <button type="warn" disabled="true">警告类操作 Disabled</button>

            <view class="button-sp-area">
                <button type="primary" plain="true">按钮</button>
                <button type="primary" disabled="true" plain="true">不可点击的按钮</button>

                <button type="default" plain="true">按钮</button>
                <button type="default" disabled="true" plain="true">按钮</button>

                <button class="mini-btn" type="primary" size="mini">按钮</button>
                <button class="mini-btn" type="default" size="mini">按钮</button>
                <button class="mini-btn" type="warn" size="mini">按钮</button>
            </view>
            <!-- #ifdef MP-WEIXIN || MP-QQ -->
            <button open-type="launchApp" app-parameter="uni-app" @error="openTypeError">打开APP</button>
            <button open-type="feedback">意见反馈</button>
            <!-- #endif -->
        </view>
    </view>
</template>
<script>
    export default {
        data() {
            return {
                title: 'button',
                loading: false
            }
        },
        onLoad() {
            this._timer = null;
        },
        onShow() {
            this.clearTimer();
            this._timer = setTimeout(() => {
                this.loading = true;
            }, 300)
        },
        onUnload() {
            this.clearTimer();
            this.loading = false;
        },
        methods: {
            openTypeError(error) {
                console.error('open-type error:', error);
            },
            clearTimer() {
                if (this._timer != null) {
                    clearTimeout(this._timer);
                }
            }
        }
    }
</script>

<style>
    button {
        margin-top: 30upx;
        margin-bottom: 30upx;
    }

    .button-sp-area {
        margin: 0 auto;
        width: 60%;
    }

    .mini-btn {
        margin-right: 10upx;
    }
</style>
