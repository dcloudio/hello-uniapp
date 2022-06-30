<template>
	<view>
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">分页器组件，用于展示页码、请求数据等</text>
		</uni-card>
		<uni-section title="默认样式" type="line" padding>
			<uni-pagination :total="50" title="标题文字" />
		</uni-section>
		<uni-section title="修改按钮文字" subTitle="使用 prev-text / next-text 属性修改按钮文字" type="line" padding>
			<uni-pagination :total="50" title="标题文字" prev-text="前一页" next-text="后一页" />
		</uni-section>
		<uni-section title="图标样式" subTitle="使用 show-icon 属性显示图标按钮" type="line" padding>
			<uni-pagination :show-icon="true" :total="50" title="标题文字" />
		</uni-section>
		<uni-section title="修改数据长度" type="line" padding>
			<uni-pagination :current="current" :total="total" :pageSize="20" title="标题文字" :show-icon="true" @change="change" />
			<view class="btn-view">
				<view>
					<text class="example-info">当前页：{{ current }}，数据总量：{{ total }}条，每页数据：{{ pageSize }}</text>
				</view>
				<view class="btn-flex">
					<button class="button word-btn" hover-class="word-btn--hover" :hover-start-time="20"
						:hover-stay-time="70" @click="add"><text class="word-btn-white">增加10条数据</text></button>
					<button class="button" type="default" @click="reset">重置数据</button>
				</view>
			</view>
		</uni-section>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				current: 3,
				total: 10,
				pageSize: 10
			}
		},
		mounted() {
			setTimeout(() => {
				this.current = 5
			}, 3000)
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

<style lang="scss">
	.example-body {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
	}

	.btn-view {
		/* #ifndef APP-NVUE */
		display: flex;
		flex-direction: column;
		/* #endif */
		padding: 15px;
		text-align: center;
		background-color: #fff;
		justify-content: center;
		align-items: center;
	}

	.btn-flex {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.button {
		margin: 20px;
		width: 150px;
		font-size: 14px;
		color: #333;
	}
</style>
