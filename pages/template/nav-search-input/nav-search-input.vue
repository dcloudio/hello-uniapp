<template>
	<view class="page">
		<swiper indicator-dots="true">
			<swiper-item v-for="(img, key) in imgUrls" :key="key">
				<image :src="img" />
			</swiper-item>
		</swiper>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title">
				<view>This example is a demonstration of the full functionality of the navigation bar with search box,
					with the following main demonstrations.</view>
				<view>1. The navigation bar is transparent mode, swipe up the page, the navigation bar will change from
					transparent to solid color.</view>
				<view>2. Click on the search box to jump to the search page.</view>
				<view>3. Click the button on the right side of the navigation bar to realize the associated operation.</view>
				<view>4. The search page is a prompted word search, and the input content shows related words in real time.</view>
				<view>5. Search results highlight text based on the search content.</view>
				<view>6. Clicking on the search list or the soft keyboard search button will save the results to the search history list.</view>
				<view>7. Click the delete icon to clear the history search list.</view>
				<view>Tips </view>
				<view>1. This example is currently only supported on the App side</view>
				<view>2. All examples are for demonstration purposes, specific logic needs to be implemented by yourself.</view>
			</view>
		</view>
		<view style="height: 1000rpx;"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showSwiper: false,
				imgUrls: [
					'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b4b60b10-5168-11eb-bd01-97bc1429a9ff.jpg',
					'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b1dcfa70-5168-11eb-bd01-97bc1429a9ff.jpg'
				]
			};
		},
		/**
		 * 当 searchInput 配置 disabled 为 true 时触发
		 */
		onNavigationBarSearchInputClicked(e) {
			console.log('event is executed')
			uni.navigateTo({
				url: '/pages/template/nav-search-input/detail/detail'
			});
		},
		/**
		 *  点击导航栏 buttons 时触发
		 */
		onNavigationBarButtonTap() {
			uni.showModal({
				title: 'Tips',
				content: 'The user clicks on the function button, which is only shown here.',
				success: res => {
					if (res.confirm) {
						console.log('The user clicked OK');
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
		width: 750rpx;
		width: 100%;
		height: 500rpx;
	}

	.page-section-title {
		margin-top: 50rpx;
	}
</style>
