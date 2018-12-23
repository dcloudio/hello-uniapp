<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap">
			<view class="uni-btn-v">
				<button class="btn-load" type="primary" @click="showLoading">显示 loading 提示框</button>
				<button @click="hideLoading">隐藏 loading 提示框</button>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'loading'
			}
		},
		methods: {
			showLoading: function() {
				uni.showLoading({
					title: 'loading'
				});
			},
			hideLoading: function() {
				uni.hideLoading();
			}
		}
	}
</script>

<style>

</style>
