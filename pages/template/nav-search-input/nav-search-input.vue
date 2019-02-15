<template>
	<view class="page">
		<swiper indicator-dots="true">
			<swiper-item v-for="(img, key) in imgUrls" :key="key"><image :src="img" /></swiper-item>
		</swiper>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title">
				
				<view>本示例为导航栏带搜索框完整功能演示，主要演示有：</view>
				<view>1. 导航栏为 transparent 模式，向上滑动页面，导航栏会从透明变为实色。</view>
				<view>2. 点击搜索框跳转到搜索页面。</view>
				<view>3. 点击导航栏右侧按钮实现关联操作。</view>
				<view>4. 搜索页面为提示词搜索，输入内容实时显示关联词。</view>
				<view>5. 搜索结果根据搜索内容高亮显示文字。</view>
				<view>6. 点击搜索列表或者软键盘搜索按钮，会将结果保存到搜索历史列表。</view>
				<view>7. 点击删除图标，清空历史搜索列表。</view>
				<view>Tips </view>
				<view>1. 本示例目前仅支持 App 端</view>
				<view>2. 所有示例均为演示使用，具体逻辑需要自己实现。</view>

			</view>
		</view>
		<view style="height: 1000upx;"></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			showSwiper: false,
			imgUrls: [
				'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg',
				'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg'
			]
		};
	},
	/**
	 * 当 searchInput 配置 disabled 为 true 时触发
	 */
	onNavigationBarSearchInputClicked(e) {
		console.log('事件执行了')
		uni.navigateTo({
			url: '/pages/template/nav-search-input/detail/detail'
		});
	},
	/**
	 *  点击导航栏 buttons 时触发
	 */
	onNavigationBarButtonTap() {
		uni.showModal({
			title: '提示',
			content: '用户点击了功能按钮，这里仅做展示。',
			success: res => {
				if (res.confirm) {
					console.log('用户点击了确定');
				}
			}
		});
	}
};
</script>

<style>
image,
swiper,
.img-view {
	width: 750upx;
	height: 500upx;
}
.page-section-title {
	margin-top: 50upx;
}
</style>
