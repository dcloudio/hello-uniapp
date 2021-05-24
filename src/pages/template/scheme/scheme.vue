<template>
	<view>
		<page-head title="通过scheme打开三方app示例"></page-head>
		<button class="button" @click="openBrowser('https://uniapp.dcloud.io/h5')">使用浏览器打开指定URL</button>
		<button class="button" @click="openMarket()">使用应用商店打开指定App</button>
		<button class="button" @click="openMarket('com.tencent.android.qqdownloader')">强制使用应用宝打开指定App</button>
		<button class="button" @click="openTaobao('taobao://s.taobao.com/search?q=uni-app')">打开淘宝搜索页面</button>
		<button class="button" @click="openMap()">打开地图并指定地点</button>
		<view class="uni-divider">
			<view class="uni-divider__content">打开QQ</view>
			<view class="uni-divider__line"></view>
		</view>
		<view class="uni-padding-wrap">
			<form @submit="openQQ">
				<view>
					<view class="uni-title">请输入聊天对象QQ号：</view>
					<view class="uni-list">
						<view class="uni-list-cell">
							<input class="uni-input" name="qqNum" type="number"/>
						</view>
					</view>
				</view>
				<view>
					<view class="uni-title">请选择QQ号类型：</view>
					<radio-group class="uni-flex" name="qqNumType">
						<label>
							<radio value="wpa" checked=""/>普通QQ号</label>
						<label>
							<radio value="crm" />营销QQ号(无需加好友直接聊天)</label>
					</radio-group>
				</view>
				<view class="uni-btn-v uni-common-mt">
					<button class="button" formType="submit">打开qq并到指定聊天界面</button>
				</view>
			</form>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			
		};
	},
	methods: {
		openBrowser(url){
			plus.runtime.openURL(url)
		},
		openMarket(marketPackageName) {
			var appurl;
			if (plus.os.name=="Android") {
				appurl = "market://details?id=io.dcloud.hellouniapp";//可能部分应用商店没有收录
			}
			else{
				appurl = "itms-apps://itunes.apple.com/cn/app/hello-uni-app/id1417078253";
			}
			if (typeof(marketPackageName)=="undefined") {
				plus.runtime.openURL(appurl, function(res) {
					console.log(res);
				});
			} else{//强制指定某个Android应用市场的包名，通过这个包名启动指定app
				if (plus.os.name=="Android") {
					plus.runtime.openURL(appurl, function(res) {
						plus.nativeUI.alert("本机没有安装应用宝");
					},marketPackageName);
				} else{
					plus.nativeUI.alert("仅Android手机才支持应用宝");
				}
			}
		},
		openTaobao(url){
			plus.runtime.openURL(url, function(res) {
				uni.showModal({
					content:"本机未检测到淘宝客户端，是否打开浏览器访问淘宝？",
					success:function(res){
						if (res.confirm) {
							plus.runtime.openURL("https://s.taobao.com/search?q=uni-app")
						}
					}
				})
			});
		},
		openMap(){
			var url = "";
			if (plus.os.name=="Android") {
				var hasBaiduMap = plus.runtime.isApplicationExist({pname:'com.baidu.BaiduMap',action:'baidumap://'});
				var hasAmap = plus.runtime.isApplicationExist({pname:'com.autonavi.minimap',action:'androidamap://'});
				var urlBaiduMap = "baidumap://map/marker?location=39.968789,116.347247&title=DCloud&src=Hello%20uni-app";
				var urlAmap = "androidamap://viewMap?sourceApplication=Hello%20uni-app&poiname=DCloud&lat=39.9631018208&lon=116.3406135236&dev=0"
				if (hasAmap && hasBaiduMap) {
					plus.nativeUI.actionSheet({title:"选择地图应用",cancel:"取消",buttons:[{title:"百度地图"},{title:"高德地图"}]}, function(e){
						switch (e.index){
							case 1:
								plus.runtime.openURL(urlBaiduMap);
								break;
							case 2:
								plus.runtime.openURL(urlAmap);
								break;
						}
					})
				}
				else if (hasAmap) {
					plus.runtime.openURL(urlAmap);
				}
				else if (hasBaiduMap) {
					plus.runtime.openURL(urlBaiduMap);
				}
				else{
					url = "geo:39.96310,116.340698?q=%e6%95%b0%e5%ad%97%e5%a4%a9%e5%a0%82";
					plus.runtime.openURL(url); //如果是国外应用，应该优先使用这个，会启动google地图。这个接口不能统一坐标系，进入百度地图时会有偏差
				}
			} else{
				// iOS上获取本机是否安装了百度高德地图，需要在manifest里配置，在manifest.json文件app-plus->distribute->apple->urlschemewhitelist节点下添加（如urlschemewhitelist:["iosamap","baidumap"]）
				plus.nativeUI.actionSheet({title:"选择地图应用",cancel:"取消",buttons:[{title:"Apple地图"},{title:"百度地图"},{title:"高德地图"}]}, function(e){
					console.log("e.index: " + e.index);
					switch (e.index){
						case 1:
							url = "http://maps.apple.com/?q=%e6%95%b0%e5%ad%97%e5%a4%a9%e5%a0%82&ll=39.96310,116.340698&spn=0.008766,0.019441";
							break;
						case 2:
							url = "baidumap://map/marker?location=39.968789,116.347247&title=DCloud&src=Hello%20uni-app";
							break;
						case 3:
							url = "iosamap://viewMap?sourceApplication=Hello%20uni-app&poiname=DCloud&lat=39.9631018208&lon=116.3406135236&dev=0";
							break;
						default:
							break;
					}
					if (url!="") {
						plus.runtime.openURL( url, function( e ) {
							plus.nativeUI.alert("本机未安装指定的地图应用");
						});
					}
				})
			}
		},
		openQQ: function (e) {
			// console.log("e.detail.value: " + JSON.stringify(e.detail.value));
			// 没有校验qq号是否为空或合法数字，如果不是可用的qq号，启动qq后会停留在qq主界面
			plus.runtime.openURL('mqqwpa://im/chat?chat_type=' + e.detail.value.qqNumType + '&uin=' + e.detail.value.qqNum,function (res) {
				plus.nativeUI.alert("本机没有安装QQ，无法启动");
			});
		}
	}
};
</script>
<style>
.button {
	margin: 30rpx;
	color: #007AFF;
}
</style>
