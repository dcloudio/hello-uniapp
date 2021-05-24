<template>
	<uni-indexed-list :options="list" :show-select="true" @click="bindClick" />
</template>

<script>
	import airport from '@/common/airport.js'
	export default {
		components: {},
		data() {
			return {
				list: airport.list
			}
		},
		methods: {
			bindClick(e) {
				console.log('点击item，返回数据' + JSON.stringify(e))
			}
		}
	}
</script>

<style></style>