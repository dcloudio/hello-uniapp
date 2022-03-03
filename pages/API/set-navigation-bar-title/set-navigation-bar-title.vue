<template>
	<view class="page">
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap">
			<view class="uni-helllo-text">
				The title bar of this page is the default configuration of uni-app, developers can configure the text content and title color in pages.json, or change it through the api interface.
			</view>
			<view class="uni-btn-v">
				<button type="default" @click="setText">Change title bar text</button>
				<button type="primary" @click="setBg">Change title bar color</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'nav-default',
				hasSetText:false,
				hasSetBg:false
			}
		},
		methods: {
			setText() {
				this.hasSetText = !this.hasSetText;
				uni.setNavigationBarTitle({
					title: this.hasSetText ? "Hello uni-app" : "Default navigation bar"
				})
			},
			setBg() {
				this.hasSetBg = !this.hasSetBg;
				uni.setNavigationBarColor({
					frontColor: this.hasSetBg ?  "#000000" : "#ffffff",
					backgroundColor: this.hasSetBg ? "#F8F8F8" : "#007AFF"
				})
			}
		}
	}
</script>

<style>
</style>
