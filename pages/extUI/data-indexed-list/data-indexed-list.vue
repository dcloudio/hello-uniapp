<template>
	<uni-data-indexed-list collection="opendb-china-cities" field="code as value, name as text, letter as group" :page-size="500" where="type==1" orderby="group asc" :show-select="true" @click="bindClick" />
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		methods: {
			bindClick(e) {
				console.log('Click on the item to return the data' + JSON.stringify(e))
			}
		}
	}
</script>

<style></style>