<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-btn-v">
				<button @tap="navigateTo">Jump to new page and pass data</button>
				<button @tap="navigateBack">Back to previous page</button>
				<button @tap="redirectTo">Open in the current page</button>
				<button @tap="switchTab">Switch to the Templates tab</button>
				<button v-if="!hasLeftWin" @tap="reLaunch">Close all pages and open the home page</button>
				<!-- #ifdef APP-PLUS -->
				<button @tap="customAnimation">Open page with custom animation</button>
				<!-- #endif -->
				<!-- #ifdef APP-PLUS || H5 -->
				<button @tap="preloadPage">Preload complex pages</button>
				<!-- #endif -->
				<!-- #ifdef APP-PLUS -->
				<button @tap="unPreloadPage">Cancel page preloading</button>
				<!-- #endif -->
				<!-- #ifdef APP-PLUS || H5 -->
				<button @tap="navigateToPreloadPage">Open complex pages</button>
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
					url: 'new-page/new-vue-page-1?data=Open_page_with_custom_animation',
					animationType: 'slide-in-bottom',
					animationDuration: 200
				})
			},
			preloadPage(){
				uni.preloadPage({
					url: preloadPageUrl,
					success(){
						uni.showToast({
							title:'Page preloaded successfully'
						})
					},
					fail(){
						uni.showToast({
							title:'Page preload failure'
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
