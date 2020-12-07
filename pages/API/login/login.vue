<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap">
			<view style="background:#FFF; padding:40rpx;">
				<block v-if="hasLogin === true">
					<view class="uni-h3 uni-center uni-common-mt">已登录
						<text v-if="isUniverifyLogin" style="font-size: 0.8em;">
							<i v-if="!phoneNumber.length" class="uni-icon_toast uni-loading"></i>
							<i v-else>（{{phoneNumber}}）</i>
						</text>
					</view>
					<view class="uni-hello-text uni-center">
						<text>每个账号仅需登录 1 次，\n后续每次进入页面即可自动拉取用户信息。</text>
					</view>
				</block>
				<block v-if="hasLogin === false">
					<view class="uni-h3 uni-center uni-common-mt">未登录</view>
					<view class="uni-hello-text uni-center">
						请点击按钮登录
					</view>
				</block>
			</view>
			<view class="uni-btn-v uni- uni-common-mt">
				<!-- #ifdef MP-TOUTIAO -->
				<button type="primary" class="page-body-button" v-for="(value,key) in providerList" @click="tologin(value)" :key="key">
					登录
				</button>
				<!-- #endif -->
				<!-- #ifndef MP-TOUTIAO -->
				<button type="primary" class="page-body-button" v-for="(value,key) in providerList" :disabled="value.id === 'univerify' ? univerifyBtnDisabled : false"
				 @click="tologin(value)" :key="key">{{value.name}}</button>
				<!-- #endif -->
			</view>
		</view>
	</view>
</template>
<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	const univerifyInfoKey = 'univerifyInfo';

	export default {
		data() {
			return {
				title: 'login',
				providerList: [],
				phoneNumber: '',
				univerifyBtnDisabled: true
			}
		},
		computed: {
			...mapState(['hasLogin', 'isUniverifyLogin'])
		},
		onLoad() {
			uni.getProvider({
				service: 'oauth',
				success: (result) => {
					this.providerList = result.provider.map((value) => {
						let providerName = '';
						switch (value) {
							case 'weixin':
								providerName = '微信登录'
								break;
							case 'qq':
								providerName = 'QQ登录'
								break;
							case 'sinaweibo':
								providerName = '新浪微博登录'
								break;
							case 'xiaomi':
								providerName = '小米登录'
								break;
							case 'alipay':
								providerName = '支付宝登录'
								break;
							case 'baidu':
								providerName = '百度登录'
								break;
							case 'toutiao':
								providerName = '头条登录'
								break;
							case 'apple':
								providerName = '苹果登录'
								break;
							case 'univerify':
								uni.preLogin({
									provider: value,
									success: (res) => {
										// 成功
										console.log("preLogin success: ", res);
										this.univerifyBtnDisabled = false;
									},
									fail: (res) => {
										// 失败
										console.log("preLogin fail: ", res);
										// 失败
										console.log("preLogin fail: ", res.errCode)
										console.log("preLogin fail: ", res.errMsg)
										this.setUniverifyLogin(false);
									}
								})
								providerName = '一键登录'
								break;
						}
						return {
							name: providerName,
							id: value
						}
					});

				},
				fail: (error) => {
					console.log('获取登录通道失败', error);
				}
			});

			uni.onAuthViewOtherLoginButtonClick(() => {
				uni.closeAuthView();
				this.Toast({
					title: '其他登录方式'
				})
			})

			if (this.hasLogin && this.isUniverifyLogin) {
				this.getPhoneNumber(uni.getStorageSync(univerifyInfoKey))
			}
		},
		methods: {
			...mapMutations(['login', 'setUniverifyLogin']),
			Toast(data, duration = 1000) {
				uni.showToast(Object.assign({}, data, {
					duration
				}))
			},
			tologin(provider) {
				uni.login({
					provider: provider.id,
					// #ifdef MP-ALIPAY
					scopes: 'auth_user', //支付宝小程序需设置授权类型
					// #endif
					success: (res) => {
						console.log('login success:', res);
						// 更新保存在 store 中的登录状态
						this.login(provider.id);

						if (provider.id === 'univerify') {
							this.setUniverifyLogin(true);
							uni.closeAuthView();

							const {
								access_token,
								openid
							} = res.authResult

							// 注意大小写
							const univerifyInfo = {
								provider: provider.id,
								accessToken: access_token,
								openid
							}

							this.getPhoneNumber(univerifyInfo);
						} else {
							this.setUniverifyLogin(false);
						}
						// #ifdef MP-WEIXIN
						console.warn('如需获取openid请参考uni-id: https://uniapp.dcloud.net.cn/uniCloud/uni-id')
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
								console.log(res);
								if (res.data.code !== 0) {
									console.log('获取openid失败：', res.result.msg);
									return
								}
								uni.setStorageSync('openid', res.data.openid)
							},
							fail(err) {
								console.log('获取openid失败：', err);
							}
						})
						// #endif
					},
					fail: (err) => {
						console.log('login fail:', err);
					}
				});
			},
			getPhoneNumber(univerifyInfo) {
				uni.request({
					url: 'https://97fca9f2-41f6-449f-a35e-3f135d4c3875.bspapp.com/http/univerify-login',
					method: 'POST',
					data: univerifyInfo,
					success: (res) => {
						console.log(res);
						const {
							data
						} = res;
						if (data.success) {
							this.phoneNumber = data.phoneNumber;
							uni.setStorageSync(univerifyInfoKey, univerifyInfo)
						} else {
							this.Toast({
								icon: 'none',
								title: `手机号获取失败`
							})
							console.error(res);
						}

					},
					fail: (err) => {
						this.Toast({
							title: '一键登录失败'
						})
					}
				})
			}
		}
	}
</script>

<style>
	button {
		background-color: #007aff;
		color: #ffffff;
	}
</style>
