<template>
    <view class="sender-container">
        <button type="primary" @click="send">点击发送消息</button>
    </view>
</template>

<script>
    export default {
        methods: {
            send() {
                let num = parseInt(Math.random() * 10000)
                uni.$emit('cc', {
                    msg: 'From uni.$emit -> ' + num
                })
            }
        }
    }
</script>

<style>
    .sender-container{
        padding: 20px;
    }
</style>
