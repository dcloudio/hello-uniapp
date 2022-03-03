<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-hello-text uni-center">Please enter your phone number below</view>
			<input class="input uni-common-mt" type="number" name="input" @input="bindInput" />
			<view class="uni-btn-v uni-common-mt">
				<button @tap="makePhoneCall" type="primary" :disabled="disabled">Call</button>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'makePhoneCall',
				disabled: true
			}
		},
		methods: {
			bindInput: function (e) {
				this.inputValue = e.detail.value
				if (this.inputValue.length > 0) {
					this.disabled = false
				} else {
					this.disabled = true
				}
			},
			makePhoneCall: function () {
				uni.makePhoneCall({
					phoneNumber: this.inputValue,
					success: () => {
						console.log("Successful calls")
					}
				})
			}
		}
	}
</script>

<style>
	.input {
		height: 119rpx;
		line-height: 119rpx;
		font-size: 78rpx;
		border-bottom: 1rpx solid #E2E2E2;
		text-align:center;
	}
</style>
