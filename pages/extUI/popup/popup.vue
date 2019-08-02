<template>
	<view>
		<view class="example-info">弹出层组件用于弹出一个覆盖到页面上的内容，使用场景如：底部弹出分享弹窗、页面插屏广告等。</view>
		<view class="example-title">基本用法</view>
		<view class="example-body">
			<button class="button" type="button" @click="togglePopup('top', 'popup')">顶部弹出 popup</button>
			<button class="button" type="button" @click="togglePopup('center', 'popup')">中间弹出 popup</button>
			<button class="button" type="button" @click="togglePopup('bottom', 'popup')">底部弹出 popup</button>
		</view>
		<view class="example-title">自定义弹出层</view>
		<view class="example-body">
			<button class="button" type="button" @click="togglePopup('center', 'tip')">提示框</button>
			<button class="button" type="button" @click="togglePopup('center', 'image')">插屏广告</button>
			<button class="button" type="button" @click="togglePopup('bottom', 'share')">底部分享</button>
		</view>
		<uni-popup ref="popup" :type="type" @change="change">{{ content }}</uni-popup>
		<uni-popup :show="show" :type="type" :custom="true" :mask-click="false" @change="change">
			<view class="uni-tip">
				<view class="uni-tip-title">警告</view>
				<view class="uni-tip-content">这是一个通过自定义 popup，自由扩展的 警告弹窗。点击遮罩不会关闭弹窗。</view>
				<view class="uni-tip-group-button">
					<view class="uni-tip-button" @click="cancel('tip')">取消</view>
					<view class="uni-tip-button" @click="cancel('tip')">确定</view>
				</view>
			</view>
		</uni-popup>
		<!-- 插屏弹窗 -->
		<uni-popup ref="image" :type="type" :custom="true" :mask-click="false" @change="change">
			<view class="uni-image">
				<view class="uni-image-close" @click="cancel('image')">
					<uni-icon type="clear" color="#fff" size="30" />
				</view>
				<image class="image" src="/static/uni.png" mode="" />
			</view>
		</uni-popup>
		<!-- 底部分享弹窗 -->
		<uni-popup ref="share" :type="type" :custom="true" @change="change">
			<view class="uni-share">
				<view class="uni-share-title">分享到</view>
				<view class="uni-share-content">
					<view v-for="(item, index) in bottomData" :key="index" class="uni-share-content-box">
						<view class="uni-share-content-image">
							<image :src="item.icon" class="image" />
						</view>
						<view class="uni-share-content-text">{{ item.text }}</view>
					</view>
				</view>
				<view class="uni-share-btn" @click="cancel('share')">取消分享</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import uniIcon from '@/components/uni-icon/uni-icon.vue'

	export default {
		components: {
			uniPopup,
			uniIcon
		},
		data() {
			return {
				show: false,
				type: '',
				list: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
				content: '顶部弹 popup',
				bottomData: [{
						text: '微信',
						icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-2.png',
						name: 'wx'
					},
					{
						text: '支付宝',
						icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-8.png',
						name: 'wx'
					},
					{
						text: 'QQ',
						icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/gird-3.png',
						name: 'qq'
					},
					{
						text: '新浪',
						icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-1.png',
						name: 'sina'
					},
					{
						text: '百度',
						icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-7.png',
						name: 'copy'
					},
					{
						text: '其他',
						icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-5.png',
						name: 'more'
					}
				]
			}
		},
		methods: {
			togglePopup(type, open) {
				switch (type) {
					case 'top':
						this.content = '顶部弹出 popup'
						break

					case 'bottom':
						this.content = '底部弹出 popup'
						break
					case 'center':
						this.content = '居中弹出 popup'
						break
				}
				this.type = type
				if (open === 'tip') {
					this.show = true
				} else {
					this.$refs[open].open()
				}
			},
			cancel(type) {
				if (type === 'tip') {
					this.show = false
					return
				}
				this.$refs[type].close()
			},
			change(e) {
				console.log(e.show)
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
		padding: 30upx;
		margin-top: 20upx;
		position: relative;
		background-color: #fdfdfd
	}

	.example-title__after {
		position: relative;
		color: #031e3c
	}

	.example-title:after {
		content: '';
		position: absolute;
		left: 0;
		margin: auto;
		top: 0;
		bottom: 0;
		width: 10upx;
		height: 40upx;
		border-top-right-radius: 10upx;
		border-bottom-right-radius: 10upx;
		background-color: #031e3c
	}

	.example .example-title {
		margin: 40upx 0
	}

	.example-body {
		border-top: 1px #f5f5f5 solid;
		padding: 30upx;
		background: #fff
	}

	.example-info {
		padding: 30upx;
		color: #3b4144;
		background: #fff
	}

	.example-body {
		padding: 10upx 30upx;
	}

	.button {
		margin: 20upx 0;
	}

	/* 提示窗口 */
	.uni-tip {
		padding: 15px;
		width: 300px;
		background: #fff;
		box-sizing: border-box;
		border-radius: 10px;
	}

	.uni-tip-title {
		text-align: center;
		font-weight: bold;
		font-size: 16px;
		color: #333;
	}

	.uni-tip-content {
		padding: 15px;
		font-size: 14px;
		color: #666;
	}

	.uni-tip-group-button {
		margin-top: 10px;
		display: flex;
	}

	.uni-tip-button {
		width: 100%;
		text-align: center;
		font-size: 14px;
		color: #3b4144;
	}

	/* 插屏广告 */
	.uni-image {
		position: relative;
		width: 200px;
		height: 200px;
	}

	.uni-image .image {
		width: 100%;
		height: 100%;
	}

	.uni-image-close {
		position: absolute;
		right: -30px;
		top: -30px;
		z-index: 2;
	}

	/* 底部分享 */
	.uni-share {
		background: #fff;
	}

	.uni-share-title {
		line-height: 60upx;
		font-size: 24upx;
		padding: 15upx 0;
		text-align: center;
	}

	.uni-share-content {
		display: flex;
		flex-wrap: wrap;
		padding: 15px;
	}

	.uni-share-content-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 25%;
		box-sizing: border-box;
	}

	.uni-share-content-image {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 60upx;
		height: 60upx;
		overflow: hidden;
		border-radius: 10upx;
	}

	.uni-share-content-image .image {
		width: 100%;
		height: 100%;
	}

	.uni-share-content-text {
		font-size: 26upx;
		color: #333;
		padding-top: 5px;
		padding-bottom: 10px;
	}

	.uni-share-btn {
		height: 90upx;
		line-height: 90upx;
		border-top: 1px #f5f5f5 solid;
		text-align: center;
		color: #666;
	}
</style>