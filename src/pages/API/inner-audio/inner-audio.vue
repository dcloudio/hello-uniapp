<template>
	<view class="uni-padding-wrap">
		<page-head title="audio"></page-head>
		<view class="uni-common-mt">
			<slider :value="position" :min="0" :max="duration" @changing="onchanging" @change="onchange"></slider>
		</view>
		<!-- <view class="uni-common-mt play-time-area">
			<text class="current-time">{{currentTime}}</text>
			<text class="duration">{{duration}}</text>
		</view> -->
		<view class="play-button-area">
			<image class="icon-play" :src="playImage" @click="play"></image>
		</view>
	</view>
</template>
<script>
	const audioUrl = 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3'
	export default {
		data() {
			return {
				title: "innerAudioContext",
				isPlaying: false,
				isPlayEnd: false,
				currentTime: 0,
				duration: 100
			}
		},
		computed: {
			position() {
				return this.isPlayEnd ? 0 : this.currentTime;
			},
			playImage() {
				return this.isPlaying ? "/static/pause.png" : "/static/play.png"
			}
		},
		onLoad() {
			this._isChanging = false;
			this._audioContext = null;
			this.createAudio();
		},
		onUnload() {
			if (this._audioContext != null && this.isPlaying) {
				this.stop();
			}
		},
		methods: {
			createAudio() {
				var innerAudioContext = this._audioContext = uni.createInnerAudioContext();
				innerAudioContext.autoplay = false;
				innerAudioContext.src = audioUrl;
				innerAudioContext.onPlay(() => {
					console.log('开始播放');
				});
				innerAudioContext.onTimeUpdate((e) => {
					if (this._isChanging === true) {
						return;
					}
					this.currentTime = innerAudioContext.currentTime || 0;
					this.duration = innerAudioContext.duration || 0;
				});
				innerAudioContext.onEnded(() => {
					this.currentTime = 0;
					this.isPlaying = false;
					this.isPlayEnd = true;
				});
				innerAudioContext.onError((res) => {
					this.isPlaying = false;
					console.log(res.errMsg);
					console.log(res.errCode);
				});
				return innerAudioContext;
			},
			onchanging() {
				this._isChanging = true;
			},
			onchange(e) {
				console.log(e.detail.value);
				console.log(typeof e.detail.value);
				this._audioContext.seek(e.detail.value);
				this._isChanging = false;
			},
			play() {
				if (this.isPlaying) {
					this.pause();
					return;
				}
				this.isPlaying = true;
				this._audioContext.play();
				this.isPlayEnd = false;
			},
			pause() {
				this._audioContext.pause();
				this.isPlaying = false;
			},
			stop() {
				this._audioContext.stop();
				this.isPlaying = false;
			}
		}
	}
</script>
<style>
	.play-time-area {
		display: flex;
		flex-direction: row;
		margin-top: 20px;
	}

	.duration {
		margin-left: auto;
	}

	.play-button-area {
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-top: 50px;
	}

	.icon-play {
		width: 60px;
		height: 60px;
	}
</style>
