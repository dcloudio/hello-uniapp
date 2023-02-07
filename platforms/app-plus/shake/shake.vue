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
					return 'aff47ed0-517d-11eb-8ff1-d5dcf8779628'
				} else if (this.index === 2) {
					return '1fc36f80-5199-11eb-a16f-5b3e54966275'
				} else if (this.index === 3) {
					return '20a3bd60-5199-11eb-97b7-0dc4655d6e68'
				} else if (this.index === 4) {
					return '8b872410-51a7-11eb-8a36-ebb87efcf8c0'
				} else {
					return 'aff47ed0-517d-11eb-8ff1-d5dcf8779628'
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
						this.img = 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/' + this.pageIndex + '.jpg';
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
