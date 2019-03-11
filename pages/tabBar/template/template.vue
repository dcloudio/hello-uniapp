<template>
	<view class="uni-padding-wrap uni-common-pb">
		<view class="uni-header-logo">
			<image src="../../../static/templateIndex.png"></image>
		</view>
		<view class="uni-hello-text uni-common-pb">
			以下是部分模板示例，更多模板见插件市场：https://ext.dcloud.net.cn。
		</view>
		<view class="uni-card" v-for="(list,index) in lists" :key="index">
			<view class="uni-list">
				<view class="uni-list-cell uni-collapse">
					<view class="uni-list-cell-navigate" hover-class="uni-list-cell-hover" :class="[list.open ? 'uni-active' : '',list.pages ? 'uni-navigate-bottom' : 'uni-navigate-right']"
					 @click="triggerCollapse(index)">
						{{list.name}}
					</view>
					<view class="uni-list uni-collapse" v-if="list.pages" :class="list.open ? 'uni-active' : ''">
						<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,key) in list.pages" :key="key" @click="goDetailPage(item)">
							<view class="uni-list-cell-navigate uni-navigate-right"> {{item.name ? item.name : item}} </view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="uni-divider">
			<view class="uni-divider__content">更多模板见插件市场：https://ext.dcloud.net.cn</view>
			<view class="uni-divider__line"></view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				lists: [{
						name: '多列选择 picker',
						url: 'mpvue-picker'
					}, {
						id: 'navbar',
						name: '顶部导航标题栏',
						open: false,
						pages: [{
								name: '默认样式',
								url: 'nav-default'
							},
							// #ifdef APP-PLUS || H5
							{
								name: '透明渐变样式',
								url: 'nav-transparent'
							}, {
								name: '导航栏带自定义按钮',
								url: 'nav-button'
							},
							// #endif
							// #ifdef APP-PLUS
							{
								name: '导航栏带图片',
								url: 'nav-image'
							},
							// #endif
							// #ifdef APP-PLUS || H5
							{
								name: '导航栏带红点和角标',
								url:'nav-dot'
							},
							{
								name: '导航栏带城市选择',
								url:'nav-city-dropdown'
							},
							{
								name: '导航栏带搜索框',
								url:'nav-search-input'
							},
							// #endif

							{
								name: '自定义导航栏组件(非原生)',
								url: 'nav-bar'
							}
						]
					},
					// #ifndef MP-ALIPAY
					{
						id: 'tabbar',
						name: '顶部选项卡',
						url: 'tabbar',
						// #ifdef APP-PLUS 
						open: false,
						pages: [{
							name: '非原生',
							url: '/platforms/app-plus/tabbar/tabbar'
						}, {
							name: '原生',
							url: 'tabbar'
						}]
						// #endif
					},
					// #endif
					{
						name: '三行列表',
						url: 'list-triplex-row'
					},
					// #ifndef MP-BAIDU
					{
						name: '右侧索引列表 indexList',
						url: 'index-list'
					},
					// #endif
					{
						name: '图文列表',
						url: 'media-list'
					}, {
						name: '商品列表',
						url: 'product-list'
					}, {
						name: '懒加载 lazy-load',
						open: false,
						// #ifndef MP-ALIPAY
						pages: [{
							name: '默认',
							url: 'lazy-load'
						}, {
							name: '自定义',
							url: 'lazy-load-custom'
						}],
						// #endif
						// #ifdef MP-ALIPAY
						url: 'lazy-load',
						// #endif
					}, {
						name: '时间轴 timeline',
						url: 'timeline'
					}, {
						name: '悬浮按钮 fab',
						url: 'fab'
					},
					// #ifndef MP-ALIPAY || MP-TOUTIAO
					{
						name: 'ECharts 图表',
						url: 'echarts'
					},
					// #endif
					// #ifdef APP-PLUS || H5 || MP-WEIXIN
					{
						name: '手势图案锁屏',
						url: 'gesture-lock'
					},
					// #endif
					{
						name: '列表到详情示例',
						url: 'list2detail-list'
					},
					// #ifdef APP-PLUS 
					{
						name: '问题反馈',
						url: '/platforms/app-plus/feedback/feedback'
					},
					// #endif
					{
						name: '二维码生成',
						url: 'qrcode'
					},
					// #ifdef APP-PLUS || MP-WEIXIN || H5 || MP-BAIDU
					{
						name: '图片裁剪',
						url: 'crop'
					},
					// #endif
					// #ifdef APP-PLUS || MP-WEIXIN || H5
                    {
						id: 'uparse',
						name: '富文本渲染',
						open: false,
						pages: [{
							name: 'uParse 富文本渲染示例 - markdown',
							url: 'uparse-md'
						}, {
							name: 'uParse 富文本渲染示例 - html',
							url: 'uparse-html'
						}]
					},
					{
						name: 'markdown 富文本编辑器',
						url: 'md-editor'
					},
					// #endif
					{
						name: '侧边分类导航',
						url: 'left-category'
					}, {
						name: '评论列表',
						url: 'comments'
					}, {
						name: '滚动公告',
						url: 'scrollmsg'
					}, {
						name: '表单验证',
						url: 'datachecker'
					}, {
						name: '插屏弹窗',
						url: 'sbanner'
					},
					// #ifdef APP-PLUS 
					{
						name:'打开外部应用',
						url: 'scheme'
					},
					{
						name: '聊天窗口 chat',
						url: 'im-chat'
					},
					// #endif
				]
			}
		},
		onShareAppMessage() {
			return {
				title: '欢迎体验uni-app',
				path: '/pages/tabBar/template/template'
			}
		},
		onNavigationBarButtonTap(e) {
			uni.navigateTo({
				url: '/pages/about/about'
			});
		},
		methods: {
			triggerCollapse(e) {
				if (!this.lists[e].pages) {
					this.goDetailPage(this.lists[e].url);
					return;
				}
				for (var i = 0; i < this.lists.length; ++i) {
					if (e === i) {
						this.lists[i].open = !this.lists[e].open;
					} else {
						this.lists[i].open = false;
					}
				}
			},
			goDetailPage(e) {
				let path = e.url ? e.url : e;
				let url = ~path.indexOf('platform') ? path : '/pages/template/' + path + '/' + path;
				uni.navigateTo({
					url: url
				});
				return false;
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
