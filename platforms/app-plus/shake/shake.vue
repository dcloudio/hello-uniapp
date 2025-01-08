<template>
	<view class="root" :style="{backgroundImage:'url('+img+')'}">
		<view :class="[show ? 'up' : '','shake-up']">
			<image mode="aspectFit" src="https://web-assets.dcloud.net.cn/unidoc/zh/shakeup.png"></image>
		</view>
		<view :class="[show ? 'down' : '','shake-down']">
			<image mode="aspectFit" src="https://web-assets.dcloud.net.cn/unidoc/zh/shakedown.png"></image>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				img: 'https://web-assets.dcloud.net.cn/unidoc/zh/1.jpg',
				show: false,
				isOpened: false,
				index: 1
			}
		},
		computed:{
			pageIndex() {
				if (this.index === 1) {
					return 'shake-1'
				} else if (this.index === 2) {
					return 'shake-2'
				} else if (this.index === 3) {
					return 'shake-3'
				} else if (this.index === 4) {
					return 'shake-4'
				} else {
					return 'shake-1'
				}
			}
		},
		onLoad: function () {
			this.music = uni.createInnerAudioContext();
			this.music.src = 'https://web-assets.dcloud.net.cn/unidoc/zh/shake.wav';

			let t = null;
			uni.onAccelerometerChange((res) => {
				if (Math.abs(res.x) + Math.abs(res.y) + Math.abs(res.z) > 20 && !this.show && this.isOpened) {
					this.music.play();
					setTimeout(() => {
						this.index++;
						if (this.index > 4) {
							this.index = 1
						}
						this.img = 'https://web-ext-storage.dcloud.net.cn/hello-uni-app/' + this.pageIndex + '.jpg';
					}, 2000);
					this.show = true;
					if (t) {
						clearTimeout(t);
					}
					t = setTimeout(() => {
						t = null;
						this.show = false;
					}, 600)
				}
			})
		},
		onShow() {
			this.isOpened = true;
		},
		onUnload() {
			this.show = false;
			this.isOpened = false;
			uni.stopAccelerometer();
			this.music.destroy();
		}
	}
</script>

<style>
	.root {
		height: 100%;
		display: flex;
		flex-direction: column;
		background-position: center center;
		background-repeat: no-repeat;
	}

	.shake-up,
	.shake-down {
		height: 50%;
		overflow: hidden;
		transition: all .5s ease-in-out;
		-webkit-transition: all .5s ease-in-out;
		background: #333;
	}

	.up {
		transform: translateY(-50%);
		-webkit-transform: translateY(-50%);
	}

	.down {
		transform: translateY(50%);
		-webkit-transform: translateY(50%);
	}

	image {
		height: 100%;
		width: 100%;
	}
</style>
