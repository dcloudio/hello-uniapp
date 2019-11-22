<template>
    <view class="root">
        <view class="page-body">
            <view class="new-page__color" @click="setColorIndex(colorIndex>1?0:colorIndex+1)" :style="{backgroundColor:currentColor}">
                <text class="new-page__color-text">点击改变颜色</text>
            </view>
            <view class="new-page__text-box">
                <text class="new-page__text">点击上方色块使用vuex在页面之间进行通讯</text>
            </view>
            <view class="new-page__button">
                <button class="new-page__button-item" @click="emitMsg">向上一页面传递数据</button>
            </view>
        </view>
    </view>
</template>
<script>
    import {
        mapState,
        mapGetters,
        mapMutations
    } from 'vuex'
    export default {
        data() {
            return {}
        },
        computed: {
            ...mapState(['colorIndex', 'colorList']),
            ...mapGetters(['currentColor'])
        },
        methods: {
            ...mapMutations(['setColorIndex']),
            emitMsg() {
                uni.$emit('postMsg', {
                    msg: 'From: Vue Page'
                })
            }
        }
    }
</script>
<style>
    page {
        display: flex;
        min-height: 100%;
    }

    .new-page__text {
        font-size: 14px;
        color: #666666;
    }

    .root {
        display: flex;
        flex: 1;
        flex-direction: column;
    }

    .page-body {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding-top: 50px;
    }

    .new-page__text-box {
        padding: 20px;
    }

    .new-page__color {
        display: flex;
        width: 200px;
        height: 100px;
        justify-content: center;
        align-items: center;
    }

    .new-page__color-text {
        font-size: 14px;
        color: #FFFFFF;
        line-height: 30px;
        text-align: center;
    }

    .new-page__button-item {
        margin-top: 15px;
        width: 300px;
    }
</style>
