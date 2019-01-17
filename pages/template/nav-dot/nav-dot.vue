<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title"> <uni-icon size="16" type="info"></uni-icon>说明 : </view>
			<view class="uni-helllo-text">
				<view
					>在App端可在pages.json里配置buttons，暂不支持动态改变buttons的样式，使用onNavigationBarButtonTap可监听红点按钮的点击事件。</view
				>
			</view>
		</view>
	</view>
</template>
<script>
import uniIcon from '../../../components/uni-icon.vue';
export default {
	data() {
		return {
			title: 'nav-dot'
		};
	},
	onLoad() {
		this.setStyle(0,true);
		this.setStyle(1,'20');

	},
	methods: {
		/**
		 * 修改导航栏buttons
		 * index[number] 修改的buttons 下标索引，最右边索引为0
		 * text[boolean|string] 需要修改的text 内容 ，如果定义redDot请设置 true||false ，如果定义badgeText请设置具体数字，如果没有输入''
		 */
		setStyle(index, text) {
			let pages = getCurrentPages();
			let page = pages[pages.length - 1];
			// #ifdef APP-PLUS
			let currentWebview = page.$getAppWebview();
			let titleNView = currentWebview.getStyle().titleNView;

			let dot = titleNView.buttons[index].redDot;
			let badgeText = titleNView.buttons[index].badgeText;
			if (dot) {
				titleNView.buttons[index].redDot = text;
			}
			if (badgeText) {
				titleNView.buttons[index].badgeText = text;
			}
			currentWebview.setStyle({
				titleNView: titleNView
			});
			// #endif
		}
	},
	onNavigationBarButtonTap(e) {
		uni.showToast({
			title: e.index === 0 ? '你点了消息按钮' : '你点了关注按钮',
			icon: 'none'
		});
		// 取消红点或者角标 
		this.setStyle(e.index, e.index === 0 ? false : '');
	},
	components: {
		uniIcon
	}
};
</script>

<style></style>
