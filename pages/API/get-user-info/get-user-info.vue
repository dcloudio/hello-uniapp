<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap">
			<view style="background:#FFF; padding:40rpx;">
				<block v-if="hasUserInfo === false">
					<view class="uni-hello-text uni-center">
						<text>请点击下方按钮获取用户头像及昵称或手机号</text>
					</view>
				</block>
				<block v-if="hasUserInfo === true">
					<view class="uni-h4 uni-center uni-common-mt">{{userInfo.nickName || userInfo.email || userInfo.phoneNumber}}</view>
					<view v-if="userInfo.avatarUrl" style="padding:30rpx 0; text-align:center;">
						<image class="userinfo-avatar" :src="userInfo.avatarUrl"></image>
					</view>
				</block>
			</view>
			<view class="uni-btn-v">
				<!-- #ifdef APP-PLUS || MP-ALIPAY || MP-TOUTIAO -->
				<button type="primary" :loading="btnLoading" @click="getUserInfo">获取用户信息</button>
				<!-- #endif -->
				<!-- #ifdef MP-WEIXIN || MP-BAIDU || MP-QQ -->
				<button type="primary" open-type="getUserInfo" @getuserinfo="mpGetUserInfo">获取用户信息</button>
				<!-- #endif -->
				<button @click="clear">清空</button>
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

	export default {
		data() {
			return {
				title: 'getUserInfo',
				hasUserInfo: false,
				userInfo: {},
				btnLoading: false
			}
		},
		computed: {
			...mapState([
				'loginProvider',
				'isUniverifyLogin'
			])
		},
		methods: {
			...mapActions(['getPhoneNumber']),
			// 获取用户信息 API 在小程序可直接使用，在 5+App 里面需要先登录才能调用
			getUserInfo() {
				this.btnLoading = true;
				if (this.isUniverifyLogin) {
					// 一键登录
					this.getPhoneNumber(uni.getStorageSync('univerifyInfo')).then(phoneNumber => {
						this.hasUserInfo = true;
						this.userInfo = {
							phoneNumber
						};
					}).catch(err => {
						console.error('getUserInfo fail:', err);
						this.hasUserInfo = false;
					}).finally(() => {
						this.btnLoading = false;
					})
					return;
				}

				if(this.loginProvider === 'apple'){
					const nickname = uni.getStorageSync('apple_nickname')
					if(nickname){
						this.hasUserInfo = true;
						this.userInfo = { nickName:nickname }
						this.btnLoading = false;
						return;
					}
				}

				uni.getUserInfo({
					provider: this.loginProvider,
					success: (result) => {
						this.hasUserInfo = true;
						this.userInfo = result.userInfo;
					},
					fail: (error) => {
						console.log('getUserInfo fail', error);
						let content = error.errMsg;
						if (~content.indexOf('uni.login')) {
							content = '请在登录页面完成登录操作';
						}
						// #ifndef APP-PLUS
						uni.getSetting({
							success: (res) => {
								let authStatus = res.authSetting['scope.userInfo'];
								if (!authStatus) {
									uni.showModal({
										title: '授权失败',
										content: 'Hello uni-app需要获取您的用户信息，请在设置界面打开相关权限',
										success: (res) => {
											if (res.confirm) {
												uni.openSetting()
											}
										}
									})
								} else {
									uni.showModal({
										title: '获取用户信息失败',
										content: '错误原因' + content,
										showCancel: false
									});
								}
							}
						})
						// #endif
						// #ifdef APP-PLUS
						uni.showModal({
							title: '获取用户信息失败',
							content: '错误原因' + content,
							showCancel: false
						});
						// #endif
					},
					complete: () => {
						this.btnLoading = false;
					}
				});
			},
			mpGetUserInfo(result) {
				console.log('mpGetUserInfo', result);
				if (result.detail.errMsg !== 'getUserInfo:ok') {
					uni.showModal({
						title: '获取用户信息失败',
						content: '错误原因' + result.detail.errMsg,
						showCancel: false
					});
					return;
				}
				this.hasUserInfo = true;
				this.userInfo = result.detail.userInfo;
			},
			clear() {
				this.hasUserInfo = false;
				this.userInfo = {};
			}
		}
	}
</script>

<style>
	.userinfo-avatar {
		border-radius: 128rpx;
		width: 128rpx;
		height: 128rpx;
	}
</style>
