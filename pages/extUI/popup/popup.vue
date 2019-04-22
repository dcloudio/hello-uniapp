<template>
	<view>
		<view class="example">
			<view class="example-title">基本用法</view>
			<button type="button" @click="togglePopup('top')">顶部弹出 popup</button>
			<uni-popup :show="type === 'top'" position="top" mode="fixed" msg="顶部弹出popup" @hidePopup="togglePopup('')" />
			<button type="button" @click="togglePopup('middle')">居中弹出 popup</button>
			<uni-popup :show="type === 'middle'" position="middle" mode="fixed" msg="居中弹出popup" @hidePopup="togglePopup('')" />
			<button type="button" @click="togglePopup('bottom')">底部部弹出 popup</button>
			<uni-popup :show="type === 'bottom'" position="bottom" mode="fixed" msg="底部弹出popup" @hidePopup="togglePopup('')" />
		</view>
		<view class="example">
			<view class="example-title">slot用法</view>
			<button type="button" @click="togglePopup('middle-img')">居中弹出（插屏广告）</button>
			<uni-popup :show="type === 'middle-img'" position="middle" mode="insert" @hidePopup="togglePopup('')">
				<view class="uni-center center-box">
					<image class="image" src="/static/uni.png" />
				</view>
			</uni-popup>
			<button type="button" @click="togglePopup('middle-list')">居中弹出（滚动列表）</button>
			<uni-popup :show="type === 'middle-list'" position="middle" mode="fixed" @hidePopup="togglePopup('')">
				<scroll-view :scroll-y="true" class="uni-center center-box">
					<view v-for="(item, index) in list" :key="index" class="uni-list-item">
						滚动列表数据 {{ item }}
					</view>
				</scroll-view>
			</uni-popup>
			<button type="button" data-position="bottom" @click="togglePopup('bottom-share')">底部弹出（分享界面）</button>
			<uni-popup :show="type === 'bottom-share'" position="bottom" @hidePopup="togglePopup('')">
				<view class="bottom-title">分享到</view>
				<view class="bottom-content">
					<view v-for="(item, index) in bottomData" :key="index" class="bottom-content-box">
						<view :class="item.name" class="bottom-content-image">
							<text class="icon">{{ item.icon }}</text>
						</view>
						<view class="bottom-content-text">{{ item.text }}</view>
					</view>
				</view>
				<view class="bottom-btn" @click="togglePopup('')">取消分享</view>
			</uni-popup>
		</view>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'

	export default {
		components: {
			uniPopup
		},
		data() {
			return {
				type: '',
				list: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
				bottomData: [{
						text: '微信',
						icon: '\ue6a4',
						name: 'wx'
					},
					{
						text: '朋友圈',
						icon: '\ue646',
						name: 'wx'
					},
					{
						text: 'QQ',
						icon: '\ue66b',
						name: 'qq'
					},
					{
						text: '新浪',
						icon: '\ue600',
						name: 'sina'
					},
					{
						text: '复制',
						icon: '\ue632',
						name: 'copy'
					},
					{
						text: '更多',
						icon: '\ue618',
						name: 'more'
					}
				]
			}
		},
		onBackPress() {
			if (this.type !== '') {
				this.type = ''
				return true
			}
		},
		methods: {
			togglePopup(type) {
				this.type = type
			}
		}
	}
</script>
<style>
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #fff
	}

	view {
		font-size: 28upx;
		line-height: inherit
	}

	.example {
		padding: 0 30upx 30upx
	}

	.example-title {
		font-size: 32upx;
		line-height: 32upx;
		color: #777;
		margin: 40upx 25upx;
		position: relative
	}

	.example .example-title {
		margin: 40upx 0
	}

	.example-body {
		padding: 0 40upx
	}

	.uni-padding-wrap {
		padding: 0 30upx;
	}

	button {
		margin: 20upx 0;
	}

	.uni-helllo-text {
		height: 100upx;
		line-height: 100upx;
		text-align: center;
	}

	.center-box {
		width: 500upx;
		height: 500upx;
	}

	.uni-list-item {
		text-align: left;
		line-height: 80upx;
		border-bottom: 1px #f5f5f5 solid;
	}

	.uni-list-item:last-child {
		border: none;
	}

	.center-box .image {
		width: 100%;
		height: 100%;
	}

	.bottom-title {
		line-height: 60upx;
		font-size: 24upx;
		padding: 15upx 0;
	}

	.bottom-content {
		display: flex;
		flex-wrap: wrap;
		padding: 0 35upx;
	}

	.bottom-content-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 15upx;
		width: 25%;
		box-sizing: border-box;
	}

	.bottom-content-image {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 90upx;
		height: 90upx;
		overflow: hidden;
		background: #007aff;
		border-radius: 10upx;
	}

	.bottom-content-text {
		font-size: 26upx;
		color: #333;
		margin-top: 10upx;
	}

	.bottom-btn {
		height: 90upx;
		line-height: 90upx;
		border-top: 1px #f5f5f5 solid;
	}

	.bottom-content-image.wx {
		background: #00ce47;
	}

	.bottom-content-image.qq {
		background: #00b6f6;
	}

	.bottom-content-image.sina {
		background: #ff766a;
	}

	.bottom-content-image.copy {
		background: #07ccd0;
	}

	@font-face {
		font-family: 'iconfont';
		/* project id 1028200 */
		src: url('https://at.alicdn.com/t/font_1028200_47ewtwy4t04.ttf') format('truetype');
	}

	.icon {
		font-family: 'iconfont';
		font-size: 40upx;
		color: #fff;
	}
</style>