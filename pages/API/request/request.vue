<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-hello-text">
				Please click the button to initiate a request to the server
			</view>
			<view class="uni-textarea uni-common-mt">
				<textarea :value="res"></textarea>
			</view>
			<view class="uni-btn-v uni-common-mt">
				<button type="primary" @click="sendRequest" :loading="loading">Initiate a request（Callback）</button>
				<button type="primary" @click="sendRequest('promise')" :loading="loading">Initiate a request（Promise）</button>
				<button type="primary" @click="sendRequest('await')" :loading="loading">Initiate a request（Async/Await）</button>
			</view>
		</view>
	</view>
</template>
<script>
	const requestUrl = 'https://unidemo.dcloud.net.cn/ajax/echo/text?name=uni-app'
	const duration = 2000
	export default {
		data() {
			return {
				title: 'request',
				loading: false,
				res: ''
			}
		},
		methods: {
			sendRequest(mode) {
				this.loading = true;
				switch (mode) {
					case 'promise':
						this._requestPromise();
						break;
					case 'await':
						this._requestAwait();
						break;
					default:
						this._request();
						break;
				}
			},
			_request() {
				uni.request({
					url: requestUrl,
					dataType: 'text',
					data: {
						noncestr: Date.now()
					},
					success: (res) => {
						console.log('request success', res)
						uni.showToast({
							title: 'Request successful',
							icon: 'success',
							mask: true,
							duration: duration
						});
						this.res = 'Request Results : ' + JSON.stringify(res);
					},
					fail: (err) => {
						console.log('request fail', err);
						uni.showModal({
							content: err.errMsg,
							showCancel: false
						});
					},
					complete: () => {
						this.loading = false;
					}
				});
			},
			_requestPromise() {
				// #ifndef VUE3
				uni.request({
					url: requestUrl,
					dataType: 'text',
					data: {
						noncestr: Date.now()
					}
				}).then(res => {
					console.log('request success', res[1]);
					uni.showToast({
						title: 'Request successful',
						icon: 'success',
						mask: true,
						duration: duration
					});
					this.res = 'Request Results : ' + JSON.stringify(res[1]);
					this.loading = false;
				}).catch(err => {
					console.log('request fail', err);
					uni.showModal({
						content: err.errMsg,
						showCancel: false
					});

					this.loading = false;
				});
				// #endif

				// #ifdef VUE3
				uni.request({
					url: requestUrl,
					dataType: 'text',
					data: {
						noncestr: Date.now()
					}
				}).then(res => {
					console.log('request success', res);
					uni.showToast({
						title: 'Request successful',
						icon: 'success',
						mask: true,
						duration: duration
					});
					this.res = 'Request Results : ' + JSON.stringify(res);

					this.loading = false;
				}).catch(err => {
					console.log('request fail', err);
					uni.showModal({
						content: err.errMsg,
						showCancel: false
					});

					this.loading = false;
				});
				// #endif
			},
			async _requestAwait() {
				let res, err
				// #ifndef VUE3
				[err, res] = await uni.request({
					url: requestUrl,
					dataType: 'text',
					data: {
						noncestr: Date.now()
					}
				});
				// #endif
				// #ifdef VUE3
				try {
				res = await uni.request({
					url: requestUrl,
					dataType: 'text',
					data: {
						noncestr: Date.now()
					}
				});
				} catch(e){
					err=e
				}
				// #endif
				if (err) {
					console.log('request fail', err);
					uni.showModal({
						content: err.errMsg,
						showCancel: false
					});
				} else {
					console.log('request success', res)
					uni.showToast({
						title: 'Request successful',
						icon: 'success',
						mask: true,
						duration: duration
					});
					this.res = 'Request Results : ' + JSON.stringify(res);
				}
				this.loading = false;
			}
		}
	}
</script>
