<template>
    <view>
        <view class="reciver">
            {{msg===''?'Waiting to be sent':'Receive message：'}}{{msg}}
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                msg: ''
            }
        },
        created() {
            uni.$on('cc', this.recive)
        },
        beforeDestroy() {
            uni.$off('cc',this.recive)
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
