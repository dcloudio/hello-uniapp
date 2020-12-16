<template>
	<view class="top-window-header">
		<view class="left-header logo">
			<navigator class="logo" open-type="reLaunch" url="/pages/component/view/view">
				<image src="../static/logo.png" mode="heightFix" style="width: 30px;"></image>
				<text>hello uni-app</text>
			</navigator>
		</view>
		<custom-tab-bar class="tab-bar-flex" direction="horizontal" :show-icon="false" :selected="current" @onTabItemTap="toSecondMenu" />
		<uni-link class="phone-link" href="https://m3w.cn/uniapp" text="手机版"></uni-link>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				selected: {
					component: 0,
					API: 1,
					extUI: 2,
					template: 3
				},
				current: 0,
				indexPage: [{
					tabBar: '/pages/tabBar/component/component',
					index: '/pages/component/view/view'
				}, {
					tabBar: '/pages/tabBar/API/API',
					index: '/pages/API/set-navigation-bar-title/set-navigation-bar-title'
				}, {
					tabBar: '/pages/tabBar/extUI/extUI',
					index: '/pages/extUI/badge/badge'
				}, {
					tabBar: '/pages/tabBar/template/template',
					index: '/pages/template/nav-button/nav-button'
				}]
			}
		},
		props: {
			matchLeftWindow: {
				type: Boolean
			},
			showLeftWindow: {
				type: Boolean
			}
		},
		watch: {
			$route: {
				immediate: true,
				handler(newRoute) {
					if ( this.showLeftWindow ) {
						let comp = newRoute.path.split('/')[2]
							this.current = this.selected[comp]
						for(const item of this.indexPage) {
							if (newRoute.path === item.tabBar) {
								uni.redirectTo({
									url: item.index
								})
							}
						}
					}
				}
			}
		},
		mounted() {
		},
		methods: {
			toSecondMenu(e) {
				const activeTabBar = '/' + e.pagePath
				for(const item of this.indexPage) {
					if (activeTabBar === item.tabBar) {
						uni.redirectTo({
							url: item.index
						})
					}
				}
			}
		}
	}
</script>

<style>
	.top-window-header {
		height: 60px;
		padding: 0 15px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
		border-bottom: 1px solid #e1e1e1;
		background-color: #FFFFFF;
		color: #333;
	}
	.logo {
		display: flex;
		flex-direction: row;
		align-items: center;
		flex: 1;
	}
	.logo image {
		height: 30px;
		width: 30px;
	}
	.logo text {
		margin-left: 8px;
	}
	.right-header {
		display: flex;
		flex-direction: row;
		color: #333;
	}
	.right-header-item {
		line-height: 25px;
		margin-left: 40px;
		cursor: pointer;
		font-size: 16px;
	}
	.active {
		color: #4cd964;
		border-bottom: 2px solid;
	}
	.tab-bar-flex {
		width: 360px;
	}
	.phone-link {
		padding-left: 20px;
		cursor: pointer;
	}
</style>
