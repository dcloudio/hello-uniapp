<template>
	<view class="top-window-header">
		<view class="left-header logo">
			<navigator class="logo" open-type="reLaunch" url="/pages/component/view/view">
				<image src="../static/logo.png" mode="heightFix" style="width: 30px;"></image>
				<text>hello uni-app</text>
			</navigator>
		</view>
		<view class="right-header">
			<view class="right-header-item" :class="{'active': active === menu.component}" v-for="menu in menus" :key="menu.component" @click="toSecondMenu(menu.component)">{{menu.name}}</view>
		</view>
	</view>
</template>

<script>
	import { mapMutations, mapState } from 'vuex'
	export default {
		data() {
			return {
				menus: [{
					id: 'componentPage',
					iconPath: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/8b4f7fc0-12d1-11eb-8a36-ebb87efcf8c0.png",
					name: '内置组件',
					component: 'componentPage'
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
					id: 'template',
					iconPath: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/e0bd9dc0-12d1-11eb-81ea-f115fe74321c.png",
					name: '模板',
					component: 'templatePage'
				}]
			}
		},
		computed: {
			...mapState({
				active: state => state.active
			})
		},
		methods: {
			...mapMutations(['setActive']),
			toSecondMenu(component) {
				this.setActive(component)
				let url = `/pages/component/view/view`
				if (component === 'API') {
					url = `/pages/API/navigator/navigator`
				}
				if (component === 'extUI') {
					url = `/pages/extUI/badge/badge`
				}
				if (component === 'templatePage') {
					url = `/pages/template/nav-button/nav-button`
				}
				console.log(944)
				uni.redirectTo({
					url: url
				})
			}
		}
	}
</script>

<style lang="scss">
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
	// @media screen and (min-width: 1500px) {
	// 	.top-window-header {
	// 		padding: 0 calc(var(--window-left) * 1.6);
	// 	}
	// }
	.logo {
		display: flex;
		flex-direction: row;
		align-items: center;
		flex: 1;

		image {
			height: 30px;
			width: 30px;
		}

		text {
			margin-left: 8px;
		}
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
</style>
