<template>
	<view class="left-window-style">
		<view class="second-menu">
			<!-- <keep-alive> -->
			<component v-bind:is="active" :hasLeftWin="hasLeftWin" :leftWinActive="leftWinActive"></component>
			<!-- </keep-alive> -->
		</view>
	</view>
</template>

<script>
	import componentPage from '@/pages/tabBar/component/component.nvue'
	import API from '@/pages/tabBar/API/API.nvue'
	import extUI from '@/pages/tabBar/extUI/extUI.nvue'
	import templatePage from '@/pages/tabBar/template/template.nvue'
	import {
		mapMutations,
		mapState
	} from 'vuex'
	let isPcObserver, isPhoneObserver
	export default {
		data() {
			return {
				nav: [
					'component',
					'API',
					'extUI',
					'template'
				],
				isPC: false
			}
		},
		components: {
			componentPage,
			API,
			extUI,
			templatePage
		},
		computed: {
			...mapState({
				active: state => state.active,
				hasLeftWin: state => !state.noMatchLeftWindow,
				leftWinActive: state => state.leftWinActive.split('/')[3],
			})
		},
		mounted() {
			isPcObserver = uni.createMediaQueryObserver(this)
			isPhoneObserver = uni.createMediaQueryObserver(this)

			isPcObserver.observe({
				minWidth: 768
			}, matched => {
				this.isPC = matched
				const pageUrl = this.$route.path
				if (!pageUrl) return
				const pageName = this.$route.path.split('/')[4]
				if (pageUrl === '/' || this.nav.includes(pageName)) {
					const tabbarUrl = pageName ? (pageName === 'component' ? '/' : `/pages/tabBar/${pageName}/${pageName}`) : '/'
					if (pageUrl === '/' || pageUrl === tabbarUrl) {
						uni.switchTab({
							url: pageUrl,
						})
					}
				} else {
					uni.reLaunch({
						url: pageUrl
					})
				}
			})

			isPhoneObserver.observe({
				maxWidth: 767
			}, matched => {
				this.isPC = !matched
				if (matched) {
					const pageUrl = this.$route.path
					const tabbarName = this.$route.path.split('/')[2]
					const tabbarUrl = tabbarName && (tabbarName === 'component' ? '/' : `/pages/tabBar/${tabbarName}/${tabbarName}`)
					uni.switchTab({
						url: tabbarUrl,
						success(e) {
							uni.navigateTo({
								url: pageUrl
							})
						}
					})
				}

			})
		},
		unmounted() {
			isPcObserver.disconnect()
			isPhoneObserver.disconnect()
		},
		watch: {
			isPC: {
				immediate: true,
				handler(newMatches) {
					this.setMatchLeftWindow(newMatches)
					// this.handlerRoute(this.$route)
				}
			},
			// #ifndef VUE3
			$route: {
				immediate: true,
				handler(newRoute) {
					this.handlerRoute(newRoute)
				}
			},
			// #endif
			// #ifdef VUE3
			$route(newRoute) {
				this.handlerRoute(newRoute)
			}
			// #endif
		},

		methods: {
			...mapMutations(['setMatchLeftWindow', 'setActive', 'setLeftWinActive']),

			handlerRoute(newRoute) {
				if (this.isPC) {
					if (newRoute.path === '/') {
						// uni.redirectTo({
						// 	url: '/pages/component/view/view'
						// })
					} else if (!newRoute.matched.length) {
						uni.redirectTo({
							url: '/pages/error/404'
						})
					} else {
						this.setLeftWinActive(newRoute.path)
						let active = newRoute.path.split('/')[2]
						if (this.nav.includes(active)) {
							if (active === 'component') {
								active = 'componentPage'
							}
							if (active === 'template') {
								active = 'templatePage'
							}
							this.setActive(active)
						}
					}
				}
			},

			switchTab() {

			}
		}
	}
</script>

<style>
	@import '../common/uni-nvue.css';

	.left-window-style {
		min-height: calc(100vh - var(--top-window-height));
		background-color: #f8f8f8;
	}

	.second-menu {
		width: 350px;
		background-color: #F8F8F8;
	}

	.icon-image {
		width: 30px;
		height: 30px;
	}
</style>
