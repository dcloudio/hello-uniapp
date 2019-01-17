<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title">
				<uni-icon size="16" type="info"></uni-icon>说明 : </view>
			<view class="uni-helllo-text">
				<view>在App端可在pages.json里配置tags，暂不支持动态改变tags的样式。</view>
				<view>在小程序\H5端，不支持配置tags,故按钮不见了。</view>
			</view>
		</view>
	</view>
</template>
<script>
	import uniIcon from '../../../components/uni-icon.vue'
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
