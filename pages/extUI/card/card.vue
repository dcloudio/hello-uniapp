<template>
	<view>
		<view class="example-info">卡片组件通用来显示完整独立的一段信息，同时让用户理解他的作用。例如一篇文章的预览图、作者信息、时间等，卡片通常是更复杂和更详细信息的入口点。</view>
		<view class="example-title">基础卡片</view>
		<view class="example-body">
			<view v-for="item in list" :key="item.id" class="example-box">
				<uni-card :title="item.title" :is-shadow="item.shadow" :note="item.note" :extra="item.extra" :thumbnail="item.thumbnail" @click="clickCard">{{ item.content }}</uni-card>
			</view>
		</view>
		<view class="example-title">图文卡片</view>
		<view class="example-body">
			<view class="example-box">
				<uni-card :is-shadow="true" title="最美的风景" mode="style" thumbnail="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg" extra="Dcloud 2019-05-20 12:32:19" note="true" @click="clickCard">
					<view>
						那是一个秋意盎然、金风送爽的日子，我和父母一起来到了位于上师大旁的康健园。一踏进公园，一股浓郁的桂香扑鼻而来，泌人心脾,让我心旷神怡，只见一朵朵开得正烈的金色桂花，迎风而立，仿佛在向我招手。我们追着这桂香，走进了清幽的公园。
					</view>
					<template v-slot:footer>
						<view class="footer-box">
							<view class="footer-box__item" @click.stop="footerClick('喜欢')">
								<uni-icon type="like" color="#666" /><text> 喜欢</text></view>
							<view class="footer-box__item" @click.stop="footerClick('评论')">
								<uni-icon type="chat" color="#666" /><text> 评论</text></view>
							<view class="footer-box__item" @click.stop="footerClick('分享')">
								<uni-icon type="star" color="#666" /><text> 收藏</text></view>
						</view>
					</template>
				</uni-card>
			</view>
			<view class="example-box">
				<uni-card :is-shadow="true" title="Dcloud" mode="title" thumbnail="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg" extra="技术没有上限" note="true" @click="clickCard">
					<view>
						<view class="image-box">
							<image class="image" src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg" />
						</view>
						<view class="content-box">
							那是一个秋意盎然、金风送爽的日子,我和父母一起来到了位于上师大旁的康健园.一踏进公园,一股浓郁的桂香扑鼻而来,泌人心脾,让我心旷神怡,只见一朵朵开得正烈的金色桂花,迎风而立,仿佛在向我招手.我们追着这桂香,走进了清幽的公园.
						</view>
					</view>
					<template v-slot:footer>
						<view class="footer-box">
							<view class="footer-box__item" @click.stop="footerClick('喜欢')">
								<uni-icon type="like" color="#666" /><text> 喜欢</text></view>
							<view class="footer-box__item" @click.stop="footerClick('评论')">
								<uni-icon type="chat" color="#666" /><text> 评论</text></view>
							<view class="footer-box__item" @click.stop="footerClick('分享')">
								<uni-icon type="star" color="#666" /><text> 收藏</text></view>
						</view>
					</template>
				</uni-card>
			</view>
		</view>
	</view>
</template>

<script>
	import uniCard from '@/components/uni-card/uni-card.vue'
	import uniIcon from '@/components/uni-icon/uni-icon.vue'

	export default {
		components: {
			uniCard,
			uniIcon
		},
		data() {
			return {
				list: [{
					id: 0,
					title: '',
					content: '这是一个基础卡片示例，内容较少，此示例不带边框阴影。',
					shadow: false,
					note: '',
					extra: '',
					thumbnail: ''

				}, {
					id: 1,
					title: '标题文字',
					content: '这是一个基础卡片示例，内容比较多，内容样式可自定义，卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、时间等，此示例带边框阴影。',
					shadow: true,
					note: '',
					extra: '额外信息',
					thumbnail: ''
				}, {
					id: 2,
					title: '标题文字',
					content: '这是一个带标题，带底部选项按钮的基础卡片示例，内容样式可自定义。',
					shadow: true,
					note: 'Tips',
					extra: '额外信息',
					thumbnail: ''
				}, {
					id: 3,
					title: '标题文字',
					content: '这是一个完整配置的基础卡片示例。内容样式可自定义。',
					shadow: true,
					note: 'Tips',
					extra: '额外信息',
					thumbnail: 'https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png'
				}],
				Tips: ['喜欢', '评论', '分享']
			}
		},
		methods: {
			clickCard() {
				uni.showToast({
					title: '点击卡片',
					icon: 'none'
				})
			},
			footerClick(types) {
				uni.showToast({
					title: types,
					icon: 'none'
				})
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
		padding: 30upx 0;
	}

	.example-box {
		margin-bottom: 30upx;
	}

	.example-box:last-child {
		margin-bottom: 0;
	}

	.image-box {
		width: 100%;
		height: 350upx;
		overflow: hidden;
	}

	.image-box .image {
		width: 100%;
		height: 100%;
	}

	.content-box {
		padding-top: 20upx;
	}

	.footer-box {
		display: flex;
		justify-content: space-between;
		width: 100%;

	}

	.footer-box__item {
		width: 100%;
		display: flex;
		align-items: center;
	}

	.footer-box__item:nth-child(2) {
		justify-content: center;
	}

	.footer-box__item:last-child {
		justify-content: flex-end;
	}
</style>