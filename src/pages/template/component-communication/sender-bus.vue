<template>
    <view class="sender-container">
        <button type="primary" @click="send">自定义EventBus</button>
    </view>
</template>

<script>
    export default {
        methods: {
            send() {
                let num = parseInt(Math.random() * 10000)
                uni.$emit('cc', {
                    msg: 'From event bus -> ' + num
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
