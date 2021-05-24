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

				// 一键登录已在APP onLaunch的时候进行了预登陆，可以显著提高登录速度。登录成功后，预登陆状态会重置
				uni.login({
					provider: provider.id,
					// #ifdef MP-ALIPAY
					scopes: 'auth_user', //支付宝小程序需设置授权类型
					// #endif
					success: async (res) => {
						console.log('login success:', res);
						this.Toast({
							title: '登录成功'
						})
						// 更新保存在 store 中的登录状态
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

						// 一键登录点击其他登录方式
						if (err.code == '30002') {
							uni.closeAuthView();
							this.Toast({
								title: '其他登录方式'
							})
							return;
						}

						// 未开通
						if (err.code == 1000) {
							uni.showModal({
								title: '登录失败',
								content: `${err.errMsg}\n，错误码：${err.code}`,
								confirmText: '开通指南',
								cancelText: '确定',
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

						// 一键登录预登陆失败
						if (err.code == '30005') {
							uni.showModal({
								showCancel: false,
								title: '预登录失败',
								content: this.univerifyErrorMsg || err.errMsg
							});
							return;
						}

						// 一键登录用户关闭验证界面
						if (err.code != '30003') {
							uni.showModal({
								showCancel: false,
								title: '登录失败',
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
						title: '手机号获取失败',
						content: `${err.errMsg}\n，错误码：${err.code}`
					})
					console.error(res);
				})
			},
			async loginByApple(provider, res) {
				// 获取用户信息
				const [getUserInfoErr, result] = await uni.getUserInfo({
					provider
				});
				if (getUserInfoErr) {
					let content = getUserInfoErr.errMsg;
					if (~content.indexOf('uni.login')) {
						content = '请在登录页面完成登录操作';
					}
					uni.showModal({
						title: '获取用户信息失败',
						content: '错误原因' + content,
						showCancel: false
					});
				}
				// uni-id 苹果登录
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
								content: `苹果登录失败: ${JSON.stringify(res.data.msg)}`,
							})
						} else {
							uni.setStorageSync('openid', res.data.openid)
							uni.setStorageSync('apple_nickname', res.data.userInfo.nickname)
						}
					},
					fail: (e) => {
						uni.showModal({
							content: `苹果登录失败: ${JSON.stringify(e)}`,
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
