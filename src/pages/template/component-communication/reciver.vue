<template>
    <view>
        <view class="reciver">
            {{msg===''?'等待发送':'收到消息：'}}{{msg}}
        </view>
    </view>
</template>

<script>
    import bus from './bus.js'
    export default {
        data() {
            return {
                msg: ''
            }
        },
        created() {
            uni.$on('cc', this.recive)
            bus.$on('cc', this.recive)
        },
        beforeDestroy() {
            uni.$off('cc',this.recive)
            bus.$off('cc', this.recive)
        },
        methods: {
            recive(e) {
                this.msg = e.msg
            }
        }
    }
</script>

<style>
    .reciver {
        padding: 40px 0px;
        text-align: center;
        line-height: 40px;
    }
</style>
