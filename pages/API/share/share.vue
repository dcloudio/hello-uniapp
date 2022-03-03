<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap">
			<view class="uni-title">Share content</view>
			<view class="uni-textarea">
				<textarea class="textarea" v-model="shareText" />
				</view>
			<view class="uni-title">Share image：</view>
			<view class="uni-uploader" style="padding:15rpx; background:#FFF;">
				<view class="uni-uploader__input-box" v-if="!image" @tap="chooseImage"></view>
				<image class="uni-uploader__img" v-if="image" :src="image"></image>
			</view>
			<!-- #ifdef APP-PLUS -->
			<view class="uni-title">Share Type：</view>
			<view>
				<radio-group @change="radioChange">
					<label class="radio">
						<radio value="1" checked="true"/>Text
					</label>
					<label class="radio">
						<radio value="2" />Pictures
					</label>
					<label class="radio">
						<radio value="0" />Graphic
					</label>
					<label class="radio">
						<radio value="5" />Mini Programs
					</label>
				</radio-group>
			</view>
			<view class="uni-btn-v uni-common-mt" v-if="providerList.length > 0">
				<block v-for="(value,index) in providerList" :key="index">
					<button type="primary" v-if="value" :disabled="isDisableButton(value)" @tap="share(value)">{{value.name}}</button>
				</block>
			</view>
			<!-- #endif -->
			<!-- #ifdef MP || QUICKAPP-WEBVIEW -->
			<view class="uni-btn-v uni-common-mt">
				<button type="primary" open-type="share">Share</button>
			</view>
			<!-- #endif -->
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'share',
				shareText: 'uni-app can be published as a native app, applet, and H5 at the same time, and you are invited to experience them together!',
				href:"https://uniapp.dcloud.io",
				image: '',
				shareType:1,
				providerList: []
			}
		},
		computed:{
			isDisableButton() {
				return function(item) {
					if(this.shareType === 0 && item.id === 'qq'){
						return true;
					}
					if(this.shareType === 5 && item.name !== 'Share to WeChat friends'){
						return true;
					}
					return false;
				}
			}
		},
		onShareAppMessage() {
			return {
				title: this.shareText ? this.shareText : "Welcome to experience uni-app",
				path: '/pages/tabBar/component/component',
				imageUrl:this.image ? this.image : 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b6304f00-5168-11eb-bd01-97bc1429a9ff.png'
			}
		},
		onUnload:function(){
			this.shareText='uni-app can be published as a native app, applet, and H5 at the same time, and you are invited to experience them together!',
			this.href = 'https://uniapp.dcloud.io',
			this.image='';
		},
		onLoad: function () {
			uni.getProvider({
				service: 'share',
				success: (e) => {
					console.log('success', e);
					let data = []
					for (let i = 0; i < e.provider.length; i++) {
						switch (e.provider[i]) {
							case 'weixin':
								data.push({
									name: 'Share to WeChat friends',
									id: 'weixin',
									sort:0
								})
								data.push({
									name: 'Share to WeChat friend circle',
									id: 'weixin',
									type:'WXSenceTimeline',
									sort:1
								})
								break;
							case 'sinaweibo':
								data.push({
									name: 'Share on Sina Weibo',
									id: 'sinaweibo',
									sort:2
								})
								break;
							case 'qq':
								data.push({
									name: 'Share to QQ',
									id: 'qq',
									sort:3
								})
								break;
							default:
								break;
						}
					}
					this.providerList = data.sort((x,y) => {
						return x.sort - y.sort
					});
				},
				fail: (e) => {
					console.log('Share coFailed to get sharing accessntent', e);
					uni.showModal({
						content:'Share coFailed to get sharing accessntent',
						showCancel:false
					})
				}
			});
		},
		methods: {
			async share(e) {
				console.log('Share Channel:'+ e.id +'； Share Type:' + this.shareType);
				
				if(!this.shareText && (this.shareType === 1 || this.shareType === 0)){
					uni.showModal({
						content:'Share content Cannot be empty',
						showCancel:false
					})
					return;
				}
				
				if(!this.image && (this.shareType === 2 || this.shareType === 0)){
					uni.showModal({
						content:'Share image cannot be empty',
						showCancel:false
					})
					return;
				}
				
				let shareOPtions = {
					provider: e.id,
					scene: e.type && e.type === 'WXSenceTimeline' ? 'WXSenceTimeline' : 'WXSceneSession', //WXSceneSession” 分享到聊天界面，“WXSenceTimeline”分享到朋友圈，“WXSceneFavorite”分享到微信收藏     
					type: this.shareType,
					success: (e) => {
						console.log('success', e);
						uni.showModal({
							content: 'Shared',
							showCancel:false
						})
					},
					fail: (e) => {
						console.log('fail', e)
						uni.showModal({
							content: e.errMsg,
							showCancel:false
						})
					},
					complete:function(){
						console.log('End of sharing operation!')
					}
				}
				
				switch (this.shareType){
					case 0:
						shareOPtions.summary = this.shareText;
						shareOPtions.imageUrl = this.image;
						shareOPtions.title = 'Welcome to experience uniapp';
						shareOPtions.href = 'https://uniapp.dcloud.io';
						break;
					case 1:
						shareOPtions.summary = this.shareText;
						break;
					case 2:
						shareOPtions.imageUrl = this.image;
						break;
					case 5:
						shareOPtions.imageUrl = this.image ? this.image : 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b6304f00-5168-11eb-bd01-97bc1429a9ff.png'
						shareOPtions.title = 'Welcome to experience uniapp';
						shareOPtions.miniProgram = {
							id:'gh_33446d7f7a26',
							path:'/pages/tabBar/component/component',
							webUrl:'https://uniapp.dcloud.io',
							type:0
						};
						break;
					default:
						break;
				}
				
				if(shareOPtions.type === 0 && plus.os.name === 'iOS'){//如果是图文分享，且是ios平台，则压缩图片 
					shareOPtions.imageUrl = await this.compress();
				}
				if(shareOPtions.type === 1 && shareOPtions.provider === 'qq'){//如果是分享文字到qq，则必须加上href和title
					shareOPtions.href = 'https://uniapp.dcloud.io';
					shareOPtions.title = 'Welcome to experience uniapp';
				}
				uni.share(shareOPtions);
			},
			radioChange(e){
				console.log('type:' + e.detail.value);
				this.shareType = parseInt(e.detail.value);
			},
			chooseImage() {
				uni.chooseImage({
					count: 1,
					sourceType: ['album', 'camera'],
					sizeType: ['compressed', 'original'],
					success: (res) => {
						this.image = res.tempFilePaths[0];
					},
					fail: (err) => {
						// #ifdef MP
						uni.getSetting({
							success: (res) => {
								let authStatus = res.authSetting['scope.album'] && res.authSetting['scope.camera'];
								if (!authStatus) {
									uni.showModal({
										title: 'Authorization failure',
										content: 'Hello uni-app need to get pictures from your camera or album, please turn on the relevant permission in the settings screen',
										success: (res) => {
											if (res.confirm) {
												uni.openSetting()
											}
										}
									})
								}
							}
						})
						// #endif
					}
				})
			},
			compress(){//压缩图片 图文分享要求分享图片大小不能超过20Kb
				console.log('Start compression');
				let img = this.image;
				return new Promise((res) => {
					var localPath = plus.io.convertAbsoluteFileSystem(img.replace('file://', ''));
					console.log('after' + localPath);
					// 压缩size
					plus.io.resolveLocalFileSystemURL(localPath, (entry) => {
						entry.file((file) => {// Images can be manipulated by entry objects 
							console.log('getFile:' + JSON.stringify(file));
							if(file.size > 20480) {// Compressed size greater than 20Kb
								plus.zip.compressImage({
									src: img,
									dst: img.replace('.jpg', '2222.jpg').replace('.JPG', '2222.JPG'),
									width: '10%',
									height: '10%',
									quality: 1,
									overwrite: true
								}, (event) => {
									console.log('success zip****' + event.size);
									let newImg = img.replace('.jpg', '2222.jpg').replace('.JPG', '2222.JPG');
									res(newImg);
								}, function(error) {
									uni.showModal({
										content:'Share the picture is too big, need to re-select the picture!',
										showCancel:false
									})
								});
							}
						});
					}, (e) => {
						console.log('Resolve file URL failed: ' + e.message);
						uni.showModal({
							content:'Share the picture is too big, need to re-select the picture!',
							showCancel:false
						})
					});
				})
			}
		}
	}
</script>

<style>

</style>
