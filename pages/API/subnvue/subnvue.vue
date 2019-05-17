<template>
	<view class="content">
		<page-head :title="title"></page-head>
		<view class="example">
			<view class="example-title">从左侧滑出</view>
			<button @click="showDrawer">显示抽屉</button>
		</view>
		<view class="example">
			<view class="example-title">从上侧竖向滑出</view>
			<button @click="showPopup">显示 弹出层</button>
		</view>
		<view style="width: 100%;">
			<video id="myVideo"
			@play="playVideo"
			@pause="closeMask"
			:controls="false"
			src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4"
			@error="videoErrorCallback" poster="https://img-cdn-qiniu.dcloud.net.cn/uniapp/doc/poster.png"></video>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'SubNvue',
			};
		},
		onLoad() {
			this.closeMask();
			const popupNVue = uni.getSubNVueById('popup');
			popupNVue.onMessage((res) => {
				let data = res.data;
				switch(data.type){
					case 'interactive':
						uni.showModal({
							title: '来自Popup的消息',
							content: data.info
						})
						break;	
					default:
						uni.showToast({
							title: data.title,
						})
						break;
				}
			});
		},
		methods: {
			showDrawer() {
				uni.getSubNVueById('drawer').show('slide-in-left', 200);
			},
		    showPopup() {
				const subNVue = uni.getSubNVueById('popup')
				subNVue.postMessage({
					title: '请阅读软件内容',
					content: 'uni-app 是一个使用 Vue.js 开发跨平台应用的前端框架，开发者编写一套代码，可编译到iOS、Android、H5、小程序等多个平台。uni-app是对vue语法支持度最高的跨端框架。uni-app App端内置 weex 引擎，提供了原生渲染能力。uni-app App 端内置 HTML5+ 引擎，让 js 可以直接调用丰富的原生能力。'
				});
		        subNVue.show('fade-in', 200)
		    },
			videoErrorCallback: function(e) {
				uni.showModal({
					content: e.target.errMsg,
					showCancel: false
				})
			},
			playVideo() {
				let subNVue = uni.getSubNVueById('video_mask')
				subNVue.show('fade-in', 200, () => {
					subNVue.postMessage({
						status: 'open',
					})
				})
			},
			closeMask() {
				let subNVue = uni.getSubNVueById('video_mask')
				subNVue.postMessage({
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
		padding: 0 30upx 30upx
	}
	.example-title {
		font-size: 32upx;
		line-height: 32upx;
		color: #777;
		margin: 40upx 25upx;
		position: relative
	}
	video {
		position: absolute;
		bottom: 10px;
		left: 0;
		width: 100%;
		height: 200px;
	}
	.example .example-title {
		margin: 40upx 0
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
