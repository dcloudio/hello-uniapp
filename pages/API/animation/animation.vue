<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="animation-element-wrapper">
				<view class="animation-element" :animation="animationData"></view>
			</view>
			<scroll-view class="animation-buttons" scroll-y="true">
				<button class="animation-button" @tap="rotate">rotate</button>
				<button class="animation-button" @tap="scale">scale</button>
				<button class="animation-button" @tap="translate">translate</button>
				<button class="animation-button" @tap="skew">skew</button>
				<button class="animation-button" @tap="rotateAndScale">rotate and Scale</button>
				<button class="animation-button" @tap="rotateAndScale">Rotate and zoom</button>
				<button class="animation-button" @tap="all">Show all</button>
				<button class="animation-button" @tap="allInQueue">Show all in order</button>
				<button class="animation-button animation-button-reset" @tap="reset">reset</button>
			</scroll-view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'createAnimation',
				animationData: ''
			}
		},
		onUnload(){
			this.animationData = ''
		},
		onLoad() {
			this.animation = uni.createAnimation()
		},
		methods: {
			rotate: function () {
				this.animation.rotate(Math.random() * 720 - 360).step()
				this.animationData = this.animation.export()
			},
			scale: function () {
				this.animation.scale(Math.random() * 2).step()
				this.animationData = this.animation.export()
			},
			translate: function () {
				this.animation.translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step()
				this.animationData = this.animation.export()
			},
			skew: function () {
				this.animation.skew(Math.random() * 90, Math.random() * 90).step()
				this.animationData = this.animation.export()
			},
			rotateAndScale: function () {
				this.animation.rotate(Math.random() * 720 - 360)
					.scale(Math.random() * 2)
					.step()
				this.animationData = this.animation.export()
			},
			rotateAndScale: function () {
				this.animation.rotate(Math.random() * 720 - 360).step()
					.scale(Math.random() * 2).step()
				this.animationData = this.animation.export()
			},
			all: function () {
				this.animation.rotate(Math.random() * 720 - 360)
					.scale(Math.random() * 2)
					.translate(Math.random() * 100 - 50, Math.random() * 100 - 50)
					.skew(Math.random() * 90, Math.random() * 90)
					.step()
				this.animationData = this.animation.export()
			},
			allInQueue: function () {
				this.animation.rotate(Math.random() * 720 - 360).step()
					.scale(Math.random() * 2).step()
					.translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step()
					.skew(Math.random() * 90, Math.random() * 90).step()
				this.animationData = this.animation.export()
			},
			reset: function () {
				this.animation.rotate(0, 0)
					.scale(1)
					.translate(0, 0)
					.skew(0, 0)
					.step({
						duration: 0
					})
				this.animationData = this.animation.export()
			}
		}
	}
</script>

<style>
	.animation-element-wrapper {
		display: flex;
		width: 100%;
		padding-top: 150rpx;
		padding-bottom: 150rpx;
		justify-content: center;
		overflow: hidden;
		background-color: #ffffff;
	}

	.animation-element {
		width: 200rpx;
		height: 200rpx;
		background-color: #1AAD19;
	}

	.animation-buttons {
		padding:30rpx 0;
		width: 100%;
		/* height: 360rpx; */
	}

	.animation-button {
		float: left;
		width: 44%;
		margin: 15rpx 3%;
	}

	.animation-button-reset {
		width: 94%;
	}
</style>
