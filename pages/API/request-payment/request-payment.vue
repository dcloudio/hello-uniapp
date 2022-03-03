<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap">
			<view style="background:#FFF; padding:50rpx 0;">
				<view class="uni-hello-text uni-center"><text>Payment amount</text></view>
				<view class="uni-h1 uni-center uni-common-mt">
					<text class="rmbLogo">￥</text>
					<input class="price" type="digit" :value="price" maxlength="4" @input="priceChange" />
				</view>
			</view>
			<view class="uni-btn-v uni-common-mt">
				<!-- #ifdef MP-WEIXIN -->
				<button type="primary" @click="weixinPay" :loading="loading">WeChat Payment</button>
				<!-- #endif -->
				<!-- #ifdef APP-PLUS -->
				<template v-if="providerList.length > 0">
					<button v-for="(item,index) in providerList" :key="index" @click="requestPayment(item,index)" :loading="item.loading">{{item.name}} Payments</button>
				</template>
				<!-- #endif -->
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'request-payment',
				loading: false,
				price: 1,
				providerList: []
			}
		},
		onLoad: function() {
			// #ifdef APP-PLUS
			uni.getProvider({
				service: "payment",
				success: (e) => {
					console.log("payment success:" + JSON.stringify(e));
					let providerList = [];
					e.provider.map((value) => {
						switch (value) {
							case 'alipay':
								providerList.push({
									name: 'Alipay',
									id: value,
									loading: false
								});
								break;
							case 'wxpay':
								providerList.push({
									name: 'WeChat',
									id: value,
									loading: false
								});
								break;
							default:
								break;
						}
					})
					this.providerList = providerList;
				},
				fail: (e) => {
					console.log("Failed to obtain payment channel:", e);
				}
			});
			// #endif
		},
		methods: {
			loginMpWeixin() {
				return new Promise((resolve, reject) => {
					uni.login({
						provider: 'weixin',
						success(res) {
							console.warn('This uses uni-id to handle WeChat applet login, for details refer to: https://uniapp.dcloud.net.cn/uniCloud/uni-id')
							uni.request({
								url: 'https://97fca9f2-41f6-449f-a35e-3f135d4c3875.bspapp.com/http/user-center',
								method: 'POST',
								data: {
									action: 'loginByWeixin',
									params: {
										code: res.code,
										platform: 'mp-weixin'
									}
								},
								success(res) {
									if (res.data.code !== 0) {
										reject(new Error('Failed to get openid：', res.result.msg))
										return
									}
									uni.setStorageSync('openid', res.data.openid)
									resolve(res.data.openid)
								},
								fail(err) {
									reject(new Error('Failed to get openid：' + err))
								}
							})
						},
						fail(err) {
							reject(err)
						}
					})
				})
			},
			async weixinPay() {
				let openid = uni.getStorageSync('openid')
				console.log("Initiate payment");
				this.loading = true;
				if (!openid) {
					try {
						openid = await this.loginMpWeixin()
					} catch (e) {
						console.error(e)
					}

					if (!openid) {
						uni.showModal({
							content: 'Failed to get openid',
							showCancel: false
						})
						this.loading = false
						return
					}
				}
				this.openid = openid
				let orderInfo = await this.getOrderInfo('wxpay')
				if (!orderInfo) {
					uni.showModal({
						content: 'Failed to get payment information',
						showCancel: false
					})
					return
				}
				uni.requestPayment({
					...orderInfo,
					success: (res) => {
						uni.showToast({
							title: "Thank you for your sponsorship!"
						})
					},
					fail: (res) => {
						uni.showModal({
							content: "The payment failed due to: " + res
								.errMsg,
							showCancel: false
						})
					},
					complete: () => {
						this.loading = false;
					}
				})
			},
			async requestPayment(e, index) {
				this.providerList[index].loading = true;
				const provider = e.id
				let orderInfo = await this.getOrderInfo(provider);
				if (!orderInfo) {
					uni.showModal({
						content: 'Failed to get payment information',
						showCancel: false
					})
					return
				}
				console.log('--------orderInfo--------')
				console.log(orderInfo);
				uni.requestPayment({
					provider,
					orderInfo: orderInfo,
					success: (e) => {
						console.log("success", e);
						uni.showToast({
							title: "Thank you for your sponsorship!"
						})
					},
					fail: (e) => {
						console.log("fail", e);
						uni.showModal({
							content: "The payment failed due to: " + e.errMsg,
							showCancel: false
						})
					},
					complete: () => {
						this.providerList[index].loading = false;
					}
				})
			},
			getOrderInfo(provider) {
				return new Promise((resolve, reject) => {
					if (!this.price) {
						reject(new Error('Please enter the amount'))
					}
					console.warn('This uses uni-pay to process payments, for details refer to: https://uniapp.dcloud.io/uniCloud/unipay')
					uni.request({
						method: 'POST',
						url: 'https://97fca9f2-41f6-449f-a35e-3f135d4c3875.bspapp.com/http/pay',
						data: {
							provider,
							openid: this.openid,
							totalFee: Number(this.price) * 100, // Switch to a unit of division
							// #ifdef APP-PLUS
							platform: 'app-plus',
							// #endif
							// #ifdef MP-WEIXIN
							platform: 'mp-weixin',
							// #endif
						},
						success(res) {
							if (res.data.code === 0) {
								resolve(res.data.orderInfo)
							} else {
								reject(new Error('Failed to get payment information' + res.data.msg))
							}
						},
						fail(err) {
							reject(new Error('Request for payment interface failed' + err))
						}
					})
				})
			},
			priceChange(e) {
				console.log(e.detail.value)
				this.price = e.detail.value;
			}
		}
	}
</script>

<style>
	.rmbLogo {
		font-size: 40rpx;
	}

	button {
		background-color: #007aff;
		color: #ffffff;
	}

	.uni-h1.uni-center {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: flex-end;
	}

	.price {
		border-bottom: 1px solid #eee;
		width: 200rpx;
		height: 80rpx;
		padding-bottom: 4rpx;
	}

	.ipaPayBtn {
		margin-top: 30rpx;
	}
</style>
