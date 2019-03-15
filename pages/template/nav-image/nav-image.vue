<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title">
				<uni-icon size="16" type="info"></uni-icon>说明 : </view>
			<view class="uni-helllo-text">
				<view>在App端可在pages.json里通过 style -> app-plus -> tags 配置，暂不支持动态改变tags的样式；常用于App首页顶部导航显示产品Logo</view>
			</view>
		</view>
	</view>
</template>
<script>
	import uniIcon from '@/components/uni-icon/uni-icon.vue'
	export default {
		data() {
			return {
				title: 'nav-image'
			}
		},
		components:{
			uniIcon
		}
	}
</script>

<style>
	
</style>
