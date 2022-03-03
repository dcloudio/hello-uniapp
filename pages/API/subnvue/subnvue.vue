<template>
	<view class="content">
		<page-head :title="title"></page-head>
		<view class="example">
			<view class="example-title">Slide out from the left</view>
			<button @click="showDrawer">Display Drawer</button>
		</view>
		<view class="example">
			<view class="example-title">Slide out vertically from the top side</view>
			<button @click="showPopup">Show pop-up layer</button>
		</view>
		<view style="width: 100%;">
			<video v-if="showVideo" id="video"
			@play="playVideo"
			@pause="closeMask"
			:controls="false"
			src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126-lite.m4v"
			@error="videoErrorCallback" poster="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b1476d40-4e5f-11eb-b997-9918a5dda011.png"></video>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'SubNvue',
				showVideo: false
			};
		},
		onLoad() {
			this.closeMask();

			// Receive a popup message
			uni.$on('popup-page', (data) => {
				switch(data.type){
					case 'interactive':
						uni.showModal({
							title: 'News from Popup',
							content: data.info
						})
						break;
					default:
						uni.showToast({
							title: data.title,
						})
						break;
				}
			})
			// Listening to drawer messages
			uni.$on('drawer-page', (data) => {
				uni.showToast({
					title: 'Clicked on the' + data + 'item',
					icon:"none"
				});
			})
		},
		onUnload() {
			uni.$off('popup-page')
			uni.$off('drawer-page')
		},
		onReady() {
			this.showVideo = true
		},
		methods: {
			showDrawer() {
				uni.getSubNVueById('drawer').show('slide-in-left', 200);
			},
		    showPopup() {
				// 向 popup 传递消息
				uni.$emit('page-popup', {
					title: 'Please read the software content',
					content: 'uni-app is a front-end framework for developing cross-platform applications using Vue.js, developers write a set of code that can be compiled to iOS, Android, H5, applets and many other platforms'
				});
				const subNVue = uni.getSubNVueById('popup')
		        subNVue.show('slide-in-top', 250)
		    },
			videoErrorCallback: function() {
				uni.showModal({
					content: 'Video loading failure',
					showCancel: false
				})
			},
			playVideo() {
				let subNVue = uni.getSubNVueById('video_mask')
				subNVue.show('fade-in', 200, () => {
					uni.$emit('play-video', {
						status: 'open',
					})
				})
			},
			closeMask() {
				let subNVue = uni.getSubNVueById('video_mask')
				uni.$emit('close-video', {
					status: 'close',
				})
				subNVue.hide('fade-out', 200)
			},
		}
	}
</script>

<style>
	.content {
		align-content: center;
	    height: 100%;
		background-color: #F4F5F6;
	}
	.example {
		padding: 0 10px 10px
	}
	.example-title {
		font-size: 14px;
		line-height: 14px;
		color: #777;
		margin: 40px 2rpx;
		position: relative
	}
	video {
		position: absolute;
		bottom: 30px;
		left: 0;
		width: 100%;
		height: 200px;
	}
	.example .example-title {
		margin: 40rpx 0
	}
	button {
		background-color: #f8f8f8;
	}
	.title {
	    font-size: 20px;
		text-align: center;
	    color: #8f8f94;
	}
</style>
