<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap">
			<view style="background:#FFF; padding:40rpx;">
				<block v-if="hasLogin === true">
					<view class="uni-h3 uni-center uni-common-mt">Logged in
						<text v-if="isUniverifyLogin" style="font-size: 0.8em;">
							<i v-if="!phoneNumber.length" class="uni-icon_toast uni-loading"></i>
							<i v-else>（{{phoneNumber}}）</i>
						</text>
					</view>
					<view class="uni-hello-text uni-center">
						<text>Each account only needs to log in 1 time, \n each subsequent entry page can automatically pull the user information.</text>
					</view>
				</block>
				<block v-if="hasLogin === false">
					<view class="uni-h3 uni-center uni-common-mt">Not logged in</view>
					<view class="uni-hello-text uni-center">
						Please click the button to log in
					</view>
				</block>
			</view>
			<view class="uni-btn-v uni- uni-common-mt">
				<!-- #ifdef MP-TOUTIAO  -->
				<button type="primary" class="page-body-button" v-for="(value,key) in providerList" @click="tologin(value)" :key="key">
					Login
				</button>
				<!-- #endif -->
				<!-- #ifndef MP-TOUTIAO -->
				<button type="primary" class="page-body-button" v-for="(value,key) in providerList" @click="tologin(value)"
				 :loading="value.id === 'univerify' ? univerifyBtnLoading : false" :key="key">{{value.name}}</button>
				<!-- #endif -->
			</view>
		</view>
	</view>
</template>
<script>
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex'
	const univerifyInfoKey = 'univerifyInfo';

	export default {
		data() {
			return {
				title: 'login',
				providerList: [],
				phoneNumber: '',
				univerifyBtnLoading: false
			}
		},
		computed: {
			...mapState(['hasLogin', 'isUniverifyLogin', 'univerifyErrorMsg'])
		},
		onLoad() {
			uni.getProvider({
				service: 'oauth',
				success: (result) => {
					this.providerList = result.provider.map((value) => {
						let providerName = '';
						switch (value) {
							case 'weixin':
								providerName = 'WeChat Login'
								break;
							case 'qq':
								providerName = 'QQ Login'
								break;
							case 'sinaweibo':
								providerName = 'Sina Weibo Login'
								break;
							case 'xiaomi':
								providerName = 'Xiaomi Login'
								break;
							case 'alipay':
								providerName = 'Alipay Login'
								break;
							case 'baidu':
								providerName = 'Baidu Login'
								break;
							case 'jd':
							  providerName = 'Jingdong Login'
							  break;
							case 'toutiao':
								providerName = 'toutiao Login'
								break;
							case 'apple':
								providerName = 'Apple Login'
								break;
							case 'univerify':
								providerName = 'Univerify Login'
								break;
						}
						return {
							name: providerName,
							id: value
						}
					});

				},
				fail: (error) => {
					console.log('Failed to get login channel', error);
				}
			});

			if (this.hasLogin && this.isUniverifyLogin) {
				this.getPhoneNumber(uni.getStorageSync(univerifyInfoKey)).then((phoneNumber) => {
					this.phoneNumber = phoneNumber
				})
			}
		},
		methods: {
			...mapMutations(['login', 'setUniverifyLogin']),
			...mapActions(['getPhoneNumber']),
			Toast(data, duration = 1000) {
				uni.showToast(Object.assign({}, data, {
					duration
				}))
			},
			tologin(provider) {
				if (provider.id === 'univerify') {
					this.univerifyBtnLoading = true;
				}

				// Univerify Login Pre-login has been performed at the time of APP onLaunch, which can significantly improve the login speed. After a successful login, the pre-login status will be reset
				uni.login({
					provider: provider.id,
					// #ifdef MP-ALIPAY
					scopes: 'auth_user', //Alipay small programs need to set the type of authorization
					// #endif
					success: async (res) => {
						console.log('login success:', res);
						this.Toast({
							title: 'Login successful'
						})
						// Update the login status saved in the store
						this.login(provider.id);

						// #ifdef APP-PLUS
						this.setUniverifyLogin(provider.id === 'univerify')
						switch (provider.id) {
							case 'univerify':
								this.loginByUniverify(provider.id, res)
								break;
							case 'apple':
								this.loginByApple(provider.id, res)
								break;
						}
						// #endif

						// #ifdef MP-WEIXIN
						console.warn('To get the openid please refer to uni-id: https://uniapp.dcloud.net.cn/uniCloud/uni-id')
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
									console.log('Failed to get openid：', res.data.errMsg);
									return
								}
								uni.setStorageSync('openid', res.data.openid)
							},
							fail(err) {
								console.log('Failed to get openid：', err);
							}
						})
						// #endif
					},
					fail: (err) => {
						console.log('login fail:', err);

						// Univerify Login Click on other login methods
						if (err.code == '30002') {
							uni.closeAuthView();
							this.Toast({
								title: 'Other login methods'
							})
							return;
						}

						// 未开通
						if (err.code == 1000) {
							uni.showModal({
								title: 'Login failure',
								content: `${err.errMsg}\n，Error Code：${err.code}`,
								confirmText: 'Opening Guide',
								cancelText: 'OK',
								success: (res) => {
									if (res.confirm) {
										setTimeout(() => {
											plus.runtime.openWeb('https://ask.dcloud.net.cn/article/37965')
										}, 500)
									}
								}
							});
							return;
						}

						// Univerify Login Pre-login failure
						if (err.code == '30005') {
							uni.showModal({
								showCancel: false,
								title: '预登录失败',
								content: this.univerifyErrorMsg || err.errMsg
							});
							return;
						}

						// Univerify Login user closes the authentication screen
						if (err.code != '30003') {
							uni.showModal({
								showCancel: false,
								title: 'Login failure',
								content: JSON.stringify(err)
							});
						}
					},
					complete: () => {
						this.univerifyBtnLoading = false;
					}
				});
			},
			loginByUniverify(provider, res) {
				this.setUniverifyLogin(true);
				uni.closeAuthView();

				const univerifyInfo = {
					provider,
					...res.authResult,
				}

				this.getPhoneNumber(univerifyInfo).then((phoneNumber) => {
					this.phoneNumber = phoneNumber;
					uni.setStorageSync(univerifyInfoKey, univerifyInfo)
				}).catch(err => {
					uni.showModal({
						showCancel: false,
						title: 'Cell phone number acquisition failure',
						content: `${err.errMsg}\n，Error Code：${err.code}`
					})
					console.error(res);
				})
			},
			async loginByApple(provider, res) {
				// Obtain user information
				let getUserInfoErr, result
				// #ifndef VUE3
				[getUserInfoErr, result] = await uni.getUserInfo({
					provider
				});
				// #endif
				
				// #ifdef VUE3
				try {
					result = await uni.getUserInfo({
						provider
					});
				} catch(e) {
					getUserInfoErr = e
				}
				// #endif
				
				if (getUserInfoErr) {
					let content = getUserInfoErr.errMsg;
					if (~content.indexOf('uni.login')) {
						content = 'Please complete the login operation on the login page';
					}
					uni.showModal({
						title: 'Failed to get user information',
						content: 'Reason for error' + content,
						showCancel: false
					});
				}
				// uni-id Apple Login
				console.warn('This uses uni-id to handle Apple logins, for details refer to: https://uniapp.dcloud.net.cn/uniCloud/uni-id')
				uni.request({
					url: 'https://97fca9f2-41f6-449f-a35e-3f135d4c3875.bspapp.com/http/user-center',
					method: 'POST',
					data: {
						action: 'loginByApple',
						params: result.userInfo
					},
					success: (res) => {
						console.log('uniId login success', res);
						if(res.data.code !== 0){
							uni.showModal({
								showCancel: false,
								content: `Apple login failure: ${JSON.stringify(res.data.msg)}`,
							})
						} else {
							uni.setStorageSync('openid', res.data.openid)
							uni.setStorageSync('apple_nickname', res.data.userInfo.nickname)
						}
					},
					fail: (e) => {
						uni.showModal({
							content: `Apple login failure: ${JSON.stringify(e)}`,
							showCancel: false
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
