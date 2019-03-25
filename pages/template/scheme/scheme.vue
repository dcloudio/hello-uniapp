<template>
	<view>
		<view class="title">打开第三方app示例</view>
		<button class="button" type="primary" @click="open">使用浏览器打开指定URL</button>
		<button
			v-for="(item, index) in URLscheme"
			:key="index"
			class="button"
			type="primary"
			@click="launchApp(item)"
		>
			启动 {{ item.name }}
		</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			url: 'https://uniapp.dcloud.io/',
			URLscheme: [
				{
					name: '淘宝',
					pname: 'com.taobao.taobao',
					scheme: 'taobao://'
				},
				{
					name: 'QQ',
					pname: 'com.tencent.mobileqq',
					scheme: 'mqq://'
				},
				{
					name: '微信',
					pname: 'com.tencent.mm',
					scheme: 'weixin://'
				}
			]
		};
	},
	onLoad(op) {
		let systemInfo = uni.getSystemInfoSync();
		console.log(JSON.stringify(systemInfo));
		if (systemInfo.platform === 'ios') {
			this.URLscheme.unshift({
				name: 'App Store',
				scheme: 'itms-apps://itunes.apple.com/cn/app/hello-uni-app/id1417078253?mt=8'
			});
		}
	},
	methods: {
		open() {
			plus.runtime.openURL(this.url, function(res) {
				console.log(res);
			});
		},
		launchApp(d) {
			let _this = this;
			// 打开第三方引用，ios 、 安卓有一些参数不一致，需要区分，详情：http://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.launchApplication
			// 判断应用是否安装
			if (plus.runtime.isApplicationExist({ pname: d.pname, action: d.scheme })) {
				// 判断平台
				if (plus.os.name == 'Android') {
					plus.runtime.launchApplication(
						{
							pname: d.pname,
							action: d.scheme
						},
						function(e) {
							console.log('Open system default browser failed: ' + e.message);
						}
					);
				} else if (plus.os.name == 'iOS') {
					plus.runtime.launchApplication({ action: d.scheme }, function(e) {
						console.log('Open system default browser failed: ' + e.message);
					});
				}
			} else {
				uni.showModal({
					title: '提示',
					content: '程序未安装，请安装后重试',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			}
		}
	}
};
</script>
<style>
.title {
	text-align: center;
	line-height: 100upx;
	margin: 30upx;
	font-size: 24upx;
}
.button {
	height: 100upx;
	line-height: 100upx;
	margin: 30upx;
}
</style>
