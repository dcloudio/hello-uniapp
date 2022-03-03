<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<button :loading="loading" :disabled="loading" type="primary" class="btn" @click="showAd">Show ads</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Full-screen video ads',
				loading: false,
				loadError: false
			}
		},
		onReady() {
			// #ifdef APP-PLUS
			this.adOption = {
				adpid: '1507000611'
			};
			// #endif
			this.createAd();
		},
		methods: {
			createAd() {
				var _ad = this._ad = uni.createFullScreenVideoAd(this.adOption);
				_ad.onLoad(() => {
					this.loading = false;
					this.loadError = false;
					_ad.show();
					console.log('onLoad event')
				});
				_ad.onClose((res) => {
					// The user clicked the [Close Ads] button
					if (res && res.isEnded) {
						// End of normal playback
						console.log("onClose " + res.isEnded);
					} else {
						// Quit in the middle of playback
						console.log("onClose " + res.isEnded);
					}

					setTimeout(() => {
						uni.showToast({
							title: "Full Screen Video" + (res.isEnded ? "Success" : "Not") + "Finish playing",
							duration: 10000,
							position: 'bottom'
						})
					}, 500)
				});
				_ad.onError((err) => {
					this.loading = false;
					if (err.code) {
						this.loadError = true;
					}
					console.log('onError event', err)
					uni.showToast({
						title: err.errMsg,
						position: 'bottom'
					})
				});
			},
			showAd() {
				this.loading = true;
				this._ad.load();
			}
		}
	}
</script>

<style>
	.btn {
		margin-bottom: 20px;
	}

	.ad-tips {
		color: #999;
		padding: 30px 0;
		text-align: center;
	}
</style>
