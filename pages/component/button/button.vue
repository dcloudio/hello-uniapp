<template>
    <view>
        <page-head :title="title"></page-head>
        <view class="uni-padding-wrap uni-common-mt">
            <button type="primary">Page Master Operation Normal</button>
            <button type="primary" :loading="loading">Page Master Operation Loading</button>
            <button type="primary" disabled="true">Page Master Operation Disabled</button>

            <button type="default">Page secondary operations Normal</button>
            <button type="default" disabled="true">Page secondary operations Disabled</button>

            <button type="warn">Warning type operation Normal</button>
            <button type="warn" disabled="true">Warning type operation Disabled</button>

            <view class="button-sp-area">
                <button type="primary" plain="true">Botton</button>
                <button type="primary" disabled="true" plain="true">Disabled Botton</button>

                <button type="default" plain="true">Botton</button>
                <button type="default" disabled="true" plain="true">Botton</button>

                <button class="mini-btn" type="primary" size="mini">Botton</button>
                <button class="mini-btn" type="default" size="mini">Botton</button>
                <button class="mini-btn" type="warn" size="mini">Botton</button>
            </view>
            <!-- #ifdef MP-WEIXIN || MP-QQ || MP-JD -->
            <button open-type="launchApp" app-parameter="uni-app" @error="openTypeError">Open APP</button>
            <button open-type="feedback">feedback</button>
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
        margin-top: 30rpx;
        margin-bottom: 30rpx;
    }

    .button-sp-area {
        margin: 0 auto;
        width: 60%;
    }

    .mini-btn {
        margin-right: 10rpx;
    }
</style>
