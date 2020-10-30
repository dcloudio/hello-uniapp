<!--responsive/right-window.vue-->
<template>
	<!-- <scroll-view class="fix-window" scroll-y="true"> -->
		<view class="left-window-style">
			<view class="second-menu">
				<component v-bind:is="active" @changeLeftWin="changeLeftWin"></component>
			</view>
		</view>
	<!-- </scroll-view> -->
</template>

<script>
import componentPage from '@/pages/tabBar/component/component.nvue'
import API from '@/pages/tabBar/API/API.nvue'
import extUI from '@/pages/tabBar/extUI/extUI.nvue'
import templatePage from '@/pages/tabBar/template/template.nvue'
import { mapMutations, mapState } from 'vuex'
export default {
	data() {
		return {
			nav: [
				'component',
				'API',
				'extUI',
				'template'
			]
		}
	},
	props: {
	    matchLeftWindow: {
	        type: Boolean
	    }
	},
	components:{
		componentPage,
		API,
		extUI,
		templatePage
	},
	computed:{
		...mapState({
			active: state => state.active,
			// menu: state => state.menu
		})
	},
	watch:{
		matchLeftWindow: {
			immediate: true,
			handler(newMatches) {
				this.setMatchLeftWindow(newMatches)
			}
		},
		$route: {
			immediate: true,
			handler(newRoute) {
				if(newRoute.path === '/'){
					uni.redirectTo({
						url:'pages/component/view/view'
					})
				} else if (!newRoute.matched.length) {
					uni.redirectTo({
						url:'pages/error/404'
					})
				} else {
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
		}
	},
	methods: {
		...mapMutations(['setMatchLeftWindow', 'setLeftWinActive', 'setActiveOpen', 'setActive']),
		changeLeftWin(panel, e, data) {
			console.log(999999999, panel, e, data)
			this.setActiveOpen(panel)
			this.setLeftWinActive(e)
			this.menu = data
		}
	}
}
</script>

<style>
	@import '../common/uni-nvue.css';
	.fix-window {
		/* position: fixed; */
		/* width: 350px;
		height: calc(100vh);
		margin-top: var(--window-top);
		background-color: #fff; */
	}
	.left-window-style {
		height: calc(100vh - var(--window-top));
		background-color: #f8f8f8;
	}
	.second-menu {
		width: 30\50px;
		background-color: #F8F8F8;
		/* height: calc(100vh); */
	}
	.icon-image {
		width: 30px;
		height: 30px;
	}
</style>
