<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-btn-v">
				<button @click="navigateTo">跳转新页面，并传递数据</button>
				<button @click="navigateBack">返回上一页</button>
				<button @click="redirectTo">在当前页面打开</button>
				<button @click="switchTab">切换到模板选项卡</button>
				<button v-if="!hasLeftWin" @click="reLaunch">关闭所有页面，打开首页</button>
				<!-- #ifdef APP-PLUS -->
				<button @click="customAnimation">使用自定义动画打开页面</button>
				<!-- #endif -->
				<!-- #ifdef APP-PLUS || H5 -->
				<button @click="preloadPage">预载复杂页面</button>
				<!-- #endif -->
				<!-- #ifdef APP-PLUS -->
				<button @click="unPreloadPage">取消页面预载</button>
				<!-- #endif -->
				<!-- #ifdef APP-PLUS || H5 -->
				<button @click="navigateToPreloadPage">打开复杂页面</button>
				<!-- #endif -->
			</view>
		</view>
	</view>
</template>
<script>
	const preloadPageUrl = '/pages/extUI/calendar/calendar'
	import { mapState } from 'vuex'
	export default {
		data() {
			return {
				title: 'navigate'
			}
		},
		computed: {
			...mapState({
				hasLeftWin: state => !state.noMatchLeftWindow
			})
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
				if (this.hasLeftWin) {
					uni.reLaunch({
						url: '/pages/component/view/view'
					});
					return;
				}
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
			},
			preloadPage(){
				uni.preloadPage({
					url: preloadPageUrl,
					success(){
						uni.showToast({
							title:'页面预载成功'
						})
					},
					fail(){
						uni.showToast({
							title:'页面预载失败'
						})
					}
				})
			},
			unPreloadPage(){
				uni.unPreloadPage({
					url: preloadPageUrl
				})
			},
			navigateToPreloadPage(){
				uni.navigateTo({
					url: preloadPageUrl
				})
			}
		}
	}
</script>
