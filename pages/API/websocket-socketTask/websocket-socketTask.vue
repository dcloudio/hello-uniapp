<template>
	<view>
		<page-head title="websocket通讯示例"></page-head>
		<view class="uni-padding-wrap">
			<view class="uni-btn-v">
				<view class="websocket-msg">{{showMsg}}</view>
				<button type="primary" @click="connect">Connecting to websocket services</button>
				<button v-show="connected" type="primary" @click="send">Send a message</button>
				<button type="primary" @click="close">Disconnect websocket service</button>
				<view class="websocket-tips">After sending a message you will receive a message back from the server (with the same content as the message sent)</view>
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
						return 'Receive message：' + this.msg
					} else {
						return 'Waiting to receive messages'
					}
				} else {
					return 'Not yet connected'
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
						content: 'Connecting or already connected, please do not connect again',
						showCancel: false
					})
					return false
				}
				this.connecting = true
				uni.showLoading({
					title: 'Connecting...'
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
						// Here is the callback of successful interface call, not the callback of successful connection, please note

					},
					fail(err) {
						// Here is the callback of failure interface call, not the callback of successful connection, please note

					}
				})
				 console.log(this.socketTask);
				this.socketTask.onOpen((res) => {
					this.connecting = false
					this.connected = true
					uni.hideLoading()
					uni.showToast({
						icon: 'none',
						title: 'Connection successful'
					})
					console.log('onOpen', res);
				})
				this.socketTask.onError((err) => {
					this.connecting = false
					this.connected = false
					uni.hideLoading()
					uni.showModal({
						content: 'Connection failed, websocket service may not be available, please try again later',
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
