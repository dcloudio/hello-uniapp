<template>
	<view class="page">
		<view class="img-view" v-if="!showSwiper">
			<image :src="imgUrls[0]"></image>
		</view>
		<swiper v-if="showSwiper" indicator-dots="true">
			<swiper-item v-for="(img,key) in imgUrls" :key="key">
				<image :src="img" />
			</swiper-item>
		</swiper>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title">
				<view>In the App side, the title bar is transparent by default. When the user scrolls down, the title bar gradually changes from transparent to opaque; when the user scrolls up again, the title bar changes from opaque to transparent again.</view>
				<view>On the WeChat applet side, the navigation bar is always opaque.</view>
                <!-- <view>在支付宝小程序里请使用真机调试查看效果。</view> -->
			</view>
			<view class="uni-title uni-common-mt">Image Type</view>
		</view>
		<view class="uni-list">
			<radio-group @change="radioChange">
				<label class="uni-list-cell uni-list-cell-pd" v-for="(item,index) in items" :key="index">
					<view>{{item.name}}</view>
					<view>
						<radio :value="item.value" :checked="item.checked" />
					</view>
				</label>
			</radio-group>
		</view>
		<view style="height: 1000rpx;"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showSwiper: false,
				imgUrls: [
					"../../../static/shuijiao.jpg",
					"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b4b60b10-5168-11eb-bd01-97bc1429a9ff.jpg",
					"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b1dcfa70-5168-11eb-bd01-97bc1429a9ff.jpg"
				],
				items: [{
						value: "img",
						name: 'Static image',
						checked: true
					},
					{
						value: "swiper",
						name: 'swiper',
						checked: false
					}
				]
			}
		},
		methods: {
			radioChange(e) {
				this.showSwiper = e.detail.value === "swiper";
			}
		}
	}
</script>

<style>
	image,
	swiper,
	.img-view {
		width: 750rpx;
		width: 100%;
		height: 500rpx;
	}
	.page-section-title{
		margin-top: 50rpx;
	}
</style>
