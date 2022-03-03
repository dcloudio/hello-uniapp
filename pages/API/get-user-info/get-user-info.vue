<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap">
			<view style="background:#FFF; padding:40rpx;">
				<block v-if="hasUserInfo === false">
					<view class="uni-hello-text uni-center">
						<text>Please click the button below to get user avatar and nickname or cell phone number</text>
					</view>
				</block>
				<block v-if="hasUserInfo === true">
					<view class="uni-h4 uni-center uni-common-mt">{{userInfo.nickName || userInfo.nickname || userInfo.gender || userInfo.email || userInfo.phoneNumber}}</view>
					<view v-if="userInfo.avatarUrl || userInfo.avatar_url " style="padding:30rpx 0; text-align:center;">
						<image class="userinfo-avatar" :src="userInfo.avatarUrl||userInfo.avatar_url"></image>
					</view>
				</block>
			</view>
			<view class="uni-btn-v">
				<!-- #ifdef APP-PLUS || MP-ALIPAY || MP-TOUTIAO -->
				<button type="primary" :loading="btnLoading" @click="getUserInfo">Obtain user information</button>
				<!-- #endif -->
				<!-- #ifdef MP-WEIXIN || MP-BAIDU || MP-QQ  || MP-JD -->
				<button type="primary" open-type="getUserInfo" @getuserinfo="mpGetUserInfo">Obtain user information</button>
				<!-- #endif -->
				<button @click="clear">Clear</button>
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
			// Obtain user information API you can use it directly in the applet, but in the 5+App you need to sign in before you can call it.
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
							content = 'Please complete the login operation on the login page';
						}
						// #ifndef APP-PLUS
						uni.getSetting({
							success: (res) => {
								let authStatus = res.authSetting['scope.userInfo'];
								if (!authStatus) {
									uni.showModal({
										title: 'Authorization failure',
										content: 'Hello uni-app You need to get your user information, please open the relevant permissions in the settings screen',
										success: (res) => {
											if (res.confirm) {
												uni.openSetting()
											}
										}
									})
								} else {
									uni.showModal({
										title: 'Failed to get user information',
										content: 'Reason for error' + content,
										showCancel: false
									});
								}
							}
						})
						// #endif
						// #ifdef APP-PLUS
						uni.showModal({
							title: 'Failed to get user information',
							content: 'Reason for error' + content,
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
						title: 'Failed to get user information',
						content: 'Reason for error' + result.detail.errMsg,
						showCancel: false
					});
					return;
				}
				this.hasUserInfo = true;
				if(result.detail && result.detail.userInfo){
					this.userInfo = result.detail.userInfo;
				}else{
					// #ifdef MP-JD
					this.userInfo = result.detail.user_info;
					// #endif
				}
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
