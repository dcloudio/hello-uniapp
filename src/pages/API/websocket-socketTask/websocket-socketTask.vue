<template>
	<view>
		<page-head title="websocket通讯示例"></page-head>
		<view class="uni-padding-wrap">
			<view class="uni-btn-v">
				<view class="websocket-msg">{{showMsg}}</view>
				<button type="primary" @click="connect">连接websocket服务</button>
				<button v-show="connected" type="primary" @click="send">发送一条消息</button>
				<button type="primary" @click="close">断开websocket服务</button>
				<view class="websocket-tips">发送消息后会收到一条服务器返回的消息（与发送的消息内容一致）</view>
			</view>
		</view>
	</view>
</template>

<script>
	let platform = uni.getSystemInfoSync().platform
	export default {
		data() {
			return {
				connected: false,
				connecting: false,
				socketTask: false,
				msg: false,
			}
		},
		computed: {
			showMsg() {
				if (this.connected) {
					if (this.msg) {
						return '收到消息：' + this.msg
					} else {
						return '等待接收消息'
					}
				} else {
					return '尚未连接'
				}
			}
		},
		onUnload() {
            uni.hideLoading()
			if (this.socketTask && this.socketTask.close) {
				this.socketTask.close()
			}
		},
		methods: {
			connect() {
				if (this.connected || this.connecting) {
					uni.showModal({
						content: '正在连接或者已经连接，请勿重复连接',
						showCancel: false
					})
					return false
				}
				this.connecting = true
				uni.showLoading({
					title: '连接中...'
				})
				this.socketTask = uni.connectSocket({
					url: 'wss://echo.websocket.org',
					data() {
						return {
							msg: 'Hello'
						}
					},
					// #ifdef MP
					header: {
						'content-type': 'application/json'
					},
					// #endif
					// #ifdef MP-WEIXIN
					method: 'GET',
					// #endif
					success(res) {
						// 这里是接口调用成功的回调，不是连接成功的回调，请注意
					},
					fail(err) {
						// 这里是接口调用失败的回调，不是连接失败的回调，请注意
					}
				})
                console.log(this.socketTask);
				this.socketTask.onOpen((res) => {
					this.connecting = false
					this.connected = true
					uni.hideLoading()
					uni.showToast({
						icon: 'none',
						title: '连接成功'
					})
					console.log('onOpen', res);
				})
				this.socketTask.onError((err) => {
					this.connecting = false
					this.connected = false
					uni.hideLoading()
					uni.showModal({
						content: '连接失败，可能是websocket服务不可用，请稍后再试',
						showCancel: false
					})
					console.log('onError', err);
				})
				this.socketTask.onMessage((res) => {
					this.msg = res.data
					console.log('onMessage', res)
				})
				this.socketTask.onClose((res) => {
					this.connected = false
					this.startRecive = false
					this.socketTask = false
					this.msg = false
					console.log('onClose', res)
				})
				console.log('task', this.socketTask)
			},
			send() {
				this.socketTask.send({
					data: 'from ' + platform + ' : ' + parseInt(Math.random() * 10000).toString(),
					success(res) {
						console.log(res);
					},
					fail(err) {
						console.log(err);
					}
				})
			},
			close() {
				if (this.socketTask && this.socketTask.close) {
					this.socketTask.close()
				}
			}
		}
	}
</script>

<style>
	
	.uni-btn-v {
		padding: 10rpx 0;
	}

	.uni-btn-v button {
		margin: 20rpx 0;
	}

	.websocket-msg {
		padding: 40px 0px;
		text-align: center;
		font-size: 14px;
		line-height: 40px;
		color: #666666;
	}

    .websocket-tips{
        padding: 40px 0px;
        text-align: center;
        font-size: 14px;
        line-height: 24px;
        color: #666666;
    }
</style>
