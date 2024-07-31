<template>
	<!-- 这是一个用户隐私保护提示的弹窗组件 -->
	<view class="privacy-dialog">
		<view v-if="isAgree === false" class="disagree-box">
			<view>
				<text>您拒绝了我们的隐私政策，将无法继续使用我们的产品</text>
			</view>
			<button @click="open" class="agree-btn">授权同意</button>
		</view>
		<view class="privacy-dialog-popup" :class="{ show: show }" type="center" background-color="#fff">
			<view class="privacy-dialog-popup-mask"></view>
			<view class="privacy-dialog-content">
				<text class="privacy-dialog-title">用户隐私保护提示</text>
				<text class="privacy-dialog-text">我们非常重视您的隐私保护，为了更好的保护您的隐私权益，我们将在您使用我们的产品前，向您说明我们的隐私政策。</text>
				<text class="privacy-dialog-text">
					您应当仔细阅读并同意
					<text class="link" @click="openPrivacyLink">《用户隐私保护协议》</text>
					，当您同意我们的隐私政策后，我们才会为您提供服务。
				</text>
				<text class="privacy-dialog-text">如您同意，请点击“同意”开始接受我们的服务。</text>
				<view class="privacy-dialog-btns">
					<button class="privacy-dialog-btn" @click="disagree">不同意</button>
					<button class="privacy-dialog-btn primary" @click="agree">同意</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "privacy-dialog",
		emits: ["agree", "disagree"],
		props: {
			tabBar: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				isAgree: null,
				show: false,
				keyName: "uni-privacy-agree"
			};
		},
		methods: {
			getIsAgree() {
				return uni.getStorageSync(this.keyName) ? true : false;
			},
			open() {
				this.show = true;
				if (this.tabBar) uni.hideTabBar();
			},
			close() {
				this.show = false;
			},
			openPrivacyLink() {
				let title = "用户隐私保护协议";
				let url = encodeURIComponent("https://hellouniapp.dcloud.net.cn/markdown-share-docs/7565357f4d32ae17e6a4988c9b41b666/index.html");
				uni.navigateTo({
					url: `/pages/component/web-view/web-view?title=${title}&url=${url}`
				});
			},
			quit() {
				this.close();
				this.isAgree = false;
				this.$emit("disagree");
				if (this.tabBar) uni.hideTabBar();
			},
			agree() {
				uni.setStorageSync(this.keyName, true);
				this.close();
				this.isAgree = true;
				this.$emit("agree");
				if (this.tabBar) uni.showTabBar();
			},
			disagree() {
				uni.showModal({
					title: "提示",
					content: "您必须同意我们的隐私政策才能继续使用我们的产品",
					showCancel: true,
					cancelText: "不同意",
					confirmText: "同意",
					success: res => {
						if (res.confirm) {
							this.agree();
						} else {
							this.quit();
						}
					}
				});
			}
		}
	};
</script>

<style lang="scss" scoped>
	.privacy-dialog {

		/* 居中弹窗 */
		.privacy-dialog-popup {
			position: fixed;
			z-index: 99;
			top: 0;
			bottom: 0;
			top: 0;
			right: 0;
			padding: 0;
			width: 750rpx;
			height: calc(100vh - 100rpx);
			display: none;

			&.show {
				display: block;
			}

			.privacy-dialog-popup-mask {
				position: absolute;
				top: 0;
				left: 0;
				width: 100vw;
				height: 100vh;
				background-color: rgba(0, 0, 0, 0.6);
			}
		}

		.privacy-dialog-content {
			position: relative;
			border-radius: 20rpx;
			margin: 40% auto 0 auto;
			padding: 30rpx;
			width: 650rpx;
			background-color: #fff;

			.privacy-dialog-title {
				font-size: 36rpx;
				color: #333;
				margin-bottom: 40rpx;
				text-align: center;
				font-weight: bold;
			}

			.privacy-dialog-text {
				font-size: 28rpx;
				color: #7a7e83;
				margin-bottom: 20rpx;
			}

			.privacy-dialog-btns {
				display: flex;
				justify-content: space-between;
				width: 100%;
				flex-direction: row;
			}

			.privacy-dialog-btn {
				flex: 1;
				margin: 0 20rpx;
				height: 80rpx;
				line-height: 80rpx;
				text-align: center;
				border-radius: 10rpx;
				font-size: 28rpx;

				&.primary {
					background-color: #18bc37;
					color: #fff;
				}
			}

			.link {
				color: #18bc37;
				text-decoration: underline;
			}
		}

		.disagree-box {
			padding: 30rpx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			.agree-btn {
				width: 650rpx;
				height: 80rpx;
				line-height: 80rpx;
				text-align: center;
				background-color: #18bc37;
				color: #fff;
				border-radius: 10rpx;
				margin-top: 20rpx;
			}
		}
	}
</style>
