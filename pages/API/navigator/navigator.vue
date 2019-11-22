<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-btn-v">
				<button @tap="navigateTo">跳转新页面，并传递数据</button>
				<button @tap="navigateBack">返回上一页</button>
				<button @tap="redirectTo">在当前页面打开</button>
				<button @tap="switchTab">切换到模板选项卡</button>
				<button @tap="reLaunch">关闭所有页面，打开首页</button>
				<!-- #ifdef APP-PLUS -->
				<button @tap="customAnimation">使用自定义动画打开页面</button>
				<!-- #endif -->
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'navigate'
			}
		},
		methods: {
			navigateTo() {
				uni.navigateTo({
					url: 'new-page/new-vue-page-1?data=Hello'
				})
			},
			navigateBack() {
				uni.navigateBack();
			},
			redirectTo() {
				uni.redirectTo({
					url: 'new-page/new-vue-page-1'
				});
			},
			switchTab() {
				uni.switchTab({
					url: '/pages/tabBar/template/template'
				});
			},
			reLaunch() {
				uni.reLaunch({
					url: '/pages/tabBar/component/component'
				});
			},
			customAnimation(){
				uni.navigateTo({
					url: 'new-page/new-vue-page-1?data=使用自定义动画打开页面',
					animationType: 'slide-in-bottom',
					animationDuration: 200
				})
			}
		}
	}
</script>
