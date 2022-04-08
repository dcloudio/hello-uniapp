<template>
	<view class="root">
		<view class="uni-padding-wrap">
			<view class="uni-title">This is a demo of the tab page jumping to the details page, and here are the headers
				passed in during the page jump.
			</view>
			<view class="uni-title">{{title}}</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: ''
			}
		},
		onLoad(e) {
			this.title = e.title || '';
		}
	}
</script>
<style>
</style>
