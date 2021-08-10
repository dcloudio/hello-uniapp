<template>
	<view class="top-window-header">
		<view class="left-header logo">
			<navigator class="logo" open-type="reLaunch" url="/pages/component/view/view">
				<image src="../static/logo.png" mode="heightFix" style="width: 30px;"></image>
				<text>hello uni-app</text>
			</navigator>
		</view>
		<custom-tab-bar class="tab-bar-flex" direction="horizontal" :show-icon="false" :selected="current" @onTabItemTap="toSecondMenu" />
		<uni-link class="phone-link" href="https://m3w.cn/uniapp" text="体验手机版"></uni-link>
		<!-- <uni-link class="phone-link" href="http://hellouniapp.dcloud.net.cn/pages/component/view/view" text="体验 vue 2.x 版"></uni-link> -->
		<uni-link class="phone-link" href="http://vue
		3-hellouniapp.dcloud.net.cn/pages/component/view/view" text="体验 vue 3.0 版"></uni-link>
		<!-- <svg t="1628162999634" class="new-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1202" width="25" height="25"><path d="M245.76 286.72h552.96c124.928 0 225.28 100.352 225.28 225.28s-100.352 225.28-225.28 225.28H0V532.48c0-135.168 110.592-245.76 245.76-245.76z m133.12 348.16V401.408H348.16v178.176l-112.64-178.176H204.8V634.88h30.72v-178.176L348.16 634.88h30.72z m182.272-108.544v-24.576h-96.256v-75.776h110.592v-24.576h-141.312V634.88h143.36v-24.576h-112.64v-83.968h96.256z m100.352 28.672l-34.816-151.552h-34.816l55.296 233.472H675.84l47.104-161.792 4.096-20.48 4.096 20.48 47.104 161.792h28.672l57.344-233.472h-34.816l-32.768 151.552-4.096 30.72-6.144-30.72-40.96-151.552h-30.72l-40.96 151.552-6.144 30.72-6.144-30.72z" fill="#EE502F" p-id="1203"></path></svg> -->
		<svg t="1628163727478" class="new-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1334" width="40" height="40"><path d="M829.866667 313.6a64 64 0 0 1 64 64v213.333333a64 64 0 0 1-64 64H262.058667L168.32 746.666667v-106.666667h0.213333V377.6a64 64 0 0 1 64-64h597.333334z m-117.333334 78.293333H661.333333l-23.466666 138.56-19.2-136.533333h-51.2l34.133333 174.677333h68.266667l19.2-116.458666 17.066666 116.458666h68.266667l34.133333-174.677333h-51.2l-17.066666 138.538667-27.733334-140.544z m-151.466666 0h-125.866667v174.698667h125.866667v-36.138667h-78.933334v-38.165333h68.266667v-32.106667h-68.266667v-34.133333h78.933334v-34.133333z m-217.6 0h-70.4v174.698667H320v-128.512l32 128.512h70.4V391.893333h-46.933333v134.506667l-32-134.506667z" p-id="1335" fill="#d81e06"></path></svg>
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
	.new-icon {
		margin-left: -3px;
		/* margin-right: 5px; */
		margin-top: -20px;
	}
</style>
