<!--responsive/right-window.vue-->
<template>
  <view class="left-window-style">
		<view class="main-menu">
			<uni-list>
				<uni-list-item v-for="menu in menus" :key="menu.id"
				:title="menu.name"
				:thumb="menu.iconPath"
				@click="toSecondMenu(menu.component)"
				:clickable="true"
				showArrow
				thumb-size="lg" />
			</uni-list>
		</view>
		<view class="second-menu">
			<component v-bind:is="currentComponent"></component>
		</view>
  </view>
</template>

<script>
import uniSubMenu from '@/windows/uni-sub-menu/uni-sub-menu.vue'
import component from '@/pages/tabBar/component/component.nvue'
import API from '@/pages/tabBar/API/API.nvue'
import extUI from '@/pages/tabBar/extUI/extUI.nvue'
import templatePage from '@/pages/tabBar/template/templatePage.nvue'
import { mapMutations } from 'vuex'
export default {
	data() {
		return {
			currentComponent: 'component',
			menus: [{
				id: 'component1',
				iconPath: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/8b4f7fc0-12d1-11eb-8a36-ebb87efcf8c0.png",
				name: '内置组件',
				component: 'component'
			},{
				id: 'API',
				iconPath: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/c15af2c0-12d1-11eb-81ea-f115fe74321c.png",
				name: '接口',
				component: 'API'
			},{
				id: 'extUI',
				iconPath: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/d45d20f0-12d1-11eb-b997-9918a5dda011.png",
				name: '扩展组件',
				component: 'extUI'
			},{
				id: 'templatePage',
				iconPath: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/e0bd9dc0-12d1-11eb-81ea-f115fe74321c.png",
				name: '模板',
				component: 'templatePage'
			}]
		}
	},
	props: {
	    matchLeftWindow: {
	        type: Boolean
	    }
	},
	components:{
		component,
		API,
		extUI,
		templatePage,
		uniSubMenu
	},
	watch:{
		matchLeftWindow: {
			immediate: true,
			handler(newMatches) {
				this.setMatchLeftWindow(newMatches)
			}
		}
	},
	mounted() {
		uni.redirectTo({
			url:'pages/component/view/view'
		})
	},
	onLoad() {
	},
	methods: {
		...mapMutations(['setMatchLeftWindow']),
		toSecondMenu(component) {
			this.currentComponent = component
		}
	}
}
</script>

<style>
	.left-window-style {
		background-color: #fff;
		display: flex;
		flex-direction: row;
		height: calc(100vh);
	}
	.main-menu {
		width: 240px;
	}
	.second-menu {
		width: 300px;
		background-color: #F8F8F8;
	}
	.icon-image {
		width: 30px;
		height: 30px;
	}
</style>
