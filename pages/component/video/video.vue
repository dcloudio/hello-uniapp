<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt" v-if="showVideo">
			<view>
				<video id="myVideo" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/2minute-demo.mp4"
				 @error="videoErrorCallback" :danmu-list="danmuList" enable-danmu danmu-btn controls poster="https://web-assets.dcloud.net.cn/unidoc/zh/poster.png"></video>
			</view>
			<!-- #ifndef MP-ALIPAY || MP-TOUTIAO || MP-KUAISHOU || MP-LARK || MP-JD -->
			<view class="uni-list uni-common-mt">
				<view class="uni-list-cell">
					<view>
						<view class="uni-label">弹幕内容</view>
					</view>
					<view class="uni-list-cell-db">
						<input v-model="danmuValue" class="uni-input" type="text" placeholder="在此处输入弹幕内容" />
					</view>
				</view>
			</view>
			<view class="uni-btn-v">
				<button @click="sendDanmu" class="page-body-button">发送弹幕</button>
			</view>
			<!-- #endif -->
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'video',
				src: '',
				danmuList: [{
						text: '第 1s 出现的弹幕',
						color: '#ff0000',
						time: 1
					},
					{
						text: '第 3s 出现的弹幕',
						color: '#ff00ff',
						time: 3
					}
				],
				danmuValue: '',
				showVideo: false
			}
		},
		onReady: function(res) {
			// #ifndef MP-ALIPAY || MP-TOUTIAO
			this.videoContext = uni.createVideoContext('myVideo')
			// #endif
      // #ifdef APP-PLUS || MP-BAIDU
      setTimeout(()=>{
      	this.showVideo = true
      },350)
      // #endif
      // #ifndef APP-PLUS || MP-BAIDU
      this.showVideo = true
      // #endif
		},
		methods: {
			sendDanmu: function() {
				this.videoContext.sendDanmu({
					text: this.danmuValue,
					color: this.getRandomColor()
				});
				this.danmuValue = '';
			},
			videoErrorCallback: function(e) {
				uni.showModal({
					content: e.target.errMsg,
					showCancel: false
				})
			},
			getRandomColor: function() {
				const rgb = []
				for (let i = 0; i < 3; ++i) {
					let color = Math.floor(Math.random() * 256).toString(16)
					color = color.length == 1 ? '0' + color : color
					rgb.push(color)
				}
				return '#' + rgb.join('')
			}
		}
	}
</script>

<style>
	video {
		width: 690rpx;
		width: 100%;
		height: 400px;
	}
</style>
