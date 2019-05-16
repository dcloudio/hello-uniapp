<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap">
			<view class="uni-btn-v">
				<button class="btn-load" type="primary" @click="showLoading">显示 loading 提示框</button>
				<!-- #ifndef MP-ALIPAY -->
				<button @click="hideLoading">隐藏 loading 提示框</button>
				<!-- #endif -->
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'loading'
			}
		},
		methods: {
			showLoading: function() {
				uni.showLoading({
					title: 'loading'
				});

				// #ifdef MP-ALIPAY
				this._showTimer && clearTimeout(this._showTimer);
				this._showTimer = setTimeout(() => {
					this.hideLoading();
				}, 3000)
				// #endif
			},
			hideLoading: function() {
				uni.hideLoading();
			}
		},
		onUnload() {
			// #ifdef MP-ALIPAY
			this._showTimer && clearTimeout(this._showTimer);
			// #endif
		}
	}
</script>

<style>

</style>
