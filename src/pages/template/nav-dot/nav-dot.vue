<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title"> <uni-icons size="16" type="info"></uni-icons>说明 : </view>
			<view class="uni-helllo-text">
				<view
					>在App端可在pages.json里配置buttons，暂不支持动态改变buttons的样式，使用onNavigationBarButtonTap可监听红点按钮的点击事件。</view
				>
			</view>
		</view>
	</view>
</template>
<script>
import uniIcons from '@/components/uni-icons/uni-icons.vue';
export default {
	data() {
		return {
			title: 'nav-dot'
		};
	},
	onReady() {
		this.setStyle(0,true);
		this.setStyle(1,true,'9');

	},
	methods: {
		/**
		 * 修改导航栏buttons
		 * index[number] 修改的buttons 下标索引，最右边索引为0
		 * show[boolean] 显示还是隐藏角标或者红点
		 * text[string] 需要修改的角标的text 内容 ，如果定义redDot 此参数无效 ，如果定义badgeText请设置具体，如果不用输入
		 */
		setStyle(index, show,text) {
			let pages = getCurrentPages();
			let page = pages[pages.length - 1];
			// #ifdef APP-PLUS
			let currentWebview = page.$getAppWebview();
			if(show){
				if(index === 0){
					currentWebview.showTitleNViewButtonRedDot({index:index,text:text})
				}else{
					currentWebview.setTitleNViewButtonBadge({index:index,text:text})
				}
			}else{
				if(index === 0){
					currentWebview.hideTitleNViewButtonRedDot({index:index})
				}else{
					currentWebview.removeTitleNViewButtonBadge({index:index})
				}
			}
			
			// #endif
		}
	},
	onNavigationBarButtonTap(e) {
		uni.showToast({
			title: e.index === 0 ? '你点了消息按钮' : '你点了关注按钮', 
			icon: 'none'
		});
		// 取消红点或者角标 
		this.setStyle(e.index,false);
	},
	components: {
		uniIcons
	}
};
</script>

<style></style>
