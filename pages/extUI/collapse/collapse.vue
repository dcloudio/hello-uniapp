<template>
	<view>
		<view class="example-info">折叠面板用来折叠/显示过长的内容或者是列表。通常是在多内容分类项使用，折叠不重要的内容，显示重要内容。点击可以展开折叠部分。</view>
		<view v-for="(item, index) in list" :key="index">
			<view class="example-title">{{ item.name }}</view>
			<uni-collapse ref="add" class="warp" @change="change">
				<uni-collapse-item v-for="(sub, key) in item.data" :key="key" :open="sub.open" :show-animation="sub.showAnimation" :disabled="sub.disabled" :title="sub.subName">
					<template v-if="!sub.type">
						<view class="content">{{ sub.content }}</view>
					</template>
					<template v-else>
						<uni-list>
							<uni-list-item v-for="(list, listIndex) in sub.subList" :key="listIndex" :title="list.title" :note="list.note" :thumb="list.thumb" :show-extra-icon="list.showExtraIcon" :extra-icon="list.extraIcon" :show-switch="list.showSwitch" @switchChange="change" />
						</uni-list>
					</template>
				</uni-collapse-item>
			</uni-collapse>
		</view>
		<button class="button" @click="onClick">动态添加一组数据，并更新高度</button>
		<view class="example-title">手风琴效果</view>
		<uni-collapse :accordion="true">
			<uni-collapse-item v-for="item in accordion" :key="item.id" :title="item.title" :show-animation="item.animation">
				<view class="content">{{ item.content }}</view>
			</uni-collapse-item>
		</uni-collapse>
		<view class="example-title">配置图标</view>
		<uni-collapse>
			<uni-collapse-item title="标题文字" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png">
				<view class="content">折叠内容主体，可自定义内容及样式</view>
			</uni-collapse-item>
			<uni-collapse-item title="标题文字" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png">
				<view class="content">折叠内容主体，可自定义内容及样式</view>
			</uni-collapse-item>
		</uni-collapse>
	</view>
</template>

<script>
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'

	export default {
		components: {
			uniCollapse,
			uniCollapseItem,
			uniList,
			uniListItem
		},
		data() {
			const listData = [{
					name: '基础用法',
					data: [{
							type: false,
							subName: '默认开启',
							open: true,
							content: '折叠内容主体，可自定义内容及样式'
						},
						{
							type: false,
							subName: '折叠内容',
							content: '折叠列表内容，这是一段比较长内容。默认折叠主要内容，只显示当前项标题。点击标题展开，才能看到这段问题。再次点击标题，折叠内容。'
						},
						{
							type: true,
							subName: '折叠列表',
							subList: [{
									title: '标题文字',
									thumb: 'https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png'
								},
								{
									title: '标题文字',
									note: '描述信息',
									thumb: 'https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png'
								},
								{
									title: '标题文字',
									showExtraIcon: true,
									extraIcon: {
										color: '#4cd964',
										size: '26',
										type: 'image'
									},
									showSwitch: true
								}
							]
						},
						{
							type: false,
							subName: '禁用状态',
							disabled: true,
							content: '折叠列表内容，这是一段比较长内容。默认折叠主要内容，只显示当前项标题。点击标题展开，才能看到这段问题。再次点击标题，折叠内容。'
						}
					]
				},
				{
					name: '添加动画效果',
					data: [{
							type: false,
							subName: '默认开启',
							showAnimation: true,
							content: '折叠内容主体，可自定义内容及样式'
						},
						{
							type: true,
							subName: '折叠列表',
							showAnimation: true,
							subList: [{
									title: '标题文字',
									thumb: 'https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png'
								},
								{
									title: '标题文字',
									note: '描述信息',
									thumb: 'https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png'
								},
								{
									title: '标题文字',
									showExtraIcon: true,
									extraIcon: {
										color: '#4cd964',
										size: '26',
										type: 'image'
									},
									showSwitch: true
								}
							]
						}
					]
				}
			]
			return {
				list: listData,
				accordion: [{
						id: 0,
						title: '标题文字',
						content: '手风琴效果',
						animation: true
					},
					{
						id: 1,
						title: '标题文字',
						content: '手风琴效果',
						animation: true
					},
					{
						id: 2,
						title: '标题文字',
						content: '手风琴效果',
						animation: true
					}
				],
				extraIcon: {
					color: '#4cd964',
					size: '26',
					type: 'image'
				},
				id: 2
			}
		},
		methods: {
			onClick() {
				this.list[1].data[1].subList.push({
					title: '新增',
					thumb: 'https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png'
				})
				this.$nextTick(() => {
					this.$refs.add[1].resize()
				})
			},
			change(e) {
				console.log(e)
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

	.content {
		padding: 30upx;
		background: #f9f9f9;
		color: #666;
	}

	.button {
		font-size: 26upx;
		line-height: 90upx;
	}
</style>