<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap">
			<view class="uni-title">Please enter the contents of the clipboard</view>
			<view class="uni-list">
				<view class="uni-list-cell">
					<input class="uni-input" type="text" placeholder="Please enter the contents of the clipboard" :value="data" @input="dataChange"/>
				</view>
			</view>
			<view class="uni-btn-v">
				<button type="primary" @click="setClipboard">Storage Data</button>
				<button @tap="getClipboard">Read data</button>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'get/setClipboardData',
				data: ''
			}
		},
		methods: {
			dataChange: function (e) {
				this.data = e.detail.value
			},
			getClipboard: function () {
				uni.getClipboardData({
					success: (res) => {
						console.log(res.data);
						const content = res.data ? 'The contents of the clipboard are:' + res.data : 'Clipboard is not available';
						uni.showModal({
							content,
							title: 'Read clipboard',
							showCancel: false
						})
					},
					fail: () => {
						uni.showModal({
							content: 'Failed to read clipboard!',
							showCancel: false
						})
					}
				});
			},
			setClipboard: function () {
				var data = this.data;
				if (data.length === 0) {
					uni.showModal({
						title: 'Failed to set the clipboard',
						content: 'Content cannot be empty',
						showCancel: false
					})
				} else {
					uni.setClipboardData({
						data: data,
						success: () => {
							// Successful processing
							// #ifdef MP-ALIPAY || MP-BAIDU || MP-TOUTIAO
							uni.showToast({
								title: 'Set up clipboard successfully',
								icon: "success",
								mask: !1
							})
							// #endif
						},
						fail: () => {
							// Failure Handling
							// #ifdef MP-ALIPAY || MP-BAIDU || MP-TOUTIAO
							uni.showToast({
								title: 'Failed to store data!',
								icon: "none",
								mask: !1
							})
							// #endif
						}
					});
				}
			}
		}
	}
</script>

<style>
	
</style>


