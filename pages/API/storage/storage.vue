<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-common-mt">
			<view class="uni-list">
				<view class="uni-list-cell">
					<view class="uni-list-cell-left">
						<view class="uni-label">key</view>
					</view>
					<view class="uni-list-cell-db">
						<input class="uni-input" type="text" placeholder="Please enter key" name="key" :value="key" @input="keyChange"/>
					</view>
				</view>
				<view class="uni-list-cell">
					<view class="uni-list-cell-left">
						<view class="uni-label">value</view>
					</view>
					<view class="uni-list-cell-db">
						<input class="uni-input" type="text" placeholder="Please enter value" name="data" :value="data" @input="dataChange"/>
					</view>
				</view>
			</view>
			<view class="uni-padding-wrap">
				<view class="uni-btn-v">
					<button type="primary" class="btn-setstorage" @tap="setStorage">Storage Data</button>
					<button @tap="getStorage">Read data </button>
					<button @tap="clearStorage">Clean data</button>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'get/set/clearStorage',
				key: '',
				data: ''
			}
		},
		methods: {
			keyChange: function (e) {
				this.key = e.detail.value
			},
			dataChange: function (e) {
				this.data = e.detail.value
			},
			getStorage: function () {
				var key = this.key,
					data = this.data;
				if (key.length === 0) {
					uni.showModal({
						title: 'Read data failure',
						content: "key cannot be empty",
						showCancel:false
					})
				} else {
					uni.getStorage({
						key: key,
						success: (res) => {
							uni.showModal({
								title: 'Read data succeed',
								content: "data: '" + res.data + "'",
								showCancel:false
							})
						},
						fail: () => {
							uni.showModal({
								title: 'Read data failure',
								content: "The data corresponding to the key is not found",
								showCancel:false
							})
						}
					})
				}
			},
			setStorage: function () {
				var key = this.key
				var data = this.data
				if (key.length === 0) {
					uni.showModal({
						title: 'Save data failure',
						content: 'key cannot be empty',
						showCancel:false
					})
				} else {
					uni.setStorage({
						key: key,
						data: data,
						success: (res) => {
							uni.showModal({
								title: 'Storage Data succeed',
								// #ifndef MP-ALIPAY
								content: JSON.stringify(res.errMsg),
								// #endif
								// #ifdef MP-ALIPAY
								content: data,
								// #endif
								showCancel:false
							})
						},
						fail: () => {
							uni.showModal({
								title: 'Storage data failure!',
								showCancel:false
							})
						}
					})
				}
			},
			clearStorage: function () {
				uni.clearStorageSync()
				this.key = '',
					this.data = ''
				uni.showModal({
					title: 'Clear data succeed',
					content: ' ',
					showCancel:false
				})
			}
		}
	}
</script>

<style>
	.btn-setstorage {
		background-color: #007aff;
		color: #ffffff;
	}
</style>
