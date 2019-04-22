<template>
	<view>
		<view class="example-title">默认样式</view>
		<uni-pagination :total="20" title="标题文字" />
		<view class="example-title">修改按钮文字</view>
		<uni-pagination :total="20" title="标题文字" prev-text="前一页" next-text="后一页" />
		<view class="example-title">图标样式</view>
		<uni-pagination :show-icon="true" :total="20" title="标题文字" />
		<view class="example-title">修改数据长度</view>
		<uni-pagination :current="current" :total="total" title="标题文字" show-icon="true" @change="change" />
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

	.btn-view {
		margin: 30upx 30upx 0;
		text-align: center;
	}

	button {
		margin-top: 30upx;
	}
</style>