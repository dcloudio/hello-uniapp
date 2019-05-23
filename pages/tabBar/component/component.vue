<template>
	<view class="uni-padding-wrap uni-common-pb">
		<view class="uni-header-logo">
			<image src="/static/componentIndex.png"></image>
		</view>
		<view class="uni-hello-text uni-common-pb">
			uni-app内置组件，展示样式仅供参考，文档详见<u-link :href="'https://uniapp.dcloud.io/component/'" :text="'https://uniapp.dcloud.io/component/'" :inWhiteList="true"></u-link>
		</view>
		<view class="uni-card" v-for="(list,index) in lists" :key="index">
			<view class="uni-list">
				<view class="uni-list-cell uni-collapse">
					<view class="uni-list-cell-navigate uni-navigate-bottom" hover-class="uni-list-cell-hover" :class="list.open ? 'uni-active' : ''"
					 @click="triggerCollapse(index)">
						{{list.name}}
					</view>
					<view class="uni-list uni-collapse" :class="list.open ? 'uni-active' : ''">
						<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,key) in list.pages" :key="key" @click="goDetailPage(item)">
							<view class="uni-list-cell-navigate uni-navigate-right"> {{item.name ? item.name : item}} </view>
						</view>
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
						id: 'view',
						name: '视图容器',
						open: false,
						pages: [
							'view',
							'scroll-view',
							'swiper'
							// #ifndef MP-TOUTIAO
							,
							'movable-view',
							'cover-view'
							// #endif
						]
					}, {
						id: 'content',
						name: '基础内容',
						open: false,
						pages: ['text', 'rich-text', 'progress']
					}, {
						id: 'form',
						name: '表单组件',
						open: false,
						pages: ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'picker-view', 'radio',
							'slider',
							'switch', 'textarea',
							// #ifdef APP-PLUS || MP-WEIXIN
							'editor',
							// #endif
						]
					}, {
						id: 'nav',
						name: '导航',
						open: false,
						pages: ['navigator']
					}, {
						id: 'media',
						name: '媒体组件',
						open: false,
						pages: [
							'image',
							// #ifndef MP-ALIPAY
							'video',
							// #endif
							// #ifndef MP-ALIPAY || MP-TOUTIAO
							'audio',
							// #endif
						],
					},
					// #ifndef MP-TOUTIAO
					{
						id: 'map',
						name: '地图',
						open: false,
						pages: ['map']

					},
					// #endif
					// #ifdef APP-PLUS
					{
						id: 'web-view',
						name: '网页',
						open: false,
						pages: [{
							name: '网络网页',
							url: '/pages/component/web-view/web-view'
						}, {
							name: '本地网页',
							url: '/pages/component/web-view-local/web-view-local'
						}]
					},
					// #endif
					// #ifndef APP-PLUS
					{
						id: 'web-view',
						name: '网页',
						open: false,
						pages: ['web-view']
					},
					// #endif
				]
			}
		},
		onShareAppMessage() {
			return {
				title: '欢迎体验uni-app',
				path: '/pages/tabBar/component/component'
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
				if (typeof e === 'string') {
					uni.navigateTo({
						url: '/pages/component/' + e + '/' + e
					})
				} else {
					uni.navigateTo({
						url: e.url
					})
				}
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
</style>
