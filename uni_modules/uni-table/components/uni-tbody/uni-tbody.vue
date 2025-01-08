<template>
	<!-- #ifdef H5 -->
	<tbody>
		<slot></slot>
	</tbody>
	<!-- #endif -->
	<!-- #ifndef H5 -->
	<view><slot></slot></view>
	<!-- #endif -->
</template>

<script>
export default {
	name: 'uniBody',
	options: {
		// #ifdef MP-TOUTIAO
		virtualHost: false,
		// #endif
		// #ifndef MP-TOUTIAO
		virtualHost: true
		// #endif
	},
	data() {
		return {

		}
	},
	created() {},
	methods: {}
}
</script>

<style>
</style>
