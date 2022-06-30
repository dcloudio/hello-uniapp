<template>
	<view class="container">
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">面包屑导航显示当前页面的路径，快速返回之前的任意可跳转页面</text>
		</uni-card>
		<uni-section title="基础用法" type="line" padding>
				<uni-breadcrumb separator="/">
					<uni-breadcrumb-item v-for="(route,index) in routes" :key="index" :to="route.to">{{route.name}}</uni-breadcrumb-item>
				</uni-breadcrumb>
		</uni-section>
		<uni-section title="自定义分隔符" type="line" padding>
				<uni-breadcrumb separator=">">
					<uni-breadcrumb-item v-for="(route,index) in routes" :key="index" :to="route.to">{{route.name}}</uni-breadcrumb-item>
				</uni-breadcrumb>
		</uni-section>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				routes: [ {
					to: '/pages/index/index',
					name: '首页'
				}, {
					to: '',
					name: '菜单 A'
				}, {
					to: '',
					name: '菜单 B'
				}]
			};
		},
	};
</script>

<style lang="scss">

</style>
