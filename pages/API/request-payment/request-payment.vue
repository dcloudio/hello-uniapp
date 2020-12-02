<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap">
			<view style="background:#FFF; padding:50rpx 0;">
				<view class="uni-hello-text uni-center">支付金额</text></view>
				<view class="uni-h1 uni-center uni-common-mt">
					<text class="rmbLogo">￥</text>
					<input class="price" type="digit" :value="price" maxlength="4" @input="priceChange" />
				</view>
			</view>
			<view class="uni-btn-v uni-common-mt">
				<!-- #ifdef MP-WEIXIN -->
				<button type="primary" @click="weixinPay" :loading="loading">微信支付</button>
				<!-- #endif -->
				<!-- #ifdef APP-PLUS -->
				<template v-if="providerList.length > 0">
					<button v-for="(item,index) in providerList" :key="index" @click="requestPayment(item,index)" :loading="item.loading">{{item.name}}支付</button>
				</template>
				<!-- #endif -->
			</view>
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
									name: '支付宝',
									id: value,
									loading: false
								});
								break;
							case 'wxpay':
								providerList.push({
									name: '微信',
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
					console.log("获取支付通道失败：", e);
				}
			});
			// #endif
		},
		methods: {
			loginMpWeixin() {
				return new Promise((resolve, reject) => {
					//这里服务端基于uniCloud uni-id云函数实现，详情参考：https://uniapp.dcloud.net.cn/uniCloud/uni-id
					uni.login({
						provider: 'weixin',
						success(res) {
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
										reject(new Error('获取openid失败：', res.result.msg))
										return
									}
									uni.setStorageSync('openid', res.data.openid)
									resolve(res.data.openid)
								},
								fail(err) {
									reject(new Error('获取openid失败：' + err))
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
				console.log("发起支付");
				this.loading = true;
				if (!openid) {
					try {
						openid = await this.loginMpWeixin()
					} catch (e) {
						console.error(e)
					}

					if (!openid) {
						uni.showModal({
							content: '获取openid失败',
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
						content: '获取支付信息失败',
						showCancel: false
					})
					return
				}
				uni.requestPayment({
					...orderInfo,
					success: (res) => {
						uni.showToast({
							title: "感谢您的赞助!"
						})
					},
					fail: (res) => {
						uni.showModal({
							content: "支付失败,原因为: " + res
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
						content: '获取支付信息失败',
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
							title: "感谢您的赞助!"
						})
					},
					fail: (e) => {
						console.log("fail", e);
						uni.showModal({
							content: "支付失败,原因为: " + e.errMsg,
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
						reject(new Error('请输入金额'))
					}
					//这里服务端基于uniCloud unipay云函数实现，详情参考：https://uniapp.dcloud.net.cn/uniCloud/unipay
					uni.request({
						method: 'POST',
						url: 'https://97fca9f2-41f6-449f-a35e-3f135d4c3875.bspapp.com/http/pay',
						data: {
							provider,
							openid: this.openid,
							totalFee: Number(this.price) * 100, // 转为以分为单位
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
								reject(new Error('获取支付信息失败' + res.data.msg))
							}
						},
						fail(err) {
							reject(new Error('请求支付接口失败' + err))
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
