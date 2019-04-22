<template>
	<view>
		<view class="example-title">基础用法</view>
		<uni-collapse @change="change">
			<uni-collapse-item title="标题文字">
				<uni-list>
					<uni-list-item title="标题文字" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/hx.png" />
					<uni-list-item title="标题文字" note="描述信息" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" />
					<uni-list-item :show-extra-icon="true" :extra-icon="extraIcon" title="标题文字" note="描述信息" />
				</uni-list>
			</uni-collapse-item>
			<uni-collapse-item :open="true" title="默认开启">
				<view style="padding: 30upx;"> 折叠内容主体，可自定义内容及样式 </view>
			</uni-collapse-item>
			<uni-collapse-item :disabled="true" title="禁用状态">
				<view style="padding: 30upx;"> 禁用状态 </view>
			</uni-collapse-item>
		</uni-collapse>
		<view class="example-title">手风琴效果</view>
		<uni-collapse :accordion="true">
			<uni-collapse-item title="标题文字">
				<view style="padding: 30upx;">
					手风琴效果
				</view>
			</uni-collapse-item>
			<uni-collapse-item title="标题文字">
				<view style="padding: 30upx;">
					手风琴效果
				</view>
			</uni-collapse-item>
			<uni-collapse-item title="标题文字">
				<view style="padding: 30upx;">
					手风琴效果
				</view>
			</uni-collapse-item>
		</uni-collapse>
		<view class="example-title">添加动画效果</view>
		<uni-collapse>
			<uni-collapse-item :show-animation="true" title="标题文字">
				<view style="padding: 30upx;">
					折叠内容主体，可自定义内容及样式
				</view>
			</uni-collapse-item>
			<uni-collapse-item :show-animation="true" title="标题文字">
				<view style="padding: 30upx;">
					折叠内容主体，可自定义内容及样式
				</view>
			</uni-collapse-item>
		</uni-collapse>
		<view class="example-title">配置图标</view>
		<uni-collapse>
			<uni-collapse-item title="标题文字" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png">
				<view style="padding: 30upx;">
					折叠内容主体，可自定义内容及样式
				</view>
			</uni-collapse-item>
			<uni-collapse-item title="标题文字" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/hx.png">
				<view style="padding: 30upx;">
					折叠内容主体，可自定义内容及样式
				</view>
			</uni-collapse-item>
		</uni-collapse>
		<view style="height: 60upx;" />
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
			return {
				extraIcon: {
					color: '#4cd964',
					size: '22',
					type: 'spinner'
				}
			}
		},
		methods: {
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
</style>