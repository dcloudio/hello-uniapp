<template>
    <view class="sender-container">
        <button type="primary" @click="send">自定义EventBus</button>
    </view>
</template>

<script>
    import bus from './bus.js'
    export default {
        methods: {
            send() {
                let num = parseInt(Math.random() * 10000)
                bus.$emit('cc', {
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
