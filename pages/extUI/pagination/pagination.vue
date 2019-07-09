<template>
	<view>
		<view class="example-title">默认样式</view>
		<view class="example-body">
			<uni-pagination :total="50" title="标题文字" />
		</view>
		<view class="example-title">修改按钮文字</view>
		<view class="example-body">
			<uni-pagination :total="50" title="标题文字" prev-text="前一页" next-text="后一页" />
		</view>
		<view class="example-title">图标样式</view>
		<view class="example-body">
			<uni-pagination :show-icon="true" :total="50" title="标题文字" />
		</view>
		<view class="example-title">修改数据长度</view>
		<view class="example-body">
			<uni-pagination :current="current" :total="total" title="标题文字" show-icon="true" @change="change" />
		</view>
		<view class="btn-view">
			<view>
				当前页：{{ current }}，数据总量：{{ total }}条，每页数据：{{ pageSize }}
			</view>
			<button type="primary" @click="add">增加10条数据</button>
			<button type="default" @click="reset">重置数据</button>
		</view>
	</view>
</template>

<script>
	import uniPagination from '@/components/uni-pagination/uni-pagination.vue'

	export default {
		components: {
			uniPagination
		},
		data() {
			return {
				current: 1,
				total: 0,
				pageSize: 10
			}
		},
		methods: {
			add() {
				this.total += 10
			},
			reset() {
				this.total = 0
				this.current = 1
			},
			change(e) {
				console.log(e)
				this.current = e.current
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

	.btn-view {
		padding: 30upx;
		text-align: center;
		background: #fff;
	}

	button {
		margin-top: 30upx;
	}
</style>