<template>
	<view class="container">
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">uni-popoup component is used to pop up an overlay to the page, using scenarios such as: bottom pop-up sharing pop-ups, page insertion ads, etc.</text>
		</uni-card>
		<uni-section title="Basic example" type="line">
			<view class="example-body box">
				<button class="button" type="primary" @click="toggle('top')"><text class="button-text">top</text></button>
				<button class="button" type="primary" @click="toggle('bottom')"><text class="button-text">bottom</text></button>
				<button class="button" type="primary" @click="toggle('center')"><text class="button-text">center</text></button>
				<button class="button" type="primary" @click="toggle('left')"><text class="button-text">left</text></button>
				<button class="button" type="primary" @click="toggle('right')"><text class="button-text">right</text></button>
			</view>
		</uni-section>

		<uni-section title="提示消息" type="line">
			<view class="example-body box">
				<button class="button popup-success" @click="messageToggle('success')"><text
						class="button-text success-text">success</text></button>
				<button class="button popup-error" @click="messageToggle('error')"><text
						class="button-text error-text">error</text></button>
				<button class="button popup-warn" @click="messageToggle('warn')"><text
						class="button-text warn-text">warn</text></button>
				<button class="button popup-info" @click="messageToggle('info')"><text
						class="button-text info-text">info</text></button>
			</view>
		</uni-section>


		<uni-section title="Dialog box example" type="line" class="hideOnPc">
			<view class="example-body box">
				<button class="button popup-success" @click="dialogToggle('success')"><text
						class="button-text success-text">success</text></button>
				<button class="button popup-error" @click="dialogToggle('error')"><text
						class="button-text error-text">error</text></button>
				<button class="button popup-warn" @click="dialogToggle('warn')"><text
						class="button-text warn-text">warn</text></button>
				<button class="button popup-info" @click="dialogToggle('info')"><text
						class="button-text info-text">info</text></button>
			</view>
		</uni-section>

		<uni-section title="Example of input box" type="line" padding>
			<view class="dialog-box">
				<text class="dialog-text">Input content：{{ value }}</text>
			</view>
			<button class="button" type="primary" @click="inputDialogToggle"><text
					class="button-text">Input dialog box</text></button>

		</uni-section>
		<uni-section title="Bottom sharing example" type="line" padding>
			<button class="button" type="primary" @click="shareToggle"><text class="button-text">Sample Sharing Template</text></button>
		</uni-section>
		<view>
			<!-- 普通弹窗 -->
			<uni-popup ref="popup" background-color="#fff" @change="change">
				<view class="popup-content" :class="{ 'popup-height': type === 'left' || type === 'right' }"><text
						class="text">popup 内容</text></view>
			</uni-popup>
		</view>

		<view>
			<!-- 提示信息弹窗 -->
			<uni-popup ref="message" type="message">
				<uni-popup-message :type="msgType" :message="messageText" :duration="2000"></uni-popup-message>
			</uni-popup>
		</view>

		<view>
			<!-- 提示窗示例 -->
			<uni-popup ref="alertDialog" type="dialog">
				<uni-popup-dialog :type="msgType" cancelText="close" confirmText="agree" title="Notify" content="Welcome to use uni-popup!" @confirm="dialogConfirm"
					@close="dialogClose"></uni-popup-dialog>
			</uni-popup>
		</view>

		<view>
			<!-- 输入框示例 -->
			<uni-popup ref="inputDialog" type="dialog">
				<uni-popup-dialog ref="inputClose"  mode="input" title="Input content" value="Dialog box with pre-set prompts!"
					placeholder="Input content" @confirm="dialogInputConfirm"></uni-popup-dialog>
			</uni-popup>
		</view>

		<view>
			<!-- 分享示例 -->
			<uni-popup ref="share" type="share" safeArea backgroundColor="#fff">
				<uni-popup-share></uni-popup-share>
			</uni-popup>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type: 'center',
				msgType: 'success',
				messageText: 'This is a SUCCESS tip',
				value: ''
			}
		},
		onReady() {},
		methods: {
			change(e) {
				console.log('Current mode:' + e.type + ',Status:' + e.show);
			},
			toggle(type) {
				this.type = type
				// open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
				this.$refs.popup.open(type)
			},
			messageToggle(type) {
				this.msgType = type
				this.messageText = `This is a ${type} message prompt`
				this.$refs.message.open()
			},
			dialogToggle(type) {
				this.msgType = type
				this.$refs.alertDialog.open()
			},
			dialogConfirm() {
				console.log('Click to confirm')
				this.messageText = `Click to confirm the ${this.msgType} window`
				this.$refs.message.open()
			},
			inputDialogToggle() {
				this.$refs.inputDialog.open()
			},
			dialogClose() {
				console.log('Click to close')
			},
			dialogInputConfirm(val) {
				uni.showLoading({
					title: 'Will turn off after 3 seconds'
				})

				setTimeout(() => {
					uni.hideLoading()
					console.log(val)
					this.value = val
					// 关闭窗口后，恢复默认内容
					this.$refs.inputDialog.close()
				}, 3000)
			},
			shareToggle() {
				this.$refs.share.open()
			}
		}
	}
</script>
<style lang="scss">
	@mixin flex {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
	}

	@mixin height {
		/* #ifndef APP-NVUE */
		height: 100%;
		/* #endif */
		/* #ifdef APP-NVUE */
		flex: 1;
		/* #endif */
	}

	.box {
		@include flex;
	}

	.button {
		@include flex;
		align-items: center;
		justify-content: center;
		flex: 1;
		height: 35px;
		margin: 0 5px;
		border-radius: 5px;
	}

	.example-body {
		background-color: #fff;
		padding: 10px 0;
	}

	.button-text {
		color: #fff;
		font-size: 12px;
	}

	.popup-content {
		@include flex;
		align-items: center;
		justify-content: center;
		padding: 15px;
		height: 50px;
		background-color: #fff;
	}

	.popup-height {
		@include height;
		width: 200px;
	}

	.text {
		font-size: 12px;
		color: #333;
	}

	.popup-success {
		color: #fff;
		background-color: #e1f3d8;
	}

	.popup-warn {
		color: #fff;
		background-color: #faecd8;
	}

	.popup-error {
		color: #fff;
		background-color: #fde2e2;
	}

	.popup-info {
		color: #fff;
		background-color: #f2f6fc;
	}

	.success-text {
		color: #09bb07;
	}

	.warn-text {
		color: #e6a23c;
	}

	.error-text {
		color: #f56c6c;
	}

	.info-text {
		color: #909399;
	}

	.dialog,
	.share {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
	}

	.dialog-box {
		padding: 10px;
	}

	.dialog .button,
	.share .button {
		/* #ifndef APP-NVUE */
		width: 100%;
		/* #endif */
		margin: 0;
		margin-top: 10px;
		padding: 3px 0;
		flex: 1;
	}

	.dialog-text {
		font-size: 14px;
		color: #333;
	}
</style>
