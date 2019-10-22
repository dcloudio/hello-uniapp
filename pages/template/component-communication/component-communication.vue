<template>
	<view>
        <page-head title="组件通讯示例"></page-head>
        <view class="uni-padding-wrap">
            <reciver></reciver>
            <sender></sender>
            <sender-bus></sender-bus>
        </view>
	</view>
</template>

<script>
    import reciver from './reciver.vue'
    import sender from './sender.vue'
    import senderBus from './sender-bus.vue'
	export default {
        components:{
           reciver,
           sender,
           senderBus
        },
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
    .uni-padding-wrap{
        width: auto;
        padding: 20px 30px;
    }
</style>
