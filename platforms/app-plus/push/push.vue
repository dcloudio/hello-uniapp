<template>
    <view>
        <page-head :title="title"></page-head>
        <view class="uni-padding-wrap" v-if="provider[0]">
            <view class="uni-btn-v uni-common-mt">
                <button type="primary" @tap="listenTranMsg">监听透传数据</button>
            </view>
            <view class="uni-btn-v uni-common-mt">
                <button type="primary" @tap="requireTranMsg">发送"透传数据"消息</button>
            </view>
            <view class="uni-title uni-common-mt">透传内容：</view>
            <view class="uni-textarea">
                <textarea v-model="tranMsg" />
                </view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'push',
				provider: [],
				pushServer: 'http://demo.dcloud.net.cn/push/?',
				tranMsg:''
			}
		},
		onLoad: function () {
			uni.getProvider({
				service: "push",
				success: (e) => {
					console.log("success", e);
					this.provider = e.provider;
				},
				fail: (e) => {
					console.log("获取推送通道失败", e);
				}
			});
		},
		onUnload:function(){
			this.tranMsg = ''
		},
		methods: {
			listenTranMsg() {
                // IOS端在客户端在运行时收到推送消息触发receive事件，离线接收到的推送消息全部进入系统消息中心。点击消息中心的消息触发click
                plus.push.addEventListener('click', (msg)=> {
                    this.tranMsg = JSON.stringify(msg)
                });
				plus.push.addEventListener('receive',(msg)=>{
                    this.tranMsg = JSON.stringify(msg)
                })
                uni.showToast({
                    title: '开始监听透传数据',
                    icon: 'success'
                })
			},
			requireTranMsg() { //请求‘透传数据’推送消息
				var inf = plus.push.getClientInfo();
				var url = this.pushServer + 'type=tran&appid=' + encodeURIComponent(plus.runtime.appid);
				inf.id && (url += '&id=' + inf.id);
				url += ('&cid=' + encodeURIComponent(inf.clientid));
				if (plus.os.name == 'iOS') {
					url += ('&token=' + encodeURIComponent(inf.token));
				}
				url += ('&title=' + encodeURIComponent('Hello uniapp'));
				url += ('&content=' + encodeURIComponent('带透传数据推送通知！'));
				if(plus.os.name === 'iOS'){
					url += ('&payload=' + encodeURIComponent('{"title":"Hello uniapp Test","content":"test content"}'));
				}else{
					url += ('&payload=' + encodeURIComponent('\'{"title":"Hello uniapp Test","content":"test content"}\''));
				}
				url += ('&version=' + encodeURIComponent(plus.runtime.version));
				plus.runtime.openURL(url);
			}
		}
	}
</script>

<style>

</style>
