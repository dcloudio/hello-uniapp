<template>
	<view>
		<page-head title="websocket通讯示例"></page-head>
		<view class="uni-padding-wrap">
			<view class="uni-btn-v">
				<view class="websocket-msg">{{showMsg}}</view>
				<input class="websocket-room" type="text" value="" v-model.trim="roomId" placeholder="请输入一个房间号" />
				<button type="primary" @click="connect">连接websocket服务</button>
				<button v-show="connected" type="primary" @click="send">发送一条消息</button>
				<button type="primary" @click="close">断开websocket服务</button>
				<view class="websocket-msg">同时运行两个hello uniapp填入相同的房间号进行测试</view>
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
				msg: false,
				roomId: ''
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
			uni.closeSocket()
		},
		methods: {
			connect() {
				if (this.roomId === '') {
					uni.showModal({
						content: '请输入一个房间号',
						showCancel: false
					})
					return false
				}
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
				uni.connectSocket({
					url: 'wss://connect.websocket.in/hello_uni_app?room_id=' + this.roomId,
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
				uni.onSocketOpen((res) => {
					this.connecting = false
					this.connected = true
					uni.hideLoading()
					uni.showToast({
						icon: 'none',
						title: '连接成功'
					})
					console.log('onOpen', res);
				})
				uni.onSocketError((err) => {
					this.connecting = false
					this.connected = false
					uni.hideLoading()
					uni.showModal({
						content: '连接失败，可能是websocket服务不可用，请稍后再试',
						showCancel: false
					})
					console.log('onError', err);
				})
				uni.onSocketMessage((res) => {
					this.msg = res.data
					console.log('onMessage', res)
				})
				uni.onSocketClose((res) => {
					this.connected = false
					this.startRecive = false
					this.msg = false
					console.log('onClose', res)
				})
			},
			send() {
				uni.sendSocketMessage({
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
				uni.closeSocket()
			}
		}
	}
</script>

<style>
	.uni-padding-wrap {
		width: 690rpx;
		padding: 0 30rpx;
	}

	.uni-btn-v {
		padding: 10rpx 0;
	}

	.uni-btn-v button {
		margin: 20rpx 0;
	}

	.websocket-room {
		height: 40px;
		line-height: 40px;
		text-align: center;
		border-bottom: solid 1px #DDDDDD;
		margin-bottom: 20px;
	}

	.websocket-msg {
		padding: 40px 0px;
		text-align: center;
		font-size: 14px;
		line-height: 40px;
		color: #666666;
	}
</style>
