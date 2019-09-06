<template>
	<view class="">
		<view class="example-title">基本用法</view>
		<view class="example-body">
			<uni-fav :checked="checkList[0]" class="favBtn" @click="favClick(0)" />
			<uni-fav :checked="checkList[1]" star="false" class="favBtn" @click="favClick(1)" />
			<uni-fav :checked="checkList[2]" class="favBtn" circle="true" bg-color="#dd524d" bg-color-checked="#007aff" fg-color="#ffffff" fg-color-checked="#ffffff" @click="favClick(2)" />
			<uni-fav :checked="checkList[3]" class="favBtn" bg-color="#f8f8f8" bg-color-checked="#eeeeee" fg-color="#333333" fg-color-checked="#333333" @click="favClick(3)" />
		</view>
		<view class="example-title">自定义文字</view>
		<view class="example-body">
			<uni-fav :checked="checkList[4]" :content-text="contentText" class="favBtn" @click="favClick(4)" />
		</view>
		<view class="example-title">在自定义导航栏使用</view>
		<view class="example-body example-body-fullWidth">
			<uni-nav-bar :fixed="false" left-icon="arrowleft" title="标题" color="#333333" background-color="#FFFFFF">
				<block slot="right">
					<uni-fav :checked="checkList[5]" class="favBtn-nav" circle="true" @click="favClick(5)" />
				</block>
			</uni-nav-bar>
		</view>
	</view>
</template>

<script>
	import uniFav from '@/components/uni-fav/uni-fav.vue'
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	export default {
		components: {
			uniFav,
			uniNavBar
		},
		data() {
			return {
				checkList: [false, false, false, false, false, false],
				contentText: {
					contentDefault: '追番',
					contentFav: '已追番'
				}
			}
		},
		methods: {
			favClick(index) {
				this.checkList[index] = !this.checkList[index]
				this.$forceUpdate()
			}
		}
	}
</script>

<style>
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #efeff4
	}

	view {
		font-size: 28upx;
		line-height: inherit
	}

	.example {
		padding: 0 30upx 30upx
	}

	.example-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 32upx;
		color: #464e52;
		padding: 30upx 30upx 30upx 50upx;
		margin-top: 20upx;
		position: relative;
		background-color: #fdfdfd;
		border-bottom: 1px #f5f5f5 solid
	}

	.example-title__after {
		position: relative;
		color: #031e3c
	}

	.example-title:after {
		content: '';
		position: absolute;
		left: 30upx;
		margin: auto;
		top: 0;
		bottom: 0;
		width: 6upx;
		height: 32upx;
		background-color: #ccc
	}

	.example .example-title {
		margin: 40upx 0
	}

	.example-body {
		padding: 30upx;
		background: #fff
	}

	.example-info {
		padding: 30upx;
		color: #3b4144;
		background: #fff
	}

	.favBtn {
		margin: 0 20rpx 20rpx 0;
	}

	.favBtn-nav {
		vertical-align: middle;
	}

	.example-body-fullWidth {
		padding: 32rpx 0;
	}
</style>