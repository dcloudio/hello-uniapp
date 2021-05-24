<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap">
			<view class="uni-center">
				<text class="time-big">{{formatedPlayTime}}</text>
			</view>
			<view class="uni-common-mt">
				<slider class="slider" min="0" max="21" step="1" :value="playTime" @change="seek"></slider>
			</view>
			<view class="play-time">
				<text>00:00</text>
				<text>00:21</text>
			</view>
			<view class="uni-hello-text">注意：离开当前页面后背景音乐将保持播放，但退出uni-app将停止</view>
			<view class="page-body-buttons">
				<block v-if="playing">
					<view class="page-body-button" @tap="stop">
						<image src="/static/stop.png"></image>
					</view>
					<view class="page-body-button" @tap="pause">
						<image src="/static/pause.png"></image>
					</view>
				</block>
				<block v-if="!playing">
					<view class="page-body-button"></view>
					<view class="page-body-button" @tap="play">
						<image src="/static/play.png"></image>
					</view>
				</block>
				<view class="page-body-button"></view>
			</view>
		</view>
	</view>
</template>
<script>

	var util = require('../../../common/util.js');

	export default {
		data() {
			return {
				title: 'backgroundAudio',
				bgAudioMannager: null,
				dataUrl: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3',
				playing: false,
				playTime: 0,
				formatedPlayTime: '00:00:00'
			}
		},
		onLoad: function () {
			this.playing = this.$backgroundAudioData.playing;
			this.playTime = this.$backgroundAudioData.playTime;
			this.formatedPlayTime = this.$backgroundAudioData.formatedPlayTime;

			let bgAudioMannager = uni.getBackgroundAudioManager();
			if(!bgAudioMannager.title){
				bgAudioMannager.title = '致爱丽丝';
			}
			if(!bgAudioMannager.singer) {
				bgAudioMannager.singer = '暂无';
			}
			if(!bgAudioMannager.coverImgUrl){
				bgAudioMannager.coverImgUrl = 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/c517b410-5184-11eb-b997-9918a5dda011.jpeg';
			}

			bgAudioMannager.onPlay(() => {
				console.log("开始播放");
				this.$backgroundAudioData.playing = this.playing = true;
			})
			bgAudioMannager.onPause(() => {
				console.log("暂停播放");
				this.$backgroundAudioData.playing = this.playing = false;
			})
			bgAudioMannager.onEnded(() => {
				this.playing = false;
				this.$backgroundAudioData.playing = false;
				this.$backgroundAudioData.playTime = this.playTime = 0;
				this.$backgroundAudioData.formatedPlayTime = this.formatedPlayTime = util.formatTime(0);
			})

			bgAudioMannager.onTimeUpdate((e) => {
				if (Math.floor(bgAudioMannager.currentTime) > Math.floor(this.playTime)) {
					this.$backgroundAudioData.formatedPlayTime = this.formatedPlayTime = util.formatTime(Math.floor(bgAudioMannager.currentTime));
				}
				this.$backgroundAudioData.playTime = this.playTime = bgAudioMannager.currentTime;
			})

			this.bgAudioMannager = bgAudioMannager;
		},
		methods: {
			play: function (res) {
				if (!this.bgAudioMannager.src) {
					this.bgAudioMannager.startTime = this.playTime;
					this.bgAudioMannager.src = this.dataUrl;
				} else {
					this.bgAudioMannager.seek(this.playTime);
					this.bgAudioMannager.play();
				}
			},
			seek: function (e) {
				this.bgAudioMannager.seek(e.detail.value);
			},
			pause: function () {
				this.bgAudioMannager.pause();
			},
			stop: function () {
				this.bgAudioMannager.stop();
				this.$backgroundAudioData.playing = this.playing = false;
				this.$backgroundAudioData.playTime = this.playTime = 0;
				this.$backgroundAudioData.formatedPlayTime = this.formatedPlayTime = util.formatTime(0);
			}
		}
	}
</script>

<style>
	image {
		width: 150rpx;
		height: 150rpx;
	}

	.page-body-text {
		padding: 0 30rpx;
	}

	.page-body-wrapper {
		margin-top: 0;
	}

	.page-body-info {
		padding-bottom: 50rpx;
	}

	.time-big {
		font-size: 60rpx;
		margin: 20rpx;
	}

	.slider {
		width:630rpx;
	}

	.play-time {
		font-size: 28rpx;
		width:100%;
		padding: 20rpx 0;
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
	}

	.page-body-buttons {
		display: flex;
		justify-content: space-around;
		margin-top: 100rpx;
	}

	.page-body-button {
		width: 250rpx;
		text-align: center;
	}
</style>
