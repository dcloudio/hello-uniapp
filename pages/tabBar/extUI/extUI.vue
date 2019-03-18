<template>
	<view class="uni-padding-wrap uni-common-pb">
		<view class="uni-header-logo">
			<image src="../../../static/extuiIndex.png"></image>
		</view>
		<view class="uni-hello-text uni-common-pb">
			以下是uni-app扩展组件示例，更多组件见插件市场：https://ext.dcloud.net.cn。
		</view>
		<view class="uni-card" v-for="(list,index) in lists" :key="index">
			<view class="uni-list">
				<view class="uni-list-cell uni-collapse">
					<view class="uni-list-cell-navigate uni-navigate-right" hover-class="uni-list-cell-hover" @click="goDetailPage(list.url)">
						{{list.name}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				lists: [{
						name: 'Card 卡片',
						url: 'card'
					},
					// #ifdef H5 || APP-PLUS || MP-WEIXIN
					{
						name: 'Collapse 折叠面板',
						url: 'collapse'
					},
					// #endif
					{
						name: 'Drawer 抽屉',
						url: 'drawer'
					}, {
						name: 'Grid 宫格',
						url: 'grid'
					}, {
						name: 'List 列表',
						url: 'list'
					}, {
						name: 'NavBar 导航栏',
						url: 'nav-bar'
					}, {
						name: 'Pagination 分页器',
						url: 'pagination'
					}, {
						name: 'Steps 步骤条',
						url: 'steps'
					}, {
						name: 'SegmentedControl 分段器',
						url: 'segmented-control'
					}, {
						name: 'SwipeAction 滑动操作',
						url: 'swipe-action'
					}, {
						name: 'Badge 数字角标',
						url: 'badge'
					}, {
						name: 'CountDown 倒计时',
						url: 'count-down'
					}, {
						name: 'Icon 图标',
						url: 'icon'
					}, {
						name: 'LoadMore 加载更多',
						url: 'load-more'
					}, {
						name: 'NoticeBar 通告栏',
						url: 'notice-bar'
					}, {
						name: 'NumberBox 数字输入框',
						url: 'number-box'
					}, {
						name: 'Popup 弹出层',
						url: 'popup'
					}, {
						name: 'Rate 评分',
						url: 'rate'
					}, {
						name: 'Tag 标签',
						url: 'tag'
					}, {
						name: 'Calendar 日历',
						url: 'calendar'
					}
				]
			}
		},
		onShareAppMessage() {
			return {
				title: '欢迎体验uni-app',
				path: '/pages/tabBar/extUI/extUI'
			}
		},
		onNavigationBarButtonTap(e) {
			uni.navigateTo({
				url: '/pages/about/about'
			});
		},
		methods: {
			goDetailPage(path) {
				uni.navigateTo({
					url: '/pages/extUI/' + path + '/' + path
				});
			}
		}
	}
</script>

<style>
	page {
		height: auto;
		min-height: 100%;
	}

	.uni-card {
		box-shadow: none;
	}

	.uni-list:after {
		height: 0;
	}

	.uni-list:before {
		height: 0;
	}

	.uni-hello-text {
		word-break: break-all;
	}
</style>